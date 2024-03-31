import socialMedias from "../../data/socialMediaLinks.json";

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-5">
      {socialMedias.map((socialMedia, key) => (
        <li key={key}>
          <a draggable={false} target="_blank" href={socialMedia.link}>
            <img
              draggable={false}
              src={socialMedia.logo}
              alt={socialMedia.name}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
