import socialMedias from "../../data/socialMediaLinks.json";

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-5">
      {socialMedias.map((socialMedia, key) => (
        <li key={key}>
          <a target="_blank" href={socialMedia.link}>
            <img src={socialMedia.logo} alt={socialMedia.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
