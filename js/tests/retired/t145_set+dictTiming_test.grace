import "gUnit" as gU
import "mapSet" as mapSet
import "fastDict" as fastDict
import "mapDict" as mapDict
import "stringMap" as stringMap
import "collections" as collections
import "unicode" as unicode
import "random" as random
import "sys" as sys

def timingTest = object {
    class forMethod(meth) {
        inherit gU.testCaseNamed(meth)

        method measureSetPerformance(m, title) {
            def n = 1000
            def keys = randomKeys(n) length 8;
            def startTime = sys.elapsedTime
            keys.do { k ->
                m.add(k)
            }
            def numEntries = m.size
            keys.do { k ->
                def v = m.contains(k)
                assert (v) description "entry {k} not present"
            }
            keys.do { k ->
                m.remove(k) ifAbsent {}
                deny (m.contains(k)) description "entry {k} present after remove"
            }
            keys.do { k ->
                m.add(k)
            }
            def duration = sys.elapsedTime - startTime
            print "{title}: elapsed time for {numEntries} entries is {duration}s"
            // print "{n - numEntries} duplicate entries"
        }

        method testPerformanceOfCollectionsSet {
            measureSetPerformance(collections.set.empty, "collections.set")
        }

        method testPerformanceOfMapSet {
            measureSetPerformance(mapSet.set.empty, "mapSet.set")
        }

        method measureDictionaryPerformance(m, title) {
            def n = 1000
            def keys = randomKeys(n) length 8;
            def startTime = sys.elapsedTime
            keys.keysAndValuesDo { i, k ->
               m.at(k)put(i)
            }
            def numEntries = m.size
            keys.do { k ->
               def v = m.at(k)
               assert (keys.at(v) == k) description "wrong value found for {k}"
            }
            keys.do { k ->
                m.removeKey(k) ifAbsent {}
                deny (m.containsKey(k)) description "Key {k} present after remove"
            }
            keys.keysAndValuesDo { i, k ->
               m.at(k)put(i)
            }
            def duration = sys.elapsedTime - startTime
            print "{title}: elapsed time for {numEntries} keys is {duration}s"
            // print "{n - numEntries} duplicate keys"
        }

        //method testPerformanceOfCollectionsDicitonary {
        //    measureDictionaryPerformance(collections.dictionary.empty, "collections.dictionary")
        //}

        method testPerformanceOfMapDict {
            measureDictionaryPerformance(mapDict.dictionary.empty, "mapDict.dictionary")
        }

        method testPerformanceOfFastDict {
            measureDictionaryPerformance(fastDict.dictionary.empty, "fastDict.dictionary")
        }
        method testPerformanceOfStringMap {
            measureDictionaryPerformance(stringMap.dictionary.empty, "stringMap.dictionary")
        }

        method randomKeys(n) length(len)  {
            def base = "A".ord
            def result = list.empty
            (1..n).do { ix ->
                var s := ""
                repeat (len) times {
                    def ch = (random.between0And1 * 26).truncated + base
                    s := s ++ unicode.create(ch)
                }
                result.add(s)
            }
            result
        }
        method do_not_testHashCodeDuplicates {
            // this method, if requested, will print a randomized selection
            // of strings that have the same hash.
            def twoLetterKeys = randomKeys(26*26*26*50) length 4
            def hashCodeDict = mapDict.dictionary.empty
            twoLetterKeys.do { each ->
                def h = each.hash
                def collisions = hashCodeDict.at(h) ifAbsent { mapSet.set.empty }
                collisions.add(each)
                hashCodeDict.at (h) put (collisions)
            }
            def collisions = hashCodeDict.filter { each -> each.size > 5 }
                                         .sortedBy { a,b -> a.size - b.size }
            print(collisions)
            deny (collisions.isEmpty) description "no collisions in hashcodes"
        }
    }
}


def perfTests = gU.testSuite.fromTestMethodsIn(timingTest)
perfTests.name := "set and dictionary timing tests"
perfTests.runAndPrintResults

gU.exit

//    two character hash collisions
//    [set [OA, NX], set [CY, DB], set [NC, MZ], set [OB, NY], set [VC, UZ], set [XY, YB], set [RC, QZ], set [XZ, YC], set [MC, LZ], set [OZ, PC], set [MA, LX], set [FC, EZ], set [OY, PB], set [CZ, DC], set [KA, JX], set [UX, VA], set [DY, EB], set [FY, GB], set [XA, WX], set [HX, IA], set [YA, XX], set [EC, DZ], set [VB, UY], set [SZ, TC], set [KB, JY], set [RB, QY], set [EX, FA], set [LB, KY], set [PY, QB], set [VZ, WC], set [OC, NZ], set [WA, VX], set [PX, QA], set [IB, HY], set [LC, KZ], set [EY, FB], set [CA, BX], set [TZ, UC], set [GA, FX], set [KC, JZ], set [CC, BZ], set [IY, JB], set [NA, MX], set [TX, UA], set [DA, CX], set [AX, BA], set [AZ, BC], set [TB, SY], set [WZ, XC], set [RY, SB], set [GX, HA], set [DX, EA], set [NB, MY], set [YZ, ZC], set [PZ, QC], set [LA, KX], set [ZB, YY], set [LY, MB], set [BY, CB], set [QX, RA], set [IZ, JC], set [WY, XB], set [FZ, GC], set [IC, HZ], set [HC, GZ], set [WB, VY], set [SA, RX], set [UB, TY], set [OX, PA], set [RZ, SC], set [TA, SX]]

//    Three character hash collisions
//    [set [OYB, PAY, OXY, PBB], set [CZC, CYZ, DBZ, DCC], set [QBZ, PYZ, PZC, QCC], set [VAX, UYA, UXX, VBA], set [NXX, NYA, OBA, OAX], set [GYZ, GZC, HBZ, HCC], set [XBX, WZA, XCA, WYX], set [UBB, TXY, TYB, UAY], set [JZC, KBZ, JYZ, KCC], set [KYA, KXX, LAX, LBA], set [PBC, PAZ, OYC, OXZ], set [VYY, WBY, VZB, WCB], set [UYC, VAZ, VBC, UXZ], set [VCC, VBZ, UYZ, UZC], set [WZC, WYZ, XBZ, XCC], set [YCC, YBZ, XYZ, XZC], set [XBB, WYB, WXY, XAY], set [SYB, TAY, SXY, TBB], set [IBY, HYY, ICB, HZB], set [XYA, XXX, YAX, YBA], set [JCB, IZB, IYY, JBY], set [QXZ, RAZ, RBC, QYC], set [TAX, SXX, TBA, SYA], set [ICC, IBZ, HYZ, HZC], set [LCC, KZC, LBZ, KYZ], set [JZB, KBY, JYY, KCB], set [YZC, ZBZ, YYZ, ZCC], set [GYB, HBB, GXY, HAY], set [YYY, ZCB, ZBY, YZB], set [DYA, EAX, DXX, EBA], set [SCC, RZC, RYZ, SBZ], set [HYA, IAX, HXX, IBA], set [FXY, GAY, FYB, GBB], set [TXX, UAX, UBA, TYA], set [UBX, TZA, TYX, UCA], set [CCB, BZB, CBY, BYY], set [AXX, BBA, AYA, BAX], set [EXZ, FBC, FAZ, EYC], set [UCC, TYZ, TZC, UBZ], set [IBB, HXY, HYB, IAY], set [ZBX, YYX, YZA, ZCA], set [OXX, OYA, PBA, PAX], set [MBZ, LZC, MCC, LYZ], set [TBX, TCA, SZA, SYX], set [NCA, NBX, MYX, MZA], set [RYB, SBB, SAY, RXY], set [XYX, XZA, YCA, YBX], set [NYY, OBY, OCB, NZB], set [KYX, LBX, KZA, LCA], set [QAX, PXX, PYA, QBA], set [FBB, EXY, EYB, FAY], set [KXY, LAY, LBB, KYB], set [MXY, NBB, NAY, MYB], set [PXZ, QAZ, QBC, PYC], set [CBZ, CCC, BZC, BYZ], set [PBZ, PCC, OYZ, OZC], set [SBY, RYY, RZB, SCB], set [RAY, QXY, QYB, RBB], set [CXZ, DBC, DAZ, CYC], set [XXZ, XYC, YAZ, YBC], set [BCC, AZC, AYZ, BBZ], set [VXX, WAX, WBA, VYA], set [XZB, YCB, YBY, XYY], set [QBY, PYY, PZB, QCB], set [DZA, DYX, EBX, ECA], set [LBC, LAZ, KYC, KXZ], set [TAZ, SYC, TBC, SXZ], set [GYA, HBA, GXX, HAX], set [JYB, KBB, JXY, KAY], set [KBX, JZA, KCA, JYX], set [PYB, PXY, QAY, QBB], set [BCA, BBX, AYX, AZA], set [NAX, MYA, MXX, NBA], set [PZA, QCA, QBX, PYX], set [AYY, AZB, BBY, BCB], set [WCA, WBX, VZA, VYX], set [FBX, EYX, FCA, EZA], set [CXX, CYA, DBA, DAX], set [OYX, PCA, OZA, PBX], set [QYZ, RBZ, RCC, QZC], set [NYC, OAZ, NXZ, OBC], set [RXX, SAX, RYA, SBA], set [MBC, LYC, MAZ, LXZ], set [UYX, VBX, UZA, VCA], set [JAY, JBB, IYB, IXY], set [NXY, OBB, OAY, NYB], set [VXY, WBB, VYB, WAY], set [NBC, NAZ, MYC, MXZ], set [FAX, FBA, EYA, EXX], set [LYB, MAY, LXY, MBB], set [IAZ, IBC, HYC, HXZ], set [SCA, RYX, RZA, SBX], set [RAX, QXX, RBA, QYA], set [QYY, QZB, RBY, RCB], set [AYC, AXZ, BAZ, BBC], set [TCB, SZB, TBY, SYY], set [MBX, MCA, LZA, LYX], set [MAX, LXX, MBA, LYA], set [DCB, DBY, CYY, CZB], set [FYY, GBY, FZB, GCB], set [SZC, SYZ, TBZ, TCC], set [XCB, WYY, WZB, XBY], set [OYY, OZB, PBY, PCB], set [IYZ, IZC, JBZ, JCC], set [MYZ, MZC, NBZ, NCC], set [NCB, MYY, NBY, MZB], set [ZBC, YYC, ZAZ, YXZ], set [FYX, GBX, FZA, GCA], set [UBC, TXZ, TYC, UAZ], set [CAY, BXY, CBB, BYB], set [YXX, YYA, ZBA, ZAX], set [WBZ, WCC, VZC, VYZ], set [GZB, GYY, HBY, HCB], set [DAY, DBB, CYB, CXY], set [GBA, GAX, FXX, FYA], set [VXZ, WAZ, WBC, VYC], set [GZA, HBX, HCA, GYX], set [DZB, ECB, DYY, EBY], set [OCA, NYX, OBX, NZA], set [JXX, KAX, KBA, JYA], set [SAZ, SBC, RXZ, RYC], set [XXY, XYB, YBB, YAY], set [UBY, TZB, UCB, TYY], set [UYY, UZB, VCB, VBY], set [XAX, XBA, WXX, WYA], set [XAZ, WYC, XBC, WXZ], set [JYC, JXZ, KAZ, KBC], set [JCA, JBX, IZA, IYX], set [GXZ, HAZ, GYC, HBC], set [BZA, CBX, BYX, CCA], set [JAZ, IYC, IXZ, JBC], set [GBZ, FZC, FYZ, GCC], set [JAX, IYA, IXX, JBA], set [EAZ, EBC, DYC, DXZ], set [EZB, EYY, FCB, FBY], set [EBZ, DZC, ECC, DYZ], set [LBY, KYY, LCB, KZB], set [ZBB, YXY, ZAY, YYB], set [QYX, RBX, RCA, QZA], set [MCB, MBY, LYY, LZB], set [OBZ, NZC, OCC, NYZ], set [DBX, CYX, CZA, DCA], set [VAY, UYB, UXY, VBB], set [CAX, BXX, CBA, BYA], set [BXZ, CBC, CAZ, BYC], set [BBB, BAY, AXY, AYB], set [DXY, DYB, EAY, EBB], set [GAZ, FYC, FXZ, GBC], set [FBZ, EYZ, EZC, FCC], set [HZA, HYX, IBX, ICA]]

// four-charcter hash collisions
//     set [set [QYYA, QZAX, QZBA, QYXX, RBXX, RCAX, RCBA, RBYA], set [RXXY, SAXY, SAYB, SBBB, RYAY, SBAY, RYBB, RXYB], set [BCBA, AYYA, AYXX, BBYA, BBXX, BCAX, AZAX, AZBA], set [SYBZ, TBCC, TAZC, SXZC, TAYZ, SXYZ, TBBZ, SYCC], set [QYYZ, RBZC, QYZC, RCBZ, RBYZ, RCCC, QZBZ, QZCC], set [KBZC, KBYZ, JZCC, KCBZ, JZBZ, KCCC, JYYZ, JYZC], set [JBYC, IYXZ, IZAZ, JBXZ, IYYC, JCAZ, IZBC, JCBC], set [LZBA, LZAX, MBXX, LYXX, MCAX, LYYA, MBYA, MCBA], set [PAYC, PBBC, PAXZ, OXXZ, OYBC, OYAZ, OXYC, PBAZ], set [VBCA, UYCA, UXYX, VBBX, UYBX, VAYX, UXZA, VAZA], set [NBAX, NAXX, NAYA, MYBA, MXXX, MYAX, MXYA, NBBA], set [WBYB, VZBB, WCAY, VYYB, WBXY, WCBB, VZAY, VYXY], set [GBYB, FZBB, GCBB, FYYB, FYXY, GBXY, FZAY, GCAY], set [BYCA, CAYX, CBCA, CAZA, BXYX, BYBX, BXZA, CBBX], set [OYAY, OXXY, PAXY, OXYB, PBBB, PBAY, PAYB, OYBB], set [CCAY, CCBB, BZBB, CBXY, BYXY, BZAY, CBYB, BYYB], set [EAZC, EBCC, DYBZ, EAYZ, DYCC, EBBZ, DXYZ, DXZC], set [HXYZ, IBCC, HYCC, HXZC, IAZC, IAYZ, IBBZ, HYBZ], set [ZBYZ, YYYZ, ZBZC, YZBZ, YYZC, ZCBZ, ZCCC, YZCC], set [DXZA, DYBX, DXYX, DYCA, EBBX, EAYX, EBCA, EAZA], set [NCAY, MZBB, MYYB, NCBB, MYXY, NBYB, NBXY, MZAY], set [UBCB, TYBY, UAZB, TXYY, TYCB, UBBY, TXZB, UAYY], set [JBBC, IXXZ, IYBC, IXYC, IYAZ, JAYC, JAXZ, JBAZ], set [GYYY, HBYY, HCBY, GYZB, GZCB, HCCB, HBZB, GZBY], set [RAZB, QYBY, QXZB, QYCB, QXYY, RAYY, RBCB, RBBY], set [DYBA, DXYA, EBBA, EAXX, DYAX, EBAX, EAYA, DXXX], set [NYBC, OBBC, NYAZ, OAXZ, OAYC, NXYC, NXXZ, OBAZ], set [IBYZ, IBZC, HYYZ, HYZC, ICCC, HZBZ, HZCC, ICBZ], set [XCCA, WZCA, XCBX, XBYX, WYYX, WYZA, WZBX, XBZA], set [FBAZ, EXYC, EXXZ, EYBC, EYAZ, FAXZ, FBBC, FAYC], set [DCCC, CYZC, CYYZ, CZCC, CZBZ, DBZC, DBYZ, DCBZ], set [OAYZ, NYCC, OAZC, NYBZ, OBBZ, NXYZ, NXZC, OBCC], set [BAXX, AYBA, BBBA, BAYA, BBAX, AXXX, AYAX, AXYA], set [UBYB, UBXY, TZBB, UCBB, UCAY, TYYB, TYXY, TZAY], set [HCBC, GYXZ, HCAZ, GZBC, GYYC, HBYC, HBXZ, GZAZ], set [RZBC, RYYC, RYXZ, SCBC, SCAZ, SBYC, RZAZ, SBXZ], set [NAYZ, MXYZ, NBCC, MYBZ, MYCC, NAZC, MXZC, NBBZ], set [IBXZ, HZAZ, IBYC, HYYC, ICAZ, ICBC, HYXZ, HZBC], set [LAXZ, LBAZ, LBBC, KXXZ, KXYC, LAYC, KYAZ, KYBC], set [PXZC, QBCC, QAYZ, QAZC, QBBZ, PYBZ, PYCC, PXYZ], set [ECBY, DZCB, ECCB, DYZB, DYYY, EBYY, DZBY, EBZB], set [KAXZ, JYBC, KBBC, JXXZ, JXYC, KBAZ, JYAZ, KAYC], set [SAZC, RXYZ, RXZC, RYCC, SBCC, SAYZ, RYBZ, SBBZ], set [LYYX, LZCA, MCBX, MBYX, MCCA, LYZA, MBZA, LZBX], set [PAZC, PAYZ, OYCC, OXZC, PBCC, OYBZ, PBBZ, OXYZ], set [SYBA, SXYA, TBBA, SXXX, TAXX, TBAX, TAYA, SYAX], set [MZCB, MYYY, MYZB, MZBY, NBZB, NCBY, NCCB, NBYY], set [CXZA, DBBX, CXYX, DAZA, CYBX, DBCA, DAYX, CYCA], set [YAXX, XYAX, XXXX, XXYA, YBAX, XYBA, YBBA, YAYA], set [BYBC, CAYC, CBAZ, BXYC, BXXZ, CBBC, CAXZ, BYAZ], set [AXZA, BBCA, AYCA, BBBX, AXYX, AYBX, BAZA, BAYX], set [VCBA, VBXX, VCAX, UYYA, UYXX, VBYA, UZBA, UZAX], set [VAYA, UXXX, UYAX, VAXX, VBBA, UXYA, VBAX, UYBA], set [NAYX, MYCA, NAZA, NBBX, NBCA, MXZA, MYBX, MXYX], set [FZBC, FYYC, GCAZ, FYXZ, GBXZ, FZAZ, GCBC, GBYC], set [DAXY, CYAY, DAYB, CXYB, CXXY, DBAY, DBBB, CYBB], set [WXZA, WYCA, XBBX, XBCA, WYBX, WXYX, XAZA, XAYX], set [XYXZ, XZAZ, YCBC, XYYC, XZBC, YCAZ, YBXZ, YBYC], set [CZAX, CZBA, CYXX, DCBA, DBXX, DCAX, DBYA, CYYA], set [UBCA, TXYX, TYCA, UAZA, TYBX, TXZA, UAYX, UBBX], set [FYYX, FZCA, FYZA, GBYX, GCCA, GBZA, FZBX, GCBX], set [SYYY, TCBY, TCCB, TBZB, TBYY, SYZB, SZBY, SZCB], set [TBYX, SZBX, TCCA, TBZA, SYYX, SZCA, SYZA, TCBX], set [UBXX, TZAX, TYYA, TYXX, UCBA, UCAX, TZBA, UBYA], set [HYAX, HXYA, IAYA, HXXX, HYBA, IBAX, IBBA, IAXX], set [TYAX, TXXX, TYBA, UAYA, UAXX, UBAX, TXYA, UBBA], set [UYXZ, UZBC, UZAZ, UYYC, VCAZ, VBXZ, VCBC, VBYC], set [LCAZ, LBYC, KZAZ, LBXZ, KYYC, LCBC, KYXZ, KZBC], set [KXYZ, KYBZ, LBBZ, LAYZ, LBCC, KXZC, KYCC, LAZC], set [IZCB, IYZB, IZBY, IYYY, JBZB, JCCB, JCBY, JBYY], set [ECCC, DYYZ, DZCC, EBYZ, DYZC, ECBZ, EBZC, DZBZ], set [ECBX, EBZA, EBYX, DYZA, ECCA, DZCA, DYYX, DZBX], set [XZCA, YCCA, XYZA, YBZA, YCBX, YBYX, XZBX, XYYX], set [BXXX, BXYA, BYBA, CAXX, BYAX, CAYA, CBAX, CBBA], set [FYCC, FXYZ, GAYZ, FYBZ, GBBZ, FXZC, GAZC, GBCC], set [KXXY, LBBB, KYAY, LAYB, KYBB, LBAY, LAXY, KXYB], set [GCBA, GBXX, FYXX, FZAX, FZBA, GCAX, GBYA, FYYA], set [VXYX, VYCA, WBCA, VXZA, WAYX, VYBX, WBBX, WAZA], set [BAXY, BBBB, AXXY, AYAY, BAYB, AXYB, BBAY, AYBB], set [JYBX, KAYX, KBCA, JXZA, KBBX, JYCA, KAZA, JXYX], set [BYAY, CBAY, CBBB, CAYB, BXXY, BYBB, CAXY, BXYB], set [NCCC, NBZC, MYYZ, MZCC, MYZC, MZBZ, NCBZ, NBYZ], set [FBYA, EZAX, FCAX, FBXX, FCBA, EYXX, EZBA, EYYA], set [QBAY, PXXY, QAYB, PYBB, QAXY, PXYB, QBBB, PYAY]]
