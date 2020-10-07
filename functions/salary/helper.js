var employmentIncome = 0;
var capitalGains = 0;
var eligibleDividends = 0;
var nonEligibleDividends = 0;
var otherIncome = 0;
var totalGrossIncome = 0;
var RRSPContribution = 0;
var capitalGainsRate = 0.5;
var eligibleGrossUp = 0.38;
var nonEligibleGrossUp = 0.15;

var federalTaxROC = 0;
var federalTaxQC = 0;

var CPPTax = 0;
var enhancedCPPTax = 0;
var baseCPPTax = 0;

var QPPTax = 0;
var enhancedQPPTax = 0;
var baseQPPTax = 0;

var EITaxROC = 0;
var EITaxQC = 0;
var QPIPTax = 0;

var OHIPTax = 0;

var CPPExemption = 3500;
var CPPContributionRate = 0.0525;
var CPPMaxContribution = 2898;
var enhancedCPPRate = 0.003;

var QPPExemption = 3500;
var QPPContributionRate = 0.057;
var QPPMaxContribution = 3146.4;
var enhancedQPPRate = 0.003;

var EIROCRate = 0.0158;
var EIROCMax = 856.36;

var EIQCRate = 0.012;
var EIQCMax = 650.4;

var QPIPExemption = 2000;
var QPIPContributionRate = 0.00494;
var QPIPMaxContribution = 387.79;
var QPIPTax = 0;

var OHIPContribution = 0;

//Federal assumptions
var federalBracket1 = 48535;
var federalBracket2 = 97069;
var federalBracket3 = 150473;
var federalBracket4 = 214368;
var federalRate1 = 0.15;
var federalRate2 = 0.205;
var federalRate3 = 0.26;
var federalRate4 = 0.29;
var federalRate5 = 0.33;

var baseFederalPersonalAmount = 12298;
var maxEnhancedBPA = 931;
var enhancedBPA = 0;
var totalFederalPersonalAmount = 0;
var enhancedBPAThresholdStart = 150473;
var enhancedBPAThresholdEnd = 214368;

var federalEligibleDivCredit = 0.1502;
var federalNonEligibleDivCredit = 0.090301;
var federalTaxCreditRate = 0.15;
var federalEmploymentAmount = 0;
var federalEmploymentMax = 1245;

var QCAbatementRate = 0.165;

//AB assumptions
var ABBracket1 = 131220;
var ABBracket2 = 157464;
var ABBracket3 = 209952;
var ABBracket4 = 314928;
var ABRate1 = 0.1;
var ABRate2 = 0.12;
var ABRate3 = 0.13;
var ABRate4 = 0.14;
var ABRate5 = 0.15;
var ABPersonalAmount = 19369;
var ABEligibleDivCredit = 0.1;
var ABNonEligibleDivCredit = 0.0218;
var ABTaxCreditRate = 0.1;

//BC assumptions
var BCBracket1 = 41725;
var BCBracket2 = 83451;
var BCBracket3 = 95812;
var BCBracket4 = 116344;
var BCBracket5 = 157748;
var BCBracket6 = 220000;
var BCRate1 = 0.0506;
var BCRate2 = 0.077;
var BCRate3 = 0.105;
var BCRate4 = 0.1229;
var BCRate5 = 0.147;
var BCRate6 = 0.168;
var BCRate7 = 0.205;
var BCPersonalAmount = 10949;
var BCEligibleDivCredit = 0.12;
var BCNonEligibleDivCredit = 0.0196;
var BCTaxCreditRate = 0.0506;

//MB assumptions
var MBBracket1 = 33389;
var MBBracket2 = 72164;
var MBRate1 = 0.108;
var MBRate2 = 0.1275;
var MBRate3 = 0.174;
var MBPersonalAmount = 9838;
var MBEligibleDivCredit = 0.08;
var MBNonEligibleDivCredit = 0.007835;
var MBTaxCreditRate = 0.108;

//NB assumptions
var NBBracket1 = 43401;
var NBBracket2 = 86803;
var NBBracket3 = 141122;
var NBBracket4 = 160776;
var NBRate1 = 0.0968;
var NBRate2 = 0.1482;
var NBRate3 = 0.1652;
var NBRate4 = 0.1784;
var NBRate5 = 0.203;
var NBPersonalAmount = 10459;
var NBEligibleDivCredit = 0.14;
var NBNonEligibleDivCredit = 0.0275;
var NBTaxCreditRate = 0.0968;

//NL assumptions
var NLBracket1 = 37929;
var NLBracket2 = 75858;
var NLBracket3 = 135432;
var NLBracket4 = 189604;
var NLRate1 = 0.087;
var NLRate2 = 0.145;
var NLRate3 = 0.158;
var NLRate4 = 0.173;
var NLRate5 = 0.183;
var NLPersonalAmount = 9498;
var NLEligibleDivCredit = 0.054;
var NLNonEligibleDivCredit = 0.035;
var NLTaxCreditRate = 0.087;

//NT assumptions
var NTBracket1 = 43957;
var NTBracket2 = 87916;
var NTBracket3 = 142932;
var NTRate1 = 0.059;
var NTRate2 = 0.086;
var NTRate3 = 0.122;
var NTRate4 = 0.1405;
var NTPersonalAmount = 15093;
var NTEligibleDivCredit = 0.115;
var NTNonEligibleDivCredit = 0.06;
var NTTaxCreditRate = 0.059;

//NS assumptions
var NSBracket1 = 29590;
var NSBracket2 = 59180;
var NSBracket3 = 93000;
var NSBracket4 = 150000;
var NSRate1 = 0.0879;
var NSRate2 = 0.1495;
var NSRate3 = 0.1667;
var NSRate4 = 0.175;
var NSRate5 = 0.21;
var NSPersonalAmount = 8481;
var NSEnhancedPersonalAmount = 0;
var NSTotalPersonalAmount = 0;
var NSEligibleDivCredit = 0.0885;
var NSNonEligibleDivCredit = 0.0299;
var NSTaxCreditRate = 0.0879;

//NU assumptions
var NUBracket1 = 46277;
var NUBracket2 = 92555;
var NUBracket3 = 150473;
var NURate1 = 0.04;
var NURate2 = 0.07;
var NURate3 = 0.09;
var NURate4 = 0.115;
var NUPersonalAmount = 16304;
var NUEligibleDivCredit = 0.0551;
var NUNonEligibleDivCredit = 0.0261;
var NUTaxCreditRate = 0.04;

//ON assumptions
var ONBracket1 = 44740;
var ONBracket2 = 89482;
var ONBracket3 = 150000;
var ONBracket4 = 220000;
var ONRate1 = 0.0505;
var ONRate2 = 0.0915;
var ONRate3 = 0.1116;
var ONRate4 = 0.1216;
var ONRate5 = 0.1316;
var ONPersonalAmount = 10783;
var ONEligibleDivCredit = 0.1;
var ONNonEligibleDivCredit = 0.029863;
var ONTaxCreditRate = 0.0505;

var ONSurtax1 = 4830;
var ONSurtax2 = 6182;
var ONSurtax1Rate = 0.2;
var ONSurtax2Rate = 0.36;

//PE assumptions
var PEBracket1 = 31984;
var PEBracket2 = 63969;
var PERate1 = 0.098;
var PERate2 = 0.138;
var PERate3 = 0.167;
var PEPersonalAmount = 10000;
var PEEligibleDivCredit = 0.105;
var PENonEligibleDivCredit = 0.0274;
var PETaxCreditRate = 0.098;

var PESurtax1 = 12500;
var PESurtax1Rate = 0.1;

//QC assumptions
var QCBracket1 = 44545;
var QCBracket2 = 89080;
var QCBracket3 = 108390;
var QCRate1 = 0.15;
var QCRate2 = 0.2;
var QCRate3 = 0.24;
var QCRate4 = 0.2575;
var QCPersonalAmount = 15532;
var QCEligibleDivCredit = 0.117;
var QCNonEligibleDivCredit = 0.0477;
var QCTaxCreditRate = 0.15;

//SK assumptions
var SKBracket1 = 45225;
var SKBracket2 = 129214;
var SKRate1 = 0.105;
var SKRate2 = 0.125;
var SKRate3 = 0.145;
var SKPersonalAmount = 16065;
var SKEligibleDivCredit = 0.11;
var SKNonEligibleDivCredit = 0.03362;
var SKTaxCreditRate = 0.105;

//YT assumptions
var YTBracket1 = 48535;
var YTBracket2 = 97069;
var YTBracket3 = 150473;
var YTBracket4 = 500000;
var YTRate1 = 0.064;
var YTRate2 = 0.09;
var YTRate3 = 0.109;
var YTRate4 = 0.128;
var YTRate5 = 0.15;
var YTPersonalAmount = 12298;
var YTEligibleDivCredit = 0.1202;
var YTNonEligibleDivCredit = 0.023;
var YTTaxCreditRate = 0.064;

function calculateCPP(employmentIncome) {
    //CPP
    CPPTax = Math.max(
        Math.min(
            (employmentIncome - CPPExemption) * CPPContributionRate,
            CPPMaxContribution
        ),
        0
    );
    enhancedCPPTax = (enhancedCPPRate / CPPContributionRate) * CPPTax;
    baseCPPTax = CPPTax - enhancedCPPTax;
    return baseCPPTax;
}

function calculateQPP(employmentIncome) {
    //QPP
    QPPTax = Math.max(
        Math.min(
            (employmentIncome - QPPExemption) * QPPContributionRate,
            QPPMaxContribution
        ),
        0
    );
    enhancedQPPTax = (enhancedQPPRate / QPPContributionRate) * QPPTax;
    baseQPPTax = QPPTax - enhancedQPPTax;
    return baseQPPTax;
}

function calculateEI(employmentIncome, quebec = false) {
    // EI (Quebec)
    if (quebec) {
        return (EITaxQC = Math.max(
            Math.min(employmentIncome * EIQCRate, EIQCMax),
            0
        ));
    }

    // EI Rest of Canada
    return (EITaxROC = Math.max(
        Math.min(employmentIncome * EIROCRate, EIROCMax),
        0
    ));
}

function calculateQPIP(employmentIncome) {
    //QPIP
    if (employmentIncome < QPIPExemption) {
        return (QPIPTax = 0);
    } else {
        QPIPTax = Math.min(
            QPIPMaxContribution,
            employmentIncome * QPIPContributionRate
        );
        return QPIPTax;
    }
}

function calculateOHIP(totalTaxableIncome) {
    //OHIP
    if (totalTaxableIncome < 20000) {
        OHIPContribution = 0;
    } else if (totalTaxableIncome < 25000) {
        OHIPContribution = (totalTaxableIncome - 20000) * 0.06;
    } else if (totalTaxableIncome < 36000) {
        OHIPContribution = 300;
    } else if (totalTaxableIncome < 38500) {
        OHIPContribution = 300 + (totalTaxableIncome - 36000) * 0.06;
    } else if (totalTaxableIncome < 48000) {
        OHIPContribution = 450;
    } else if (totalTaxableIncome < 48600) {
        OHIPContribution = 450 + (totalTaxableIncome - 48000) * 0.25;
    } else if (totalTaxableIncome < 72000) {
        OHIPContribution = 600;
    } else if (totalTaxableIncome < 72600) {
        OHIPContribution = 600 + (totalTaxableIncome - 72000) * 0.25;
    } else if (totalTaxableIncome < 200000) {
        OHIPContribution = 750;
    } else if (totalTaxableIncome < 200600) {
        OHIPContribution = 750 + (totalTaxableIncome - 200000) * 0.25;
    } else {
        OHIPContribution = 900;
    }
    return OHIPContribution;
}

function calculateFedTaxes(totalTaxableIncome, quebec = false) {
    //Federal Rest of Canada
    var fedBracket1Amount = 0;
    var fedBracket2Amount = 0;
    var fedBracket3Amount = 0;
    var fedBracket4Amount = 0;
    var fedBracket5Amount = 0;

    var fedBracket1Tax = 0;
    var fedBracket2Tax = 0;
    var fedBracket3Tax = 0;
    var fedBracket4Tax = 0;
    var fedBracket5Tax = 0;

    fedBracket1Amount = Math.min(
        Math.max(0, totalTaxableIncome),
        federalBracket1
    );
    fedBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), federalBracket2) -
        fedBracket1Amount;
    fedBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), federalBracket3) -
        fedBracket1Amount -
        fedBracket2Amount;
    fedBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), federalBracket4) -
        fedBracket1Amount -
        fedBracket2Amount -
        fedBracket3Amount;
    fedBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        fedBracket1Amount -
        fedBracket2Amount -
        fedBracket3Amount -
        fedBracket4Amount;

    fedBracket1Tax = fedBracket1Amount * federalRate1;
    fedBracket2Tax = fedBracket2Amount * federalRate2;
    fedBracket3Tax = fedBracket3Amount * federalRate3;
    fedBracket4Tax = fedBracket4Amount * federalRate4;
    fedBracket5Tax = fedBracket5Amount * federalRate5;

    var fedTaxSubtotal =
        fedBracket1Tax +
        fedBracket2Tax +
        fedBracket3Tax +
        fedBracket4Tax +
        fedBracket5Tax;

    enhancedBPA =
        maxEnhancedBPA -
        maxEnhancedBPA *
            Math.min(
                1,
                Math.max(
                    0,
                    (totalTaxableIncome - enhancedBPAThresholdStart) /
                        (enhancedBPAThresholdEnd - enhancedBPAThresholdStart)
                )
            );

    totalFederalPersonalAmount = baseFederalPersonalAmount + enhancedBPA;

    // Federal (Quebec)
    if (quebec) {
        var fedTaxCreditsQC =
            (totalFederalPersonalAmount +
                calculateQPP(totalTaxableIncome) +
                calculateQPIP(totalTaxableIncome) +
                calculateEI(totalTaxableIncome, true) +
                federalEmploymentAmount) *
                federalTaxCreditRate +
            eligibleDividends *
                (1 + eligibleGrossUp) *
                federalEligibleDivCredit +
            nonEligibleDividends *
                (1 + nonEligibleGrossUp) *
                federalNonEligibleDivCredit;

        federalTaxQC =
            Math.max(fedTaxSubtotal - fedTaxCreditsQC, 0) *
            (1 - QCAbatementRate);

        return federalTaxQC;
    }

    // Federal (Rest of Canada)
    var fedTaxCredits =
        (totalFederalPersonalAmount +
            calculateCPP(totalTaxableIncome) +
            calculateEI(totalTaxableIncome) +
            federalEmploymentAmount) *
            federalTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * federalEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            federalNonEligibleDivCredit;

    federalTaxROC = Math.max(fedTaxSubtotal - fedTaxCredits, 0);
    return federalTaxROC;
}

function calculateAB(totalTaxableIncome) {
    //AB Provincial
    var ABTax = 0;
    var ABBracket1Amount = 0;
    var ABBracket2Amount = 0;
    var ABBracket3Amount = 0;
    var ABBracket4Amount = 0;
    var ABBracket5Amount = 0;

    var ABBracket1Tax = 0;
    var ABBracket2Tax = 0;
    var ABBracket3Tax = 0;
    var ABBracket4Tax = 0;
    var ABBracket5Tax = 0;

    ABBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), ABBracket1);
    ABBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), ABBracket2) -
        ABBracket1Amount;
    ABBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), ABBracket3) -
        ABBracket1Amount -
        ABBracket2Amount;
    ABBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), ABBracket4) -
        ABBracket1Amount -
        ABBracket2Amount -
        ABBracket3Amount;
    ABBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        ABBracket1Amount -
        ABBracket2Amount -
        ABBracket3Amount -
        ABBracket4Amount;

    ABBracket1Tax = ABBracket1Amount * ABRate1;
    ABBracket2Tax = ABBracket2Amount * ABRate2;
    ABBracket3Tax = ABBracket3Amount * ABRate3;
    ABBracket4Tax = ABBracket4Amount * ABRate4;
    ABBracket5Tax = ABBracket5Amount * ABRate5;

    var ABTaxSubtotal =
        ABBracket1Tax +
        ABBracket2Tax +
        ABBracket3Tax +
        ABBracket4Tax +
        ABBracket5Tax;

    var ABTaxCredits =
        (ABPersonalAmount + baseCPPTax + EITaxROC) * ABTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * ABEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            ABNonEligibleDivCredit;

    ABTax = Math.max(ABTaxSubtotal - ABTaxCredits, 0);
    return ABTax;
}

function calculateBC(totalTaxableIncome) {
    //BC Provincial
    var BCTax = 0;

    var BCBracket1Amount = 0;
    var BCBracket2Amount = 0;
    var BCBracket3Amount = 0;
    var BCBracket4Amount = 0;
    var BCBracket5Amount = 0;
    var BCBracket6Amount = 0;
    var BCBracket7Amount = 0;

    var BCBracket1Tax = 0;
    var BCBracket2Tax = 0;
    var BCBracket3Tax = 0;
    var BCBracket4Tax = 0;
    var BCBracket5Tax = 0;
    var BCBracket6Tax = 0;
    var BCBracket7Tax = 0;

    BCBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), BCBracket1);
    BCBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), BCBracket2) -
        BCBracket1Amount;
    BCBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), BCBracket3) -
        BCBracket1Amount -
        BCBracket2Amount;
    BCBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), BCBracket4) -
        BCBracket1Amount -
        BCBracket2Amount -
        BCBracket3Amount;
    BCBracket5Amount =
        Math.min(Math.max(0, totalTaxableIncome), BCBracket5) -
        BCBracket1Amount -
        BCBracket2Amount -
        BCBracket3Amount -
        BCBracket4Amount;
    BCBracket6Amount =
        Math.min(Math.max(0, totalTaxableIncome), BCBracket6) -
        BCBracket1Amount -
        BCBracket2Amount -
        BCBracket3Amount -
        BCBracket4Amount -
        BCBracket5Amount;
    BCBracket7Amount =
        Math.max(0, totalTaxableIncome) -
        BCBracket1Amount -
        BCBracket2Amount -
        BCBracket3Amount -
        BCBracket4Amount -
        BCBracket5Amount -
        BCBracket6Amount;

    BCBracket1Tax = BCBracket1Amount * BCRate1;
    BCBracket2Tax = BCBracket2Amount * BCRate2;
    BCBracket3Tax = BCBracket3Amount * BCRate3;
    BCBracket4Tax = BCBracket4Amount * BCRate4;
    BCBracket5Tax = BCBracket5Amount * BCRate5;
    BCBracket6Tax = BCBracket6Amount * BCRate6;
    BCBracket7Tax = BCBracket7Amount * BCRate7;

    var BCTaxSubtotal =
        BCBracket1Tax +
        BCBracket2Tax +
        BCBracket3Tax +
        BCBracket4Tax +
        BCBracket5Tax +
        BCBracket6Tax +
        BCBracket7Tax;

    var BCTaxCredits =
        (BCPersonalAmount + baseCPPTax + EITaxROC) * BCTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * BCEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            BCNonEligibleDivCredit;

    BCTax = Math.max(BCTaxSubtotal - BCTaxCredits, 0);
    return BCTax;
}

function calculateMB(totalTaxableIncome) {
    //MB Provincial
    var MBTax = 0;

    var MBBracket1Amount = 0;
    var MBBracket2Amount = 0;
    var MBBracket3Amount = 0;

    var MBBracket1Tax = 0;
    var MBBracket2Tax = 0;
    var MBBracket3Tax = 0;

    MBBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), MBBracket1);
    MBBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), MBBracket2) -
        MBBracket1Amount;
    MBBracket3Amount =
        Math.max(0, totalTaxableIncome) - MBBracket1Amount - MBBracket2Amount;

    MBBracket1Tax = MBBracket1Amount * MBRate1;
    MBBracket2Tax = MBBracket2Amount * MBRate2;
    MBBracket3Tax = MBBracket3Amount * MBRate3;

    var MBTaxSubtotal = MBBracket1Tax + MBBracket2Tax + MBBracket3Tax;

    var MBTaxCredits =
        (MBPersonalAmount + baseCPPTax + EITaxROC) * MBTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * MBEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            MBNonEligibleDivCredit;

    MBTax = Math.max(MBTaxSubtotal - MBTaxCredits, 0);
    return MBTax;
}

function calculateNB(totalTaxableIncome) {
    //NB Provincial
    var NBTax = 0;

    var NBBracket1Amount = 0;
    var NBBracket2Amount = 0;
    var NBBracket3Amount = 0;
    var NBBracket4Amount = 0;
    var NBBracket5Amount = 0;

    var NBBracket1Tax = 0;
    var NBBracket2Tax = 0;
    var NBBracket3Tax = 0;
    var NBBracket4Tax = 0;
    var NBBracket5Tax = 0;

    NBBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), NBBracket1);
    NBBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), NBBracket2) -
        NBBracket1Amount;
    NBBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), NBBracket3) -
        NBBracket1Amount -
        NBBracket2Amount;
    NBBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), NBBracket4) -
        NBBracket1Amount -
        NBBracket2Amount -
        NBBracket3Amount;
    NBBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        NBBracket1Amount -
        NBBracket2Amount -
        NBBracket3Amount -
        NBBracket4Amount;

    NBBracket1Tax = NBBracket1Amount * NBRate1;
    NBBracket2Tax = NBBracket2Amount * NBRate2;
    NBBracket3Tax = NBBracket3Amount * NBRate3;
    NBBracket4Tax = NBBracket4Amount * NBRate4;
    NBBracket5Tax = NBBracket5Amount * NBRate5;

    var NBTaxSubtotal =
        NBBracket1Tax +
        NBBracket2Tax +
        NBBracket3Tax +
        NBBracket4Tax +
        NBBracket5Tax;

    var NBTaxCredits =
        (NBPersonalAmount + baseCPPTax + EITaxROC) * NBTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * NBEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            NBNonEligibleDivCredit;

    NBTax = Math.max(NBTaxSubtotal - NBTaxCredits, 0);
    return NBTax;
}

function calculateNL(totalTaxableIncome) {
    //NL Provincial
    var NLTax = 0;

    var NLBracket1Amount = 0;
    var NLBracket2Amount = 0;
    var NLBracket3Amount = 0;
    var NLBracket4Amount = 0;
    var NLBracket5Amount = 0;

    var NLBracket1Tax = 0;
    var NLBracket2Tax = 0;
    var NLBracket3Tax = 0;
    var NLBracket4Tax = 0;
    var NLBracket5Tax = 0;

    NLBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), NLBracket1);
    NLBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), NLBracket2) -
        NLBracket1Amount;
    NLBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), NLBracket3) -
        NLBracket1Amount -
        NLBracket2Amount;
    NLBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), NLBracket4) -
        NLBracket1Amount -
        NLBracket2Amount -
        NLBracket3Amount;
    NLBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        NLBracket1Amount -
        NLBracket2Amount -
        NLBracket3Amount -
        NLBracket4Amount;

    NLBracket1Tax = NLBracket1Amount * NLRate1;
    NLBracket2Tax = NLBracket2Amount * NLRate2;
    NLBracket3Tax = NLBracket3Amount * NLRate3;
    NLBracket4Tax = NLBracket4Amount * NLRate4;
    NLBracket5Tax = NLBracket5Amount * NLRate5;

    var NLTaxSubtotal =
        NLBracket1Tax +
        NLBracket2Tax +
        NLBracket3Tax +
        NLBracket4Tax +
        NLBracket5Tax;

    var NLTaxCredits =
        (NLPersonalAmount + baseCPPTax + EITaxROC) * NLTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * NLEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            NLNonEligibleDivCredit;

    NLTax = Math.max(NLTaxSubtotal - NLTaxCredits, 0);
    return NLTax;
}

function calculateNT(totalTaxableIncome) {
    //NT Territorial
    var NTTax = 0;

    var NTBracket1Amount = 0;
    var NTBracket2Amount = 0;
    var NTBracket3Amount = 0;
    var NTBracket4Amount = 0;

    var NTBracket1Tax = 0;
    var NTBracket2Tax = 0;
    var NTBracket3Tax = 0;
    var NTBracket4Tax = 0;

    NTBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), NTBracket1);
    NTBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), NTBracket2) -
        NTBracket1Amount;
    NTBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), NTBracket3) -
        NTBracket1Amount -
        NTBracket2Amount;
    NTBracket4Amount =
        Math.max(0, totalTaxableIncome) -
        NTBracket1Amount -
        NTBracket2Amount -
        NTBracket3Amount;

    NTBracket1Tax = NTBracket1Amount * NTRate1;
    NTBracket2Tax = NTBracket2Amount * NTRate2;
    NTBracket3Tax = NTBracket3Amount * NTRate3;
    NTBracket4Tax = NTBracket4Amount * NTRate4;

    var NTTaxSubtotal =
        NTBracket1Tax + NTBracket2Tax + NTBracket3Tax + NTBracket4Tax;

    var NTTaxCredits =
        (NTPersonalAmount + baseCPPTax + EITaxROC) * NTTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * NTEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            NTNonEligibleDivCredit;

    NTTax = Math.max(NTTaxSubtotal - NTTaxCredits, 0);
    return NTTax;
}

function calculateNS(totalTaxableIncome) {
    //NS Provincial
    var NSTax = 0;

    var NSBracket1Amount = 0;
    var NSBracket2Amount = 0;
    var NSBracket3Amount = 0;
    var NSBracket4Amount = 0;
    var NSBracket5Amount = 0;

    var NSBracket1Tax = 0;
    var NSBracket2Tax = 0;
    var NSBracket3Tax = 0;
    var NSBracket4Tax = 0;
    var NSBracket5Tax = 0;

    NSBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), NSBracket1);
    NSBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), NSBracket2) -
        NSBracket1Amount;
    NSBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), NSBracket3) -
        NSBracket1Amount -
        NSBracket2Amount;
    NSBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), NSBracket4) -
        NSBracket1Amount -
        NSBracket2Amount -
        NSBracket3Amount;
    NSBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        NSBracket1Amount -
        NSBracket2Amount -
        NSBracket3Amount -
        NSBracket4Amount;

    NSBracket1Tax = NSBracket1Amount * NSRate1;
    NSBracket2Tax = NSBracket2Amount * NSRate2;
    NSBracket3Tax = NSBracket3Amount * NSRate3;
    NSBracket4Tax = NSBracket4Amount * NSRate4;
    NSBracket5Tax = NSBracket5Amount * NSRate5;

    var NSTaxSubtotal =
        NSBracket1Tax +
        NSBracket2Tax +
        NSBracket3Tax +
        NSBracket4Tax +
        NSBracket5Tax;

    NSEnhancedPersonalAmount = Math.max(
        0,
        3000 - Math.max(0, (totalTaxableIncome - 25000) * 0.06)
    );
    NSTotalPersonalAmount = NSPersonalAmount + NSEnhancedPersonalAmount;

    var NSTaxCredits =
        (NSTotalPersonalAmount + baseCPPTax + EITaxROC) * NSTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * NSEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            NSNonEligibleDivCredit;

    NSTax = Math.max(NSTaxSubtotal - NSTaxCredits, 0);
    return NSTax;
}

function calculateNU(totalTaxableIncome) {
    //NU Territorial
    var NUTax = 0;

    var NUBracket1Amount = 0;
    var NUBracket2Amount = 0;
    var NUBracket3Amount = 0;
    var NUBracket4Amount = 0;

    var NUBracket1Tax = 0;
    var NUBracket2Tax = 0;
    var NUBracket3Tax = 0;
    var NUBracket4Tax = 0;

    NUBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), NUBracket1);
    NUBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), NUBracket2) -
        NUBracket1Amount;
    NUBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), NUBracket3) -
        NUBracket1Amount -
        NUBracket2Amount;
    NUBracket4Amount =
        Math.max(0, totalTaxableIncome) -
        NUBracket1Amount -
        NUBracket2Amount -
        NUBracket3Amount;

    NUBracket1Tax = NUBracket1Amount * NURate1;
    NUBracket2Tax = NUBracket2Amount * NURate2;
    NUBracket3Tax = NUBracket3Amount * NURate3;
    NUBracket4Tax = NUBracket4Amount * NURate4;

    var NUTaxSubtotal =
        NUBracket1Tax + NUBracket2Tax + NUBracket3Tax + NUBracket4Tax;

    var NUTaxCredits =
        (NUPersonalAmount + baseCPPTax + EITaxROC) * NUTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * NUEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            NUNonEligibleDivCredit;

    NUTax = Math.max(NUTaxSubtotal - NUTaxCredits, 0);
    return NUTax;
}

function calculateON(totalTaxableIncome) {
    //ON Provincial
    var ONTax = 0;

    var ONBracket1Amount = 0;
    var ONBracket2Amount = 0;
    var ONBracket3Amount = 0;
    var ONBracket4Amount = 0;
    var ONBracket5Amount = 0;

    var ONBracket1Tax = 0;
    var ONBracket2Tax = 0;
    var ONBracket3Tax = 0;
    var ONBracket4Tax = 0;
    var ONBracket5Tax = 0;

    ONBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), ONBracket1);
    ONBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), ONBracket2) -
        ONBracket1Amount;
    ONBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), ONBracket3) -
        ONBracket1Amount -
        ONBracket2Amount;
    ONBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), ONBracket4) -
        ONBracket1Amount -
        ONBracket2Amount -
        ONBracket3Amount;
    ONBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        ONBracket1Amount -
        ONBracket2Amount -
        ONBracket3Amount -
        ONBracket4Amount;

    ONBracket1Tax = ONBracket1Amount * ONRate1;
    ONBracket2Tax = ONBracket2Amount * ONRate2;
    ONBracket3Tax = ONBracket3Amount * ONRate3;
    ONBracket4Tax = ONBracket4Amount * ONRate4;
    ONBracket5Tax = ONBracket5Amount * ONRate5;

    var ONTaxCredits1 =
        (ONPersonalAmount + baseCPPTax + EITaxROC) * ONTaxCreditRate;

    var ONTaxBeforeSurtax =
        ONBracket1Tax +
        ONBracket2Tax +
        ONBracket3Tax +
        ONBracket4Tax +
        ONBracket5Tax -
        ONTaxCredits1;

    var ONSurtax =
        Math.max(0, ONTaxBeforeSurtax - ONSurtax1) * ONSurtax1Rate +
        Math.max(0, ONTaxBeforeSurtax - ONSurtax2) * ONSurtax2Rate;

    var ONTaxCredits2 =
        eligibleDividends * (1 + eligibleGrossUp) * ONEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            ONNonEligibleDivCredit;

    var OHIPContribution = calculateOHIP(totalTaxableIncome);

    ONTax =
        Math.max(ONTaxBeforeSurtax + ONSurtax - ONTaxCredits2, 0) +
        OHIPContribution;
    return ONTax;
}

function calculatePE(totalTaxableIncome) {
    //PE Provincial
    var PETax = 0;

    var PEBracket1Amount = 0;
    var PEBracket2Amount = 0;
    var PEBracket3Amount = 0;

    var PEBracket1Tax = 0;
    var PEBracket2Tax = 0;
    var PEBracket3Tax = 0;

    PEBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), PEBracket1);
    PEBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), PEBracket2) -
        PEBracket1Amount;
    PEBracket3Amount =
        Math.max(0, totalTaxableIncome) - PEBracket1Amount - PEBracket2Amount;

    PEBracket1Tax = PEBracket1Amount * PERate1;
    PEBracket2Tax = PEBracket2Amount * PERate2;
    PEBracket3Tax = PEBracket3Amount * PERate3;

    var PETaxSubtotal = PEBracket1Tax + PEBracket2Tax + PEBracket3Tax;

    var PETaxCredits =
        (PEPersonalAmount + baseCPPTax + EITaxROC) * PETaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * PEEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            PENonEligibleDivCredit;

    var PETaxBeforeSurtax = Math.max(PETaxSubtotal - PETaxCredits, 0);

    var PESurtax = Math.max(PETaxBeforeSurtax - PESurtax1, 0) * PESurtax1Rate;

    PETax = PETaxBeforeSurtax + PESurtax;
    return PETax;
}

function calculateQC(totalTaxableIncome) {
    //QC Provincial
    var QCTax = 0;

    var QCBracket1Amount = 0;
    var QCBracket2Amount = 0;
    var QCBracket3Amount = 0;
    var QCBracket4Amount = 0;

    var QCBracket1Tax = 0;
    var QCBracket2Tax = 0;
    var QCBracket3Tax = 0;
    var QCBracket4Tax = 0;

    QCBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), QCBracket1);
    QCBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), QCBracket2) -
        QCBracket1Amount;
    QCBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), QCBracket3) -
        QCBracket1Amount -
        QCBracket2Amount;
    QCBracket4Amount =
        Math.max(0, totalTaxableIncome) -
        QCBracket1Amount -
        QCBracket2Amount -
        QCBracket3Amount;

    QCBracket1Tax = QCBracket1Amount * QCRate1;
    QCBracket2Tax = QCBracket2Amount * QCRate2;
    QCBracket3Tax = QCBracket3Amount * QCRate3;
    QCBracket4Tax = QCBracket4Amount * QCRate4;

    var QCTaxSubtotal =
        QCBracket1Tax + QCBracket2Tax + QCBracket3Tax + QCBracket4Tax;

    var QCTaxCredits =
        QCPersonalAmount * QCTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * QCEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            QCNonEligibleDivCredit;

    QCTax = Math.max(QCTaxSubtotal - QCTaxCredits, 0);
    return QCTax;
}

function calculateSK(totalTaxableIncome) {
    //SK Provincial
    var SKTax = 0;

    var SKBracket1Amount = 0;
    var SKBracket2Amount = 0;
    var SKBracket3Amount = 0;

    var SKBracket1Tax = 0;
    var SKBracket2Tax = 0;
    var SKBracket3Tax = 0;

    SKBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), SKBracket1);
    SKBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), SKBracket2) -
        SKBracket1Amount;
    SKBracket3Amount =
        Math.max(0, totalTaxableIncome) - SKBracket1Amount - SKBracket2Amount;

    SKBracket1Tax = SKBracket1Amount * SKRate1;
    SKBracket2Tax = SKBracket2Amount * SKRate2;
    SKBracket3Tax = SKBracket3Amount * SKRate3;

    var SKTaxSubtotal = SKBracket1Tax + SKBracket2Tax + SKBracket3Tax;

    var SKTaxCredits =
        (SKPersonalAmount + baseCPPTax + EITaxROC) * SKTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * SKEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            SKNonEligibleDivCredit;

    SKTax = Math.max(SKTaxSubtotal - SKTaxCredits, 0);
    return SKTax;
}

function calculateYT(totalTaxableIncome) {
    //YT Territorial
    var YTTax = 0;

    var YTBracket1Amount = 0;
    var YTBracket2Amount = 0;
    var YTBracket3Amount = 0;
    var YTBracket4Amount = 0;
    var YTBracket5Amount = 0;

    var YTBracket1Tax = 0;
    var YTBracket2Tax = 0;
    var YTBracket3Tax = 0;
    var YTBracket4Tax = 0;
    var YTBracket5Tax = 0;

    YTBracket1Amount = Math.min(Math.max(0, totalTaxableIncome), YTBracket1);
    YTBracket2Amount =
        Math.min(Math.max(0, totalTaxableIncome), YTBracket2) -
        YTBracket1Amount;
    YTBracket3Amount =
        Math.min(Math.max(0, totalTaxableIncome), YTBracket3) -
        YTBracket1Amount -
        YTBracket2Amount;
    YTBracket4Amount =
        Math.min(Math.max(0, totalTaxableIncome), YTBracket4) -
        YTBracket1Amount -
        YTBracket2Amount -
        YTBracket3Amount;
    YTBracket5Amount =
        Math.max(0, totalTaxableIncome) -
        YTBracket1Amount -
        YTBracket2Amount -
        YTBracket3Amount -
        YTBracket4Amount;

    YTBracket1Tax = YTBracket1Amount * YTRate1;
    YTBracket2Tax = YTBracket2Amount * YTRate2;
    YTBracket3Tax = YTBracket3Amount * YTRate3;
    YTBracket4Tax = YTBracket4Amount * YTRate4;
    YTBracket5Tax = YTBracket5Amount * YTRate5;

    var YTTaxSubtotal =
        YTBracket1Tax +
        YTBracket2Tax +
        YTBracket3Tax +
        YTBracket4Tax +
        YTBracket5Tax;

    var YTTaxCredits =
        (YTPersonalAmount + baseCPPTax + EITaxROC + federalEmploymentAmount) *
            YTTaxCreditRate +
        eligibleDividends * (1 + eligibleGrossUp) * YTEligibleDivCredit +
        nonEligibleDividends *
            (1 + nonEligibleGrossUp) *
            YTNonEligibleDivCredit;

    YTTax = Math.max(YTTaxSubtotal - YTTaxCredits, 0);
    return YTTax;
}

const provincialTaxFunctions = {
    AB: calculateAB,
    BC: calculateBC,
    MB: calculateMB,
    NB: calculateNB,
    NL: calculateNL,
    NT: calculateNT,
    NS: calculateNS,
    NU: calculateNU,
    ON: calculateON,
    PE: calculatePE,
    QC: calculateQC,
    SK: calculateSK,
    YT: calculateYT,
};

var labelArray = [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NT',
    'NS',
    'NU',
    'ON',
    'PE',
    'QC',
    'SK',
    'YT',
];

function calculateNetIncome(totalTaxableIncome, province) {
    if (province == 'QC') {
        return (
            totalTaxableIncome -
            calculateFedTaxes(totalTaxableIncome, true) -
            provincialTaxFunctions[province](totalTaxableIncome) -
            calculateQPP(totalTaxableIncome) -
            calculateEI(totalTaxableIncome, true) -
            calculateQPIP(totalTaxableIncome)
        );
    }
    return (
        totalTaxableIncome -
        calculateFedTaxes(totalTaxableIncome) -
        provincialTaxFunctions[province](totalTaxableIncome) -
        calculateCPP(totalTaxableIncome) -
        calculateEI(totalTaxableIncome)
    );
}

module.exports = {
    calculateNetIncome,
};
