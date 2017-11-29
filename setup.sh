openssl req -newkey rsa:4096 -nodes -keyout key.pem -x509 -days 3650 -out certificate.pem -extensions req_ext -config ssl.conf -subj '/CN=localhost/O=Stackflow/C=US/L=Los Angeles/OU=Client'
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./certificate.pem
