type EntranceFee = {
    cost: String;
    title: String;
};

type Activity = {
    id: String;
    name: String;
};

export type Park = {
    fullName: String;
    description: String;
    weatherInfo: String;
    directionsUrl: String;
    entranceFees: EntranceFee[];
    activities: Activity[];
};
