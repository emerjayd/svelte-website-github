# main.tf
provider "aws" {
  region = "eu-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-02b6c3b7e67e2c9d6"
  instance_type = "t2.micro"

  tags = {
    Name = "svelte-app-server"
  }
}
