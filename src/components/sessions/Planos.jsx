import { useState } from 'react';
// import fundo from '../../assets/fundo.png'

export const Planos = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = {
    basic: {
      monthly: 45,
      annually: 490, // 12 * 100 - desconto
    },
    intermediate: {
      monthly: 85,
      annually: 990, // 12 * 99 - desconto
    },
    premium: {
      monthly: 135,
      annually: 1490, // 12 * 150 - desconto
    },
  };

  return (
    <div id="planos" className="bg-black w-full min-h-screen inset-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-12">
          <p className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Planos</p>
          <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] text-lg sm:text-xl relative text-white mr-2 sm:mr-4 font-medium">Mensal</label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative shrink-0 w-9 sm:w-11 h-5 sm:h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-blue-600 appearance-none 
                      before:inline-block before:w-4 sm:before:w-5 before:h-4 sm:before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:transition before:ease-in-out before:duration-200"
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <label className="relative min-w-[3.5rem] font-medium text-lg sm:text-xl text-white ml-2 sm:ml-4">
              Anual
            </label>
          </div>
        </div>

        {/* Grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:items-center">
          {/* Pricing Card */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 md:py-9 md:px-12 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-manrope text-2xl font-bold mb-3">Básico</h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold">
                R${isAnnual ? pricingData.basic.annually : pricingData.basic.monthly}
              </span>
              <span className="text-lg sm:text-xl text-gray-500">/ {isAnnual ? 'Ano' : 'Mês'}</span>
            </div>
            {/* List */}
            <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-gray-500">
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Design simples e limpo</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Até 5 páginas estáticas</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Formulário de contato básico</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Integração com redes sociais.</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-white text-center hover:bg-indigo-700"
            >
              Escolher Plano
            </a>
          </div>

          {/* Intermediate Plan */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-600 p-6 md:py-9 md:px-12 transition-all duration-500 hover:bg-indigo-700">
            <h3 className="font-manrope text-2xl font-bold mb-3 text-white">Intermediário</h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
                R${isAnnual ? pricingData.intermediate.annually : pricingData.intermediate.monthly}
              </span>
              <span className="text-lg sm:text-xl text-indigo-200">/ {isAnnual ? 'Ano' : 'Mês'}</span>
            </div>
            {/* List */}
            <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-indigo-200">
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-white"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Design personalizado</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-white"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Até 10 páginas dinâmicas</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-white"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Integração avançada com redes sociais</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-white"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Suporte via chat e email</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-indigo-600 text-center hover:bg-gray-100"
            >
              Escolher Plano
            </a>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 md:py-9 md:px-12 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-manrope text-2xl font-bold mb-3">Premium</h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold">
                R${isAnnual ? pricingData.premium.annually : pricingData.premium.monthly}
              </span>
              <span className="text-lg sm:text-xl text-gray-500">/ {isAnnual ? 'Ano' : 'Mês'}</span>
            </div>
            {/* List */}
            <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-gray-500">
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Design premium exclusivo</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Páginas ilimitadas</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>SEO avançado</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Consultoria mensal</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-white text-center hover:bg-indigo-700"
            >
              Escolher Plano
            </a>
          </div>
        </div>
      </div>
      <hr className="h-px mt-64 bg-gray-200 border-0 dark:bg-gray-700 relative"></hr>
    </div>
  );
};

