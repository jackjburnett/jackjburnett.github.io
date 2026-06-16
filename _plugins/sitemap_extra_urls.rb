require "cgi"

Jekyll::Hooks.register :site, :post_write do |site|
  extra_urls = site.data["sitemap_extra"]
  next unless extra_urls.respond_to?(:each)

  sitemap_path = site.in_dest_dir("sitemap.xml")
  next unless File.file?(sitemap_path)

  sitemap = File.read(sitemap_path)
  existing_locations = sitemap.scan(%r!<loc>(.*?)</loc>!).flatten

  entries = extra_urls.filter_map do |entry|
    location = entry["loc"] || entry[:loc]
    next if location.nil? || location.to_s.strip.empty?
    next if existing_locations.include?(location)

    lastmod = entry["lastmod"] || entry[:lastmod]
    xml = +"<url>\n<loc>#{CGI.escapeHTML(location)}</loc>\n"
    xml << "<lastmod>#{CGI.escapeHTML(lastmod.to_s)}</lastmod>\n" if lastmod
    xml << "</url>\n"
  end

  next if entries.empty?

  File.write(sitemap_path, sitemap.sub("</urlset>", "#{entries.join}</urlset>"))
end
