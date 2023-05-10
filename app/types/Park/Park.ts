type EntranceFee = {
    cost: String;
    title: String;
};

type Activity = {
    id: String;
    name: String;
};

type Image = {
    url: String;
    altText: String;
    credit: String;
};

export type Park = {
    fullName: String;
    description: String;
    weatherInfo: String;
    directionsUrl: String;
    entranceFees: EntranceFee[];
    activities: Activity[];
    images: Image[];
};
