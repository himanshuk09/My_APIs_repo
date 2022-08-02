var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'himanshu13khade@gmail.com',
    pass: '%Hi##m@n##&hu%'
  }
});

var mailOptions = {
  from: 'himanshu13khade@gmail.com',
  to: '20013himanshu@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hey himanshu I am trying to send system generate email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
