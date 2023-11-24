    <!-- Price_work -->
    <section 
    class="lazy pt-[4.375rem] pb-[8.75rem] md:pb-[4.375rem]  bg-cover bg-center bg-no-repeat sm:bg-left" 
    data-bg="/_assets/image/price_work/b3_bg.jpg"
    id="price"
    >
        <div class="container">
            <h2 class="sm:mb-4"><strong>Стоимость</strong> работ</h2>
            <div class="relative ml-5 pl-16 text-xl text-light before:content-[''] before:w-[40px] before:h-[2px] before:absolute before:top-[12px] before:left-[0] before:bg-white">Мы предлагаем вам варианты <br> дизайн-проектов под любые бюджеты</div>

            <div 
                x-data="{ 
                    activeTab: 'tab1',
                    mobileNav: false,
                    activeNavTitle: '<span><strong>Технический</strong> дизайн-проект</span>',                    
                }" 
                class="flex gap-20 my-8 bg-bg-opacity backdrop-blur-lg rounded p-16 md:p-5 md:flex-col md:gap-5 "
            >
                <!-- Mobile nav -->
                <div class="hidden relative md:block">

                    <button class="btn btn--select w-full sm:flex sm:justify-center sm:items-center sm:h-[70px] sm:px-2 sm:leading-4" x-html="activeNavTitle" @click="mobileNav = !mobileNav"></button>

                    <div x-show="mobileNav" class="absolute top-[60px] left-0 right-0 bg-light rounded-b-lg h-auto">
                        <ul class="m-5">
                            <li @click="activeNavTitle='<span><strong>Технический</strong> дизайн-проект</span>'; mobileNav=false; activeTab = 'tab1'" class="border-b border-black py-2 cursor-pointer"><strong>Технический</strong> дизайн-проект</li>
                            <li @click="activeNavTitle='<span><strong>Оптимальный</strong> дизайн-проект</span>'; mobileNav=false; activeTab = 'tab2'" class="border-b border-black py-2 cursor-pointer"><strong>Оптимальный</strong> дизайн-проект</li>
                            <li @click="activeNavTitle='<span><strong>Полный</strong> дизайн-проект</span>'; mobileNav=false; activeTab = 'tab3'" class="border-b border-black py-2 cursor-pointer"><strong>Полный</strong> дизайн-проект</li>
                            <li @click="activeNavTitle='<span><strong>Авторский</strong> дизайн-проект</span>'; mobileNav=false; activeTab = 'tab4'" class="py-2 cursor-pointer"><strong>Авторский</strong> дизайн-проект</li>
                        </ul>
                    </div>

                </div>
                <!-- End:Mobile nav -->
                <!-- Nav -->
                <div class="flex flex-col gap-4 w-full max-w-[16.25rem] p-5 rounded-lg bg-[#3C302A] md:hidden">

                    <button x-on:click="activeTab = 'tab1'" :class="{ 'active': activeTab === 'tab1' }" class="btn-tab active">
                        <strong class="duration-0">Технический</strong> <br> дизайн-проект
                    </button>

                    <button x-on:click="activeTab = 'tab2'" :class="{ 'active': activeTab === 'tab2' }" class="btn-tab">
                        <strong class="duration-0">Оптимальный</strong> <br> дизайн-проект
                    </button>

                    <button x-on:click="activeTab = 'tab3'" :class="{ 'active': activeTab === 'tab3' }" class="btn-tab">
                        <strong class="duration-0">Полный</strong> <br> дизайн-проект
                    </button>

                    <button x-on:click="activeTab = 'tab4'" :class="{ 'active': activeTab === 'tab4' }" class="btn-tab">
                        <strong class="duration-0">Авторский</strong> <br> дизайн-проект
                    </button>


                </div>
                <!-- End: Nav -->

                <!-- Tabs -->
                <div 
                    x-data="{isOpenModal: false}"
                    class="md:mt-5" 
                    x-show="activeTab === 'tab1'"
                    x-transition:enter="transition ease-out duration-5000"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"

                >
                    <div class="flex items-center gap-10 sm:flex-col sm:gap-5">
                        <div 
                            class="lazy rounded-lg bg-cover min-w-[220px] min-h-[220px] sm:min-w-[280px] sm:min-h-[200px]" 
                            data-bg="/_assets/image/price_work/b3_img1.jpeg"
                            x-show="activeTab === 'tab1'"
                        >
                        </div>
                        <div class="">
                            <h4 class="text-accent pb-5 text-2xl font-semibold sm:pb-2">Технический дизайн-проект</h4>
                            <p class="text-medium text-white mb-5 leading-normal">Комплекс рабочей документации, которая включает в себя готовое планировочное решение и полный набор чертежей</p>
                            <p class="text-medium text-white opacity-50 leading-normal">(план демонтажа, монтажа стен, мебели 
                                и оборудования, схема открывания дверей и т.д.)</p>
                        </div>
                    </div>

                    <div class="mt-11 rounded-lg p-8 xl:p-4 border border-border-icon flex gap-5  sm:mt-5 sm:p-2">
                        <div class="flex justify-between items-center gap-5 sm:flex-col">
                            
                            <div class="flex items-center gap-5 bg-blur backdrop-blur-sm rounded-lg border border-[#3D3531] sm:w-full">
                                <div class="">
                                    <!-- Icon -->
                                    <div class="flex justify-center items-center border border-border-icon w-[3.75rem] h-[3.75rem] rounded">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1875 9.375V25H14.0625V28.125H17.1875V31.25H14.0625V34.375H17.1875V40.625H20.3125V34.375H28.125V31.25H20.3125V28.125H29.6875C34.8438 28.125 39.0625 23.9062 39.0625 18.75C39.0625 13.5938 34.8438 9.375 29.6875 9.375H17.1875ZM20.3125 12.5H29.6875C33.1547 12.5 35.9375 15.2828 35.9375 18.75C35.9375 22.2172 33.1547 25 29.6875 25H20.3125V12.5Z" fill="white"/>
                                        </svg>                                                                                    
                                    </div>
                                    <!-- End:Icon -->
                                </div>
                                <div class="text-beige font-semibold text-lg leading-snug pr-5">
                                    <div class="">Стоимость:</div>
                                    <div class="text-accent">от 1 400 руб/м2</div>
                                </div>
                            </div>

                            <div class="">
                                <button 
                                class="btn sm:text-left sm:h-[70px] sm:font-semibold"
                                @click="isModalShow = true; modalTitle = 'Заказать технический дизайн-проект'"

                                ><span>Заказать дизайн-проект<span></button>
                            </div>

                        </div>
                    </div>
                </div>

                <div 
                    x-data="{isOpenModal: false}"
                    class="md:mt-5" 
                    x-show="activeTab === 'tab2'"
                    x-transition:enter="transition ease-out duration-5000"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"
                >
                    <div class="flex items-center gap-10 sm:flex-col sm:gap-5">
                        <div 
                            class="lazy rounded-lg bg-cover min-w-[220px] min-h-[220px]  sm:min-w-[280px] sm:min-h-[200px]" 
                            data-bg="/_assets/image/price_work/b3_img2.jpg"
                        >
                        </div>
                        <div class="">
                            <h4 class="text-accent pb-5 text-2xl font-semibold sm:pb-2">Оптимальный дизайн-проект</h4>
                            <p class="text-medium text-white mb-5 leading-normal">Включает в себя все компоненты технического дизайн-проекта, а также коллажи будущего интерьера. На всех этапах идёт сопровождение проекта и консультации по технической части.</p>
                        </div>
                    </div>

                    <div class=" mt-11 rounded-lg p-8 border border-border-icon flex gap-5 sm:mt-5 sm:p-2">
                        <div class="flex justify-between items-center gap-5 sm:flex-col">
                            
                            <div class="flex items-center gap-5 bg-blur backdrop-blur-sm rounded-lg border border-[#3D3531] sm:w-full">
                                <div class="">
                                    <!-- Icon -->
                                    <div class="flex justify-center items-center border border-border-icon w-[3.75rem] h-[3.75rem] rounded">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1875 9.375V25H14.0625V28.125H17.1875V31.25H14.0625V34.375H17.1875V40.625H20.3125V34.375H28.125V31.25H20.3125V28.125H29.6875C34.8438 28.125 39.0625 23.9062 39.0625 18.75C39.0625 13.5938 34.8438 9.375 29.6875 9.375H17.1875ZM20.3125 12.5H29.6875C33.1547 12.5 35.9375 15.2828 35.9375 18.75C35.9375 22.2172 33.1547 25 29.6875 25H20.3125V12.5Z" fill="white"/>
                                        </svg>                                                                                    
                                    </div>
                                    <!-- End:Icon -->
                                </div>
                                <div class="text-beige font-semibold text-lg leading-snug pr-5">
                                    <div class="">Стоимость:</div>
                                    <div class="text-accent">от 2 000 руб/м2</div>
                                </div>
                            </div>

                            <div class="">
                                <button 
                                class="btn sm:text-left sm:h-[70px] sm:font-semibold"
                                @click="isModalShow = true; modalTitle = 'Заказать оптимальный дизайн-проект'"
                                ><span>Заказать дизайн-проект</span></button>
                            </div>

                        </div>
                    </div>
                </div>

                <div 
                    x-data="{isOpenModal: false}"
                    class="md:mt-5" 
                    x-show="activeTab === 'tab3'"
                    x-transition:enter="transition ease-out duration-5000"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"
                >
                    <div class="flex items-center gap-10 sm:flex-col sm:gap-5">
                        <div 
                        class="lazy rounded-lg bg-cover min-w-[220px] min-h-[220px]  sm:min-w-[280px] sm:min-h-[200px]" 
                        data-bg="/_assets/image/price_work/b3_img3.jpeg"
                        >
                        </div>
                        <div class="">
                            <h4 class="text-accent pb-5 text-2xl font-semibold sm:pb-2">Полный дизайн-проект</h4>
                            <p class="text-medium text-white mb-5 leading-normal">Включает в себя все компоненты оптимального дизайн-проекта, а также полную разверску всех помещений, 3D – визуализацию, 360 панораму каждой комнаты и комплектацию чистовыми материалами.</p>
                        </div>
                    </div>

                    <div class=" mt-11 rounded-lg p-8 border border-border-icon flex gap-5 sm:mt-5 sm:p-2">
                        <div class="flex justify-between items-center gap-5 sm:flex-col">
                            
                            <div class="flex items-center gap-5 bg-blur backdrop-blur-sm rounded-lg border border-[#3D3531] sm:w-full">
                                <div class="">
                                    <!-- Icon -->
                                    <div class="flex justify-center items-center border border-border-icon w-[3.75rem] h-[3.75rem] rounded">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1875 9.375V25H14.0625V28.125H17.1875V31.25H14.0625V34.375H17.1875V40.625H20.3125V34.375H28.125V31.25H20.3125V28.125H29.6875C34.8438 28.125 39.0625 23.9062 39.0625 18.75C39.0625 13.5938 34.8438 9.375 29.6875 9.375H17.1875ZM20.3125 12.5H29.6875C33.1547 12.5 35.9375 15.2828 35.9375 18.75C35.9375 22.2172 33.1547 25 29.6875 25H20.3125V12.5Z" fill="white"/>
                                        </svg>                                                                                    
                                    </div>
                                    <!-- End:Icon -->
                                </div>
                                <div class="text-beige font-semibold text-lg leading-snug pr-5">
                                    <div class="">Стоимость:</div>
                                    <div class="text-accent">от 3 000 руб/м2</div>
                                </div>
                            </div>

                            <div class="">
                                <button 
                                class="btn sm:text-left sm:h-[70px] sm:font-semibold"
                                @click="isModalShow = true; modalTitle = 'Заказать полный дизайн-проект'"
                                ><span>Заказать дизайн-проект</span></button>
                            </div>

                        </div>
                    </div>
    
                </div>

                <div 
                    x-data="{isOpenModal: false}"
                    class="md:mt-5" 
                    x-show="activeTab === 'tab4'"
                    x-transition:enter="transition ease-out duration-5000"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"
                >
                    <div class="flex items-center gap-10 sm:flex-col sm:gap-5">
                        <div 
                        class="lazy rounded-lg bg-cover min-w-[220px] min-h-[220px]  sm:min-w-[280px] sm:min-h-[200px]" 
                        data-bg="/_assets/image/price_work/b3_img4.jpeg"
                        >
                        </div>
                        <div class="">
                            <h4 class="text-accent pb-5 text-2xl font-semibold sm:pb-2">Авторский дизайн-проект</h4>
                            <p class="text-medium text-white mb-5 leading-normal">Включает в себя все компоненты полного дизайн-проекта, а также комплектацию С/У под ключ, комплектацию освещения, комплектацию мебели, комплектацию декором и авторский надзор (3-5 выездов).</p>
                        </div>
                    </div>

                    <div class=" mt-11 rounded-lg p-8 border border-border-icon flex gap-5 sm:mt-5 sm:p-2">
                        <div class="flex justify-between items-center gap-5 sm:flex-col">
                            
                            <div class="flex items-center gap-5 bg-blur backdrop-blur-sm rounded-lg border border-[#3D3531] sm:w-full">
                                <div class="">
                                    <!-- Icon -->
                                    <div class="flex justify-center items-center border border-border-icon w-[3.75rem] h-[3.75rem] rounded">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1875 9.375V25H14.0625V28.125H17.1875V31.25H14.0625V34.375H17.1875V40.625H20.3125V34.375H28.125V31.25H20.3125V28.125H29.6875C34.8438 28.125 39.0625 23.9062 39.0625 18.75C39.0625 13.5938 34.8438 9.375 29.6875 9.375H17.1875ZM20.3125 12.5H29.6875C33.1547 12.5 35.9375 15.2828 35.9375 18.75C35.9375 22.2172 33.1547 25 29.6875 25H20.3125V12.5Z" fill="white"/>
                                        </svg>                                                                                    
                                    </div>
                                    <!-- End:Icon -->
                                </div>
                                <div class="text-beige font-semibold text-lg leading-snug pr-5">
                                    <div class="">Стоимость:</div>
                                    <div class="text-accent">от 4 200 руб/м2</div>
                                </div>
                            </div>

                            <div class="">
                                <button 
                                @click="isModalShow = true; modalTitle = 'Заказать авторский дизайн-проект'"
                                class="btn sm:text-left sm:h-[70px] sm:font-semibold"><span>Заказать дизайн-проект</span></button>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- End: Tabs -->
            </div>
        </div>
    </section>
    <!-- End:Price_work -->
    