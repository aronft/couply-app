import { Logo } from '@/components/ui/atoms/logo/logo'
import { Container } from '@/components/ui/objects/container/container'
import { UiList } from '@/components/ui/objects/ui-list/ui-list'
import { SpotifyLogo } from '@phosphor-icons/react'
import { Menu } from '../menu/menu'

export const Footer = () => {
    return (
        <footer className="border-t border-t-black pb-16 pt-10">
            <Container
                tag="div"
                className="flex flex-col gap-20 lg:flex-row lg:justify-between"
            >
                <div className="flex flex-wrap items-start  justify-between gap-3 lg:flex-col lg:gap-14">
                    <Logo />
                    <div className="flex flex-col gap-4">
                        <UiList direction="row" className="gap-5">
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                                <svg
                                    className="text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="15"
                                    viewBox="0 0 19 15"
                                    fill="none"
                                >
                                    <path
                                        d="M6.25504 14.9125C12.9075 14.9125 16.545 9.40002 16.545 4.62252C16.545 4.46502 16.545 4.30753 16.5375 4.15753C17.2425 3.64752 17.8575 3.01003 18.345 2.28253C17.7 2.56753 17.0025 2.76252 16.2675 2.85252C17.0175 2.40252 17.5875 1.69752 17.8575 0.850024C17.16 1.26252 16.3875 1.56252 15.5625 1.72752C14.9025 1.02252 13.965 0.587524 12.9225 0.587524C10.9275 0.587524 9.30754 2.20752 9.30754 4.20252C9.30754 4.48752 9.33754 4.76502 9.40504 5.02752C6.39754 4.87752 3.73504 3.43752 1.95004 1.24752C1.64254 1.78002 1.46254 2.40252 1.46254 3.06252C1.46254 4.31502 2.10004 5.42503 3.07504 6.07003C2.48254 6.05503 1.92754 5.89003 1.44004 5.62003C1.44004 5.63503 1.44004 5.65002 1.44004 5.66502C1.44004 7.42002 2.68504 8.87502 4.34254 9.21252C4.04254 9.29502 3.72004 9.34003 3.39004 9.34003C3.15754 9.34003 2.93254 9.31752 2.70754 9.27252C3.16504 10.7125 4.50004 11.755 6.08254 11.785C4.84504 12.7525 3.28504 13.33 1.59004 13.33C1.29754 13.33 1.01254 13.315 0.727539 13.2775C2.31004 14.3125 4.21504 14.9125 6.25504 14.9125Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="30"
                                    viewBox="0 0 14 25"
                                    fill="none"
                                    className="-mb-1"
                                >
                                    <path
                                        d="M12.8389 14.3359L13.5039 10H9.34375V7.18624C9.34375 6.00001 9.92485 4.84375 11.7882 4.84375H13.6797V1.15234C13.6797 1.15234 11.9631 0.859375 10.322 0.859375C6.89564 0.859375 4.65625 2.93594 4.65625 6.69531V10H0.847656V14.3359H4.65625V24.8178C5.41993 24.9376 6.20266 25 7 25C7.79734 25 8.58007 24.9376 9.34375 24.8178V14.3359H12.8389Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <button className="flex  items-center justify-center rounded-full  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8  w-8"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                >
                                    <path
                                        d="M23.7393 13.3235C18.977 10.4953 11.1218 10.2353 6.57562 11.615C5.84555 11.8366 5.07351 11.4243 4.85237 10.6945C4.63108 9.96393 5.04277 9.19245 5.7734 8.97051C10.9921 7.38645 19.6674 7.69236 25.1497 10.9468C25.8064 11.3366 26.0218 12.1847 25.6326 12.8402C25.2431 13.4968 24.3943 13.7133 23.7393 13.3235V13.3235ZM23.5833 17.5124C23.2492 18.0545 22.5403 18.2246 21.9989 17.8917C18.0286 15.4511 11.9745 14.7442 7.27736 16.17C6.66824 16.3541 6.02486 16.0106 5.83983 15.4026C5.65631 14.7935 5.99992 14.1513 6.60794 13.9661C11.9738 12.3378 18.6443 13.1265 23.2044 15.9288C23.7458 16.2623 23.9162 16.9715 23.5833 17.5124ZM21.7756 21.5352C21.5101 21.9707 20.9432 22.107 20.5094 21.8417C17.0401 19.7213 12.6734 19.2425 7.53076 20.4171C7.03519 20.5307 6.54129 20.2202 6.42828 19.7246C6.31477 19.2293 6.62414 18.7353 7.12079 18.6222C12.7485 17.3357 17.5759 17.8894 21.47 20.2689C21.9042 20.5341 22.0409 21.1012 21.7756 21.5352ZM15.0001 0.226142C6.8408 0.226142 0.226196 6.84061 0.226196 14.9998C0.226196 23.1599 6.8408 29.7738 15.0001 29.7738C23.1596 29.7738 29.7739 23.1599 29.7739 14.9998C29.7739 6.84061 23.1596 0.226142 15.0001 0.226142Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </UiList>
                        <p>contact@couply.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-7 lg:justify-between">
                    <Menu
                        className="flex-wrap justify-between gap-8"
                        direction="row"
                    />
                    <small className="text-center text-sm text-green-800 lg:text-right ">
                        Copyright 2022-2023 @ Couply LLC
                    </small>
                </div>
            </Container>
        </footer>
    )
}
