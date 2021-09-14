const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://pictures.dealer.com/a/autonationarlingtonfordfd/0235/e3c5126fc0072227a96413693e320645x.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const container2 = document.createElement('div');
container2.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://169.63.249.115:31387/genapp/motorPolicy/2/1', true);
request.setRequestHeader("Authorization", "Basic " + btoa("Deb3:password"));
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    // document.write("<div>");
    // document.write("Policy Issue Date: "+data.LGCMAREA.CA_POLICY_REQUEST.PolicyCommonData.policyIssueDate);
    // document.write("</div>");

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const card2 = document.createElement('div');
    card2.setAttribute('class', 'card');

    const p = document.createElement('p');
    p.textContent = "Vehicle Make: "+data.LGCMAREA.CA_POLICY_REQUEST.CA_MOTOR.VehicleMake;

    const p2 = document.createElement('p');
    p2.textContent = "Vehicle Model: " +data.LGCMAREA.CA_POLICY_REQUEST.CA_MOTOR.VehicleModel;

    const p3 = document.createElement('p');
    p3.textContent = "Vehicle Color: " +data.LGCMAREA.CA_POLICY_REQUEST.CA_MOTOR.VehicleColour;

    const p4 = document.createElement('p');
    p4.textContent = "Vehicle Registration: " +data.LGCMAREA.CA_POLICY_REQUEST.CA_MOTOR.VehicleRegistration;

    const p5 = document.createElement('p');
    p5.textContent = "Insurance Policy: " +data.LGCMAREA.CA_POLICY_REQUEST.CA_MOTOR.InsurancePremium;

    const p6 = document.createElement('p');
    p6.textContent = "Policy Issue Date: " +data.LGCMAREA.CA_POLICY_REQUEST.PolicyCommonData.policyIssueDate;

    const p7 = document.createElement('p');
    p7.textContent = "Policy Expiration Date: " +data.LGCMAREA.CA_POLICY_REQUEST.PolicyCommonData.policyExpirationDate;

    container.appendChild(card);
    // card.appendChild(h1);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);


    container.appendChild(card2);
    card2.appendChild(p5);
    card2.appendChild(p6);
    card2.appendChild(p7);



  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();