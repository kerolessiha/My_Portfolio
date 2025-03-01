export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-gray-100 text-base-content text-center text-indigo-500  p-4 fixed bottom-0 left-0 w-full z-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Keroles Siha
          </p>
        </aside>
      </footer>
    </>
  );
}
