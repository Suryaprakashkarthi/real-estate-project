const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

mongoose.connect(
  'mongodb+srv://admin:surya211105@realestate-cluster.icauomd.mongodb.net/realestate'
);

(async () => {
  const hashedPassword = bcrypt.hashSync('admin123', 10);

  await Admin.create({
    username: 'admin',
    password: hashedPassword
  });

  console.log('Admin created successfully');
  process.exit();
})();
