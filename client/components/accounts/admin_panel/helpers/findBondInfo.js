/**
 * Created by gregorydrake on 10/30/16.
 */
import _ from "lodash";

export default function findBondInfo(item) {
    var objectInfo = null;
    //This determines which function is calling it.
    switch (item.name) {
        case "Premium Package":
            var extras = item.extraInfo;
            var keyValue = null;
            rObject = null;
            _.forIn(extras, function (value, key) {
                keyValue = key;
            });
            var birthday = item.extraInfo[keyValue].birthday;
            var city = item.extraInfo[keyValue].city;
            var county = item.extraInfo[keyValue].county.label;
            var driverlicense = item.extraInfo[keyValue].driverlicense;
            var email = item.extraInfo[keyValue].email;
            var firstName = item.extraInfo[keyValue].firstName;
            var criminalRecord = null;
            if(item.extraInfo[keyValue].guiltyOfCrime == "notguilty") {
                criminalRecord = "No Record"
            } else {
                criminalRecord = "Criminal Record"
            }
            var isRenewal = null;
            if (item.extraInfo[keyValue].isRenewal == 0) {
                isRenewal = "Non-Renewal"
            } else {
                isRenewal = "Renewal"
            }
            var issuingState = item.extraInfo[keyValue].issuingstate;
            var lastName = item.extraInfo[keyValue].lastName;
            var socialSecurity = item.extraInfo[keyValue].socialsecurity;
            var state = item.extraInfo[keyValue].state;
            var street = item.extraInfo[keyValue].street;
            var street2=" - ";
            if (item.extraInfo[keyValue].street2) {
                street2 = item.extraInfo[keyValue].street2
            }
            var telephone = item.extraInfo[keyValue].telephone;
            var zip = item.extraInfo[keyValue].zip;
            var bondId = item.extraInfo[keyValue].id;

            rObject = {"Name": {"First Name": firstName, "Last Name": lastName}, "Email": email, "Telephone": telephone,
                "Driver's License": {"License Number": driverlicense, "Issuing State": issuingState},
                "Birthday": birthday, "Social Security": `****-**-${socialSecurity.substring(8, 11)}`,
                "Address": {"Street": street, "Street 2": street2, "City": city, "County": county, "State": state, "Zip Code": zip},
                "BondId": bondId
            };

            return objectInfo = rObject;
            break;
        case "Basic Package":
            var extras = item.extraInfo;
            var keyValue = null;
            rObject = null;
            _.forIn(extras, function (value, key) {
                keyValue = key;
            });

            var birthday = item.extraInfo[keyValue].birthday;
            var city = item.extraInfo[keyValue].city;
            var county = item.extraInfo[keyValue].county.label;
            var driverlicense = item.extraInfo[keyValue].driverlicense;
            var email = item.extraInfo[keyValue].email;
            var firstName = item.extraInfo[keyValue].firstName;
            var criminalRecord = null;
            if(item.extraInfo[keyValue].guiltyOfCrime == "notguilty") {
                criminalRecord = "No Record"
            } else {
                criminalRecord = "Criminal Record"
            }
            var isRenewal = null;
            if (item.extraInfo[keyValue].isRenewal == 0) {
                isRenewal = "Non-Renewal"
            } else {
                isRenewal = "Renewal"
            }
            var issuingState = item.extraInfo[keyValue].issuingstate;
            var lastName = item.extraInfo[keyValue].lastName;
            var socialSecurity = item.extraInfo[keyValue].socialsecurity;
            var state = item.extraInfo[keyValue].state;
            var street = item.extraInfo[keyValue].street;
            var street2=" - ";
            if (item.extraInfo[keyValue].street2) {
                street2 = item.extraInfo[keyValue].street2
            }
            var telephone = item.extraInfo[keyValue].telephone;
            var zip = item.extraInfo[keyValue].zip;
            var bondId = item.extraInfo[keyValue].id;

            rObject = {"Name": {"First Name": firstName, "Last Name": lastName}, "Email": email, "Telephone": telephone,
                "Driver's License": {"License Number": driverlicense, "Issuing State": issuingState},
                "Birthday": birthday, "Social Security": `****-**-${socialSecurity.substring(8, 11)}`,
                "Address": {"Street": street, "Street 2": street2, "City": city, "County": county, "State": state, "Zip Code": zip},
                "BondId": bondId
            };

            return objectInfo = rObject;
            break;
        case "Renewal Package":
            var extras = item.extraInfo;
            var keyValue = null;
            rObject = null;
            _.forIn(extras, function (value, key) {
                keyValue = key;
            });

            var birthday = item.extraInfo[keyValue].birthday;
            var city = item.extraInfo[keyValue].city;
            var county = item.extraInfo[keyValue].county.label;
            var driverlicense = item.extraInfo[keyValue].driverlicense;
            var email = item.extraInfo[keyValue].email;
            var firstName = item.extraInfo[keyValue].firstName;
            var criminalRecord = null;
            if(item.extraInfo[keyValue].guiltyOfCrime == "notguilty") {
                criminalRecord = "No Record"
            } else {
                criminalRecord = "Criminal Record"
            }
            var isRenewal = null;
            if (item.extraInfo[keyValue].isRenewal == 0) {
                isRenewal = "Non-Renewal"
            } else {
                isRenewal = "Renewal"
            }
            var issuingState = item.extraInfo[keyValue].issuingstate;
            var lastName = item.extraInfo[keyValue].lastName;
            var socialSecurity = item.extraInfo[keyValue].socialsecurity;
            var state = item.extraInfo[keyValue].state;
            var street = item.extraInfo[keyValue].street;
            var street2=" - ";
            if (item.extraInfo[keyValue].street2) {
                street2 = item.extraInfo[keyValue].street2
            }
            var telephone = item.extraInfo[keyValue].telephone;
            var zip = item.extraInfo[keyValue].zip;
            var bondId = item.extraInfo[keyValue].id;

            rObject = {"Name": {"First Name": firstName, "Last Name": lastName}, "Email": email, "Telephone": telephone,
                "Driver's License": {"License Number": driverlicense, "Issuing State": issuingState},
                "Birthday": birthday, "Social Security": `****-**-${socialSecurity.substring(8, 11)}`,
                "Address": {"Street": street, "Street 2": street2, "City": city, "County": county, "State": state, "Zip Code": zip},
                "BondId": bondId
            };

            return objectInfo = rObject;
            break;
        case "Bond Only":
            var extras = item.extraInfo;
            var keyValue = null;
            rObject = null;
            _.forIn(extras, function (value, key) {
                keyValue = key;
            });

            var birthday = item.extraInfo[keyValue].birthday;
            var city = item.extraInfo[keyValue].city;
            var county = item.extraInfo[keyValue].county.label;
            var driverlicense = item.extraInfo[keyValue].driverlicense;
            var email = item.extraInfo[keyValue].email;
            var firstName = item.extraInfo[keyValue].firstName;
            var criminalRecord = null;
            if(item.extraInfo[keyValue].guiltyOfCrime == "notguilty") {
                criminalRecord = "No Record"
            } else {
                criminalRecord = "Criminal Record"
            }
            var isRenewal = null;
            if (item.extraInfo[keyValue].isRenewal == 0) {
                isRenewal = "Non-Renewal"
            } else {
                isRenewal = "Renewal"
            }
            var issuingState = item.extraInfo[keyValue].issuingstate;
            var lastName = item.extraInfo[keyValue].lastName;
            var socialSecurity = item.extraInfo[keyValue].socialsecurity;
            var state = item.extraInfo[keyValue].state;
            var street = item.extraInfo[keyValue].street;
            var street2=" - ";
            if (item.extraInfo[keyValue].street2) {
                street2 = item.extraInfo[keyValue].street2
            }
            var telephone = item.extraInfo[keyValue].telephone;
            var zip = item.extraInfo[keyValue].zip;
            var bondId = item.extraInfo[keyValue].id;

            rObject = {"Name": {"First Name": firstName, "Last Name": lastName}, "Email": email, "Telephone": telephone,
                "Driver's License": {"License Number": driverlicense, "Issuing State": issuingState},
                "Birthday": birthday, "Social Security": `****-**-${socialSecurity.substring(8, 11)}`,
                "Address": {"Street": street, "Street 2": street2, "City": city, "County": county, "State": state, "Zip Code": zip},
                "BondId": bondId
            };

            return objectInfo = rObject;
            break;
        case "New Notary Package":
            var extras = item.extraInfo;
            var keyValue = null;
            rObject = null;
            _.forIn(extras, function (value, key) {
                keyValue = key;
            });

            var birthday = item.extraInfo[keyValue].birthday;
            var city = item.extraInfo[keyValue].city;
            var county = item.extraInfo[keyValue].county.label;
            var driverlicense = item.extraInfo[keyValue].driverlicense;
            var email = item.extraInfo[keyValue].email;
            var firstName = item.extraInfo[keyValue].firstName;
            var criminalRecord = null;
            if(item.extraInfo[keyValue].guiltyOfCrime == "notguilty") {
                criminalRecord = "No Record"
            } else {
                criminalRecord = "Criminal Record"
            }
            var isRenewal = null;
            if (item.extraInfo[keyValue].isRenewal == 0) {
                isRenewal = "Non-Renewal"
            } else {
                isRenewal = "Renewal"
            }
            var issuingState = item.extraInfo[keyValue].issuingstate;
            var lastName = item.extraInfo[keyValue].lastName;
            var socialSecurity = item.extraInfo[keyValue].socialsecurity;
            var state = item.extraInfo[keyValue].state;
            var street = item.extraInfo[keyValue].street;
            var street2=" - ";
            if (item.extraInfo[keyValue].street2) {
                street2 = item.extraInfo[keyValue].street2
            }
            var telephone = item.extraInfo[keyValue].telephone;
            var zip = item.extraInfo[keyValue].zip;
            var bondId = item.extraInfo[keyValue].id;

            rObject = {"Name": {"First Name": firstName, "Last Name": lastName}, "Email": email, "Telephone": telephone,
                "Driver's License": {"License Number": driverlicense, "Issuing State": issuingState},
                "Birthday": birthday, "Social Security": `****-**-${socialSecurity.substring(8, 11)}`,
                "Address": {"Street": street, "Street 2": street2, "City": city, "County": county, "State": state, "Zip Code": zip},
                "BondId": bondId
            };

            return objectInfo = rObject;
            break;
        default:
            return objectInfo;
    }
}