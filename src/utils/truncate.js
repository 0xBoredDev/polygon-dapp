export default function truncate(address) {
    return (
      String(address).substring(0, 6) + "..." + String(address).substring(38)
    );
  };