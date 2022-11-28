# DrDoctor Technical Challenge

# Quick Start

Clone it to your local system, then:

## Install dependencies

npm install

## Start development server

npm start

## "password-less" login exercise

This is login screen for a patient in a hospital setting.
A patient logs in to an hospital portal using a "password-less" login – they provide some information we can verify about them in addition to a two-factor authentication code.

1. The login screen initially has the following:

- A hospital logo (see attached)
- A form asking for the following information:
  - **Patient lastname** (up to 50 characters at most)
  - **Patient date of birth** (Date of birth must be a valid date)
  - **Patient postcode** (made up of 5 to 7 alphanumeric characters, spaces are also allowed)

2. Once the patient provides that information, the following occurs:

- They are presented a list of contact details (for this exercise assume patient always gets back 1 UK mobile phone number, 1 UK landline number and 1 email address).
- The patient picks one of those as the contact detail to use to receive a one-time code to complete the login process

3.  When they have selected that contact detail, the screen shows a box where the user can type in the one-time code that they receive

4.  Once they enter the one-time code successfully (you can assume the one-time code is 0000) they are presented with a new page/screen that for this test just says welcome. If the one-time code does not match, they are presented a suitable error message (to keep it simple, we will ignore things like maximum attempts – the only possible validation will be if the one-time code does not match)

## NOTE

To verify the date of birth I am checking that the date is not in the future, because I assumed that a parent/guardian can log in for their newborn baby. Another approach would be to verify that only people older than a specific age (e.g. 18 years old) can log in.
