'use strict';

exports.__esModule = true;
exports.getWeekStartByRegion = getWeekStartByRegion;
exports.getWeekStartByLocale = getWeekStartByLocale;
/*
 * weekstart
 * https://github.com/gamtiq/weekstart
 *
 * Copyright (c) 2017 Denis Sikuler
 * Licensed under the MIT license.
 */

/**
 * Library to get first day of week.
 * 
 * @module weekstart
 */

/* eslint quote-props: ['error', 'as-needed', {'keywords': true, 'numbers': false, 'unnecessary': false}] */
var regionDayMap = {
    // Sunday
    AG: 0,
    ATG: 0,
    28: 0,
    AR: 0,
    ARG: 0,
    32: 0,
    AS: 0,
    ASM: 0,
    16: 0,
    AU: 0,
    AUS: 0,
    36: 0,
    BR: 0,
    BRA: 0,
    76: 0,
    BS: 0,
    BHS: 0,
    44: 0,
    BT: 0,
    BTN: 0,
    64: 0,
    BW: 0,
    BWA: 0,
    72: 0,
    BZ: 0,
    BLZ: 0,
    84: 0,
    CA: 0,
    CAN: 0,
    124: 0,
    CN: 0,
    CHN: 0,
    156: 0,
    CO: 0,
    COL: 0,
    170: 0,
    DM: 0,
    DMA: 0,
    212: 0,
    DO: 0,
    DOM: 0,
    214: 0,
    ET: 0,
    ETH: 0,
    231: 0,
    GT: 0,
    GTM: 0,
    320: 0,
    GU: 0,
    GUM: 0,
    316: 0,
    HK: 0,
    HKG: 0,
    344: 0,
    HN: 0,
    HND: 0,
    340: 0,
    ID: 0,
    IDN: 0,
    360: 0,
    IE: 0,
    IRL: 0,
    372: 0,
    IL: 0,
    ISR: 0,
    376: 0,
    IN: 0,
    IND: 0,
    356: 0,
    JM: 0,
    JAM: 0,
    388: 0,
    JP: 0,
    JPN: 0,
    392: 0,
    KE: 0,
    KEN: 0,
    404: 0,
    KH: 0,
    KHM: 0,
    116: 0,
    KR: 0,
    KOR: 0,
    410: 0,
    LA: 0,
    LA0: 0,
    418: 0,
    MH: 0,
    MHL: 0,
    584: 0,
    MM: 0,
    MMR: 0,
    104: 0,
    MO: 0,
    MAC: 0,
    446: 0,
    MT: 0,
    MLT: 0,
    470: 0,
    MX: 0,
    MEX: 0,
    484: 0,
    MZ: 0,
    MOZ: 0,
    508: 0,
    NI: 0,
    NIC: 0,
    558: 0,
    NP: 0,
    NPL: 0,
    524: 0,
    NZ: 0,
    NZL: 0,
    554: 0,
    PA: 0,
    PAN: 0,
    591: 0,
    PE: 0,
    PER: 0,
    604: 0,
    PH: 0,
    PHL: 0,
    608: 0,
    PK: 0,
    PAK: 0,
    586: 0,
    PR: 0,
    PRI: 0,
    630: 0,
    PY: 0,
    PRY: 0,
    600: 0,
    SA: 0,
    SAU: 0,
    682: 0,
    SG: 0,
    SGP: 0,
    702: 0,
    SV: 0,
    SLV: 0,
    222: 0,
    TH: 0,
    THA: 0,
    764: 0,
    TN: 0,
    TUN: 0,
    788: 0,
    TT: 0,
    TTO: 0,
    780: 0,
    TW: 0,
    TWN: 0,
    158: 0,
    UM: 0,
    UMI: 0,
    581: 0,
    US: 0,
    USA: 0,
    840: 0,
    VE: 0,
    VEN: 0,
    862: 0,
    VI: 0,
    VIR: 0,
    850: 0,
    WS: 0,
    WSM: 0,
    882: 0,
    YE: 0,
    YEM: 0,
    887: 0,
    ZA: 0,
    ZAF: 0,
    710: 0,
    ZW: 0,
    ZWE: 0,
    716: 0,

    // Saturday
    AE: 6,
    ARE: 6,
    784: 6,
    AF: 6,
    AFG: 6,
    4: 6,
    BH: 6,
    BHR: 6,
    48: 6,
    DJ: 6,
    DJI: 6,
    262: 6,
    DZ: 6,
    DZA: 6,
    12: 6,
    EG: 6,
    EGY: 6,
    818: 6,
    IQ: 6,
    IRQ: 6,
    368: 6,
    IR: 6,
    IRN: 6,
    364: 6,
    JO: 6,
    JOR: 6,
    400: 6,
    KW: 6,
    KWT: 6,
    414: 6,
    LY: 6,
    LBY: 6,
    434: 6,
    MA: 6,
    MAR: 6,
    504: 6,
    OM: 6,
    OMN: 6,
    512: 6,
    QA: 6,
    QAT: 6,
    634: 6,
    SD: 6,
    SDN: 6,
    729: 6,
    SY: 6,
    SYR: 6,
    760: 6,

    // Friday
    BD: 5,
    BGD: 5,
    50: 5,
    MV: 5,
    MDV: 5,
    462: 5

    // Else - Monday
};

/* eslint-disable camelcase */
var langRegionMap = {
    en: 'US',

    zh: 'CN',
    zh_hans: 'CN',
    hans: 'CN', // script
    wuu: 'CN',
    hsn: 'CN',
    hak: 'CN',
    nan: 'CN',
    gan: 'CN',
    ii: 'CN',
    ug: 'CN',
    ug_arab: 'CN',
    za: 'CN',
    mn_mong: 'CN',
    bo: 'CN',
    kk_arab: 'CN',
    lis: 'CN',
    ky_arab: 'CN',
    nxq: 'CN',
    tdd: 'CN',
    khb: 'CN',
    lcp: 'CN',

    hi: 'IN',
    te: 'IN',
    mr: 'IN',
    ta: 'IN',
    gu: 'IN',
    kn: 'IN',
    or: 'IN',
    ml: 'IN',
    pa_guru: 'IN',
    bho: 'IN',
    awa: 'IN',
    as: 'IN',
    mwr: 'IN',
    mai: 'IN',
    mag: 'IN',
    bgc: 'IN',
    hne: 'IN',
    dcc: 'IN',
    bjj: 'IN',
    sat: 'IN',
    wtm: 'IN',
    ks: 'IN',
    ks_arab: 'IN',
    kok: 'IN',
    gom: 'IN',
    swv: 'IN',
    lmn: 'IN',
    gbm: 'IN',
    gon: 'IN',
    gon_telu: 'IN',
    kfy: 'IN',
    kru: 'IN',
    doi: 'IN',
    wbq: 'IN',
    sck: 'IN',
    xnr: 'IN',
    wbr: 'IN',
    tcy: 'IN',
    khn: 'IN',
    brx: 'IN',
    noe: 'IN',
    bhb: 'IN',
    mni: 'IN',
    raj: 'IN',
    hoc: 'IN',
    mtr: 'IN',
    unr: 'IN',
    unr_beng: 'IN',
    bhi: 'IN',
    hoj: 'IN',
    kha: 'IN',
    kfr: 'IN',
    grt: 'IN',
    unx: 'IN',
    unx_beng: 'IN',
    bfy: 'IN',
    srx: 'IN',
    saz: 'IN',
    sd_deva: 'IN',
    njo: 'IN',
    bjq: 'IN',
    ria: 'IN',
    bpy: 'IN',
    bra: 'IN',
    lep: 'IN',
    sa: 'IN',
    kht: 'IN',

    kgp: 'BR',
    gup: 'BR',
    yrl: 'BR',
    xav: 'BR',

    dz: 'BT',

    tn: 'BW',

    pdt: 'CA',
    crk: 'CA',
    cr: 'CA',
    cr_cans: 'CA',
    iu: 'CA',
    iu_cans: 'CA',
    iu_latn: 'CA',
    moe: 'CA',
    crj: 'CA',
    atj: 'CA',
    crl: 'CA',
    csw: 'CA',
    crm: 'CA',
    ikt: 'CA',
    moh: 'CA',
    dgr: 'CA',
    den: 'CA',
    scs: 'CA',
    nsk: 'CA',
    chp: 'CA',
    gwi: 'CA',

    guc: 'CO',

    am: 'ET',
    om: 'ET',
    ti: 'ET',
    sid: 'ET',
    wal: 'ET',
    aa: 'ET',

    quc: 'GT',

    ch: 'GU',

    id: 'ID',
    jv: 'ID',
    su: 'ID',
    mad: 'ID',
    ms_arab: 'ID',
    min: 'ID',
    bew: 'ID',
    ban: 'ID',
    bug: 'ID',
    bjn: 'ID',
    ace: 'ID',
    sas: 'ID',
    bbc: 'ID',
    mak: 'ID',
    ljp: 'ID',
    rej: 'ID',
    gor: 'ID',
    nij: 'ID',
    kge: 'ID',
    aoz: 'ID',
    kvr: 'ID',
    lbw: 'ID',
    gay: 'ID',
    rob: 'ID',
    sxn: 'ID',
    mdr: 'ID',
    sly: 'ID',
    mwv: 'ID',

    ga: 'IE',

    he: 'IL',
    lad: 'IL',

    jam: 'JM',

    ja: 'JP',
    ryu: 'JP',

    ki: 'KE',
    luy: 'KE',
    luo: 'KE',
    kln: 'KE',
    kam: 'KE',
    guz: 'KE',
    mer: 'KE',
    ebu: 'KE',
    dav: 'KE',
    pko: 'KE',
    saq: 'KE',

    km: 'KH',
    cja: 'KH',

    ko: 'KR',

    lo: 'LA',
    kjg: 'LA',

    mh: 'MH',

    my: 'MM',
    shn: 'MM',
    kac: 'MM',
    mnw: 'MM',

    mt: 'MT',

    yua: 'MX',
    nhe: 'MX',
    nhw: 'MX',
    maz: 'MX',
    nch: 'MX',
    sei: 'MX',

    vmw: 'MZ',
    ndc: 'MZ',
    ngl: 'MZ',
    seh: 'MZ',
    mgh: 'MZ',
    rng: 'MZ',
    yao: 'MZ',

    ne: 'NP',
    'new': 'NP',
    jml: 'NP',
    taj: 'NP',
    thl: 'NP',
    bap: 'NP',
    tdg: 'NP',
    thr: 'NP',
    mgp: 'NP',
    lif: 'NP',
    lif_deva: 'NP',
    thq: 'NP',
    mrd: 'NP',
    xsr: 'NP',
    rjs: 'NP',
    tsf: 'NP',
    ggn: 'NP',
    gvr: 'NP',
    tkt: 'NP',
    tdh: 'NP',
    unr_deva: 'NP',

    mi: 'NZ',

    qu: 'PE',

    fil: 'PH',
    ceb: 'PH',
    ilo: 'PH',
    hil: 'PH',
    bik: 'PH',
    war: 'PH',
    pam: 'PH',
    bhk: 'PH',
    pag: 'PH',
    mdh: 'PH',
    tsg: 'PH',
    cps: 'PH',
    krj: 'PH',
    bto: 'PH',
    hnn: 'PH',
    tbw: 'PH',
    bku: 'PH',

    ur: 'PK',
    pa: 'PK',
    pa_arab: 'PK',
    arab: 'PK', // script
    lah: 'PK',
    ps: 'PK',
    sd: 'PK',
    sd_arab: 'PK',
    skr: 'PK',
    bal: 'PK',
    brh: 'PK',
    hno: 'PK',
    bgn: 'PK',
    hnd: 'PK',
    tg_arab: 'PK',
    gju: 'PK',
    bft: 'PK',
    kvx: 'PK',
    khw: 'PK',
    mvy: 'PK',
    kxp: 'PK',
    gjk: 'PK',
    btv: 'PK',

    gn: 'PY',

    th: 'TH',
    tts: 'TH',
    nod: 'TH',
    sou: 'TH',
    mfa: 'TH',
    kxm: 'TH',
    kdt: 'TH',
    lwl: 'TH',

    aeb: 'TN',

    zh_hant: 'TW',
    hant: 'TW', // script
    trv: 'TW',

    nv: 'US',
    pdc: 'US',
    haw: 'US',
    frc: 'US',
    chr: 'US',
    esu: 'US',
    dak: 'US',
    cho: 'US',
    lkt: 'US',
    ik: 'US',
    mus: 'US',

    sm: 'WS',

    zu: 'ZA',
    xh: 'ZA',
    af: 'ZA',
    nso: 'ZA',
    st: 'ZA',
    ts: 'ZA',
    ss: 'ZA',
    ve: 'ZA',
    nr: 'ZA',

    sn: 'ZW',
    nd: 'ZW',
    mxc: 'ZW',
    kck: 'ZW',

    haz: 'AF',
    uz_arab: 'AF',

    arq: 'DZ',
    kab: 'DZ',

    ar: 'EG',
    arz: 'EG',

    ckb: 'IQ',
    syr: 'IQ',

    fa: 'IR',
    az_arab: 'IR',
    mzn: 'IR',
    glk: 'IR',
    sdh: 'IR',
    lrc: 'IR',
    rmt: 'IR',
    bqi: 'IR',
    luz: 'IR',
    lki: 'IR',
    prd: 'IR',
    gbz: 'IR',

    ary: 'MA',
    zgh: 'MA',
    tzm: 'MA',
    tzm_latn: 'MA',
    shi: 'MA',
    shi_latn: 'MA',
    shi_tfng: 'MA',
    tfng: 'MA', // script
    rif: 'MA',
    rif_latn: 'MA',
    rif_tfng: 'MA',

    bej: 'SD',
    fvr: 'SD',
    mls: 'SD',
    fia: 'SD',
    zag: 'SD',

    bn: 'BD',
    rkt: 'BD',
    syl: 'BD',
    ccp: 'BD',

    dv: 'MV'
};
/* eslint-enable camelcase */

/**
 * Return first day of week for country/region code.
 *
 * Based on data from:
 * - [https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html)
 * - [https://www.iso.org/iso-3166-country-codes.html](https://www.iso.org/iso-3166-country-codes.html)
 *
 * @example
 * getWeekStartByRegion('PNG');   // 1
 * getWeekStartByRegion('qa');   // 6
 * getWeekStartByRegion(50);   // 5
 *
 * @param {number | string} regionCode
 *      ISO 3166 Alpha-2, Alpha-3 or numeric code.
 * @return {number}
 *      Code of first day of week for the given country/region code:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:weekstart.getWeekStartByRegion
 */
function getWeekStartByRegion(regionCode) {
    /* eslint-disable indent */
    var code = regionDayMap[typeof regionCode === 'string' ? regionCode.toUpperCase() : regionCode];
    /* eslint-enable indent */

    return typeof code === 'number' ? code : 1;
}

/**
 * Return first day of week for locale identifier.
 *
 * Based on data from:
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html)
 * - [http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers](http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers)
 *
 * @example
 * getWeekStartByLocale('no');   // 1
 * getWeekStartByLocale('KK_arab');   // 0
 * getWeekStartByLocale('fr-DZ');   // 6
 *
 * @param {string} locale
 *      Locale identifier.
 * @return {number}
 *      Code of first day of week for the given locale identifier:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:weekstart.getWeekStartByLocale
 */
function getWeekStartByLocale(locale) {
    if (locale) {
        // Locale form: http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers
        var data = locale.toLowerCase().split(/[-_]/);
        var language = data[0];
        var country = void 0;
        if (data[1] && data[1].length === 4) {
            language += '_' + data[1];
            country = data[2];
        } else {
            country = data[1];
        }
        if (!country) {
            country = langRegionMap[language];
        }
        if (country) {
            return getWeekStartByRegion(country.match(/^\d+$/) ? Number(country) : country);
        }
    }

    return 1;
}
//# sourceMappingURL=weekstart.js.map