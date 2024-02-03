function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center h-full bg-gray-200"
    >
      <h1 className="mb-6 text-5xl font-bold text-gray-700">Contact</h1>
      <div className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Our Contact Information
        </h2>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Address:</span> 123 Main St, Anytown, USA
        </p>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Phone:</span> (123) 456-7890
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email:</span> info@example.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
