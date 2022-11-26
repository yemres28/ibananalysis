import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { useState } from "react";
import Id1 from "./images/1.png";
import Id2 from "./images/2.png";
import Id3 from "./images/3.png";
import Id4 from "./images/4.png";
import Id5 from "./images/5.png";
import Id6 from "./images/6.png";
import Id7 from "./images/7.png";
import Id8 from "./images/8.png";
import Id9 from "./images/9.png";
import Id10 from "./images/10.png";
import Id11 from "./images/11.png";
import Id12 from "./images/12.png";
import Id13 from "./images/13.png";
import Id14 from "./images/14.png";
import Id15 from "./images/15.png";
import Id16 from "./images/16.png";
import Id17 from "./images/17.png";
import Id18 from "./images/18.png";
import Id19 from "./images/19.png";
import Id20 from "./images/20.png";
import Id21 from "./images/21.png";
import Id22 from "./images/22.png";
import Id23 from "./images/23.png";
import Id24 from "./images/24.png";
import Id25 from "./images/25.png";
import Id26 from "./images/26.png";
import Id27 from "./images/27.png";
import Id28 from "./images/28.png";
import Id29 from "./images/29.png";
import Id30 from "./images/30.png";
import Id31 from "./images/31.png";
import Id32 from "./images/32.png";
import Id33 from "./images/33.png";
import Id34 from "./images/34.png";
import Id35 from "./images/35.png";
import Id36 from "./images/36.png";
import Id37 from "./images/37.png";
import Id38 from "./images/38.png";
import Id39 from "./images/39.png";
import Id40 from "./images/40.png";
import Id41 from "./images/41.png";
import Id42 from "./images/42.png";
import Id43 from "./images/43.png";
import Id44 from "./images/44.png";
import Id45 from "./images/45.png";
import Id46 from "./images/46.png";
import Id47 from "./images/47.png";
import Id48 from "./images/48.png";
import Id49 from "./images/49.png";
import Id50 from "./images/50.png";
import Id51 from "./images/51.png";
import Id52 from "./images/52.png";
import Id53 from "./images/53.png";
import Id54 from "./images/54.png";
import Id55 from "./images/55.png";

const denemem = [
  {
    id: 1,
    bankCode: "0001",
    bankName: "T.C Merkez Bankası",
    bankSwiftCode: "TCMBTR2A",
    bankPhoto: Id1,
  },
  {
    id: 2,
    bankCode: "0010",
    bankName: "Ziraat Bankası A.Ş.",
    bankSwiftCode: "TCBZTR2A",
    bankPhoto: Id2,
  },
  {
    id: 3,
    bankCode: "0012",
    bankName: "Halk Bankası A.Ş.",
    bankSwiftCode: "TRHBTV2A",
    bankPhoto: Id3,
  },
  {
    id: 4,
    bankCode: "0014",
    bankName: "Sınai Kalkınma Bankası A.Ş.",
    bankSwiftCode: "TSKBTRIS",
    bankPhoto: Id4,
  },
  {
    id: 5,
    bankCode: "0015",
    bankName: "Vakıflar Bankası T.A.O.",
    bankSwiftCode: "TVBATR2A",
    bankPhoto: Id5,
  },
  {
    id: 6,
    bankCode: "0016",
    bankName: "Exim Bank",
    bankSwiftCode: "TIKBTR2AKRD",
    bankPhoto: Id6,
  },
  {
    id: 7,
    bankCode: "0017",
    bankName: "Kalkınma Bankası A.Ş.",
    bankSwiftCode: "TKBNTR2A",
    bankPhoto: Id7,
  },
  {
    id: 8,
    bankCode: "0029",
    bankName: "Birleşik Fon Bankası A.Ş.",
    bankSwiftCode: "BAYDTRIS",
    bankPhoto: Id8,
  },
  {
    id: 9,
    bankCode: "0032",
    bankName: "Türkiye Ekonomi Bankası A.Ş.",
    bankSwiftCode: "TEBUTRIS",
    bankPhoto: Id9,
  },
  {
    id: 10,
    bankCode: "0062",
    bankName: "Garanti Bankası A.Ş.",
    bankSwiftCode: "TGBATRIS",
    bankPhoto: Id10,
  },
  {
    id: 11,
    bankCode: "0064",
    bankName: "İş Bankası A.Ş:",
    bankSwiftCode: "ISBKTRIS",
    bankPhoto: Id11,
  },
  {
    id: 12,
    bankCode: "0067",
    bankName: "Yapı Ve Kredi Bankası A.Ş.",
    bankSwiftCode: "YAPITRIS",
    bankPhoto: Id12,
  },
  {
    id: 13,
    bankCode: "0091",
    bankName: "Arap Türk Bankası",
    bankSwiftCode: "ATUBTRIS",
    bankPhoto: Id13,
  },
  {
    id: 14,
    bankCode: "0092",
    bankName: "CitiBank A.Ş.",
    bankSwiftCode: "CITITRIX",
    bankPhoto: Id14,
  },
  {
    id: 15,
    bankCode: "0096",
    bankName: "Turkis Bank A.Ş.",
    bankSwiftCode: "TUBATRIS",
    bankPhoto: Id15,
  },
  {
    id: 16,
    bankCode: "0098",
    bankName: "Jpmorgan Chase Bank N.A.",
    bankSwiftCode: "CHASUS33XXX",
    bankPhoto: Id16,
  },
  {
    id: 17,
    bankCode: "0099",
    bankName: "İng Bank A.Ş.",
    bankSwiftCode: "INGBTRIS",
    bankPhoto: Id17,
  },
  {
    id: 18,
    bankCode: "0103",
    bankName: "Fibabanka A.Ş.",
    bankSwiftCode: "FBHLTRIS",
    bankPhoto: Id18,
  },
  {
    id: 19,
    bankCode: "0108",
    bankName: "Turkland Bank A.Ş.",
    bankSwiftCode: "TBNKTRIS",
    bankPhoto: Id19,
  },
  {
    id: 20,
    bankCode: "0109",
    bankName: "ICBC Turkey Bank A.Ş.",
    bankSwiftCode: "ICBKTRISKZY",
    bankPhoto: Id20,
  },
  {
    id: 21,
    bankCode: "0115",
    bankName: "Deutsche Bank A.Ş.",
    bankSwiftCode: "DEUTINBBPBC",
    bankPhoto: Id21,
  },
  {
    id: 22,
    bankCode: "0116",
    bankName: "Pasha Yatırım Bank A.Ş.",
    bankSwiftCode: "PAHAAZ22XXX",
    bankPhoto: Id22,
  },
  {
    id: 23,
    bankCode: "0121",
    bankName: "Standard Chartered Yatırım Bankası Türk A.Ş.",
    bankSwiftCode: "SCBLTRIS",
    bankPhoto: Id23,
  },
  {
    id: 24,
    bankCode: "0122",
    bankName: "Societe Generale (SA)",
    bankSwiftCode: "SOGEFRPPXXX",
    bankPhoto: Id24,
  },
  {
    id: 25,
    bankCode: "0123",
    bankName: "HSBC Bank A.Ş.",
    bankSwiftCode: "HSBCTRIX",
    bankPhoto: Id25,
  },
  {
    id: 26,
    bankCode: "0125",
    bankName: "Burgan Bank A.Ş.",
    bankSwiftCode: "TEKSTRIS",
    bankPhoto: Id26,
  },
  {
    id: 27,
    bankCode: "0129",
    bankName: "Merrill Lynch Yatırım Bank A.Ş.",
    bankSwiftCode: "MLBOBRSPXXX",
    bankPhoto: Id27,
  },
  {
    id: 28,
    bankCode: "0132",
    bankName: "İstanbul Takas ve Saklama Bank A.Ş.",
    bankSwiftCode: "TVSBTRIS",
    bankPhoto: Id28,
  },
  {
    id: 29,
    bankCode: "0134",
    bankName: "Denizbank A.Ş.",
    bankSwiftCode: "DENITRIS",
    bankPhoto: Id29,
  },
  {
    id: 30,
    bankCode: "0137",
    bankName: "Rabobank A.Ş.",
    bankSwiftCode: "RABONL2UXXX",
    bankPhoto: Id30,
  },
  {
    id: 31,
    bankCode: "0138",
    bankName: "Diler Yatırım Bankası A.Ş.",
    bankSwiftCode: "DYAKTRIS",
    bankPhoto: Id31,
  },
  {
    id: 32,
    bankCode: "0139",
    bankName: "GSD Yatırım Bankası A.Ş.",
    bankSwiftCode: "GSDBTRIS",
    bankPhoto: Id32,
  },
  {
    id: 33,
    bankCode: "0141",
    bankName: "Nurol Yatırım Bankası A.Ş.",
    bankSwiftCode: "NUROTRIS",
    bankPhoto: Id33,
  },
  {
    id: 34,
    bankCode: "0142",
    bankName: "Bankpozitif Kredi ve Kalkınma Bankası A.Ş.",
    bankSwiftCode: "BPTRTRIS",
    bankPhoto: Id34,
  },
  {
    id: 35,
    bankCode: "0146",
    bankName: "Odea Bank A.Ş.",
    bankSwiftCode: "ODEATRIS",
    bankPhoto: Id35,
  },
  {
    id: 36,
    bankCode: "0147",
    bankName: "Mufg Bank Turkey A.Ş.",
    bankSwiftCode: "BOTKTRIS",
    bankPhoto: Id36,
  },
  {
    id: 37,
    bankCode: "0148",
    bankName: "INTESA SANPAOLO S.P.A.",
    bankSwiftCode: "BCITITMMXXX",
    bankPhoto: Id37,
  },
  {
    id: 38,
    bankCode: "0149",
    bankName: "BANK OF CHINA TURKEY A.Ş",
    bankSwiftCode: "BKCHCNBJ110",
    bankPhoto: Id38,
  },
  {
    id: 39,
    bankCode: "0150",
    bankName: "GOLDEN GLOBAL YATIRIM BANKASI A.Ş.",
    bankSwiftCode: "GOGYTRIS",
    bankPhoto: Id39,
  },
  {
    id: 40,
    bankCode: "0205",
    bankName: "Kuveyt Türk Katılım Bankası A.Ş.",
    bankSwiftCode: "KTEFTRIS",
    bankPhoto: Id40,
  },
  {
    id: 41,
    bankCode: "0209",
    bankName: "Ziraat Katılım Bankası A.Ş.",
    bankSwiftCode: "TCZBTR2AAZKB",
    bankPhoto: Id41,
  },
  {
    id: 42,
    bankCode: "0210",
    bankName: "Vakıf Katılım Bankası A.Ş.",
    bankSwiftCode: "VAKFTRIS",
    bankPhoto: Id42,
  },
  {
    id: 43,
    bankCode: "0211",
    bankName: "Türkiye Emlak Katılım Bankası A.Ş.",
    bankSwiftCode: "EMLATRIS",
    bankPhoto: Id43,
  },
  {
    id: 44,
    bankCode: "0806",
    bankName: "Merkezi Kayıt Kuruluşu A.Ş.",
    bankSwiftCode: "MKKCTRIS",
    bankPhoto: Id44,
  },
  {
    id: 45,
    bankCode: "0807",
    bankName: "Posta ve Telgraf Teşkilatı A.Ş.",
    bankSwiftCode: "PTPCTHB1",
    bankPhoto: Id45,
  },
  {
    id: 46,
    bankCode: "0100",
    bankName: "Adabank A.Ş.",
    bankSwiftCode: "ADABTRIS",
    bankPhoto: Id46,
  },
  {
    id: 47,
    bankCode: "0046",
    bankName: "Akbank T.A.Ş.",
    bankSwiftCode: "AKBKTRIS",
    bankPhoto: Id47,
  },
  {
    id: 48,
    bankCode: "0143",
    bankName: "Aktif Yatırım Bankası A.Ş.",
    bankSwiftCode: "CAYTTRIS",
    bankPhoto: Id48,
  },
  {
    id: 49,
    bankCode: "0203",
    bankName: "Albaraka Türk Katılım Bankası A.Ş.",
    bankSwiftCode: "BTFHTRIS",
    bankPhoto: Id49,
  },
  {
    id: 50,
    bankCode: "0124",
    bankName: "Alternatif Bank A.Ş.",
    bankSwiftCode: "ALFBTRIS",
    bankPhoto: Id50,
  },
  {
    id: 51,
    bankCode: "0135",
    bankName: "Anadolubank A.Ş.",
    bankSwiftCode: "ANDLTRIS",
    bankPhoto: Id51,
  },
  {
    id: 52,
    bankCode: "0004",
    bankName: "İller Bankası A.Ş.",
    bankSwiftCode: "NaN",
    bankPhoto: Id52,
  },
  {
    id: 53,
    bankCode: "0059",
    bankName: "Şekerbank T.A.Ş.",
    bankSwiftCode: "SEKERT2A",
    bankPhoto: Id53,
  },
  {
    id: 54,
    bankCode: "0206",
    bankName: "Türkiye Finans Katılım Bankası A.Ş.",
    bankSwiftCode: "AKFBTRIS",
    bankPhoto: Id54,
  },
  {
    id: 55,
    bankCode: "0111",
    bankName: "QNB Finansbank A.Ş.",
    bankSwiftCode: "FNNBTRIS",
    bankPhoto: Id55,
  },
];

export default function MediaCard() {
  const [iban, setIban] = useState("");
  const [banksCode, setBanksCode] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const onChangeInput = (event) => {
    setIban(event.target.value);
  };

  const checkIBAN = () => {
    const trueIban = iban.replaceAll(" ", "");
    setBanksCode(trueIban.substring(5, 9));
    setAccountNo(trueIban.substring(20, 26));
    setDepartmentCode(trueIban.substring(15, 19));
  };
  const filtered = denemem.filter((deneme) => {
    return deneme.bankCode === banksCode;
  });
  console.log(filtered);
  return (
    <Container fixed>
    <div className="mt-5">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Card style={{ border: "5px" }}>
          {filtered.map((deneme) => {
            return (
              <CardMedia
                component="img"
                height="250"
                image={deneme.bankPhoto}
                key={deneme.id}
              />
            );
          })}

          <CardContent>
            <Grid
              container
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              border="2px"
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                border="2px"
                alignItems="center"
              >
                <Typography gutterBottom variant="h5" component="div">
                  İban Giriniz:
                  <TextField
                    hiddenLabel
                    style={{ width: "100%", fontSize: "15px" }}
                    value={iban}
                    onChange={onChangeInput}
                  />
                </Typography>
              </Grid>
              <Grid container width="100%" justify-content="center">
                <Button
                  variant="contained"
                  disableElevation
                  onClick={checkIBAN}
                >
                  ÇÖZÜMLE
                </Button>
              </Grid>
            </Grid>
            <br></br>
            {filtered.map((deneme) => {
              return <b key={deneme.id}>Banka Adı:{deneme.bankName}</b>;
            })}
            <br></br>
            {filtered.map((deneme) => {
              return <b key={deneme.id}>Swift Kodu: {deneme.bankSwiftCode}</b>;
            })}
            <br></br>
            <b>Banka No:{banksCode}</b>
            <br></br>
            <b>Hesap No:{accountNo}</b>
            <br></br>
            <b>Şube Kodu: {departmentCode}</b>
            <br></br>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </Container>);
}
