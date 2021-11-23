import React, { Component } from 'react'
import "./ThongBaoCuaToi.css";
import Thongbao from "./Thongbao";
import Quatang from './Quatang';
import Voucher from './Voucher';
import Lichsu from './Lichsu';

export default class ThongBaoCuaToi extends Component {
    state={trang:1}
    render() {
        return (
            <div class="Account__StyledAccountLayoutInner-sc-1d5h8iz-1 jXurFV">
            <div class="styles__StyledNotification-sc-1ghyfo6-0 goLqYu">
                <div class="heading">Thông báo của tôi (5)</div>
                <div class="inner">
                    <ul class="tabs">
                        <li class={this.state.trang===1&&"is-active"} title="Thông báo chung" onClick={()=>this.setState({trang:1})}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                            <span class="dot-unread"></span>
                        </li>
                        <li class={this.state.trang===2&&"is-active"} title="Thông báo khuyến mãi" onClick={()=>this.setState({trang:2})}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"
                                ></path>
                            </svg>
                        </li>
                        <li class={this.state.trang===3&&"is-active"} title="Thông báo đơn hàng" onClick={()=>this.setState({trang:3})}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"
                                ></path>
                            </svg>
                            <span class="dot-unread"></span>
                        </li>
                        <li class={this.state.trang===4&&"is-active"} title="Thông báo hệ thống" onClick={()=>this.setState({trang:4})}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"
                                ></path>
                            </svg>
                            <span class="dot-unread"></span>
                        </li>
                        <li class="last">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </li>
                        <div class="styles__MoreModal-sc-1ghyfo6-1 kuORbI">
                             {/* <div>Đánh dấu đọc tất cả</div>
                            <div>Xóa tất cả thông báo</div> */}
                        </div>
                    </ul>
                    {
                        (()=>{

                            var result = [];
                            switch (this.state.trang)
                            {case 1: result.push(<Thongbao></Thongbao>);
                            break;
                            case 2: result.push(<Quatang></Quatang>);
                            break;
                            case 3: result.push(<Voucher></Voucher>);
                            break;
                            case 4: result.push(<Lichsu></Lichsu>);
                            break;
                            default:
                            result.push(<Thongbao></Thongbao>);
                            break;
                            }
                            return result;
                        }).bind(this)()
                    }
                </div>
            </div>
        </div>

        )
        }
    }