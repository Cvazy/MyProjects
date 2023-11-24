    <!--НашиПроекты-->
    <section id="go_raboty" class="projects bg-light pt-[93px] pb-[22px] !leading-[140%] sm:pt-[50px]" x-data="{current: 1, max: 9, projectSwipers: []}">
        <div class="container">
            <p class="projects_t1 max-w-[860px] mb-[30px] text-4xl font-bold text-[#1C1C1C] md:text-xl">
                <i>*</i>Кстати, мы прямо сейчас ведём НЕСКОЛЬКО таких серьёзных, дорогостоящих проектов.
            </p>
            <p class="projects_t2 text-2xl font-medium text-[#131313] md:text-lg md:mb-[25px]">
                Вот примеры:
            </p>
            <div class="projects_box sm:flex sm:flex-wrap sm:justify-center">
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" style="">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2"  x-init="
                                    projectSwipers[1] = {};
                                    projectSwipers[1].element = $refs.swiperElement_01;
                                    projectSwipers[1].next = $refs.swiperElement_01_next;
                                    projectSwipers[1].prev = $refs.swiperElement_01_prev;
                                    projectSwipers[1].swiper = new Swiper(projectSwipers[1].element, {
                                        effect: 'fade',
                                        slidesPerView: 1,
                                        navigation: {
                                            nextEl: projectSwipers[1].next,
                                            prevEl: projectSwipers[1].prev,
                                        },
                                    });" x-ref="swiperElement_01" >
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/0-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/0-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/02-q8WoozjA4bw-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/02-q8WoozjA4bw-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/03-A0-FpmAwhJY-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/03-A0-FpmAwhJY-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/05-xAq_pTB9BsA-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/05-xAq_pTB9BsA-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/06-x21nG9PBAPs-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/06-x21nG9PBAPs-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/11-2ys9f-b9Zvw-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/11-2ys9f-b9Zvw-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/1/16-DxhsYO6AMEM-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/1/16-DxhsYO6AMEM-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_01_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_01_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Символ </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b> <span class="font-medium text-right">105 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Дизайнерский</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>1 100 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 1">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[2] = {};
                                    projectSwipers[2].element = $refs.swiperElement_02;
                                    projectSwipers[2].next = $refs.swiperElement_02_next;
                                    projectSwipers[2].prev = $refs.swiperElement_02_prev;
                                " x-ref="swiperElement_02">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/02-7tIgmWFvEio-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/02-7tIgmWFvEio-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/06-PC2y14t1ebI-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/06-PC2y14t1ebI-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/09-6bL0QyOMdT4-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/09-6bL0QyOMdT4-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/1-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/1-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/11-OmXnkbbMLh8-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/11-OmXnkbbMLh8-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/14-Ip999RGkIOA-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/14-Ip999RGkIOA-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="1" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/2/17-or7PBENrhNI-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/2/17-or7PBENrhNI-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_02_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_02_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Life-Варшавская </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b> <span>70 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>770 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 2">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[3] = {};
                                    projectSwipers[3].element = $refs.swiperElement_03;
                                    projectSwipers[3].next = $refs.swiperElement_03_next;
                                    projectSwipers[3].prev = $refs.swiperElement_03_prev;
                                " x-ref="swiperElement_03">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/01-5t-7ZgmHogg-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/01-5t-7ZgmHogg-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/04-5KW9Gsga9WY-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/04-5KW9Gsga9WY-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/05-PA7m1P06w-0-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/05-PA7m1P06w-0-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/07-CEeMB5KuY3w-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/07-CEeMB5KuY3w-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/08-NjzioVvoz5Y-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/08-NjzioVvoz5Y-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/09-ixj02uC7lJE-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/09-ixj02uC7lJE-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="0" class="lazy rounded-lg" data-test="file="/_assets/Секции/НашиПроекты/portfolio/3/12-orDGZu-5M7o-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/3/12-orDGZu-5M7o-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_03_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_03_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Лучи </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>40 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Дизайнерский</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>550 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 3">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2"  x-init="
                                    projectSwipers[4] = {};
                                    projectSwipers[4].element = $refs.swiperElement_04;
                                    projectSwipers[4].next = $refs.swiperElement_04_next;
                                    projectSwipers[4].prev = $refs.swiperElement_04_prev;
                                " x-ref="swiperElement_04">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/01-iKsX1bQtO3k-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/01-iKsX1bQtO3k-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/03-RHHgSkFfj2U-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/03-RHHgSkFfj2U-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/04-jmcweNFWaoc-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/04-jmcweNFWaoc-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/05-MvpfO4S00DU-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/05-MvpfO4S00DU-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/08-bWK5kHCwwJM-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/08-bWK5kHCwwJM-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/09-kEnIwISaQ5w-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/09-kEnIwISaQ5w-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="3" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/4/11-054zWL7oRkA-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/4/11-054zWL7oRkA-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_04_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_04_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Небо </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>60 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>620 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 4">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[5] = {};
                                    projectSwipers[5].element = $refs.swiperElement_05;
                                    projectSwipers[5].next = $refs.swiperElement_05_next;
                                    projectSwipers[5].prev = $refs.swiperElement_05_prev;
                                " x-ref="swiperElement_05">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/01-5LUmJNiSzI4-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/01-5LUmJNiSzI4-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/08-2YIqRKBvnTQ-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/08-2YIqRKBvnTQ-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/09-xvnqCeci7mA-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/09-xvnqCeci7mA-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/10-BFSs-JGtwl0-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/10-BFSs-JGtwl0-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/12-cbPeZdGyfbg-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/12-cbPeZdGyfbg-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/16-Tz82Y4NlCRY-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/16-Tz82Y4NlCRY-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="4" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/5/17-QXeof2PoH1s-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/5/17-QXeof2PoH1s-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_05_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_05_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Зиларт </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>100 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Дизайнерский</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>950 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 5">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[6] = {};
                                    projectSwipers[6].element = $refs.swiperElement_06;
                                    projectSwipers[6].next = $refs.swiperElement_06_next;
                                    projectSwipers[6].prev = $refs.swiperElement_06_prev;
                                " x-ref="swiperElement_06">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/0-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/0-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/01-3BAt2w1QFBk-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/01-3BAt2w1QFBk-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/02-IzIfwoPnhws-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/02-IzIfwoPnhws-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/04-81JFu0j_10M-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/04-81JFu0j_10M-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/07-cuL2DFwxBMg-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/07-cuL2DFwxBMg-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/10-2KUDEBBisRw-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/10-2KUDEBBisRw-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="5" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/6/11-suQYxClu_2U-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/6/11-suQYxClu_2U-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_06_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_06_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Фестиваль Парк </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>65 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>660 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 6">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[7] = {};
                                    projectSwipers[7].element = $refs.swiperElement_07;
                                    projectSwipers[7].next = $refs.swiperElement_07_next;
                                    projectSwipers[7].prev = $refs.swiperElement_07_prev;
                                " x-ref="swiperElement_07">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/0-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/0-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/02-BF0HCnLZSQw-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/02-BF0HCnLZSQw-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/04-gGAyorOGdv4-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/04-gGAyorOGdv4-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/06-oEDOCEIbW90-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/06-oEDOCEIbW90-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/08-lXvmTIwDbEY-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/08-lXvmTIwDbEY-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/15-kwn17bmc3KA-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/15-kwn17bmc3KA-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="6" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/7/18-Zwz8fUjAT8Y-697x570.jpg" data-src="/_assets/Секции/НашиПроекты/portfolio/7/18-Zwz8fUjAT8Y-697x570.jpg" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_07_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_07_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК West Garden </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>100 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>1 090 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 7">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2"  x-init="
                                    projectSwipers[8] = {};
                                    projectSwipers[8].element = $refs.swiperElement_08;
                                    projectSwipers[8].next = $refs.swiperElement_08_next;
                                    projectSwipers[8].prev = $refs.swiperElement_08_prev;
                                " x-ref="swiperElement_08">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/1-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/1-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/2-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/2-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/3-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/3-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/4-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/4-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/5-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/5-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/6-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/6-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="7" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/8/7-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/8/7-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_08_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_08_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Ленинградка 58 </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>37 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>760 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
                <div class="projects_slider_item flex justify-end mb-[50px] sm:min-w-[320px] sm:mb-[22px]" x-show="current > 8">
                    <div class="projects_content relative w-full max-w-[760px] min-h-[450px] flex pt-[53px] bg-white rounded-lg before:absolute before:inset-0 before:m-[15px] before:rounded-lg before:border before:border-solid before:border-[#D6D6D6] xl:max-w-[570px] xl:min-h-[300px] md:block sm:pt-[20px] sm:before:m-[10px]">
                        <div class="projects_photo relative max-w-[298px] flex justify-end items-start font-[0] z-10 xl:max-w-[223px] md:max-w-[360px] md:mx-auto sm:w-[280px]">
                            <div class="projects_photo_slider w-[697px] min-w-[697px] xl:w-[523px] xl:min-w-[523px] md:min-w-0 md:w-full sm:w-[280px]">
                                <div class="swiper_2" x-init="
                                    projectSwipers[9] = {};
                                    projectSwipers[9].element = $refs.swiperElement_09;
                                    projectSwipers[9].next = $refs.swiperElement_09_next;
                                    projectSwipers[9].prev = $refs.swiperElement_09_prev;
                                " x-ref="swiperElement_09">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/1-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/1-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/2-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/2-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/3-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/3-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/4-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/4-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/5-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/5-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/6-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/6-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                        <div class="swiper-slide">
                                            <img data-fancybox="8" class="lazy rounded-lg" data-test="/_assets/Секции/НашиПроекты/portfolio/9/7-697x570.png" data-src="/_assets/Секции/НашиПроекты/portfolio/9/7-697x570.png" width="697" height="570" alt="фото работы">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider_bottom flex justify-start items-center mt-[21px] md:justify-center">
                                    <div class="swiper-button-prev btn-slider-arrow btn-slider-arrow--dark" x-ref="swiperElement_09_prev"></div>
                                    <i class="line block bg-[#787171] w-[8.25rem] h-[2px] mx-[1.125rem]"></i>
                                    <div class="swiper-button-next btn-slider-arrow btn-slider-arrow--dark rotate-180" x-ref="swiperElement_09_next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="projects_text relative max-w-[380px] w-[300px] xl:w-[260px] mt-[22px] ml-[29px] flex flex-col z-10 md:w-[360px] md:mx-auto md:pb-[52px] sm:w-auto sm:mx-[24px]">
                            <p class="projects_title pb-[15px] text-2xl font-bold text-[#131313] xl:text-xl">
                                Квартира в ЖК Ленинградка 58 (2) </p>
                            <div class="projects_content_info flex flex-col flex-auto justify-center text-[#131313] !leading-[140%]">
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Общая площадь:</b><span>37 м<sup>2</sup></span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Вид ремонта:</b> <span>Капитальный</span>
                                </p>
                                <p class="flex justify-between items-center py-[15px] border-b border-solid border-[#f1f1f1]">
                                    <b class="text-lg xl:text-base">Стоимость:</b> <span>740 000 руб.</span>
                                </p>
                            </div>
                            <p class="projects_zg" hidden>
                                Виды работ:
                            </p>
                            <p class="projects_about_text" hidden>
                                Устройство перегородок, выравнивание стен, механизированная стяжка, потолок ГКЛ, окраска стен, кварц-винил, санузел под ключ, инженерные сети, дизайнерская фреска, трековое освещение </p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn max-w-[380px] mx-auto text-center after:hidden"
                x-show="current < max"
                @click.prevent="
                    current = current + 1; 
                    $(projectSwipers[current].element).fadeIn(200, function() {
                    setTimeout(() => {
                    projectSwipers[current].swiper = new Swiper(projectSwipers[current].element, {
                            effect: 'fade',
                            slidesPerView: 1,
                            navigation: {
                                nextEl: projectSwipers[current].next,
                                prevEl: projectSwipers[current].prev,
                            },
                        });
                        parent = $(projectSwipers[current].element).closest('.projects_slider_item');
                        tabScroll(parent[0]);
                    },200); });">
                <span class="w-full text-2xl font-bold sm:text-lg">Посмотреть ещё объект</span>
            </button>
        </div>
    </section>
    <!--End:НашиПроекты-->
