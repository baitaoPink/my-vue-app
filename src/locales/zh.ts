const local = {
  system: {
    title: 'Admin',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    action: 'Action',
    add: 'Add',
    addSuccess: 'Add Success',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Confirm',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    edit: 'Edit',
    warning: 'Warning',
    error: 'Error',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    userCenter: 'User Center',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    },
    exportAll: 'Export All',
    exportFilter: 'Export The Current Filter Data',
    exportSelected: 'Export Selected Data',
    verify: 'Verify',
    details: 'Details',
    remark: 'Remark',
    status: 'status',
    approved: 'approved',
    rejected: 'rejected',
    examine: 'examine'
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    colourWeakness: 'Colour Weakness',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tag Bar Info Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    watermark: {
      visible: 'Watermark Full Screen Visible',
      text: 'Watermark Text'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    resetCacheStrategy: {
      title: 'Reset Cache Strategy',
      close: 'Close Page',
      refresh: 'Refresh Page'
    },
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'No Permission',
    404: 'Page Not Found',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    home: 'Home',
    menber: 'Menber',
    'menber_menber-list': '会员列表',
    'menber_menber-list-detail': '会员列表详情',
    'menber_real-name': '实名管理',
    'menber_real-name-configure': '实名认证配置',
    'menber_varification-code-record': '验证码记录',
    'menber_invitation-relationship': '邀请关系',
    'menber_payment-method': '用户收款方式管理',
    administrator: '管理员',
    'administrator_administrator-list': '管理员列表',
    'administrator_administrator-info': '管理员信息',
    'system-manage': '系统管理',
    'system-manage_role-manage': '角色管理',
    'system-manage_menu-manage': '菜单管理',
    'user-manage': '用户管理',
    'user-manage_svip-manage': 'Svip等级管理',
    'user-manage_hierarchical-manage': '合伙人层级',
    'user-manage_user-authentication': '用户认证',
    'user-manage_user-list': '用户列表',
    'article-manage': '内容管理',
    'article-manage_classification-manage': '文章分类',
    'article-manage_list-manage': '文章列表',
    'agency-management': '代理管理',
    'agency-management_agency-list': '代理列表',
    'system-config': '系统配置',
    'system-config_area-management': '地区管理',
    'system-config_language-management': '语种管理',
    'system-config_language-config': '语言包配置',
    'system-config_transaction-type-management': '交易类型管理',
    'system-config_whitelist-settings': '白名单设置',
    'fund-management': '资金管理',
    'fund-management_withdrawal-list': '提现列表',
    'fund-management_recharge-list': '充值列表',
    'fund-management_capital-flow': '资金流水',
    'system-config_parameter-settings': '参数设置',
    'system-config_currency-management': '币种管理',
    'system-config_payment-management': '支付方式管理',
    'user-manage_subsidy-setting': '补贴设置',
    'article-manage_home-banner': '轮播',
    'user-manage_revenue-performance': '收益绩效',
    'user-manage_salary-log': '工资日志',
    'user-manage_salary-settings': '工资设置',
    'user-manage_team-map': '团队图谱',
    'system-config_scheduled-tasks': '定时任务',
    'system-config_custom-info': '前台自定义信息',
    'system-config_custom-info_service': '服务',
    'system-config_custom-info_service_sort': '分类管理',
    'system-config_custom-info_service_manage': '服务管理',
    'system-config_trading-day': '交易日',
    'system-configuration': '投资信息管理',
    'system-configuration_management': '股票列表',
    'system-configuration_financial-products': '理财产品',
    'system-configuration_financial-products_product-category': '产品分类',
    'system-configuration_financial-products_balance-manage': '产品管理',
    'system-configuration_financial-products_balance-order': '产品订单',
    'system-configuration_financial-products_balance-configuration': '产品配置',
    'system-config_stock-list': '股市管理',
    'mentor-management': '导师管理',
    'mentor-management_mentor-list': '导师列表',
    'mentor-management_mentor-apply': '导师申请',
    'mentor-management_mentor-category': '导师分类',
    'documentation-management': '跟单管理',
    'documentation-management_review': '跟单审核',
    'documentation-management_stock': '上股管理',
    'documentation-management_additional-amount': '追加金额',
    'documentation-management_order-record': '下单记录(卖出)',
    'system-manage_system-log': '系统日志',
    'report-statistics': '报表统计',
    'report-statistics_basic-statistics': '基础统计',
    'documentation-management_profit-review': '提盈审核',
    'documentation-management_position-order': '持仓订单',
    'article-manage_service-agreement': '多服务协议',
    'article-manage_service-class': '多服务协议分类',
    'fund-management_fund-list': '资金列表',
    'customer-service': '客服中心',
    'customer-service_list': '客服列表'
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Admin',
        admin: 'Admin',
        user: 'User'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        reGetCode: 'Reacquire after {time}s',
        sendCodeSuccess: 'Verification code sent successfully',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
      }
    },
    home: {
      branchDesc:
        'For the convenience of everyone in developing and updating the merge, we have streamlined the code of the main branch, only retaining the homepage menu, and the rest of the content has been moved to the example branch for maintenance. The preview address displays the content of the example branch.',
      greeting: 'Good morning, {userName}, today is another day full of vitality!',
      weatherDesc: 'Today is cloudy to clear, 20℃ - 25℃!',
      projectCount: 'Project Count',
      todo: 'Todo',
      message: 'Message',
      downloadCount: 'Download Count',
      registerCount: 'Register Count',
      schedule: 'Work and rest Schedule',
      study: 'Study',
      work: 'Work',
      rest: 'Rest',
      entertainment: 'Entertainment',
      visitCount: 'Visit Count',
      turnover: 'Turnover',
      dealCount: 'Deal Count',
      projectNews: {
        title: 'Project News',
        moreNews: 'More News',
        desc1: 'Soybean created the open source project soybean-admin on May 28, 2021!',
        desc2: 'Yanbowe submitted a bug to soybean-admin, the multi-tab bar will not adapt.',
        desc3: 'Soybean is ready to do sufficient preparation for the release of soybean-admin!',
        desc4: 'Soybean is busy writing project documentation for soybean-admin!',
        desc5: 'Soybean just wrote some of the workbench pages casually, and it was enough to see!'
      },
      creativity: 'Creativity'
    },
    paramrterSettings: {
      baseConfig: {
        name: '',
        logo: '平台logo',
        placeholderLogo: '请上传平台logo',
        ip: '是否开启后天白名单登陆',
        status: '',
        sort: '',
        info: '平台名称',
        placeholderInfo: '请输入平台名称',
        ipPwd: 'IP白名单的设置密码',
        placeholderIpPwd: '请设置IP白名单密码'
      },
      loginRegister: {
        emailStatus: '是否开启邮箱注册验证码',
        phoneStatus: '是否开启手机注册验证码',
        phoneCode: '是否开启手机密码修改验证码',
        emailCode: '是否开启邮箱密码修改验证码'
      }
    }
  },
  form: {
    required: 'Cannot be empty',
    userName: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect'
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect'
    },
    pwd: {
      required: 'Please enter password',
      invalid: '6-18 characters, including letters, numbers, and underscores'
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent'
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect'
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect'
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Configuration',
    themeSchema: 'Theme Schema',
    lang: 'Switch Language',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin'
  },
  datatable: {
    itemCount: 'Total {total} items'
  }
};

export default local;