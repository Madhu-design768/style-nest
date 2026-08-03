import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] mt-28 border-t border-white/10  text-white">
      {/* Top Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            Style
            <span className="text-[var(--color-accent)]">Nest</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Discover premium fashion collections crafted for modern lifestyles.
            Quality, comfort and timeless style.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Shop</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="cursor-pointer transition hover:text-white">
              Men
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Women
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Kids
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Accessories
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Support</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="cursor-pointer transition hover:text-white">
              Contact Us
            </li>

            <li className="cursor-pointer transition hover:text-white">
              FAQs
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Shipping
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Returns
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Follow Us</h3>

          <div className="flex gap-4">
            <button className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-[var(--color-accent)]">
              <FaFacebookF size={18} />
            </button>

            <button className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-[var(--color-accent)]">
              <FaInstagram size={18} />
            </button>

            <button className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-[var(--color-accent)]">
              <FaXTwitter size={18} />
            </button>

            <button className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-[var(--color-accent)]">
              <FaYoutube size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 StyleNest. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;