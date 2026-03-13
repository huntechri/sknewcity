import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Пользовательское соглашение | SK New City",
};

export default function Page() {
    return (
        <section className="bg-white dark:bg-dark transition-colors duration-300">
            <div className="relative w-full flex justify-center pt-24 md:pt-32 pb-16">
                <div className="container max-w-5xl px-5 relative z-10">
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-black dark:text-white'>
                            Пользовательское соглашение
                        </h1>

                        <div className="prose prose-lg max-w-none text-dark/70 dark:text-white/60 space-y-8">
                            <section>
                                <p>
                                    Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между администрацией сайта <Link href="/" className="text-primary font-medium hover:underline">sk-new-city.ru</Link> (далее — «Администрация») и любым лицом, посещающим сайт (далее — «Пользователь»).
                                </p>
                                <p className="mt-4">
                                    Использование сайта означает полное и безоговорочное принятие Пользователем условий настоящего Соглашения. В случае несогласия с какими-либо условиями, Пользователь обязан прекратить использование сайта.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">1. Общие положения</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Сайт носит информационный характер и предоставляет сведения об услугах по ремонту и отделке помещений, предлагаемых Администрацией.</li>
                                    <li>Все материалы и цены, размещенные на Сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ. Для получения точной информации о стоимости и сроках необходимо заключение договора.</li>
                                    <li>Сайт является интеллектуальной собственностью Администрации. Использование материалов Сайта без активной ссылки на источник запрещено.</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">2. Права и обязанности сторон</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-black dark:text-white mb-2">Администрация имеет право:</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Изменять содержание Сайта и условия настоящего Соглашения в одностороннем порядке без предварительного уведомления.</li>
                                            <li>Ограничивать доступ к Сайту в случае нарушения Пользователем условий Соглашения.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black dark:text-white mb-2">Пользователь обязуется:</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Предоставлять достоверную информацию при заполнении форм обратной связи.</li>
                                            <li>Не предпринимать действий, которые могут быть рассмотрены как нарушающие нормальную работу Сайта.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">3. Порядок оказания услуг</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Для получения услуг Пользователь оставляет заявку на Сайте или связывается с Администрацией по контактным данным.</li>
                                    <li>Отношения по непосредственному выполнению ремонтных работ регулируются отдельным Договором строительного подряда, заключаемым между сторонами в письменной форме.</li>
                                    <li>Результаты расчетов на онлайн-калькуляторе являются предварительными и могут отличаться от итоговой сметы после выезда замерщика.</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">4. Конфиденциальность и персональные данные</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Порядок обработки персональных данных Пользователей регулируется Федеральным законом №152-ФЗ «О персональных данных» и <Link href="/privacy-policy" className="text-primary hover:underline">Политикой конфиденциальности</Link>, размещенной на Сайте.</li>
                                    <li>Оставляя данные на Сайте, Пользователь дает согласие на их обработку для целей связи, предоставления информации об услугах и маркетинговых предложений.</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">5. Ответственность</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Администрация не несет ответственности за убытки, возникшие у Пользователя по причинам, связанным с техническими сбоями оборудования или сетей связи.</li>
                                    <li>Администрация не гарантирует абсолютную точность информации на Сайте в каждый момент времени, хотя прикладывает все усилия для актуализации данных.</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">6. Заключительные положения</h2>
                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>Все споры, возникающие из настоящего Соглашения или в связи с ним, подлежат разрешению в соответствии с действующим законодательством РФ.</li>
                                    <li>Настоящее Соглашение вступает в силу с момента захода Пользователя на Сайт и действует бессрочно.</li>
                                </ol>
                            </section>

                            <section className="mt-12 p-6 bg-dark/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
                                <h2 className="text-lg font-bold text-black dark:text-white mb-4 uppercase tracking-wide">Реквизиты и контакты:</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-sm">
                                    <div className="md:col-span-2">
                                        <p className="font-semibold text-black dark:text-white">Название организации:</p>
                                        <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;СК Новый Город&quot;</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="font-semibold text-black dark:text-white">Юридический адрес:</p>
                                        <p>111401, г. Москва, вн.тер.г. Муниципальный Округ Перово, ул Новогиреевская, д. 18/31, помещ. 4/1/1</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">ИНН:</p>
                                        <p>7733427438</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">КПП:</p>
                                        <p>773301001</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">ОГРН:</p>
                                        <p>1237700765213</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">Email:</p>
                                        <p>info@sk-new-city.ru</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">Телефон:</p>
                                        <p>+7 (916) 767-34-34</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black dark:text-white">Сайт:</p>
                                        <p>sk-new-city.ru</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
