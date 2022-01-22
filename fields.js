
// arrow function  to compare first three letters of 2 strings return score if matches
const first3letters = (s1, s2) => s1 && s2 && s1.substring(0, 3).toLowerCase() === s2.substring(0, 3).toLowerCase();
const allLetters = (s1, s2) => s1 && s2 && s1.toLowerCase() === s2.toLowerCase();
const equalLength = (s1, s2) => s1 && s2 && s1.length === s2.length;
const equal = (s1, s2) => s1 === s2;
const absDiff = (s1, s2) => s1 && s2 ? Math.abs(s1 - s2) : 1000000;
const dateDiff = (d1, d2) => {
  if (!d1 || !d2) return 1000000;
  const diff = Math.abs(new Date(d1).getTime() - new Date(d2).getTime());
  return Math.ceil(diff / (1000 * 3600 * 24 * 365));
};


export const user = [
  {
    name: "basic",
    required: true,
    fields: [
      // type: any vuetify inputs/pickers can be used eg. v-text-field, v-select, v-date-picker, v-time-picker, v-color-picker etc
      // props: any props that can be passed to the input/picker

      {
        name: "firstName",
        type: "v-text-field",
        matches: [
          (a, b) => first3letters(a, b) ? 5 : 0,
          (a, b) => allLetters(a, b) ? 3 : 0,
          (a, b) => equalLength(a, b) ? 2 : 0,

        ],
        props: {
          type: "text",
          count: 30,
          required: true,
        },
      },
      {

        name: "lastName",
        type: "v-text-field",
        matches: [
          (a, b) => first3letters(a, b) ? 2 : 0,
          (a, b) => allLetters(a, b) ? 3 : 0,
          (a, b) => equalLength(a, b) ? 1 : 0,

        ],
        props: {
          type: "text",
          count: 30,
          required: true,
        },
      },
      {

        name: "email",
        type: "v-text-field",
        matches: [
          (a, b) => first3letters(a, b) ? 1 : 0,
          (a, b) => allLetters(a, b) ? 1 : 0,
          (a, b) => equalLength(a, b) ? 1 : 0,

        ],
        props: {
          type: "email",
          required: true,
          readonly: true,
        },
      },
      {
        props: {
          required: true,
          hint: "genderHint",
          persistentHint: true,

        },

        name: "gender",
        type: "v-autocomplete",

      },
      {
        name: "dob",
        type: "common-date-picker",
        props: {
          required: true,
        },
        matches: [
          (a, b) => equal(a, b) ? 5 : 0,
          (a, b) => {
            const dd = dateDiff(a, b);
            return (dd < 3 ? 15 : (dd < 5 ? 10 : (dd < 7 ? 2 : (dd < 10 ? 1 : 0))));
          },

        ],
      },
      {
        props: {
          required: true,
        },
        name: "location",
        type: "v-autocomplete",
        matches: [
          (a, b) => equal(a, b) ? 1 : 0,
        ],
      },
      {
        props: {
          required: true,
        },
        name: "nationality",
        type: "v-autocomplete",
        matches: [
          (a, b) => equal(a, b) ? 1 : 0,
        ],
      },
      {
        props: {
          required: true,
        },
        name: "maritalStatus",
        type: "v-autocomplete",
        matches: [
          (a, b) => equal(a, b) ? 10 : 0,
        ],
      },
    ],
  },
  {
    name: "physical",
    required: true,
    fields: [
      {
        props: {
          required: true,
          suffix: "cm",
          type: "number",
        },
        name: "height",
        type: "v-text-field",
        matches: [
          (a, b) => equal(a, b) ? 10 : 0,
          (a, b) => absDiff(a, b) < 3 ? 5 : 0,
        ],
      },
      {
        props: {
          required: true,
          suffix: "Kg",
          type: "number",
        },
        name: "weight",
        type: "v-text-field",
        matches: [
          (a, b) => equal(a, b) ? 10 : 0,
          (a, b) => absDiff(a, b) < 3 ? 5 : 0,
        ],
      },
      {
        name: "physicalStatus",
        type: "v-text-field",
        textType: "text",
      },
      {
        name: "bodyType",
        type: "v-autocomplete",
      },
    ],
  },
  {
    name: "contact",
    fields: [
      {
        name: "address",
        type: "v-textarea",
        count: 250,
      },
      {
        name: "phone",
        type: "v-text-field",
        count: 10,
      },
      {
        name: "contactEmail",
        type: "v-text-field",
        props: {
          type: "email",
        },
      },
    ],
  },
  {
    name: "educational",
    fields: [
      {
        name: "highestEducation",
        type: "v-text-field",
      },
      {
        name: "educationFrom",
        type: "v-text-field",
      },
    ],
  },
  {
    name: "professional",
    fields: [
      {
        name: "emplaoyedIn",
        type: "v-autocomplete",
      },
      {
        name: "currentJob",
        type: "v-text-field",
      },
      {
        name: "companyName",
        type: "v-text-field",
      },
      {
        name: "jobLocation",
        type: "v-text-field",
      },
      {
        name: "annualIncome",
        type: "v-text-field",
        props: {
          type: "number",
          suffix: "INR",
        },
      },
    ],
  },
  {
    name: "family",
    fields: [
      {
        name: "familyStatus",
        type: "v-autocomplete",
      },
      {
        name: "familyType",
        type: "v-autocomplete",
      },
      {
        name: "familyMembers",
        type: "v-text-field",
        props: {
          type: "number",
        },
        matches: [
          (a, b) => equal(a, b) ? 5 : 0,
          (a, b) => absDiff(a, b) < 2 ? 1 : 0,
        ],
      },
      {
        name: "familyValues",
        type: "v-autocomplete",
      },
      {
        name: "ancestralOrigin",
        type: "v-text-field",
      },
      {
        name: "fatherOccupation",
        type: "v-autocomplete",
      },
      {
        name: "motherOccupation",
        type: "v-autocomplete",
      },
      {
        name: "parentsNumber",
        type: "v-text-field",
        count: 10,
      },

    ],
  },

  {
    name: "religiousBackground",
    required: true,
    fields: [
      {
        props: {
          required: true,
        },
        name: "religion",
        type: "v-autocomplete",
        matches: [
          (a, b) => equal(a, b) ? 8 : 0,
        ],
      },
      {
        props: {
          required: true,
        },
        name: "caste",
        type: "v-autocomplete",
        matches: [
          (a, b) => equal(a, b) ? 10 : 0,
        ],
      },

    ],
  },
  {
    name: "partnerPreferences",
    required: true,
    fields: [
      {
        props: {
          hint: "partnerGenderHint",
          persistentHint: true,
          required: true,

        },
        name: "partnerGender",
        type: "v-autocomplete",

      },
      {
        name: "partnerAge",
        type: "v-range-slider",
        props: {
          hint: "partnerAgeHint",
          thumbLabel: "always",
          persistentHint: true,
          min: 21,
          max: 100,
          required: true,
        },

      },
      {
        name: "partnerHeight",
        type: "v-range-slider",
        props: {
          thumbLabel: "always",
          min: 30,
          max: 250,
        },

      },
      {
        name: "partnerMaritalStatus",
        type: "v-autocomplete",
      },
      {
        name: "partnerPhysicalStatus",
        type: "v-text-field",
      },
      {
        name: "partnerLifeStyle",
        type: "v-text-field",
      },
      {
        name: "partnerReligion",
        type: "v-text-field",
      },
      {
        name: "partnerCaste",
        type: "v-text-field",
      },
      {
        name: "partnerMotherTongue",
        type: "v-text-field",
      },
      {
        name: "partnerStar",
        type: "v-text-field",
      },
      {
        name: "partnerCountry",
        type: "v-text-field",
      },
      {
        name: "partnerState",
        type: "v-text-field",
      },
      {
        name: "partnerCity",
        type: "v-text-field",
      },
      {
        name: "partnerEducation",
        type: "v-text-field",
      },
      {
        name: "partnerEmployed",
        type: "v-autocomplete",
      },
      {
        name: "partnerOccupation",
        type: "v-text-field",
      },
      {
        name: "partnerincome",
        type: "v-text-field",
        props: {
          suffix: "INR",
          type: "number",
        },
      },
    ],
  },
  {
    name: "horoscope",
    fields: [
      {
        name: "starName",
        type: "v-text-field",
      },
      {
        name: "raasiName",
        type: "v-text-field",
      },
      {
        name: "birthTime",
        type: "v-text-field",
      },
      {
        name: "birthPlace",
        type: "v-text-field",
      },
    ],
  },
  {
    name: "habitsAndInterests",
    fields: [
      {
        name: "eatingHabits",
        type: "v-autocomplete",
      },
      {
        name: "smokingHabits",
        type: "v-autocomplete",
      },
      {
        name: "drinkingHabits",
        type: "v-autocomplete",
      },
      {
        name: "hobbies",
        type: "v-autocomplete",
        props: {
          hint: "partnerPreferencesHint",
          multiple: true,
        },
      },
    ],
  },

];

export const agent = [
  {
    name: "basic",
    required: true,
    fields: [
      // type: any vuetify inputs/pickers can be used eg. v-text-field, v-select, v-date-picker, v-time-picker, v-color-picker etc
      // props: any props that can be passed to the input/picker

      {
        name: "firstName",
        type: "v-text-field",
        props: {
          type: "text",
          count: 30,
          required: true,
        },
      },
      {

        name: "lastName",
        type: "v-text-field",
        props: {
          type: "text",
          count: 30,
          required: true,
        },
      },
      {

        name: "email",
        type: "v-text-field",
        props: {
          type: "email",
          required: true,
          readonly: true,
        },
      },
      {
        props: {
          required: true,
        },
        name: "location",
        type: "v-autocomplete",
      },
      {
        props: {
          required: true,
        },
        name: "nationality",
        type: "v-autocomplete",
      },
    ],
  },
  {
    required: true,
    name: "contact",
    fields: [
      {
        name: "address",
        type: "v-textarea",
        count: 250,
      },
      {
        props: {
          required: true,
        },
        name: "phone",
        type: "v-text-field",
        count: 10,
      },
      {
        name: "contactEmail",
        type: "v-text-field",
        textType: "email",
      },
    ],
  },
  {
    name: "professional",
    fields: [
      {
        name: "currentJob",
        type: "v-text-field",
      },
    ],
  },
  {
    name: "bankInfo",
    fields: [
      {
        name: "bankName",
        type: "v-text-field",
        props: {
          required: true,
        },
      },
      {
        name: "ifscCode",
        type: "v-text-field",
        props: {
          required: true,
        },
      },
      {
        name: "accountNumber",
        type: "v-text-field",
        props: {
          required: true,
        },
      },
    ],
  },

];
