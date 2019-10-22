import Vue from 'vue'

/**
 * 公共样式、主题样式引入位置
 * */

import "@/assets/style/base.less"; //公用css类

/**
 * 公共点击
 * */
const FastClick = require('fastclick');
FastClick.attach(document.body);

/**
 * 公共函数、变量
 * */
const Util = {
  /**
   * 环境变量
   * */
  $isDev: process.env.NODE_ENV === 'development',
  /**
   * 为空判断
   * */
  $isNullOrEmpty(obj) {
    return (obj !== 0 || obj !== "0") && (obj === null || obj === undefined || obj === "" || obj === "null" || typeof obj === "undefined");
  }
};

Object.assign(Vue.prototype, Util);