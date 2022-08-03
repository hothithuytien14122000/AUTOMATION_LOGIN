const { I } = inject();
const expect = require('chai').expect
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('i open google maps', () => {
  I.amOnPage('https://www.facebook.com/login/');
  I.fillField('email_container', '0337705797');
  I.click('Đăng nhập');
  expect()

})
