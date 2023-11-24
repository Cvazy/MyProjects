    <!-- Advantages -->
    <section 
    class="lazy py-[85px] bg-cover bg-center bg-no-repeat" 
    data-bg="/_assets/image/advantages/b2_bg.jpg"
    id="benefits"
    >
        <div class="container">
            <div class="flex justify-between items-center gap-5 md:gap-5 sm:flex-col sm:items-start">
                <h2 class="">
                    <strong>Преимущества</strong>
                    работы с нами, <br class="md:hidden">
                    рассказанные нашими клиентами
                </h2>
                <div class="flex gap-2">
                    <button class="btn btn__right advantages-button-prev"></button>
                    <button class="btn btn-arrow-right advantages-button-next"></button>                    
                </div>
            </div>
        </div>

        <!-- Swiper -->
        <div 
            class="container mt-14 swiper "
            x-data="{ swiper: null }" 
            x-init="swiper = new Swiper($refs.container, { 
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.advantages-button-next',
                    prevEl: '.advantages-button-prev',
                  },
                breakpoints: {
                    680: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    980: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1170: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                }
             })" 
            x-ref="container"    
        >
            <div class="grid grid-cols-3 pb-[200px] swiper-wrapper">

                <!-- Slide item 1-->
                <div class="swiper-slide">
                    <div class="relative h-[440px] bg-[#2B221D] rounded-lg p-6 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:border before:border-border-icon before:rounded-lg before:m-2 ">
                        <div class="h-[300px]">
                            <h4 class="text-accent pb-5 text-2xl font-bold">Общение с дизайнером</h4>
                            <p class="pl-5 text-white border-l-2 border-accent mb-5"> Вы можете выбрать удобный для Вас формат общения – онлайн или в нашем офисе. Когда дизайнер Вадим приехал на мой объект, он сразу внимательно изучил особенности помещений, зафиксировал размеры и коммуникации</p>
                        </div>
                        <div class="relative">
                            <div class="flex">
                                <img class="lazy" data-src="/_assets/image/advantages/b2_sl1_bg.png" src="/_assets/image/advantages/b2_sl1_bg.png" alt="" loading="lazy">
                            </div>
                            <div class="">
                                <img class="lazy absolute top-[-62px] xl:top-[-49px] left-0 w-full" data-src="/_assets/image/advantages/b2_sl1.png" src="/_assets/image/advantages/b2_sl1.png" alt="" width="300" height="353" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:Slide item 1-->
                <!-- Slide item 2-->
                <div class="swiper-slide">
                    <div class="relative h-[440px] bg-[#F0E6E0] rounded-lg p-6 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:border before:border-[#CBC5C5] before:rounded-lg before:m-2 ">
                        <div class="h-[300px]">
                            <h4 class="text-black pb-5 text-2xl font-bold">Контроль качества</h4>
                            <p class="pl-5 text-black border-l-2 border-white mb-5">
                                <strong>Специалисты всегда <br>  включаются в процесс</strong>  и находятся на связи на каждом этапе. Они отвечают на любые вопросы и всегда могут созвониться с вами
                            </p>
                        </div>
                        <div class="relative">
                            <div class="flex">
                                <img class="lazy" data-src="/_assets/image/advantages/b2_sl2_bg.png" src="/_assets/image/advantages/b2_sl2_bg.png" alt="" loading="lazy">
                            </div>
                            <div class="">
                                <img class="lazy absolute top-[-69px] xl:top-[-40px] left-[11px] w-[90%]" data-src="/_assets/image/advantages/b2_sl2.png" src="/_assets/image/advantages/b2_sl2.png" alt="" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>   
                <!-- End:Slide item 2-->
                <!-- Slide item 3-->
                <div class="swiper-slide">
                    <div class="relative h-[440px] bg-[#2B221D] rounded-lg p-6 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:border before:border-border-icon before:rounded-lg before:m-2 ">
                        <div class="h-[300px]">
                            <h4 class="text-accent pb-5 text-2xl font-bold">Оперативность</h4>
                            <p class="pl-5 text-white border-l-2 border-accent mb-5"> 
                                Быстрый выезд дизайнера на объект для замеров и оперативное решение вопросов в процессе работы, благодаря чему работа над Дизайн-проектом может быть выполнена, опережая сроки
                            </p>
                        </div>
                        <div class="relative">
                            <div class="flex">
                                <img class="lazy" data-src="/_assets/image/advantages/b2_sl3_bg.png" src="/_assets/image/advantages/b2_sl3_bg.png" alt="" loading="lazy">
                            </div>
                            <div class="">
                                <img class="lazy absolute top-[17px] xl:top-0 right-[3px]" data-src="/_assets/image/advantages/b2_sl3.png" src="/_assets/image/advantages/b2_sl3.png" alt="" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:Slide item 3-->
                <!-- Slide item 4-->
                <div class="swiper-slide">
                    <div class="relative h-[440px] bg-[#F0E6E0] rounded-lg p-6 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:border before:border-[#CBC5C5] before:rounded-lg before:m-2 ">
                        <div class="h-[300px]">
                            <h4 class="text-black pb-5 text-2xl font-bold">Функциональность <br>  пространства</h4>
                            <p class="pl-5 text-black border-l-2 border-white mb-5">
                                <strong>Компания Атлон ФМ<br> организовала пространство<br> таким образом, чтобы моя<br> повседневная жизнь ничем не<br> была ограничена:</strong>   специалисты <br>  предусмотрели места для хранения, зоны встречи гостей, <br>  зоны для детей и т.д
                            </p>
                        </div>
                        <div class="relative">
                            <div class="flex">
                                <img class="lazy" data-src="/_assets/image/advantages/b2_sl4_bg.png"  src="/_assets/image/advantages/b2_sl4_bg.png" alt="" loading="lazy">
                            </div>
                            <div class="">
                                <img class="lazy absolute top-[30px] xl:top-[45px] right-[40px] w-[65%]" data-src="/_assets/image/advantages/b2_sl4.png" src="/_assets/image/advantages/b2_sl4.png" alt="" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:Slide item 4-->
                <!-- Slide item 1-->
                <div class="swiper-slide">
                    <div class="relative h-[440px] bg-[#2B221D] rounded-lg p-6 before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:border before:border-border-icon before:rounded-lg before:m-2 ">
                        <div class="h-[300px]">
                            <h4 class="text-accent pb-5 text-2xl font-bold">Гарантия результата</h4>
                            <p class="pl-5 text-white border-l-2 border-accent mb-5">Мы несем полную ответственность за все конструкционные и дизайнерские решения, применяемые в наших дизайн-проектах, поэтому можем гарантировать высочайшее качество.</p>
                        </div>
                        <div class="relative">
                            <div class="flex">
                                <img class="lazy" data-src="/_assets/image/advantages/b2_sl5_bg.png" src="/_assets/image/advantages/b2_sl5_bg.png" alt="" loading="lazy">
                            </div>
                            <div class="">
                                <img class="lazy absolute top-[140px] xl:top-[100px] left-[41px] w-[90%]" data-src="/_assets/image/advantages/b2_sl5.png" src="/_assets/image/advantages/b2_sl5.png" alt="" width="300" height="353" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:Slide item 1-->
            </div>
        
        </div>
        <!-- End:Swiper -->

    </section>
    <!-- End:Advantages -->