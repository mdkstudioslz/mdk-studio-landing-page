import zapzap from '../../assets/wpp.webp';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5598981600041"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent fixed bottom-0 right-0 z-50 pr-6 pb-6 sm:pr-12 sm:pb-12 w-20 md:w-24 lg:w-28 hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src={zapzap} alt="WhatsApp" className="w-full h-auto drop-shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
