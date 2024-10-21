export class Serie {
    name;
    channel;
    seasons;
    description;
    link;
    image;
    constructor(name, channel, seasons, description, link, image) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
