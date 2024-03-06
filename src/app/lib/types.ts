export type state = {
    code: string;
    name: string;
};

type Activity = {
    id: string;
    name: string;
};

type ContactPhoneNumber = {
    phoneNumber: string;
    description: string;
    extension: string;
    type: string;
};

type ContactEmailAddress = {
    description: string;
    emailAddress: string;
};

export type OperatingHour = {
    exceptions: [];
    description: string;
    standardHours: {
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
    };
    name: string;
};

type Address = {
    postalCode: string;
    city: string;
    stateCode: string;
    countryCode: string;
    provinceTerritoryCode: string;
    line1: string;
    type: string;
    line3: string;
    line2: string;
};

export type ParkImage = {
    credit: string;
    title: string;
    altText: string;
    caption: string;
    url: string;
};

export type EntranceFee = {
    cost: string;
    description: string;
    title: string;
};

export type EntrancePass = {
    cost?: string;
    description?: string;
    title?: string;
};

export type Park = {
    id: string;
    url: string;
    fullName: string;
    parkCode: string;
    description: string;
    latitude: string;
    longitude: string;
    latLong: string;
    activities: Activity[];
    states: string;
    contacts: {
        phoneNumbers: ContactPhoneNumber[];
        emailAddresses: ContactEmailAddress[];
    };
    entranceFees: EntranceFee[];
    entrancePasses: [] | EntrancePass[];
    fees: [];
    directionsInfo: string;
    directionsUrl: string;
    operatingHours: OperatingHour[];
    addresses: Address[];
    images: ParkImage[];
    weatherInfo: string;
    name: string;
    designation: string;
    relevanceScore: string;
};
