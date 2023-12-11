import { Avatar } from '@/components/ui/molecules/avatar/avatar'
import User from '@/assets/user-1.png'
import { cn } from '@/utils/class-name'
export const HeroSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn(
                'flex flex-col items-center gap-8 lg:items-start lg:gap-12 ',
                className,
            )}
        >
            <h1 className="relative inline max-w-2xl text-center text-3xl font-bold leading-relaxed lg:text-left  lg:text-5xl lg:leading-relaxed xl:max-w-4xl ">
                Shopping with coupons, applied automatically!
                <svg
                    className=" absolute right-0 top-0 hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="57"
                    viewBox="0 0 66 57"
                    fill="none"
                    aria-hidden
                >
                    <path
                        d="M30.1072 0.64951C30.1903 1.80411 30.1718 2.96713 30.0518 4.11329C30.0333 4.25656 30.0241 4.39984 29.9964 4.53468C29.9872 4.6021 29.9779 4.66952 29.9687 4.73695C29.9595 4.83808 29.9964 4.57682 29.9687 4.72852C29.9595 4.77066 29.9595 4.82122 29.9502 4.86336C29.9041 5.1499 29.8487 5.43644 29.7933 5.72298C29.6733 6.29607 29.5164 6.86916 29.3317 7.42538C29.2394 7.68664 29.1471 7.9479 29.0455 8.20915C28.9901 8.33557 28.944 8.46198 28.8793 8.5884C28.8701 8.61368 28.8332 8.65583 28.8332 8.68954C28.8332 8.60526 28.8886 8.57998 28.8517 8.63898C28.8147 8.7064 28.787 8.77381 28.7501 8.84123C28.5285 9.2879 28.2608 9.71772 27.9654 10.1222C27.9008 10.215 27.827 10.3077 27.7531 10.4004C27.7162 10.4509 27.67 10.5015 27.6331 10.5521C27.6146 10.5689 27.5961 10.5942 27.5869 10.611C27.6792 10.4594 27.6238 10.5689 27.5961 10.6026C27.43 10.7965 27.2454 10.9903 27.0607 11.1757C26.8761 11.3527 26.6914 11.5212 26.4884 11.6898C26.396 11.7656 26.2945 11.8415 26.193 11.9173C26.1468 11.9511 26.1006 11.9848 26.0545 12.0185C25.9806 12.069 26.1929 11.9173 26.0822 12.0016C26.0452 12.0269 26.0175 12.0438 25.9806 12.069C25.7406 12.2292 25.4913 12.3809 25.2328 12.5157C24.9743 12.6506 24.7067 12.7517 24.4389 12.8781C24.4482 12.8697 24.5959 12.8191 24.4943 12.8528C24.4574 12.8697 24.4205 12.8781 24.3836 12.895C24.3097 12.9202 24.2358 12.9455 24.1528 12.9708C24.0143 13.0129 23.8758 13.0551 23.7281 13.0888C23.4419 13.1646 23.1465 13.2152 22.8511 13.2489C22.6941 13.2658 22.5095 13.4175 22.4357 13.5355C22.3618 13.6619 22.3341 13.7967 22.3526 13.94C22.3987 14.2434 22.6849 14.4878 23.0357 14.4878C23.7096 14.4794 24.3835 14.4794 25.0574 14.5215C25.2144 14.5299 25.3621 14.5468 25.519 14.5636C25.5283 14.5636 25.6944 14.5889 25.5837 14.5721C25.4637 14.5552 25.6298 14.5805 25.6483 14.5805C25.7313 14.5889 25.8144 14.6058 25.8975 14.6226C26.2299 14.6816 26.553 14.7575 26.8669 14.8502C26.9222 14.867 26.9869 14.8923 27.0423 14.9092C27.0699 14.9176 27.1069 14.9345 27.1346 14.9429C27.19 14.9597 27.2454 15.0103 27.0976 14.926C27.2084 14.9935 27.3469 15.0272 27.4669 15.0862C27.6977 15.1957 27.9193 15.3137 28.1224 15.4486C28.1778 15.4823 28.2331 15.516 28.2885 15.5581C28.307 15.575 28.3347 15.5918 28.3532 15.6003C28.4455 15.6592 28.3162 15.575 28.307 15.5665C28.3993 15.6508 28.5193 15.7267 28.6209 15.8025C28.824 15.9711 29.0178 16.1396 29.2024 16.325C29.2855 16.4093 29.3686 16.4936 29.4425 16.5779C29.4794 16.62 29.5164 16.6621 29.5625 16.7127C29.6179 16.7801 29.461 16.5863 29.544 16.6874C29.5717 16.7211 29.5902 16.7464 29.6179 16.7801C29.7748 16.974 29.9133 17.1762 30.0518 17.3785C30.1903 17.5892 30.3195 17.8083 30.4395 18.0274C30.4949 18.137 30.5503 18.2465 30.6057 18.3561C30.6149 18.3814 30.6241 18.4067 30.6426 18.4235C30.5687 18.2634 30.6149 18.3561 30.6334 18.3982C30.6611 18.4657 30.6888 18.5247 30.7165 18.5921C30.9288 19.0977 31.0857 19.6118 31.2057 20.1344C31.2427 20.286 31.2704 20.4293 31.2981 20.581C31.3073 20.64 31.3165 20.7074 31.335 20.7664C31.3442 20.817 31.3535 20.8591 31.3535 20.9097C31.3535 20.8844 31.3442 20.8591 31.3442 20.8339C31.3442 20.8676 31.3535 20.8928 31.3535 20.9266C31.3904 21.23 31.4273 21.5249 31.4458 21.8283C31.5473 23.2189 31.455 24.6179 31.3535 26C31.335 26.3119 31.6304 26.5815 31.9535 26.6237C32.2951 26.6658 32.6089 26.472 32.7105 26.1686C33.4398 24.0532 33.5321 21.8199 34.0768 19.6708C34.1968 19.1904 34.3353 18.7101 34.5199 18.2381C34.5568 18.137 34.603 18.0359 34.6399 17.9431C34.6584 17.8926 34.6953 17.842 34.7138 17.783C34.7138 17.7915 34.6491 17.9263 34.6953 17.8336C34.7045 17.8083 34.723 17.7746 34.7323 17.7493C34.8338 17.5471 34.9353 17.3532 35.0461 17.1594C35.2677 16.7717 35.5261 16.4009 35.8123 16.0554C35.8308 16.0385 35.8493 16.0132 35.8585 15.9964C35.7662 16.1228 35.7939 16.0722 35.8216 16.0385C35.8585 15.9964 35.8954 15.9542 35.9324 15.9121C36.0062 15.8278 36.0893 15.7435 36.1724 15.6592C36.3293 15.4991 36.4955 15.3474 36.6617 15.2126C36.7632 15.1283 36.8555 15.0525 36.9663 14.9766C36.9847 14.9597 37.0032 14.9513 37.0309 14.9345C36.8648 15.0525 36.9847 14.9682 37.0124 14.9429C37.0678 14.9092 37.114 14.8755 37.1694 14.8418C37.3725 14.7153 37.5848 14.5974 37.8064 14.4962C37.8618 14.4709 37.9264 14.4457 37.9818 14.4204C38.0095 14.4119 38.028 14.4035 38.0556 14.3951C38.1849 14.3445 37.9172 14.4457 38.0372 14.4035C38.1572 14.3614 38.2772 14.3192 38.4064 14.2855C38.5357 14.2518 38.6557 14.2181 38.7849 14.1928C38.8403 14.1844 38.9049 14.1675 38.9603 14.1591C39.0157 14.1507 39.2742 14.117 39.0342 14.1423C39.2188 14.117 39.3942 14.0917 39.5235 13.9569C39.625 13.8557 39.6897 13.7377 39.7173 13.5945C39.7635 13.3079 39.5604 12.9624 39.2188 12.9034C38.9511 12.8528 38.6834 12.7938 38.4157 12.718C38.2957 12.6843 38.1849 12.6421 38.0648 12.6084C38.0002 12.5831 37.9356 12.5578 37.871 12.541C38.0833 12.6168 37.8433 12.5241 37.7879 12.5073C37.2986 12.2966 36.8278 12.0438 36.3939 11.7488C36.3755 11.7319 36.3478 11.7151 36.3293 11.7066C36.237 11.6392 36.3662 11.7319 36.3755 11.7404C36.3293 11.6982 36.2647 11.6645 36.2093 11.6224C36.0985 11.5381 35.997 11.4623 35.8954 11.378C35.6923 11.2094 35.4892 11.0324 35.3046 10.8386C35.12 10.6532 34.9446 10.4678 34.7692 10.2739C34.7507 10.2487 34.7322 10.2234 34.7045 10.1981C34.7138 10.2065 34.8061 10.3161 34.7323 10.2318C34.6861 10.1812 34.6491 10.1307 34.603 10.0801C34.5199 9.97898 34.4368 9.86941 34.363 9.76828C34.0583 9.35532 33.7906 8.91709 33.5506 8.47042C33.4952 8.36086 33.4398 8.25972 33.3844 8.15016C33.366 8.12488 33.3567 8.09117 33.3475 8.06589C33.3013 7.97318 33.3659 8.0996 33.3659 8.10803C33.3382 8.03218 33.3013 7.96475 33.2736 7.89733C33.1721 7.66979 33.0797 7.43381 32.9874 7.19783C32.5997 6.16122 32.3135 5.09091 32.0827 4.01217C31.9535 3.4138 31.8335 2.807 31.732 2.20021C31.6858 1.91367 31.6396 1.63556 31.5935 1.34901C31.575 1.20574 31.5473 1.0709 31.5288 0.927628C31.5196 0.877062 31.4827 0.641084 31.5196 0.851777C31.5104 0.775928 31.5012 0.708508 31.4919 0.632659C31.4642 0.455677 31.4273 0.312402 31.2888 0.185986C31.1688 0.0764263 30.975 -0.00784657 30.7996 0.000581136C30.6242 0.00900884 30.4303 0.0595709 30.3102 0.185986C30.1902 0.32083 30.0795 0.489384 30.1072 0.64951C30.4303 2.866 30.7996 5.10776 31.5473 7.23997C32.2674 9.27104 33.4398 11.2094 35.2769 12.5663C36.3201 13.3332 37.5202 13.9231 38.8403 14.1507C38.905 13.7377 38.9604 13.3248 39.025 12.9118C38.4526 12.9792 37.9264 13.1141 37.3909 13.3248C36.9201 13.5102 36.4862 13.763 36.08 14.058C35.2861 14.6226 34.6307 15.3559 34.1137 16.1396C33.569 16.9571 33.1721 17.8589 32.9044 18.7859C32.5812 19.8815 32.3966 21.0108 32.212 22.1317C32.0089 23.3959 31.7965 24.66 31.3719 25.882C31.8242 25.941 32.2766 25.9916 32.729 26.0506C32.9044 23.556 33.0613 20.9434 32.1381 18.5415C31.3719 16.5357 29.8671 14.6563 27.6792 13.8136C26.2114 13.2489 24.6051 13.2321 23.0357 13.2489C23.1003 13.6619 23.1557 14.0748 23.2204 14.4878C25.5467 14.1928 27.5315 12.8191 28.8886 11.1336C30.3933 9.26262 31.0488 6.9113 31.3627 4.63582C31.5473 3.31267 31.5842 1.98108 31.4827 0.657936C31.455 0.329255 31.178 0.00900266 30.7903 0.0258581C30.4395 0.0342858 30.0795 0.295547 30.1072 0.64951Z"
                        fill="#231F20"
                    />
                    <path
                        d="M4.47072 17.783C4.62766 18.4151 4.76614 19.0556 4.88615 19.6961C4.95077 20.0079 5.00619 20.3198 5.05235 20.6316C5.08004 20.7917 5.10772 20.9434 5.12618 21.1035C5.13541 21.171 5.14463 21.2468 5.15386 21.3142C5.17232 21.4322 5.15386 21.3227 5.15386 21.3058C5.16309 21.3564 5.17234 21.4069 5.17234 21.4659C5.35697 22.7385 5.46773 24.0111 5.52312 25.2921C5.55082 25.8399 5.55086 26.3793 5.51393 26.9271C5.5047 27.0535 5.49543 27.1799 5.47697 27.3063C5.46773 27.3738 5.45852 27.4412 5.44929 27.5086C5.44006 27.576 5.46775 27.6266 5.44929 27.4917C5.45852 27.5339 5.43081 27.5844 5.43081 27.6266C5.38465 27.8878 5.32926 28.1407 5.24617 28.3935C5.20925 28.5199 5.1631 28.6379 5.11694 28.7643C5.09848 28.8149 5.06158 28.8739 5.05235 28.9244C5.08927 28.798 5.08925 28.857 5.07078 28.8907C5.05232 28.9329 5.03385 28.9666 5.01538 29.0087C4.88614 29.2531 4.73844 29.4807 4.56304 29.6998C4.51688 29.7504 4.47997 29.8093 4.43381 29.8599C4.44304 29.8431 4.52614 29.7504 4.45229 29.8346C4.43383 29.8599 4.41534 29.8852 4.38765 29.9021C4.29533 30.0116 4.19377 30.1212 4.09222 30.2307C3.89835 30.433 3.68605 30.6353 3.47372 30.8291C3.24293 31.0398 3.00288 31.2336 2.75363 31.4275C2.62438 31.5286 2.49516 31.6297 2.35668 31.7224C2.32899 31.7477 2.29206 31.773 2.26437 31.7899C2.2459 31.7983 2.13512 31.8826 2.21821 31.8236C2.31052 31.7646 2.18128 31.8489 2.17205 31.8573C2.13512 31.8826 2.08898 31.9079 2.05206 31.9416C1.49816 32.3124 0.925794 32.6579 0.3442 32.9866C0.0949447 33.1299 -0.0712612 33.4333 0.030287 33.7029C0.122604 33.9558 0.39034 34.1833 0.694985 34.1665C1.27658 34.1328 1.85817 34.1075 2.449 34.1328C2.83673 34.1496 3.22446 34.1833 3.60296 34.2255C3.81529 34.2423 4.01836 34.2592 4.23069 34.276C4.29531 34.276 4.35994 34.2845 4.42457 34.2929C4.44303 34.2929 4.45226 34.2929 4.47072 34.3013C4.54458 34.3097 4.52611 34.3097 4.41533 34.2929C4.43379 34.3013 4.47998 34.3013 4.49845 34.3013C4.64615 34.3266 4.79384 34.3519 4.94155 34.394C5.07079 34.4277 5.20004 34.4699 5.32006 34.512C5.35698 34.5204 5.38469 34.5373 5.42161 34.5457C5.51393 34.5794 5.25542 34.4783 5.39389 34.5373C5.46774 34.571 5.53239 34.5963 5.60625 34.63C5.86473 34.748 6.10475 34.8828 6.33554 35.0345C6.36323 35.0514 6.39092 35.0767 6.41861 35.0935C6.52016 35.1609 6.39093 35.0767 6.3817 35.0682C6.40939 35.1104 6.51092 35.1609 6.54785 35.1947C6.66786 35.2874 6.77866 35.3801 6.88944 35.4728C7.10177 35.6582 7.3141 35.8604 7.49874 36.0627C7.59105 36.1638 7.68336 36.265 7.76645 36.3661C7.67413 36.2481 7.86799 36.4841 7.76645 36.3661C7.78491 36.3914 7.80338 36.4082 7.82184 36.4335C7.87723 36.5009 7.9326 36.5684 7.97875 36.6358C8.15416 36.8633 8.32032 37.0909 8.47726 37.3269C8.81883 37.8409 9.13272 38.3803 9.4189 38.9197C9.57584 39.2147 9.73278 39.5181 9.88049 39.813C9.91741 39.8805 9.94512 39.9479 9.98204 40.0153C10.0005 40.049 10.019 40.0912 10.0374 40.1249C10.0836 40.2344 10.0374 40.1333 10.0282 40.108C10.1113 40.2766 10.1759 40.4451 10.2498 40.6137C10.8498 41.9958 11.3114 43.4201 11.6345 44.8781C11.6991 45.1899 12.0776 45.3669 12.3915 45.3332C12.7608 45.291 12.9546 45.0298 12.9916 44.7095C13.3147 42.1728 12.613 39.6529 12.7792 37.1077C12.7885 36.9055 12.8162 36.7032 12.8346 36.5094C12.8438 36.4588 12.8531 36.4082 12.8531 36.3577C12.8623 36.2734 12.8254 36.5347 12.8439 36.4082C12.8439 36.383 12.8531 36.3661 12.8531 36.3408C12.8716 36.2313 12.89 36.1217 12.9085 36.0121C12.9915 35.5823 13.1023 35.1525 13.2316 34.7396C13.3054 34.5204 13.3793 34.3013 13.4624 34.0822C13.4993 33.9811 13.5362 33.8884 13.5824 33.7957C13.6009 33.7451 13.6285 33.6945 13.647 33.644C13.6931 33.5513 13.6285 33.6861 13.6193 33.6945C13.6378 33.6608 13.647 33.6271 13.6655 33.5934C13.8593 33.1973 14.0809 32.8096 14.3486 32.4472C14.4132 32.3545 14.4871 32.2618 14.561 32.1691C14.5702 32.1523 14.6532 32.0596 14.5702 32.1523C14.4963 32.245 14.5794 32.1438 14.5979 32.127C14.6348 32.0848 14.6717 32.0427 14.7179 32.0006C14.8748 31.832 15.0502 31.6719 15.2348 31.5286C15.281 31.4865 15.3364 31.4528 15.3826 31.419C15.4472 31.3685 15.2533 31.5033 15.3272 31.4612C15.3549 31.4443 15.3825 31.4275 15.4102 31.4022C15.5118 31.3432 15.6041 31.2842 15.7149 31.2252C15.8165 31.1746 15.918 31.1241 16.0195 31.0819C16.038 31.0735 16.1488 31.0314 16.0288 31.0735C15.918 31.1156 16.0103 31.0819 16.038 31.0735C16.1026 31.0482 16.1672 31.0314 16.2318 31.0145C16.5088 30.9302 16.7581 30.6858 16.7396 30.4077C16.7211 30.1212 16.5365 29.8936 16.2318 29.8009C15.0502 29.4385 13.8132 29.2868 12.6223 28.9413C12.4838 28.8992 12.3454 28.857 12.2069 28.8065C12.1792 28.798 12.1515 28.7896 12.1238 28.7812C12.1053 28.7727 11.9853 28.7137 12.0868 28.7643C12.1884 28.8149 12.0684 28.7559 12.0499 28.7475C12.013 28.7306 11.9669 28.7138 11.9299 28.6969C11.6622 28.5873 11.4129 28.4525 11.1729 28.3008C11.136 28.2755 11.099 28.2502 11.0621 28.2334C10.979 28.1828 11.0806 28.2587 11.0991 28.2587C11.0714 28.2671 10.9513 28.1491 10.9236 28.1238C10.8036 28.0227 10.6836 27.9216 10.5729 27.812C10.4805 27.7193 10.3882 27.6182 10.2959 27.517C10.2498 27.4665 10.2036 27.4159 10.1574 27.3653C10.2774 27.4917 10.2036 27.4159 10.1759 27.3822C10.1482 27.3485 10.1205 27.3063 10.0836 27.2726C9.75126 26.8597 9.47428 26.4214 9.22503 25.9663C9.16041 25.8483 9.10503 25.7388 9.04964 25.6208C9.02194 25.5702 8.99426 25.5197 8.9758 25.4607C8.95734 25.4354 8.94811 25.4017 8.92964 25.3764C8.87425 25.2584 8.98503 25.4944 8.92964 25.3848C8.81886 25.1404 8.71728 24.8876 8.61573 24.6432C8.20031 23.5981 7.87721 22.5194 7.51717 21.4575C7.01866 20.0248 6.43708 18.6174 5.68008 17.2858C5.51391 16.9908 5.03388 16.8813 4.72924 17.0582C4.3969 17.2521 4.30456 17.606 4.47997 17.9263C4.6646 18.2465 4.84002 18.5752 5.00619 18.9039C5.08004 19.0556 5.16312 19.2073 5.22774 19.359C5.21851 19.3421 5.17234 19.2326 5.2185 19.3422C5.23696 19.3759 5.25543 19.418 5.2739 19.4517C5.31082 19.536 5.34772 19.6203 5.38465 19.6961C5.64314 20.286 5.87394 20.8844 6.08627 21.4912C6.47399 22.5784 6.80635 23.6824 7.21255 24.7612C7.60028 25.7893 8.0711 26.8091 8.74501 27.7109C9.10504 28.1912 9.51121 28.68 10.0097 29.0509C10.5452 29.4638 11.136 29.7588 11.7915 29.9863C13.1024 30.4499 14.524 30.5847 15.8534 30.9892C15.8534 30.5847 15.8534 30.1802 15.8534 29.7672C13.8409 30.3572 12.6869 32.186 12.0499 33.9052C11.7176 34.7901 11.5145 35.7172 11.413 36.6442C11.2837 37.8409 11.376 39.0545 11.4868 40.2513C11.616 41.7261 11.773 43.201 11.5883 44.6758C12.0407 44.6168 12.4931 44.5663 12.9454 44.5073C12.65 43.1841 12.2346 41.8778 11.7176 40.6137C11.1914 39.3411 10.5729 38.0854 9.82509 36.9055C9.1881 35.911 8.42189 34.9418 7.44334 34.2086C6.9079 33.8125 6.35397 33.4923 5.70776 33.2647C5.1354 33.054 4.53536 32.995 3.92607 32.9445C3.48295 32.9107 3.04908 32.8602 2.60596 32.8349C1.95051 32.8012 1.30427 32.8265 0.648826 32.8602C0.768838 33.2563 0.8796 33.644 0.999611 34.0401C2.08895 33.4248 3.1506 32.7506 4.10146 31.95C5.04309 31.1494 5.92012 30.2307 6.39094 29.1267C6.84329 28.0648 6.91713 26.8765 6.88944 25.7388C6.86174 24.4493 6.75094 23.1599 6.58477 21.8873C6.3909 20.3872 6.11395 18.8871 5.75392 17.4122C5.67083 17.092 5.2462 16.8728 4.90463 16.974C4.58152 17.1172 4.37841 17.4375 4.47072 17.783Z"
                        fill="#231F20"
                    />
                    <path
                        d="M40.7881 34.7564C40.9173 35.2199 41.0189 35.6835 41.0927 36.1638C41.0835 36.1048 41.0743 36.0543 41.065 35.9953C41.2035 36.9308 41.222 37.8915 41.0835 38.827C41.0927 38.768 41.102 38.7174 41.1112 38.6584C41.0004 39.4169 40.7881 40.1586 40.465 40.8581C40.4927 40.8075 40.5112 40.7569 40.5388 40.7064C40.3819 41.0435 40.2065 41.3722 39.9942 41.684C39.8926 41.8441 39.7726 42.0042 39.6526 42.1559C39.5972 42.2234 39.5418 42.2908 39.4864 42.3582C39.6342 42.1812 39.5141 42.3245 39.4772 42.3666C39.4403 42.4088 39.4033 42.4509 39.3664 42.4846C39.1079 42.7712 38.8125 43.0324 38.5079 43.2768C38.434 43.3358 38.3509 43.3948 38.2771 43.4538C38.2309 43.4875 38.074 43.5971 38.2678 43.4622C38.2217 43.4875 38.1848 43.5212 38.1386 43.5549C37.9632 43.6729 37.7786 43.7825 37.594 43.892C37.2432 44.0859 36.8923 44.2544 36.5138 44.3977C36.5692 44.3724 36.6246 44.3556 36.68 44.3303C36.4123 44.4314 36.1446 44.5325 35.8769 44.6421C35.6922 44.7179 35.5168 44.7854 35.3784 44.9118C35.0645 45.1815 35.1198 45.645 35.443 45.8725C35.6091 45.9905 35.8307 46.0242 36.0246 46.0748C36.3569 46.1675 36.6892 46.2771 37.0123 46.4035C36.9569 46.3782 36.9016 46.3613 36.8462 46.3361C37.7232 46.6816 38.5725 47.1114 39.3295 47.6339C39.348 47.6508 39.3664 47.6592 39.3849 47.6761C39.228 47.5665 39.2926 47.6171 39.3295 47.6339C39.3756 47.6676 39.4126 47.6929 39.4587 47.7266C39.5418 47.7856 39.6249 47.8531 39.6988 47.9121C39.8372 48.03 39.9757 48.148 40.1049 48.2829C40.1696 48.3419 40.225 48.4093 40.2896 48.4767C40.3173 48.5104 40.345 48.5441 40.3726 48.5778C40.4003 48.6115 40.4465 48.6705 40.3173 48.5188C40.3358 48.5441 40.3542 48.561 40.3726 48.5863C40.4834 48.7211 40.5942 48.8644 40.6866 49.0161C40.9266 49.3616 41.1204 49.7324 41.3051 50.1117C41.2774 50.0611 41.2589 50.0105 41.2312 49.96C41.8959 51.4095 42.2005 52.9687 42.4959 54.5109C42.5698 54.9239 42.6529 55.3369 42.736 55.7498C42.7637 55.8931 42.9206 56.0616 43.0498 56.1291C43.1883 56.1965 43.336 56.2218 43.493 56.2049C43.8345 56.1628 44.0838 55.9015 44.093 55.5813C44.1207 54.8818 44.1484 54.1823 44.1761 53.4743C44.2038 52.8001 44.2038 52.1175 44.3053 51.4433C44.2961 51.5022 44.2869 51.5528 44.2777 51.6118C44.37 51.0303 44.5084 50.4488 44.6746 49.8841C44.7577 49.606 44.85 49.3279 44.9423 49.0498C45.0254 48.8222 45.0993 48.5863 45.2008 48.3587C45.1731 48.4093 45.1546 48.4599 45.127 48.5104C45.2562 48.2407 45.4224 47.9879 45.6163 47.7519C45.644 47.7182 45.6716 47.6845 45.6993 47.6424C45.764 47.5665 45.5793 47.7772 45.6809 47.6592C45.7455 47.5834 45.8101 47.5159 45.8747 47.4401C45.9947 47.3053 46.124 47.1788 46.2532 47.0524C46.5302 46.7912 46.8256 46.5383 47.1302 46.2939C47.2041 46.2349 47.2779 46.1844 47.3518 46.1254C47.3887 46.1001 47.4257 46.0748 47.4626 46.0411C47.4811 46.0242 47.4995 46.0074 47.5272 45.999C47.4995 46.0158 47.3887 46.1001 47.4718 46.0327C47.6195 45.9315 47.7765 45.8304 47.9242 45.7293C48.2288 45.5439 48.5427 45.3669 48.8843 45.2405C48.8289 45.2657 48.7735 45.2826 48.7181 45.3079C48.7458 45.2995 48.7735 45.291 48.8012 45.2742C48.9674 45.2152 49.1243 45.1309 49.2166 44.9876C49.2905 44.8612 49.3181 44.7264 49.2997 44.5831C49.2535 44.2713 48.9674 44.0353 48.6165 44.0353C48.4596 44.0353 48.3027 44.0269 48.155 44.01C48.2196 44.0185 48.275 44.0269 48.3396 44.0353C48.035 43.9932 47.7303 43.9173 47.4441 43.8078C47.4995 43.833 47.5549 43.8499 47.6103 43.8752C47.4349 43.8078 47.2687 43.7319 47.1118 43.6392C47.0287 43.5971 46.9549 43.5465 46.8718 43.5044C46.8348 43.4791 46.7887 43.4538 46.7517 43.4285C46.7333 43.4201 46.7148 43.4032 46.6963 43.3948C46.6871 43.3864 46.6779 43.3779 46.6687 43.3779C46.604 43.3274 46.761 43.4454 46.7517 43.4369C46.4379 43.201 46.1424 42.9481 45.8655 42.67C45.8009 42.5942 45.727 42.5267 45.6624 42.4509C45.6347 42.4172 45.5978 42.375 45.5701 42.3413C45.4962 42.2571 45.644 42.4256 45.6163 42.3919C45.5978 42.3666 45.5793 42.3498 45.5609 42.3245C45.4224 42.1644 45.3024 41.9958 45.1731 41.8272C44.9146 41.4733 44.6839 41.1025 44.4715 40.7232C44.2223 40.285 43.9915 39.8299 43.7792 39.3748C43.8069 39.4254 43.8253 39.4759 43.853 39.5265C43.2345 38.1865 42.7544 36.7875 42.3575 35.3716C42.2651 35.0429 42.1821 34.7227 42.099 34.394C42.0159 34.0738 41.5912 33.8546 41.2497 33.9558C40.8989 34.0906 40.6958 34.4109 40.7881 34.7564C40.9819 35.5233 41.1943 36.2903 41.4435 37.0487C41.7297 37.9337 42.0621 38.8186 42.4406 39.6782C42.8468 40.5799 43.2991 41.4733 43.8715 42.2992C44.3792 43.0408 44.9885 43.7656 45.7363 44.3134C46.0963 44.5747 46.4748 44.8191 46.8995 44.9876C47.3703 45.173 47.8319 45.291 48.3488 45.3332C48.4504 45.3416 48.5519 45.3416 48.6442 45.3416C48.5796 44.9286 48.5242 44.5157 48.4596 44.1027C47.7026 44.3724 47.0471 44.7938 46.4194 45.2573C45.7916 45.7208 45.2008 46.2434 44.7023 46.8249C44.4531 47.1114 44.2223 47.398 44.0376 47.7266C43.8253 48.1143 43.6869 48.5357 43.5484 48.9487C43.216 49.9515 42.9483 50.9713 42.8652 52.0163C42.819 52.6063 42.8098 53.2046 42.7914 53.7946C42.7729 54.4014 42.7452 54.9997 42.7267 55.6065C43.1791 55.5475 43.6314 55.497 44.0838 55.438C43.7515 53.7609 43.5022 52.0585 42.9114 50.4404C42.6067 49.6229 42.2282 48.8054 41.6743 48.0975C41.3974 47.7351 41.0835 47.398 40.7327 47.0946C40.3265 46.7575 39.8741 46.4541 39.4126 46.1844C38.9048 45.881 38.3694 45.6113 37.8155 45.3837C37.5016 45.2489 37.1785 45.1309 36.8462 45.0213C36.5785 44.9371 36.3107 44.8697 36.043 44.7938C36.0984 44.8191 36.1538 44.8359 36.2092 44.8612C36.2923 44.9371 36.3661 45.0045 36.4492 45.0803C36.4769 45.1309 36.4954 45.1815 36.5231 45.232C36.5323 45.291 36.5415 45.3416 36.5508 45.4006C36.5415 45.4596 36.5323 45.5102 36.5231 45.5691C36.4954 45.6197 36.4769 45.6703 36.4492 45.7208C36.3938 45.7967 36.32 45.8894 36.2369 45.9231C36.2553 45.9147 36.2646 45.9063 36.283 45.8978C36.3292 45.8725 36.3754 45.8557 36.4215 45.8304C36.5508 45.7714 36.6892 45.7208 36.8277 45.6703C36.7723 45.6956 36.7169 45.7124 36.6615 45.7377C37.04 45.5944 37.4278 45.4512 37.797 45.2742C38.2217 45.0719 38.6186 44.8359 38.9971 44.5747C39.8003 44.01 40.4927 43.3442 41.0373 42.5689C42.0898 41.094 42.5513 39.3074 42.5606 37.5628C42.5606 36.5178 42.4036 35.4643 42.1267 34.453C42.0343 34.1328 41.6282 33.9052 41.2774 34.0148C40.9081 34.0906 40.6865 34.4109 40.7881 34.7564Z"
                        fill="#231F20"
                    />
                    <path
                        d="M50.14 12.3977C50.2139 12.7096 50.2785 13.0214 50.3339 13.3332C50.3616 13.4849 50.3893 13.645 50.417 13.8052C50.4262 13.8557 50.4723 14.0917 50.4354 13.9063C50.4539 13.999 50.4631 14.0917 50.4724 14.176C50.5554 14.8165 50.6201 15.4654 50.657 16.1144C50.7308 17.4206 50.7216 18.7354 50.62 20.0332C50.5923 20.3535 50.5646 20.6737 50.5369 21.0024C50.5185 21.1457 50.5093 21.2974 50.4908 21.4407C50.4816 21.5081 50.4723 21.5755 50.4631 21.6513C50.4631 21.6851 50.4539 21.7188 50.4539 21.7441C50.4446 21.7946 50.4539 21.7693 50.4631 21.6682C50.4631 21.6935 50.4539 21.7188 50.4539 21.7441C50.3708 22.2834 50.2415 22.8144 50.0846 23.3369C50.0015 23.5981 49.9092 23.8594 49.8077 24.1122C49.7523 24.2387 49.7061 24.3651 49.6507 24.4915C49.6415 24.5252 49.623 24.5505 49.6138 24.5842C49.6692 24.4241 49.6415 24.5168 49.623 24.5589C49.5861 24.6263 49.5584 24.7022 49.5215 24.7696C49.2722 25.2668 48.986 25.7388 48.6445 26.1939C48.5521 26.3203 48.4506 26.4467 48.3491 26.5647C48.3214 26.5984 48.266 26.6405 48.3767 26.531C48.3491 26.5647 48.3121 26.5984 48.2844 26.6321C48.229 26.6911 48.1829 26.7501 48.1275 26.8091C47.9151 27.0367 47.6936 27.2473 47.4536 27.458C47.3336 27.5592 47.2136 27.6603 47.0843 27.7614C47.0197 27.812 46.9458 27.8541 46.8904 27.9047C47.0105 27.7951 46.9643 27.8541 46.9182 27.8878C46.8812 27.9131 46.8443 27.9384 46.7981 27.9637C46.5304 28.1407 46.2443 28.3092 45.9488 28.4525C45.6904 28.5789 45.5426 28.9076 45.6349 29.1689C45.6719 29.27 45.7273 29.3711 45.8104 29.447C45.9119 29.5481 46.1427 29.6492 46.2996 29.6324C46.9181 29.565 47.5367 29.5313 48.1552 29.5481C48.4598 29.5565 48.7552 29.5734 49.0599 29.5987C49.1337 29.6071 49.2168 29.6155 49.2907 29.624C49.3461 29.6324 49.623 29.6661 49.383 29.6324C49.5399 29.6577 49.6969 29.6745 49.8538 29.6998C50.4539 29.7925 51.0539 29.9274 51.6355 30.0959C51.9309 30.1802 52.2263 30.2729 52.5125 30.3825C52.5771 30.4077 52.6325 30.4246 52.6971 30.4499C52.7341 30.4667 52.771 30.4752 52.8079 30.492C52.6141 30.4246 52.7433 30.4667 52.7895 30.4836C52.9372 30.5426 53.0757 30.6016 53.2234 30.6606C53.7865 30.905 54.3312 31.1747 54.8481 31.4781C55.1066 31.6298 55.3559 31.7815 55.5959 31.95C55.6605 31.9921 55.7251 32.0343 55.7898 32.0764C55.8174 32.1017 55.8544 32.1186 55.8821 32.1438C55.7344 32.0427 55.799 32.0849 55.8359 32.1101C55.9744 32.2113 56.1037 32.304 56.2329 32.4051C56.6945 32.7591 57.1376 33.1467 57.5438 33.5513C57.7561 33.762 57.9592 33.9811 58.1623 34.2086C58.1992 34.2592 58.2454 34.3013 58.2823 34.3519C58.1346 34.1918 58.31 34.3856 58.3377 34.4277C58.43 34.5457 58.5223 34.6637 58.6146 34.7817C59.0024 35.2958 59.3532 35.8352 59.6486 36.3914C59.7225 36.5347 59.7963 36.6779 59.8609 36.8128C59.9163 36.9308 59.7963 36.6695 59.8517 36.7959C59.8701 36.8381 59.8886 36.8886 59.9071 36.9308C59.9348 36.9982 59.9625 37.0656 59.9902 37.133C60.1194 37.4364 60.2302 37.7483 60.3225 38.0601C60.4241 38.3803 60.821 38.6079 61.1718 38.4983C61.338 38.4478 61.5042 38.3551 61.5873 38.2118C61.6796 38.0517 61.6888 37.9 61.6611 37.723C61.6611 37.7146 61.6334 37.5544 61.6519 37.6556C61.6703 37.7567 61.6427 37.605 61.6427 37.5966C61.6334 37.5376 61.6242 37.4786 61.6149 37.4196C61.5965 37.2847 61.578 37.1499 61.5688 37.0151C61.5503 36.8044 61.5319 36.5937 61.5226 36.383C61.5134 36.0543 61.5226 35.7172 61.5134 35.3885C61.5134 34.9755 61.4857 34.571 61.4395 34.1581C61.4026 33.8462 61.3565 33.5344 61.3103 33.2226C61.2826 33.0372 61.2549 32.8518 61.2272 32.6579C61.218 32.6242 61.218 32.5905 61.2088 32.5568C61.1811 32.3967 61.2272 32.6579 61.2088 32.5568C61.1995 32.4641 61.1811 32.3798 61.1718 32.2871C61.0888 31.6887 61.0149 31.082 60.9964 30.4752C60.9872 30.1633 60.9872 29.8599 61.0149 29.5481C61.0241 29.4048 61.0333 29.2531 61.061 29.1099C61.0241 29.2868 61.0795 29.0256 61.0795 28.9919C61.098 28.9076 61.1072 28.8318 61.1257 28.7475C61.1811 28.4862 61.2642 28.2334 61.3565 27.989C61.3934 27.8794 61.4395 27.7699 61.4857 27.6603C61.5042 27.6097 61.5226 27.5592 61.5503 27.517C61.5596 27.4833 61.578 27.458 61.5873 27.4243C61.6519 27.2895 61.5596 27.4918 61.5873 27.4328C61.8088 26.9861 62.0581 26.5563 62.3535 26.1517C62.4366 26.0422 62.5566 25.9242 62.6304 25.8062C62.6212 25.8146 62.5289 25.9242 62.6027 25.8399C62.6304 25.8062 62.6581 25.7809 62.6858 25.7472C62.732 25.6967 62.7781 25.6461 62.8243 25.5955C63.0182 25.3933 63.2213 25.1994 63.4428 25.014C63.5536 24.9213 63.6736 24.8286 63.7936 24.7359C63.8859 24.6685 63.7659 24.7612 63.7567 24.7612C63.7936 24.7443 63.8213 24.7106 63.8583 24.6938C63.9229 24.6516 63.9875 24.6095 64.0429 24.5673C64.2921 24.4072 64.5506 24.2724 64.8276 24.146C65.0861 24.028 65.2338 23.6824 65.1415 23.4296C65.0399 23.1515 64.7906 22.9829 64.4768 22.9661C64.1536 22.9492 63.8305 22.9239 63.5074 22.8902C63.4336 22.8818 63.3597 22.8734 63.2859 22.8649C63.249 22.8649 63.212 22.8481 63.1751 22.8481C63.3597 22.8397 63.2397 22.8565 63.1843 22.8481C63.0182 22.8228 62.852 22.8059 62.6951 22.7807C62.0673 22.6795 61.4488 22.5531 60.8487 22.393C60.5441 22.3087 60.2487 22.2244 59.9532 22.1233C59.8148 22.0727 59.6763 22.0306 59.5286 21.98C59.5101 21.9716 59.3163 21.9042 59.3163 21.9042C59.344 21.9126 59.3716 21.9295 59.3993 21.9379C59.3716 21.9295 59.344 21.9126 59.3163 21.9042C59.2793 21.8873 59.2332 21.8705 59.1963 21.8536C58.6147 21.6176 58.0608 21.348 57.5253 21.0361C57.2576 20.876 56.9899 20.7159 56.7406 20.5389C56.7129 20.522 56.6945 20.5052 56.6668 20.4883C56.6945 20.5136 56.8237 20.5895 56.6668 20.4883C56.6114 20.4462 56.5468 20.4041 56.4914 20.3619C56.3621 20.2692 56.2421 20.1681 56.1221 20.0669C55.8913 19.8731 55.6605 19.6708 55.4482 19.4601C55.2266 19.241 55.0328 19.0051 54.8204 18.7859C54.9497 18.9208 54.7928 18.7522 54.7651 18.7101C54.7189 18.6511 54.6728 18.6005 54.6266 18.5415C54.5251 18.4151 54.4327 18.2887 54.3404 18.1623C54.1558 17.9095 53.9896 17.6482 53.8234 17.3869C53.5003 16.8644 53.2141 16.325 52.9464 15.7688C52.9372 15.7435 52.9187 15.7183 52.9095 15.693C52.9003 15.6677 52.8818 15.6424 52.8726 15.6171C52.9095 15.7014 52.9187 15.7098 52.891 15.6508C52.8541 15.575 52.8172 15.4907 52.7803 15.4148C52.7156 15.2632 52.651 15.1115 52.5864 14.9598C52.4571 14.6479 52.3279 14.3277 52.2079 14.0159C51.9586 13.3669 51.7278 12.718 51.497 12.0691C51.3862 11.7572 51.0078 11.5213 50.6477 11.6308C50.2785 11.7235 50.02 12.0606 50.14 12.3977C50.9709 14.7659 51.8386 17.21 53.4542 19.241C54.2758 20.2776 55.2636 21.171 56.4268 21.9042C57.5253 22.5953 58.7531 23.1178 60.0179 23.497C61.458 23.9268 62.9628 24.1628 64.4768 24.2387C64.3567 23.8426 64.246 23.4549 64.126 23.0588C62.0304 24.0111 60.5718 25.9073 59.9348 27.9384C59.5471 29.1773 59.5655 30.4667 59.7224 31.7309C59.7686 32.0849 59.8148 32.4304 59.8702 32.7843C59.8794 32.8686 59.8978 32.9445 59.9071 33.0287C59.9163 33.0625 59.9163 33.0962 59.9256 33.1299C59.9533 33.29 59.9071 33.0287 59.9256 33.1383C59.9533 33.2984 59.9717 33.467 59.9994 33.6271C60.064 34.1244 60.1286 34.6216 60.1379 35.1188C60.1471 35.4981 60.1379 35.8773 60.1471 36.2566C60.1656 36.8549 60.2394 37.4533 60.3317 38.0517C60.7749 37.9421 61.218 37.8241 61.6703 37.7146C60.9595 35.4222 59.4824 33.349 57.5438 31.773C55.6051 30.1886 53.2049 29.034 50.657 28.5536C49.2353 28.284 47.7582 28.1997 46.3181 28.3682C46.4381 28.7643 46.5489 29.152 46.6689 29.5481C48.9399 28.4104 50.4723 26.3624 51.2755 24.1544C51.6909 23.0082 51.8755 21.8199 51.9771 20.6147C52.0971 19.2832 52.134 17.9516 52.0787 16.62C52.014 15.0946 51.8386 13.5692 51.497 12.0775C51.4232 11.7572 50.9893 11.5381 50.6477 11.6392C50.2508 11.732 50.0661 12.0522 50.14 12.3977Z"
                        fill="#231F20"
                    />
                </svg>
            </h1>
            <div className="flex gap-11">
                <div className="flex flex-col gap-4">
                    <p className="capitalize">used by over 500,000 peeps</p>
                    <div className="flex items-center">
                        <Avatar src={User} alt="Person" />
                        <Avatar
                            src={User}
                            alt="Person"
                            variant={'border'}
                            className="-ml-3"
                        />
                        <Avatar
                            src={User}
                            alt="Person"
                            variant={'border'}
                            className="-ml-3"
                        />
                        <Avatar
                            src={User}
                            alt="Person"
                            variant={'border'}
                            className="-ml-3"
                        />
                        <Avatar
                            src={User}
                            alt="Person"
                            variant={'border'}
                            className="-ml-3"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="rounded-5xl flex items-center gap-5 bg-white px-5 py-4">
                        <Avatar src={User} alt="Person" className="h-16 w-16" />
                        <div className="flex flex-col gap-1">
                            <p className="">Holy sh*t, I saved $500!</p>
                            <span className="text-green-500 font-bold">
                                -Janey Doe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
