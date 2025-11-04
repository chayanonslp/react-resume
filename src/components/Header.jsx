export default function Header({ urlImg, name, role }) {
    return (
      <header className="text-center border-b pb-4">
        <img src={`${import.meta.env.BASE_URL}profile.webp`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" alt="Profile" />
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-blue-600 font-medium">{role}</p>
      </header>
    );
  }
  