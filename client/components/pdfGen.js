import top_uri from './top_uri';
import bot_uri from './bot_uri';

import _ from 'lodash';

export default function (signatureURI, data) {
  //init pdf object as portrait 8.5x11 document with coordinate grid in inches
  var doc = new jsPDF("p","in", [8.5,11]);

  //Get today's date
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  today = month+'/'+day+'/'+year;

  //Create base form
  doc.addImage(top_uri, 'PNG', 0,0, 8.5, 5.5);
  doc.addImage(bot_uri, 'PNG', 0,5.5, 8.5, 5.5);

  //Insert user data
  doc.setFontSize(12);
  doc.text(.543, 2.740, data.lastName);
  doc.text(2.8, 2.740, data.firstName);

  if (data.middleName) {
    doc.text(4.5, 2.740, data.middleName);
  }

  if (data.suffix) {
    doc.text(5.7, 2.740, data.suffix);
  }
  doc.text(2.8, 2.740, data.firstName);
  doc.text(6.35, 2.740, data.socialsecurity);
  doc.text(.543, 3.29, data.street);
  doc.text(3.4, 3.29, data.city);
  doc.text(5.38, 3.29, data.zip);
  doc.text(6.37, 3.29, data.county.label);
  doc.text(3.6, 3.67, data.email);

  if (data.alt_email) {
    doc.text(4.13, 4.15, data.alt_email);
  }

  var someValue =_.has(data.birthday, '_i');
  if (someValue) {
    doc.text(1.5, 4.47, data.birthday._i);
    } else {
    doc.text(1.5, 4.47, data.birthday);
  }

  doc.text(5.07, 4.47, data.driverlicense);
  doc.text(7.365, 4.47, data.issuingstate);

  //Bond Number
  if (data.bond_number) {
    doc.text(6.5, 7.67, data.bond_number);
  }
  doc.text(1.01, 10.2, today);
  doc.text(1.01, 8.2, today);

  doc.setFontSize(20);
  if (data.guiltyOfCrime == "guilty") {
    doc.text(.54,5.59, "X");
  } else {
    doc.text(.54,6.27, "X");
  }

  if (data.isRenewal == 1) {
    doc.text(2.05,1.6, "X");
    doc.setFontSize(12);
    doc.text(1.9, 1.78, data.renewaldate)
  }

  //Add Signature
  doc.addImage(signatureURI, 'PNG', 4.55, 9.81,3.4,0.4);
  //Open pdf in new window
  var blob = doc.output("blob");
  return URL.createObjectURL(blob);
}