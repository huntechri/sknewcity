import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Политика конфиденциальности | SK New City",
};

export default function Page() {
    return (
        <section className="bg-white dark:bg-dark transition-colors duration-300">
            <div className="relative w-full flex justify-center pt-24 md:pt-32 pb-16">
                <div className="container max-w-5xl px-5 relative z-10">
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-black dark:text-white'>
                            Политика конфиденциальности
                        </h1>

                        <div className="prose prose-lg max-w-none text-dark/70 dark:text-white/60 space-y-8">
                            <section>
                                <p>
                                    Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации, которую администрация сайта <Link href="/" className="text-primary font-medium hover:underline">sk-new-city.ru</Link> (ООО &quot;СК Новый Город&quot;, далее — «Администрация») может получить о Пользователе во время использования им Сайта.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">1. Состав персональных данных</h2>
                                <p>Администрация Сайта может обрабатывать следующие персональные данные, предоставленные Пользователем добровольно через формы обратной связи:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Фамилия, имя, отчество;</li>
                                    <li>Номер контактного телефона;</li>
                                    <li>Адрес электронной почты (email);</li>
                                    <li>Адрес объекта (для выезда замерщика);</li>
                                    <li>Иная информация, указанная в сообщении.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">2. Цели обработки данных</h2>
                                <p>Мы обрабатываем ваши данные исключительно для:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Установления с Пользователем обратной связи (звонки, сообщения);</li>
                                    <li>Подготовки предварительного коммерческого предложения и сметы;</li>
                                    <li>Записи на технический выезд (замер);</li>
                                    <li>Предоставления информации об акциях и новостях компании (при согласии).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">3. Правовые основания</h2>
                                <p>Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных» и на основании согласия Пользователя, выраженного путем совершения активных действий на Сайте.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">4. Защита и передача данных</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Мы принимаем необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного доступа.</li>
                                    <li>Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</li>
                                    <li>Срок обработки персональных данных является неограниченным, до момента отзыва согласия Пользователем.</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">5. Права Пользователя</h2>
                                <p>Пользователь имеет право в любой момент запросить информацию об обрабатываемых данных, внести в них изменения или потребовать их удаления. Для этого необходимо отправить запрос на email: <span className="text-black dark:text-white font-medium">info@sk-new-city.ru</span>.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">6. Изменение политики</h2>
                                <p>Администрация имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция вступает в силу с момента ее размещения на Сайте.</p>
                            </section>

                            <section className="mt-12 text-sm italic">
                                <p>Последнее обновление: 13 марта 2025 г.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
