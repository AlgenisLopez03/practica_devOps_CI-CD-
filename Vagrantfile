Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "devops-server"
  config.vm.network "private_network", ip: "192.168.56.10"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "DevOpsServer"
    vb.memory = "1024"
    vb.cpus = 1
  end
end
