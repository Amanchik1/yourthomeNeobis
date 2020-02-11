import React from 'react';
import {Link} from "react-router-dom";
import css from './menu.module.css'

const Menu = props => {

    return (
        <div className={css.menuWrapper}>
            <div>
                <div className={css.signWrapper}>
                    <div>
                        <Link to="/sign_in">Вход</Link> / <Link to={"/sign_up"}>Регистрация</Link>
                    </div>
                    <div>
                        <Link to="/">English / Russion</Link>
                    </div>
                </div>
                <div className={css.line}/>
                <div className={css.navWrapper}>
                    <div className={css.imgWrapper}>
                        <Link to={"/"}>
                            <div className={css.block}/>
                            <svg width="100%" height="100%" viewBox="0 0 197 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.08 26V16.352L0.784 0.799998H6.796L13.852 11.744L20.944 0.799998H26.632L16.3 16.388V26H11.08ZM22.4003 16.64C22.4003 15.272 22.6523 14 23.1563 12.824C23.6843 11.624 24.3923 10.592 25.2803 9.728C26.1923 8.84 27.2603 8.144 28.4843 7.64C29.7083 7.136 31.0163 6.884 32.4083 6.884C33.8003 6.884 35.1083 7.136 36.3323 7.64C37.5563 8.144 38.6123 8.84 39.5003 9.728C40.4123 10.592 41.1203 11.624 41.6243 12.824C42.1523 14 42.4163 15.272 42.4163 16.64C42.4163 18.008 42.1523 19.292 41.6243 20.492C41.1203 21.668 40.4123 22.688 39.5003 23.552C38.6123 24.416 37.5563 25.1 36.3323 25.604C35.1083 26.108 33.8003 26.36 32.4083 26.36C31.0163 26.36 29.7083 26.108 28.4843 25.604C27.2603 25.1 26.1923 24.416 25.2803 23.552C24.3923 22.688 23.6843 21.668 23.1563 20.492C22.6523 19.292 22.4003 18.008 22.4003 16.64ZM32.4083 22.076C33.8483 22.076 35.0723 21.548 36.0803 20.492C37.0883 19.436 37.5923 18.152 37.5923 16.64C37.5923 15.104 37.0883 13.808 36.0803 12.752C35.0723 11.696 33.8483 11.168 32.4083 11.168C30.9683 11.168 29.7443 11.696 28.7363 12.752C27.7283 13.808 27.2243 15.104 27.2243 16.64C27.2243 18.152 27.7283 19.436 28.7363 20.492C29.7443 21.548 30.9683 22.076 32.4083 22.076ZM50.2359 7.244V18.152C50.2359 19.352 50.5839 20.312 51.2799 21.032C51.9999 21.752 52.9479 22.112 54.1239 22.112C54.9639 22.112 55.7079 21.956 56.3559 21.644C57.0279 21.308 57.5799 20.84 58.0119 20.24V7.244H62.9439V26H58.0119V24.488C57.2919 25.088 56.4879 25.556 55.5999 25.892C54.7119 26.204 53.7519 26.36 52.7199 26.36C50.5599 26.36 48.7839 25.664 47.3919 24.272C45.9999 22.856 45.3039 21.056 45.3039 18.872V7.244H50.2359ZM66.7878 26V7.244H71.7198V9.296C72.3198 8.48 73.0398 7.868 73.8798 7.46C74.7438 7.028 75.6918 6.812 76.7238 6.812C77.2038 6.836 77.5998 6.884 77.9118 6.956C78.2478 7.004 78.5358 7.1 78.7758 7.244V11.564C78.4158 11.396 78.0198 11.276 77.5878 11.204C77.1558 11.108 76.7118 11.06 76.2558 11.06C75.2958 11.06 74.4078 11.3 73.5918 11.78C72.7998 12.26 72.1758 12.956 71.7198 13.868V26H66.7878ZM84.2852 20.708V11.384H80.4332V7.244H84.2852V2.456L89.2172 1.34V7.244H94.5452V11.384H89.2172V19.7C89.2172 20.588 89.4092 21.212 89.7932 21.572C90.1772 21.932 90.8492 22.112 91.8092 22.112C92.2652 22.112 92.6972 22.088 93.1052 22.04C93.5132 21.968 93.9572 21.848 94.4372 21.68V25.712C93.9092 25.88 93.2732 26.012 92.5292 26.108C91.7852 26.228 91.1492 26.288 90.6212 26.288C88.5332 26.288 86.9492 25.82 85.8692 24.884C84.8132 23.924 84.2852 22.532 84.2852 20.708Z"
                                    fill="#A7A7A7"/>
                                <path
                                    d="M97.311 26V0.799998H102.531V10.916H114.123V0.799998H119.343V26H114.123V15.704H102.531V26H97.311ZM122.736 16.64C122.736 15.272 122.988 14 123.492 12.824C124.02 11.624 124.728 10.592 125.616 9.728C126.528 8.84 127.596 8.144 128.82 7.64C130.044 7.136 131.352 6.884 132.744 6.884C134.136 6.884 135.444 7.136 136.668 7.64C137.892 8.144 138.948 8.84 139.836 9.728C140.748 10.592 141.456 11.624 141.96 12.824C142.488 14 142.752 15.272 142.752 16.64C142.752 18.008 142.488 19.292 141.96 20.492C141.456 21.668 140.748 22.688 139.836 23.552C138.948 24.416 137.892 25.1 136.668 25.604C135.444 26.108 134.136 26.36 132.744 26.36C131.352 26.36 130.044 26.108 128.82 25.604C127.596 25.1 126.528 24.416 125.616 23.552C124.728 22.688 124.02 21.668 123.492 20.492C122.988 19.292 122.736 18.008 122.736 16.64ZM132.744 22.076C134.184 22.076 135.408 21.548 136.416 20.492C137.424 19.436 137.928 18.152 137.928 16.64C137.928 15.104 137.424 13.808 136.416 12.752C135.408 11.696 134.184 11.168 132.744 11.168C131.304 11.168 130.08 11.696 129.072 12.752C128.064 13.808 127.56 15.104 127.56 16.64C127.56 18.152 128.064 19.436 129.072 20.492C130.08 21.548 131.304 22.076 132.744 22.076ZM145.784 26V7.244H150.716V8.648C151.388 8.072 152.132 7.64 152.948 7.352C153.764 7.04 154.652 6.884 155.612 6.884C156.812 6.884 157.892 7.136 158.852 7.64C159.836 8.12 160.64 8.804 161.264 9.692C162.008 8.78 162.908 8.084 163.964 7.604C165.02 7.124 166.184 6.884 167.456 6.884C169.544 6.884 171.26 7.58 172.604 8.972C173.948 10.364 174.62 12.152 174.62 14.336V26H169.688V15.056C169.688 13.88 169.364 12.932 168.716 12.212C168.092 11.492 167.24 11.132 166.16 11.132C165.416 11.132 164.732 11.3 164.108 11.636C163.508 11.948 162.992 12.404 162.56 13.004C162.584 13.22 162.608 13.436 162.632 13.652C162.656 13.868 162.668 14.096 162.668 14.336V26H157.736V15.056C157.736 13.88 157.412 12.932 156.764 12.212C156.14 11.492 155.288 11.132 154.208 11.132C153.464 11.132 152.804 11.276 152.228 11.564C151.652 11.852 151.148 12.272 150.716 12.824V26H145.784ZM195.221 23.66C194.069 24.596 192.881 25.28 191.657 25.712C190.457 26.144 189.113 26.36 187.625 26.36C186.209 26.36 184.877 26.108 183.629 25.604C182.405 25.1 181.337 24.416 180.425 23.552C179.537 22.688 178.829 21.668 178.301 20.492C177.797 19.292 177.545 18.008 177.545 16.64C177.545 15.296 177.785 14.036 178.265 12.86C178.769 11.66 179.453 10.628 180.317 9.764C181.181 8.876 182.201 8.18 183.377 7.676C184.577 7.172 185.849 6.92 187.193 6.92C188.513 6.92 189.737 7.184 190.865 7.712C192.017 8.216 193.001 8.912 193.817 9.8C194.657 10.688 195.305 11.756 195.761 13.004C196.241 14.228 196.481 15.56 196.481 17V18.296H182.513C182.849 19.472 183.497 20.42 184.457 21.14C185.417 21.86 186.545 22.22 187.841 22.22C188.657 22.22 189.425 22.088 190.145 21.824C190.865 21.56 191.477 21.188 191.981 20.708L195.221 23.66ZM187.085 10.988C185.957 10.988 184.985 11.336 184.169 12.032C183.353 12.704 182.789 13.616 182.477 14.768H191.657C191.345 13.664 190.769 12.764 189.929 12.068C189.113 11.348 188.165 10.988 187.085 10.988Z"
                                    fill="#57C325"/>
                            </svg>
                        </Link>
                    </div>
                    <div className={css.links}>
                        <Link to="/">Продажа</Link>
                        <Link to="/">Аренда</Link>
                        <Link to="/">Новостройка</Link>
                    </div>
                    <div className={css.addButtonWrapper}>
                        <button className={css.addButton}>
                            + Добавить объявление
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;