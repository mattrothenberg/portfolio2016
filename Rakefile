desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("grunt build")
  puts status ? "OK" : "FAILED"
end

desc "Deploy site to PWS"
task :pws_deploy => :build do
  system("cf push mattrothenberg -m 64m -p dist -b https://github.com/cloudfoundry-incubator/staticfile-buildpack.git")
end