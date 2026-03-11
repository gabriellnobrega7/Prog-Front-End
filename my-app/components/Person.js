import { getImageUrl } from "@/utils";

export default function Person({ person, size = 100 }) {
  return (
    <img
      className="person"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}