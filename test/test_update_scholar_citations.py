"""Run with python -m unittest discover -s test -p test_update_scholar_citations.py."""

import importlib.util
from pathlib import Path
import tempfile
import unittest
from datetime import datetime
from unittest.mock import patch

import yaml


spec = importlib.util.spec_from_file_location(
    "update_scholar_citations",
    Path(__file__).resolve().parents[1] / "bin/update_scholar_citations.py",
)
updater = importlib.util.module_from_spec(spec)
spec.loader.exec_module(updater)


class CitationUpdateTest(unittest.TestCase):
    def test_success_records_check_date_with_unchanged_counts(self):
        self.check_success(1)

    def test_success_updates_changed_counts(self):
        self.check_success(5)

    def check_success(self, count):
        paper_id = "user:paper"
        paper = {"title": "Example", "year": "2024", "citations": 1}
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "citations.yml"
            output.write_text(yaml.safe_dump({
                "metadata": {"last_updated": "2020-01-01"},
                "papers": {paper_id: paper},
            }))
            with patch.object(updater, "OUTPUT_FILE", str(output)), patch.object(
                updater, "scholarly"
            ) as scholar:
                scholar.fill.return_value = {"publications": [{
                    "author_pub_id": paper_id,
                    "bib": {"title": "Example", "pub_year": "2024"},
                    "num_citations": count,
                }]}
                updater.get_scholar_citations()
                scholar.fill.assert_called_once_with(
                    scholar.search_author_id.return_value, sections=["publications"]
                )
            data = yaml.safe_load(output.read_text())
            self.assertEqual(data["papers"][paper_id]["citations"], count)
            self.assertEqual(data["metadata"]["last_updated"], datetime.now().strftime("%Y-%m-%d"))

    def test_fetch_failure_preserves_existing_file(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "citations.yml"
            original = "metadata:\n  last_updated: '2020-01-01'\npapers: {}\n"
            output.write_text(original)
            with patch.object(updater, "OUTPUT_FILE", str(output)), patch.object(
                updater, "scholarly"
            ) as scholar:
                scholar.search_author_id.side_effect = RuntimeError("Fetch blocked")
                with self.assertRaises(SystemExit) as failure:
                    updater.get_scholar_citations()
                self.assertEqual(failure.exception.code, 1)
            self.assertEqual(output.read_text(), original)


if __name__ == "__main__":
    unittest.main()
