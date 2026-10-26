"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/.prof-.prof-plugin.cjs.ts
var prof_prof_plugin_cjs_exports = {};
__export(prof_prof_plugin_cjs_exports, {
  __PdftionPlugin: () => PdftionPlugin
});
module.exports = __toCommonJS(prof_prof_plugin_cjs_exports);
var import_obsidian = require("obsidian");
var import_pdf_lib = require("pdf-lib");

// src/i18n.ts
var EXTENDED_LOCALES = ["ar", "de", "es", "fr", "id", "ja", "ko", "pt", "ru", "tr", "vi"];
var STATIC_TRANSLATION_ROWS = [
  ["Add", "\u0625\u0636\u0627\u0641\u0629", "Hinzuf\xFCgen", "A\xF1adir", "Ajouter", "Tambah", "\u8FFD\u52A0", "\uCD94\uAC00", "Adicionar", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", "Ekle", "Th\xEAm"],
  ["Follow Obsidian", "\u0627\u062A\u0628\u0627\u0639 Obsidian", "Obsidian folgen", "Seguir Obsidian", "Suivre Obsidian", "Ikuti Obsidian", "Obsidian \u306B\u5F93\u3046", "Obsidian \uC5B8\uC5B4 \uC0AC\uC6A9", "Seguir o Obsidian", "\u041A\u0430\u043A \u0432 Obsidian", "Obsidian'\u0131 izle", "Theo Obsidian"],
  ["Follow Obsidian by default. Changes apply immediately; reopen an existing PDF if a few labels remain unchanged.", "\u0627\u062A\u0628\u0627\u0639 \u0644\u063A\u0629 Obsidian \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0627. \u062A\u0637\u0628\u0642 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0641\u0648\u0631\u0627\u061B \u0623\u0639\u062F \u0641\u062A\u062D \u0645\u0644\u0641 PDF \u0627\u0644\u062D\u0627\u0644\u064A \u0625\u0630\u0627 \u0628\u0642\u064A\u062A \u0628\u0639\u0636 \u0627\u0644\u062A\u0633\u0645\u064A\u0627\u062A \u062F\u0648\u0646 \u062A\u063A\u064A\u064A\u0631.", "Standardm\xE4\xDFig Obsidian folgen. \xC4nderungen gelten sofort; ein bereits ge\xF6ffnetes PDF erneut \xF6ffnen, falls einige Beschriftungen unver\xE4ndert bleiben.", "Seguir Obsidian de forma predeterminada. Los cambios se aplican al instante; vuelve a abrir un PDF existente si algunas etiquetas no cambian.", "Suivre Obsidian par d\xE9faut. Les changements s'appliquent imm\xE9diatement ; rouvrez un PDF existant si quelques libell\xE9s restent inchang\xE9s.", "Ikuti bahasa Obsidian secara bawaan. Perubahan langsung berlaku; buka ulang PDF jika beberapa label belum berubah.", "\u65E2\u5B9A\u3067\u306F Obsidian \u306E\u8A00\u8A9E\u306B\u5F93\u3044\u307E\u3059\u3002\u5909\u66F4\u306F\u3059\u3050\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u304C\u3001\u4E00\u90E8\u306E\u8868\u793A\u304C\u5909\u308F\u3089\u306A\u3044\u5834\u5408\u306F\u958B\u3044\u3066\u3044\u308B PDF \u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "\uAE30\uBCF8\uC801\uC73C\uB85C Obsidian \uC5B8\uC5B4\uB97C \uB530\uB985\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D\uC740 \uC989\uC2DC \uC801\uC6A9\uB418\uBA70, \uC77C\uBD80 \uB808\uC774\uBE14\uC774 \uADF8\uB300\uB85C\uBA74 \uC5F4\uB824 \uC788\uB294 PDF\uB97C \uB2E4\uC2DC \uC5EC\uC138\uC694.", "Seguir o idioma do Obsidian por padr\xE3o. As altera\xE7\xF5es s\xE3o aplicadas imediatamente; reabra o PDF se alguns r\xF3tulos n\xE3o mudarem.", "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u044F\u0437\u044B\u043A Obsidian. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443; \u0435\u0441\u043B\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C, \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 PDF \u0437\u0430\u043D\u043E\u0432\u043E.", "Varsay\u0131lan olarak Obsidian dilini kullan\u0131r. De\u011Fi\u015Fiklikler hemen uygulan\u0131r; baz\u0131 etiketler de\u011Fi\u015Fmezse a\xE7\u0131k PDF'yi yeniden a\xE7\u0131n.", "M\u1EB7c \u0111\u1ECBnh d\xF9ng ng\xF4n ng\u1EEF Obsidian. Thay \u0111\u1ED5i c\xF3 hi\u1EC7u l\u1EF1c ngay; h\xE3y m\u1EDF l\u1EA1i PDF n\u1EBFu m\u1ED9t s\u1ED1 nh\xE3n ch\u01B0a \u0111\u1ED5i."],
  ["Interface language", "\u0644\u063A\u0629 \u0627\u0644\u0648\u0627\u062C\u0647\u0629", "Oberfl\xE4chensprache", "Idioma de la interfaz", "Langue de l'interface", "Bahasa antarmuka", "\u8868\u793A\u8A00\u8A9E", "\uC778\uD130\uD398\uC774\uC2A4 \uC5B8\uC5B4", "Idioma da interface", "\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430", "Aray\xFCz dili", "Ng\xF4n ng\u1EEF giao di\u1EC7n"],
  ["Add comment", "\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642", "Kommentar hinzuf\xFCgen", "A\xF1adir comentario", "Ajouter un commentaire", "Tambah komentar", "\u30B3\u30E1\u30F3\u30C8\u3092\u8FFD\u52A0", "\uB313\uAE00 \uCD94\uAC00", "Adicionar coment\xE1rio", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", "Yorum ekle", "Th\xEAm b\xECnh lu\u1EADn"],
  ["Apply crop", "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0642\u0635", "Zuschnitt anwenden", "Aplicar recorte", "Appliquer le rognage", "Terapkan pangkas", "\u5207\u308A\u629C\u304D\u3092\u9069\u7528", "\uC790\uB974\uAE30 \uC801\uC6A9", "Aplicar recorte", "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0431\u0440\u0435\u0437\u043A\u0443", "K\u0131rpmay\u0131 uygula", "\xC1p d\u1EE5ng c\u1EAFt"],
  ["Attach mobile text menu to selected text", "\u0631\u0628\u0637 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u0629 \u0628\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062D\u062F\u062F", "Mobiles Textmen\xFC an Auswahl anheften", "Vincular el men\xFA m\xF3vil al texto seleccionado", "Attacher le menu mobile au texte s\xE9lectionn\xE9", "Tempelkan menu teks seluler ke teks terpilih", "\u30E2\u30D0\u30A4\u30EB\u6587\u5B57\u30E1\u30CB\u30E5\u30FC\u3092\u9078\u629E\u30C6\u30AD\u30B9\u30C8\u306B\u8868\u793A", "\uBAA8\uBC14\uC77C \uD14D\uC2A4\uD2B8 \uBA54\uB274\uB97C \uC120\uD0DD\uD55C \uD14D\uC2A4\uD2B8\uC5D0 \uD45C\uC2DC", "Anexar menu m\xF3vel ao texto selecionado", "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u043A \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0442\u0435\u043A\u0441\u0442\u0443", "Mobil metin men\xFCs\xFCn\xFC se\xE7ili metne ba\u011Fla", "G\u1EAFn menu v\u0103n b\u1EA3n di \u0111\u1ED9ng v\xE0o ph\u1EA7n \u0111\xE3 ch\u1ECDn"],
  ["Automatically open generated PDF, MD, DOCX, PPTX, PNG, or HTML files.", "\u0641\u062A\u062D \u0645\u0644\u0641\u0627\u062A PDF \u0648MD \u0648DOCX \u0648PPTX \u0648PNG \u0648HTML \u0627\u0644\u0646\u0627\u062A\u062C\u0629 \u062A\u0644\u0642\u0627\u0626\u064A\u0627.", "Erzeugte PDF-, MD-, DOCX-, PPTX-, PNG- oder HTML-Dateien automatisch \xF6ffnen.", "Abrir autom\xE1ticamente los archivos PDF, MD, DOCX, PPTX, PNG o HTML generados.", "Ouvrir automatiquement les fichiers PDF, MD, DOCX, PPTX, PNG ou HTML g\xE9n\xE9r\xE9s.", "Buka otomatis file PDF, MD, DOCX, PPTX, PNG, atau HTML yang dibuat.", "\u751F\u6210\u3057\u305F PDF\u3001MD\u3001DOCX\u3001PPTX\u3001PNG\u3001HTML \u3092\u81EA\u52D5\u3067\u958B\u304D\u307E\u3059\u3002", "\uC0DD\uC131\uB41C PDF, MD, DOCX, PPTX, PNG \uB610\uB294 HTML \uD30C\uC77C\uC744 \uC790\uB3D9\uC73C\uB85C \uC5FD\uB2C8\uB2E4.", "Abrir automaticamente arquivos PDF, MD, DOCX, PPTX, PNG ou HTML gerados.", "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 PDF, MD, DOCX, PPTX, PNG \u0438\u043B\u0438 HTML.", "Olu\u015Fturulan PDF, MD, DOCX, PPTX, PNG veya HTML dosyalar\u0131n\u0131 otomatik a\xE7.", "T\u1EF1 \u0111\u1ED9ng m\u1EDF t\u1EC7p PDF, MD, DOCX, PPTX, PNG ho\u1EB7c HTML \u0111\xE3 t\u1EA1o."],
  ["Boost PDF top menu", "\u062A\u0639\u0632\u064A\u0632 \u0642\u0627\u0626\u0645\u0629 PDF \u0627\u0644\u0639\u0644\u0648\u064A\u0629", "PDF-Men\xFC oben verst\xE4rken", "Mejorar men\xFA superior de PDF", "Renforcer le menu PDF sup\xE9rieur", "Perkuat menu atas PDF", "PDF \u4E0A\u90E8\u30E1\u30CB\u30E5\u30FC\u3092\u5F37\u5316", "PDF \uC0C1\uB2E8 \uBA54\uB274 \uAC15\uD654", "Refor\xE7ar menu superior do PDF", "\u0423\u0441\u0438\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0445\u043D\u0435\u0435 \u043C\u0435\u043D\u044E PDF", "PDF \xFCst men\xFCs\xFCn\xFC g\xFC\xE7lendir", "T\u0103ng c\u01B0\u1EDDng menu tr\xEAn PDF"],
  ["Bottom", "\u0623\u0633\u0641\u0644", "Unten", "Abajo", "Bas", "Bawah", "\u4E0B", "\uC544\uB798", "Inferior", "\u0421\u043D\u0438\u0437\u0443", "Alt", "D\u01B0\u1EDBi"],
  ["Bring to front", "\u0625\u062D\u0636\u0627\u0631 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0645", "In den Vordergrund", "Traer al frente", "Mettre au premier plan", "Bawa ke depan", "\u6700\u524D\u9762\u3078", "\uB9E8 \uC55E\uC73C\uB85C", "Trazer para frente", "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D", "En \xF6ne getir", "\u0110\u01B0a l\xEAn tr\u01B0\u1EDBc"],
  ["Cannot delete all pages.", "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062D\u0630\u0641 \u0643\u0644 \u0627\u0644\u0635\u0641\u062D\u0627\u062A.", "Es k\xF6nnen nicht alle Seiten gel\xF6scht werden.", "No se pueden eliminar todas las p\xE1ginas.", "Impossible de supprimer toutes les pages.", "Tidak dapat menghapus semua halaman.", "\u3059\u3079\u3066\u306E\u30DA\u30FC\u30B8\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002", "\uBAA8\uB4E0 \uD398\uC774\uC9C0\uB97C \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o \xE9 poss\xEDvel excluir todas as p\xE1ginas.", "\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.", "T\xFCm sayfalar silinemez.", "Kh\xF4ng th\u1EC3 x\xF3a t\u1EA5t c\u1EA3 trang."],
  ["Capture image", "\u0627\u0644\u062A\u0642\u0627\u0637 \u0635\u0648\u0631\u0629", "Bild erfassen", "Capturar imagen", "Capturer une image", "Ambil gambar", "\u753B\u50CF\u3092\u5207\u308A\u51FA\u3059", "\uC774\uBBF8\uC9C0 \uCEA1\uCC98", "Capturar imagem", "\u0417\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "G\xF6r\xFCnt\xFC yakala", "Ch\u1EE5p \u1EA3nh"],
  ["Clear", "\u0645\u0633\u062D", "Leeren", "Limpiar", "Effacer", "Bersihkan", "\u30AF\u30EA\u30A2", "\uC9C0\uC6B0\uAE30", "Limpar", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", "Temizle", "X\xF3a"],
  ["Clear annotations", "\u0645\u0633\u062D \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A", "Anmerkungen l\xF6schen", "Borrar anotaciones", "Effacer les annotations", "Bersihkan anotasi", "\u6CE8\u91C8\u3092\u6D88\u53BB", "\uC8FC\uC11D \uC9C0\uC6B0\uAE30", "Limpar anota\xE7\xF5es", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438", "Notlar\u0131 temizle", "X\xF3a ch\xFA th\xEDch"],
  ["Clear editable annotations? This will not delete original PDF content, but it will remove overlays and plugin annotations.", "\u0645\u0633\u062D \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u0631\u064A\u0631\u061F \u0644\u0646 \u064A\u062D\u0630\u0641 \u0630\u0644\u0643 \u0645\u062D\u062A\u0648\u0649 PDF \u0627\u0644\u0623\u0635\u0644\u064A\u060C \u0644\u0643\u0646\u0647 \u0633\u064A\u0632\u064A\u0644 \u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0648\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629.", "Bearbeitbare Anmerkungen l\xF6schen? Der PDF-Inhalt bleibt erhalten, aber \xDCberlagerungen und Plugin-Anmerkungen werden entfernt.", "\xBFBorrar anotaciones editables? No se eliminar\xE1 el PDF original, pero s\xED las capas y anotaciones del complemento.", "Effacer les annotations modifiables ? Le PDF original restera intact, mais les calques et annotations du module seront supprim\xE9s.", "Hapus anotasi yang dapat diedit? Isi PDF asli tetap ada, tetapi overlay dan anotasi plugin akan dihapus.", "\u7DE8\u96C6\u53EF\u80FD\u306A\u6CE8\u91C8\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F\u5143\u306E PDF \u5185\u5BB9\u306F\u6B8B\u308A\u307E\u3059\u304C\u3001\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u3068\u30D7\u30E9\u30B0\u30A4\u30F3\u6CE8\u91C8\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002", "\uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uC8FC\uC11D\uC744 \uC9C0\uC6B8\uAE4C\uC694? \uC6D0\uBCF8 PDF \uB0B4\uC6A9\uC740 \uC720\uC9C0\uB418\uC9C0\uB9CC \uC624\uBC84\uB808\uC774\uC640 \uD50C\uB7EC\uADF8\uC778 \uC8FC\uC11D\uC740 \uC81C\uAC70\uB429\uB2C8\uB2E4.", "Limpar anota\xE7\xF5es edit\xE1veis? O PDF original ser\xE1 mantido, mas sobreposi\xE7\xF5es e anota\xE7\xF5es do plugin ser\xE3o removidas.", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438? \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 PDF \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F, \u043D\u043E \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.", "D\xFCzenlenebilir notlar temizlensin mi? \xD6zg\xFCn PDF i\xE7eri\u011Fi kal\u0131r, ancak katmanlar ve eklenti notlar\u0131 kald\u0131r\u0131l\u0131r.", "X\xF3a ch\xFA th\xEDch c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa? N\u1ED9i dung PDF g\u1ED1c v\u1EABn gi\u1EEF nguy\xEAn, nh\u01B0ng l\u1EDBp ph\u1EE7 v\xE0 ch\xFA th\xEDch plugin s\u1EBD b\u1ECB x\xF3a."],
  ["Click the page to add a comment.", "\u0627\u0646\u0642\u0631 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642.", "Auf die Seite klicken, um einen Kommentar hinzuzuf\xFCgen.", "Haz clic en la p\xE1gina para a\xF1adir un comentario.", "Cliquez sur la page pour ajouter un commentaire.", "Klik halaman untuk menambah komentar.", "\u30DA\u30FC\u30B8\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B3\u30E1\u30F3\u30C8\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002", "\uD398\uC774\uC9C0\uB97C \uD074\uB9AD\uD574 \uB313\uAE00\uC744 \uCD94\uAC00\uD558\uC138\uC694.", "Clique na p\xE1gina para adicionar um coment\xE1rio.", "\u0429\u0451\u043B\u043A\u043D\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439.", "Yorum eklemek i\xE7in sayfaya t\u0131klay\u0131n.", "Nh\u1EA5p v\xE0o trang \u0111\u1EC3 th\xEAm b\xECnh lu\u1EADn."],
  ["Comment", "\u062A\u0639\u0644\u064A\u0642", "Kommentar", "Comentario", "Commentaire", "Komentar", "\u30B3\u30E1\u30F3\u30C8", "\uB313\uAE00", "Coment\xE1rio", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", "Yorum", "B\xECnh lu\u1EADn"],
  ["Comment manager", "\u0645\u062F\u064A\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A", "Kommentarverwaltung", "Gestor de comentarios", "Gestionnaire de commentaires", "Pengelola komentar", "\u30B3\u30E1\u30F3\u30C8\u7BA1\u7406", "\uB313\uAE00 \uAD00\uB9AC\uC790", "Gerenciador de coment\xE1rios", "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F\u043C\u0438", "Yorum y\xF6neticisi", "Qu\u1EA3n l\xFD b\xECnh lu\u1EADn"],
  ["Could not auto-save into this PDF. Check the console for details.", "\u062A\u0639\u0630\u0631 \u0627\u0644\u062D\u0641\u0638 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u0641\u064A \u0645\u0644\u0641 PDF. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0644\u0644\u062A\u0641\u0627\u0635\u064A\u0644.", "Automatisches Speichern in dieses PDF fehlgeschlagen. Details in der Konsole.", "No se pudo guardar autom\xE1ticamente en este PDF. Revisa la consola.", "Enregistrement automatique dans ce PDF impossible. Consultez la console.", "Gagal menyimpan otomatis ke PDF ini. Periksa konsol.", "\u3053\u306E PDF \u306B\u81EA\u52D5\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u8A73\u7D30\u306F\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "\uC774 PDF\uC5D0 \uC790\uB3D9 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC5D0\uC11C \uC138\uBD80 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC138\uC694.", "N\xE3o foi poss\xEDvel salvar automaticamente neste PDF. Verifique o console.", "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 PDF. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438.", "Bu PDF'ye otomatik kaydedilemedi. Ayr\u0131nt\u0131lar i\xE7in konsolu kontrol edin.", "Kh\xF4ng th\u1EC3 t\u1EF1 \u0111\u1ED9ng l\u01B0u v\xE0o PDF n\xE0y. Xem b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n \u0111\u1EC3 bi\u1EBFt chi ti\u1EBFt."],
  ["Could not revert. Check the console.", "\u062A\u0639\u0630\u0631 \u0627\u0644\u062A\u0631\u0627\u062C\u0639. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.", "Wiederherstellung fehlgeschlagen. Konsole pr\xFCfen.", "No se pudo revertir. Revisa la consola.", "Restauration impossible. Consultez la console.", "Gagal mengembalikan. Periksa konsol.", "\u5143\u306B\u623B\u305B\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "\uB418\uB3CC\uB9AC\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694.", "N\xE3o foi poss\xEDvel reverter. Verifique o console.", "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.", "Geri al\u0131namad\u0131. Konsolu kontrol edin.", "Kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. H\xE3y ki\u1EC3m tra b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n."],
  ["Crop pages", "\u0642\u0635 \u0627\u0644\u0635\u0641\u062D\u0627\u062A", "Seiten zuschneiden", "Recortar p\xE1ginas", "Rogner les pages", "Pangkas halaman", "\u30DA\u30FC\u30B8\u3092\u5207\u308A\u629C\u304F", "\uD398\uC774\uC9C0 \uC790\uB974\uAE30", "Recortar p\xE1ginas", "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", "Sayfalar\u0131 k\u0131rp", "C\u1EAFt trang"],
  ["DOCX conversion failed. Check the console.", "\u0641\u0634\u0644 \u062A\u062D\u0648\u064A\u0644 DOCX. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.", "DOCX-Konvertierung fehlgeschlagen. Konsole pr\xFCfen.", "Fall\xF3 la conversi\xF3n DOCX. Revisa la consola.", "\xC9chec de la conversion DOCX. Consultez la console.", "Konversi DOCX gagal. Periksa konsol.", "DOCX \u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "DOCX \uBCC0\uD658\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694.", "Falha na convers\xE3o DOCX. Verifique o console.", "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F DOCX. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.", "DOCX d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z. Konsolu kontrol edin.", "Chuy\u1EC3n \u0111\u1ED5i DOCX th\u1EA5t b\u1EA1i. H\xE3y ki\u1EC3m tra b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n."],
  ["Data and AI", "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A", "Daten und KI", "Datos e IA", "Donn\xE9es et IA", "Data dan AI", "\u30C7\u30FC\u30BF\u3068 AI", "\uB370\uC774\uD130 \uBC0F AI", "Dados e IA", "\u0414\u0430\u043D\u043D\u044B\u0435 \u0438 \u0418\u0418", "Veri ve yapay zeka", "D\u1EEF li\u1EC7u v\xE0 AI"],
  ["Delete", "\u062D\u0630\u0641", "L\xF6schen", "Eliminar", "Supprimer", "Hapus", "\u524A\u9664", "\uC0AD\uC81C", "Excluir", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", "Sil", "X\xF3a"],
  ["Delete comment", "\u062D\u0630\u0641 \u0627\u0644\u062A\u0639\u0644\u064A\u0642", "Kommentar l\xF6schen", "Eliminar comentario", "Supprimer le commentaire", "Hapus komentar", "\u30B3\u30E1\u30F3\u30C8\u3092\u524A\u9664", "\uB313\uAE00 \uC0AD\uC81C", "Excluir coment\xE1rio", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", "Yorumu sil", "X\xF3a b\xECnh lu\u1EADn"],
  ["Drag a PDF region to capture it as an editable image.", "\u0627\u0633\u062D\u0628 \u0645\u0646\u0637\u0642\u0629 \u0645\u0646 PDF \u0644\u0627\u0644\u062A\u0642\u0627\u0637\u0647\u0627 \u0643\u0635\u0648\u0631\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u0631\u064A\u0631.", "Einen PDF-Bereich ziehen, um ihn als bearbeitbares Bild zu erfassen.", "Arrastra una regi\xF3n del PDF para capturarla como imagen editable.", "Faites glisser une zone du PDF pour la capturer comme image modifiable.", "Seret area PDF untuk menangkapnya sebagai gambar yang dapat diedit.", "PDF \u306E\u7BC4\u56F2\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u7DE8\u96C6\u53EF\u80FD\u306A\u753B\u50CF\u3068\u3057\u3066\u53D6\u308A\u8FBC\u307F\u307E\u3059\u3002", "PDF \uC601\uC5ED\uC744 \uB4DC\uB798\uADF8\uD574 \uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uC774\uBBF8\uC9C0\uB85C \uCEA1\uCC98\uD558\uC138\uC694.", "Arraste uma regi\xE3o do PDF para captur\xE1-la como imagem edit\xE1vel.", "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C PDF, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u0435\u0451 \u043A\u0430\u043A \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.", "D\xFCzenlenebilir g\xF6r\xFCnt\xFC olarak yakalamak i\xE7in PDF b\xF6lgesini s\xFCr\xFCkleyin.", "K\xE9o m\u1ED9t v\xF9ng PDF \u0111\u1EC3 ch\u1EE5p th\xE0nh \u1EA3nh c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa."],
  ["Edit comment", "\u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642", "Kommentar bearbeiten", "Editar comentario", "Modifier le commentaire", "Edit komentar", "\u30B3\u30E1\u30F3\u30C8\u3092\u7DE8\u96C6", "\uB313\uAE00 \uD3B8\uC9D1", "Editar coment\xE1rio", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", "Yorumu d\xFCzenle", "S\u1EEDa b\xECnh lu\u1EADn"],
  ["Edit the comment content.", "\u062D\u0631\u0631 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0642.", "Kommentarinhalt bearbeiten.", "Edita el contenido del comentario.", "Modifiez le contenu du commentaire.", "Edit isi komentar.", "\u30B3\u30E1\u30F3\u30C8\u5185\u5BB9\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002", "\uB313\uAE00 \uB0B4\uC6A9\uC744 \uD3B8\uC9D1\uD558\uC138\uC694.", "Edite o conte\xFAdo do coment\xE1rio.", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F.", "Yorum i\xE7eri\u011Fini d\xFCzenleyin.", "S\u1EEDa n\u1ED9i dung b\xECnh lu\u1EADn."],
  ["Element layer", "\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0646\u0635\u0631", "Elementebene", "Capa del elemento", "Calque de l'\xE9l\xE9ment", "Lapisan elemen", "\u8981\u7D20\u30EC\u30A4\u30E4\u30FC", "\uC694\uC18C \uB808\uC774\uC5B4", "Camada do elemento", "\u0421\u043B\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", "\xD6\u011Fe katman\u0131", "L\u1EDBp ph\u1EA7n t\u1EED"],
  ["Enter a link or note name, for example [[Note]] / ![[image.png]]", "\u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637\u0627 \u0623\u0648 \u0627\u0633\u0645 \u0645\u0644\u0627\u062D\u0638\u0629\u060C \u0645\u062B\u0644 [[Note]] / ![[image.png]]", "Link oder Notiznamen eingeben, z. B. [[Note]] / ![[image.png]]", "Introduce un enlace o nombre de nota, por ejemplo [[Note]] / ![[image.png]]", "Saisissez un lien ou un nom de note, par exemple [[Note]] / ![[image.png]]", "Masukkan tautan atau nama catatan, misalnya [[Note]] / ![[image.png]]", "\u30EA\u30F3\u30AF\u307E\u305F\u306F\u30CE\u30FC\u30C8\u540D\u3092\u5165\u529B\u3057\u307E\u3059\u3002\u4F8B: [[Note]] / ![[image.png]]", "\uB9C1\uD06C \uB610\uB294 \uB178\uD2B8 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uC608: [[Note]] / ![[image.png]]", "Digite um link ou nome de nota, por exemplo [[Note]] / ![[image.png]]", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438\u043B\u0438 \u0438\u043C\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 [[Note]] / ![[image.png]]", "Bir ba\u011Flant\u0131 veya not ad\u0131 girin, \xF6rne\u011Fin [[Note]] / ![[image.png]]", "Nh\u1EADp li\xEAn k\u1EBFt ho\u1EB7c t\xEAn ghi ch\xFA, v\xED d\u1EE5 [[Note]] / ![[image.png]]"],
  ["Enter left, top, right, and bottom margins separately. Use 0.05 or 5%. Preview lines update as you type.", "\u0623\u062F\u062E\u0644 \u0647\u0648\u0627\u0645\u0634 \u0627\u0644\u064A\u0633\u0627\u0631 \u0648\u0627\u0644\u0623\u0639\u0644\u0649 \u0648\u0627\u0644\u064A\u0645\u064A\u0646 \u0648\u0627\u0644\u0623\u0633\u0641\u0644 \u0645\u0646\u0641\u0635\u0644\u0629. \u0627\u0633\u062A\u062E\u062F\u0645 0.05 \u0623\u0648 5%. \u062A\u062A\u062D\u062F\u062B \u062E\u0637\u0648\u0637 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0643\u062A\u0627\u0628\u0629.", "Linken, oberen, rechten und unteren Rand getrennt eingeben. 0,05 oder 5 % verwenden. Die Vorschau wird sofort aktualisiert.", "Introduce por separado los m\xE1rgenes izquierdo, superior, derecho e inferior. Usa 0,05 o 5 %. La vista previa se actualiza al escribir.", "Saisissez s\xE9par\xE9ment les marges gauche, haute, droite et basse. Utilisez 0,05 ou 5 %. L'aper\xE7u se met \xE0 jour pendant la saisie.", "Masukkan margin kiri, atas, kanan, dan bawah secara terpisah. Gunakan 0,05 atau 5%. Pratinjau diperbarui saat mengetik.", "\u5DE6\u3001\u4E0A\u3001\u53F3\u3001\u4E0B\u306E\u4F59\u767D\u3092\u500B\u5225\u306B\u5165\u529B\u3057\u307E\u3059\u30020.05 \u307E\u305F\u306F 5% \u3092\u4F7F\u7528\u3067\u304D\u3001\u5165\u529B\u4E2D\u306B\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002", "\uC67C\uCABD, \uC704, \uC624\uB978\uCABD, \uC544\uB798 \uC5EC\uBC31\uC744 \uAC01\uAC01 \uC785\uB825\uD558\uC138\uC694. 0.05 \uB610\uB294 5%\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70 \uC785\uB825 \uC911 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uAC31\uC2E0\uB429\uB2C8\uB2E4.", "Digite separadamente as margens esquerda, superior, direita e inferior. Use 0,05 ou 5%. A pr\xE9via \xE9 atualizada ao digitar.", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043B\u0435\u0432\u043E\u0435, \u0432\u0435\u0440\u0445\u043D\u0435\u0435, \u043F\u0440\u0430\u0432\u043E\u0435 \u0438 \u043D\u0438\u0436\u043D\u0435\u0435 \u043F\u043E\u043B\u044F. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 0,05 \u0438\u043B\u0438 5 %. \u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u0432\u043E\u0434\u0435.", "Sol, \xFCst, sa\u011F ve alt kenarlar\u0131 ayr\u0131 girin. 0,05 veya %5 kullan\u0131n. \xD6nizleme yazarken g\xFCncellenir.", "Nh\u1EADp ri\xEAng l\u1EC1 tr\xE1i, tr\xEAn, ph\u1EA3i v\xE0 d\u01B0\u1EDBi. D\xF9ng 0,05 ho\u1EB7c 5%. \u0110\u01B0\u1EDDng xem tr\u01B0\u1EDBc c\u1EADp nh\u1EADt khi nh\u1EADp."],
  ["Enter the comment content.", "\u0623\u062F\u062E\u0644 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0642.", "Kommentarinhalt eingeben.", "Introduce el contenido del comentario.", "Saisissez le contenu du commentaire.", "Masukkan isi komentar.", "\u30B3\u30E1\u30F3\u30C8\u5185\u5BB9\u3092\u5165\u529B\u3057\u307E\u3059\u3002", "\uB313\uAE00 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.", "Digite o conte\xFAdo do coment\xE1rio.", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F.", "Yorum i\xE7eri\u011Fini girin.", "Nh\u1EADp n\u1ED9i dung b\xECnh lu\u1EADn."],
  ["Export", "\u062A\u0635\u062F\u064A\u0631", "Exportieren", "Exportar", "Exporter", "Ekspor", "\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8", "\uB0B4\uBCF4\uB0B4\uAE30", "Exportar", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442", "D\u0131\u015Fa aktar", "Xu\u1EA5t"],
  ["Export HTML", "\u062A\u0635\u062F\u064A\u0631 HTML", "HTML exportieren", "Exportar HTML", "Exporter HTML", "Ekspor HTML", "HTML \u51FA\u529B", "HTML \uB0B4\uBCF4\uB0B4\uAE30", "Exportar HTML", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 HTML", "HTML d\u0131\u015Fa aktar", "Xu\u1EA5t HTML"],
  ["Export PNG", "\u062A\u0635\u062F\u064A\u0631 PNG", "PNG exportieren", "Exportar PNG", "Exporter PNG", "Ekspor PNG", "PNG \u51FA\u529B", "PNG \uB0B4\uBCF4\uB0B4\uAE30", "Exportar PNG", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PNG", "PNG d\u0131\u015Fa aktar", "Xu\u1EA5t PNG"],
  ["Export PPTX", "\u062A\u0635\u062F\u064A\u0631 PPTX", "PPTX exportieren", "Exportar PPTX", "Exporter PPTX", "Ekspor PPTX", "PPTX \u51FA\u529B", "PPTX \uB0B4\uBCF4\uB0B4\uAE30", "Exportar PPTX", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PPTX", "PPTX d\u0131\u015Fa aktar", "Xu\u1EA5t PPTX"],
  ["Export annotations to DOCX", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0625\u0644\u0649 DOCX", "Anmerkungen als DOCX exportieren", "Exportar anotaciones a DOCX", "Exporter les annotations vers DOCX", "Ekspor anotasi ke DOCX", "\u6CE8\u91C8\u3092 DOCX \u306B\u51FA\u529B", "\uC8FC\uC11D\uC744 DOCX\uB85C \uB0B4\uBCF4\uB0B4\uAE30", "Exportar anota\xE7\xF5es para DOCX", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439 \u0432 DOCX", "Notlar\u0131 DOCX'e aktar", "Xu\u1EA5t ch\xFA th\xEDch sang DOCX"],
  ["Export annotations to Markdown", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0625\u0644\u0649 Markdown", "Anmerkungen als Markdown exportieren", "Exportar anotaciones a Markdown", "Exporter les annotations vers Markdown", "Ekspor anotasi ke Markdown", "\u6CE8\u91C8\u3092 Markdown \u306B\u51FA\u529B", "\uC8FC\uC11D\uC744 Markdown\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uAE30", "Exportar anota\xE7\xF5es para Markdown", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439 \u0432 Markdown", "Notlar\u0131 Markdown'a aktar", "Xu\u1EA5t ch\xFA th\xEDch sang Markdown"],
  ["Export annotations to PPTX", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0625\u0644\u0649 PPTX", "Anmerkungen als PPTX exportieren", "Exportar anotaciones a PPTX", "Exporter les annotations vers PPTX", "Ekspor anotasi ke PPTX", "\u6CE8\u91C8\u3092 PPTX \u306B\u51FA\u529B", "\uC8FC\uC11D\uC744 PPTX\uB85C \uB0B4\uBCF4\uB0B4\uAE30", "Exportar anota\xE7\xF5es para PPTX", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439 \u0432 PPTX", "Notlar\u0131 PPTX'e aktar", "Xu\u1EA5t ch\xFA th\xEDch sang PPTX"],
  ["Export visible annotated PDF", "\u062A\u0635\u062F\u064A\u0631 PDF \u0627\u0644\u0645\u0631\u0626\u064A \u0645\u0639 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A", "Sichtbares PDF mit Anmerkungen exportieren", "Exportar PDF visible con anotaciones", "Exporter le PDF visible annot\xE9", "Ekspor PDF terlihat dengan anotasi", "\u8868\u793A\u4E2D\u306E\u6CE8\u91C8\u4ED8\u304D PDF \u3092\u51FA\u529B", "\uBCF4\uC774\uB294 \uC8FC\uC11D PDF \uB0B4\uBCF4\uB0B4\uAE30", "Exportar PDF vis\xEDvel anotado", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432\u0438\u0434\u0438\u043C\u043E\u0433\u043E PDF \u0441 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F\u043C\u0438", "G\xF6r\xFCnen a\xE7\u0131klamal\u0131 PDF'yi d\u0131\u015Fa aktar", "Xu\u1EA5t PDF ch\xFA th\xEDch \u0111ang hi\u1EC3n th\u1ECB"],
  ["Exporting burned-in PDF...", "\u062C\u0627\u0631 \u062A\u0635\u062F\u064A\u0631 PDF \u0645\u062F\u0645\u062C \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A...", "PDF mit eingebrannten Anmerkungen wird exportiert...", "Exportando PDF con anotaciones integradas...", "Export du PDF avec annotations int\xE9gr\xE9es...", "Mengekspor PDF dengan anotasi tertanam...", "\u6CE8\u91C8\u3092\u713C\u304D\u8FBC\u3093\u3060 PDF \u3092\u51FA\u529B\u4E2D...", "\uC8FC\uC11D\uC774 \uD3EC\uD568\uB41C PDF \uB0B4\uBCF4\uB0B4\uB294 \uC911...", "Exportando PDF com anota\xE7\xF5es incorporadas...", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PDF \u0441\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u043C\u0438 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F\u043C\u0438...", "Notlar g\xF6m\xFCl\xFC PDF d\u0131\u015Fa aktar\u0131l\u0131yor...", "\u0110ang xu\u1EA5t PDF c\xF3 ch\xFA th\xEDch \u0111\u01B0\u1EE3c nh\xFAng..."],
  ["Flatten", "\u062A\u0633\u0637\u064A\u062D", "Reduzieren", "Acoplar", "Aplatir", "Ratakan", "\u7D71\u5408", "\uBCD1\uD569", "Achatar", "\u0421\u0432\u0435\u0441\u0442\u0438", "D\xFCzle\u015Ftir", "L\xE0m ph\u1EB3ng"],
  ["Flatten covers", "\u062A\u0633\u0637\u064A\u062D \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629", "Abdeckungen reduzieren", "Acoplar cubiertas", "Aplatir les caches", "Ratakan penutup", "\u8986\u3044\u3092\u7D71\u5408", "\uAC00\uB9BC \uC601\uC5ED \uBCD1\uD569", "Achatar coberturas", "\u0421\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438", "Kapaklar\u0131 d\xFCzle\u015Ftir", "L\xE0m ph\u1EB3ng v\xF9ng che"],
  ["Flattening covers will modify the current PDF by rebuilding rendered covered pages as images. Continue?", "\u0633\u064A\u0624\u062F\u064A \u062A\u0633\u0637\u064A\u062D \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0625\u0644\u0649 \u062A\u0639\u062F\u064A\u0644 PDF \u0627\u0644\u062D\u0627\u0644\u064A \u0628\u0625\u0639\u0627\u062F\u0629 \u0628\u0646\u0627\u0621 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u063A\u0637\u0627\u0629 \u0643\u0635\u0648\u0631. \u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629\u061F", "Das Reduzieren der Abdeckungen \xE4ndert das aktuelle PDF, indem betroffene Seiten als Bilder neu aufgebaut werden. Fortfahren?", "Acoplar las cubiertas modificar\xE1 el PDF actual reconstruyendo como im\xE1genes las p\xE1ginas cubiertas. \xBFContinuar?", "L'aplatissement des caches modifiera le PDF actuel en reconstruisant les pages concern\xE9es sous forme d'images. Continuer ?", "Meratakan penutup akan mengubah PDF saat ini dengan membangun ulang halaman tertutup sebagai gambar. Lanjutkan?", "\u8986\u3044\u3092\u7D71\u5408\u3059\u308B\u3068\u3001\u5BFE\u8C61\u30DA\u30FC\u30B8\u3092\u753B\u50CF\u3068\u3057\u3066\u518D\u69CB\u7BC9\u3057\u3001\u73FE\u5728\u306E PDF \u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u7D9A\u884C\u3057\u307E\u3059\u304B\uFF1F", "\uAC00\uB9BC \uC601\uC5ED\uC744 \uBCD1\uD569\uD558\uBA74 \uD574\uB2F9 \uD398\uC774\uC9C0\uB97C \uC774\uBBF8\uC9C0\uB85C \uB2E4\uC2DC \uB9CC\uB4E4\uC5B4 \uD604\uC7AC PDF\uAC00 \uC218\uC815\uB429\uB2C8\uB2E4. \uACC4\uC18D\uD560\uAE4C\uC694?", "Achatar as coberturas modificar\xE1 o PDF atual, reconstruindo as p\xE1ginas cobertas como imagens. Continuar?", "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439 \u0438\u0437\u043C\u0435\u043D\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 PDF, \u043F\u0435\u0440\u0435\u0441\u043E\u0437\u0434\u0430\u0432 \u0437\u0430\u0442\u0440\u043E\u043D\u0443\u0442\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u0430\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?", "Kapaklar\u0131 d\xFCzle\u015Ftirmek, kapal\u0131 sayfalar\u0131 g\xF6r\xFCnt\xFC olarak yeniden olu\u015Fturarak mevcut PDF'yi de\u011Fi\u015Ftirir. Devam edilsin mi?", "L\xE0m ph\u1EB3ng v\xF9ng che s\u1EBD s\u1EEDa PDF hi\u1EC7n t\u1EA1i b\u1EB1ng c\xE1ch d\u1EF1ng l\u1EA1i c\xE1c trang b\u1ECB che th\xE0nh \u1EA3nh. Ti\u1EBFp t\u1EE5c?"],
  ["HTML conversion failed. Check the console.", "\u0641\u0634\u0644 \u062A\u062D\u0648\u064A\u0644 HTML. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.", "HTML-Konvertierung fehlgeschlagen. Konsole pr\xFCfen.", "Fall\xF3 la conversi\xF3n HTML. Revisa la consola.", "\xC9chec de la conversion HTML. Consultez la console.", "Konversi HTML gagal. Periksa konsol.", "HTML \u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "HTML \uBCC0\uD658\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694.", "Falha na convers\xE3o HTML. Verifique o console.", "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F HTML. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.", "HTML d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z. Konsolu kontrol edin.", "Chuy\u1EC3n \u0111\u1ED5i HTML th\u1EA5t b\u1EA1i. H\xE3y ki\u1EC3m tra b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n."],
  ["Image could not be loaded", "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629", "Bild konnte nicht geladen werden", "No se pudo cargar la imagen", "Impossible de charger l'image", "Gambar tidak dapat dimuat", "\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F", "\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4", "N\xE3o foi poss\xEDvel carregar a imagem", "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "G\xF6r\xFCnt\xFC y\xFCklenemedi", "Kh\xF4ng th\u1EC3 t\u1EA3i \u1EA3nh"],
  ["Insert", "\u0625\u062F\u0631\u0627\u062C", "Einf\xFCgen", "Insertar", "Ins\xE9rer", "Sisipkan", "\u633F\u5165", "\uC0BD\uC785", "Inserir", "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C", "Ekle", "Ch\xE8n"],
  ["Insert after which page? Use 0 for the beginning, or leave blank to insert after the selected page.", "\u0628\u0639\u062F \u0623\u064A \u0635\u0641\u062D\u0629 \u062A\u0631\u064A\u062F \u0627\u0644\u0625\u062F\u0631\u0627\u062C\u061F \u0627\u0633\u062A\u062E\u062F\u0645 0 \u0644\u0644\u0628\u062F\u0627\u064A\u0629\u060C \u0623\u0648 \u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u0627 \u0644\u0644\u0625\u062F\u0631\u0627\u062C \u0628\u0639\u062F \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629.", "Nach welcher Seite einf\xFCgen? 0 f\xFCr den Anfang verwenden oder leer lassen, um nach der ausgew\xE4hlten Seite einzuf\xFCgen.", "\xBFDespu\xE9s de qu\xE9 p\xE1gina? Usa 0 para el inicio o d\xE9jalo vac\xEDo para insertar despu\xE9s de la p\xE1gina seleccionada.", "Apr\xE8s quelle page ins\xE9rer ? Utilisez 0 pour le d\xE9but ou laissez vide pour ins\xE9rer apr\xE8s la page s\xE9lectionn\xE9e.", "Sisipkan setelah halaman mana? Gunakan 0 untuk awal, atau kosongkan untuk menyisipkan setelah halaman terpilih.", "\u3069\u306E\u30DA\u30FC\u30B8\u306E\u5F8C\u306B\u633F\u5165\u3057\u307E\u3059\u304B\uFF1F\u5148\u982D\u306F 0\u3001\u9078\u629E\u30DA\u30FC\u30B8\u306E\u5F8C\u306A\u3089\u7A7A\u6B04\u306B\u3057\u307E\u3059\u3002", "\uC5B4\uB290 \uD398\uC774\uC9C0 \uB4A4\uC5D0 \uC0BD\uC785\uD560\uAE4C\uC694? \uB9E8 \uC55E\uC740 0, \uC120\uD0DD\uD55C \uD398\uC774\uC9C0 \uB4A4\uB294 \uBE48\uCE78\uC73C\uB85C \uB450\uC138\uC694.", "Inserir depois de qual p\xE1gina? Use 0 para o in\xEDcio ou deixe em branco para inserir ap\xF3s a p\xE1gina selecionada.", "\u041F\u043E\u0441\u043B\u0435 \u043A\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C? \u0412\u0432\u0435\u0434\u0438\u0442\u0435 0 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.", "Hangi sayfadan sonra eklensin? Ba\u015Flang\u0131\xE7 i\xE7in 0 kullan\u0131n veya se\xE7ili sayfadan sonras\u0131 i\xE7in bo\u015F b\u0131rak\u0131n.", "Ch\xE8n sau trang n\xE0o? D\xF9ng 0 \u0111\u1EC3 ch\xE8n \u0111\u1EA7u t\xE0i li\u1EC7u ho\u1EB7c \u0111\u1EC3 tr\u1ED1ng \u0111\u1EC3 ch\xE8n sau trang \u0111\xE3 ch\u1ECDn."],
  ["Invalid crop values. Margins cannot remove the whole page.", "\u0642\u064A\u0645 \u0627\u0644\u0642\u0635 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629. \u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0644\u0647\u0648\u0627\u0645\u0634 \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u0643\u0644\u0647\u0627.", "Ung\xFCltige Zuschnittwerte. Die R\xE4nder d\xFCrfen nicht die ganze Seite entfernen.", "Valores de recorte no v\xE1lidos. Los m\xE1rgenes no pueden eliminar toda la p\xE1gina.", "Valeurs de rognage incorrectes. Les marges ne peuvent pas supprimer toute la page.", "Nilai pangkas tidak valid. Margin tidak boleh menghapus seluruh halaman.", "\u5207\u308A\u629C\u304D\u5024\u304C\u7121\u52B9\u3067\u3059\u3002\u30DA\u30FC\u30B8\u5168\u4F53\u3092\u6D88\u3059\u4F59\u767D\u306B\u306F\u3067\u304D\u307E\u305B\u3093\u3002", "\uC790\uB974\uAE30 \uAC12\uC774 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC5EC\uBC31\uC73C\uB85C \uC804\uCCB4 \uD398\uC774\uC9C0\uB97C \uC81C\uAC70\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", "Valores de recorte inv\xE1lidos. As margens n\xE3o podem remover a p\xE1gina inteira.", "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0431\u0440\u0435\u0437\u043A\u0438. \u041F\u043E\u043B\u044F \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.", "K\u0131rpma de\u011Ferleri ge\xE7ersiz. Kenarlar t\xFCm sayfay\u0131 kald\u0131ramaz.", "Gi\xE1 tr\u1ECB c\u1EAFt kh\xF4ng h\u1EE3p l\u1EC7. L\u1EC1 kh\xF4ng th\u1EC3 lo\u1EA1i b\u1ECF to\xE0n b\u1ED9 trang."],
  ["Invalid page order.", "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D.", "Ung\xFCltige Seitenreihenfolge.", "Orden de p\xE1ginas no v\xE1lido.", "Ordre des pages incorrect.", "Urutan halaman tidak valid.", "\u30DA\u30FC\u30B8\u9806\u304C\u7121\u52B9\u3067\u3059\u3002", "\uD398\uC774\uC9C0 \uC21C\uC11C\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "Ordem de p\xE1ginas inv\xE1lida.", "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446.", "Sayfa s\u0131ras\u0131 ge\xE7ersiz.", "Th\u1EE9 t\u1EF1 trang kh\xF4ng h\u1EE3p l\u1EC7."],
  ["Left", "\u064A\u0633\u0627\u0631", "Links", "Izquierda", "Gauche", "Kiri", "\u5DE6", "\uC67C\uCABD", "Esquerda", "\u0421\u043B\u0435\u0432\u0430", "Sol", "Tr\xE1i"],
  ["MD conversion failed. Check the console.", "\u0641\u0634\u0644 \u062A\u062D\u0648\u064A\u0644 MD. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.", "MD-Konvertierung fehlgeschlagen. Konsole pr\xFCfen.", "Fall\xF3 la conversi\xF3n MD. Revisa la consola.", "\xC9chec de la conversion MD. Consultez la console.", "Konversi MD gagal. Periksa konsol.", "MD \u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "MD \uBCC0\uD658\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694.", "Falha na convers\xE3o MD. Verifique o console.", "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F MD. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.", "MD d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z. Konsolu kontrol edin.", "Chuy\u1EC3n \u0111\u1ED5i MD th\u1EA5t b\u1EA1i. H\xE3y ki\u1EC3m tra b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n."],
  ["Move down", "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0633\u0641\u0644", "Nach unten", "Mover abajo", "Descendre", "Turunkan", "\u4E0B\u3078\u79FB\u52D5", "\uC544\uB798\uB85C \uC774\uB3D9", "Mover para baixo", "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437", "A\u015Fa\u011F\u0131 ta\u015F\u0131", "Di chuy\u1EC3n xu\u1ED1ng"],
  ["Move one layer down", "\u062A\u062D\u0631\u064A\u0643 \u0637\u0628\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0623\u0633\u0641\u0644", "Eine Ebene nach unten", "Bajar una capa", "Descendre d'un calque", "Turun satu lapisan", "1 \u30EC\u30A4\u30E4\u30FC\u4E0B\u3078", "\uD55C \uB808\uC774\uC5B4 \uC544\uB798\uB85C", "Descer uma camada", "\u041D\u0430 \u0441\u043B\u043E\u0439 \u043D\u0438\u0436\u0435", "Bir katman a\u015Fa\u011F\u0131", "Xu\u1ED1ng m\u1ED9t l\u1EDBp"],
  ["Move one layer up", "\u062A\u062D\u0631\u064A\u0643 \u0637\u0628\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0623\u0639\u0644\u0649", "Eine Ebene nach oben", "Subir una capa", "Monter d'un calque", "Naik satu lapisan", "1 \u30EC\u30A4\u30E4\u30FC\u4E0A\u3078", "\uD55C \uB808\uC774\uC5B4 \uC704\uB85C", "Subir uma camada", "\u041D\u0430 \u0441\u043B\u043E\u0439 \u0432\u044B\u0448\u0435", "Bir katman yukar\u0131", "L\xEAn m\u1ED9t l\u1EDBp"],
  ["Move up", "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0639\u0644\u0649", "Nach oben", "Mover arriba", "Monter", "Naikkan", "\u4E0A\u3078\u79FB\u52D5", "\uC704\uB85C \uC774\uB3D9", "Mover para cima", "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u0432\u0435\u0440\u0445", "Yukar\u0131 ta\u015F\u0131", "Di chuy\u1EC3n l\xEAn"],
  ["No PDF page is available for image insertion.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u062D\u0629 PDF \u0645\u062A\u0627\u062D\u0629 \u0644\u0625\u062F\u0631\u0627\u062C \u0627\u0644\u0635\u0648\u0631\u0629.", "Keine PDF-Seite zum Einf\xFCgen eines Bildes verf\xFCgbar.", "No hay una p\xE1gina PDF disponible para insertar la imagen.", "Aucune page PDF n'est disponible pour ins\xE9rer l'image.", "Tidak ada halaman PDF untuk menyisipkan gambar.", "\u753B\u50CF\u3092\u633F\u5165\u3067\u304D\u308B PDF \u30DA\u30FC\u30B8\u304C\u3042\u308A\u307E\u305B\u3093\u3002", "\uC774\uBBF8\uC9C0\uB97C \uC0BD\uC785\uD560 PDF \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o h\xE1 p\xE1gina PDF dispon\xEDvel para inserir a imagem.", "\u041D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B PDF \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.", "G\xF6r\xFCnt\xFC eklemek i\xE7in PDF sayfas\u0131 yok.", "Kh\xF4ng c\xF3 trang PDF \u0111\u1EC3 ch\xE8n \u1EA3nh."],
  ["No PDF page is available for link insertion.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u062D\u0629 PDF \u0645\u062A\u0627\u062D\u0629 \u0644\u0625\u062F\u0631\u0627\u062C \u0627\u0644\u0631\u0627\u0628\u0637.", "Keine PDF-Seite zum Einf\xFCgen eines Links verf\xFCgbar.", "No hay una p\xE1gina PDF disponible para insertar el enlace.", "Aucune page PDF n'est disponible pour ins\xE9rer le lien.", "Tidak ada halaman PDF untuk menyisipkan tautan.", "\u30EA\u30F3\u30AF\u3092\u633F\u5165\u3067\u304D\u308B PDF \u30DA\u30FC\u30B8\u304C\u3042\u308A\u307E\u305B\u3093\u3002", "\uB9C1\uD06C\uB97C \uC0BD\uC785\uD560 PDF \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o h\xE1 p\xE1gina PDF dispon\xEDvel para inserir o link.", "\u041D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B PDF \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u0441\u0441\u044B\u043B\u043A\u0438.", "Ba\u011Flant\u0131 eklemek i\xE7in PDF sayfas\u0131 yok.", "Kh\xF4ng c\xF3 trang PDF \u0111\u1EC3 ch\xE8n li\xEAn k\u1EBFt."],
  ["No PDF rewrite backup is available.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0643\u062A\u0627\u0628\u0629 PDF.", "Keine Sicherung vor der PDF-Neuschreibung verf\xFCgbar.", "No hay copia de seguridad de la reescritura del PDF.", "Aucune sauvegarde de r\xE9\xE9criture du PDF n'est disponible.", "Tidak ada cadangan penulisan ulang PDF.", "PDF \u66F8\u304D\u63DB\u3048\u524D\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u3042\u308A\u307E\u305B\u3093\u3002", "PDF \uB2E4\uC2DC \uC4F0\uAE30 \uBC31\uC5C5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o h\xE1 backup da regrava\xE7\xE3o do PDF.", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 \u0434\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0438 PDF.", "PDF yeniden yazma yede\u011Fi yok.", "Kh\xF4ng c\xF3 b\u1EA3n sao l\u01B0u tr\u01B0\u1EDBc khi ghi l\u1EA1i PDF."],
  ["No comments", "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A", "Keine Kommentare", "Sin comentarios", "Aucun commentaire", "Tidak ada komentar", "\u30B3\u30E1\u30F3\u30C8\u306A\u3057", "\uB313\uAE00 \uC5C6\uC74C", "Sem coment\xE1rios", "\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432", "Yorum yok", "Kh\xF4ng c\xF3 b\xECnh lu\u1EADn"],
  ["No cover regions to flatten.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u0627\u0637\u0642 \u062A\u063A\u0637\u064A\u0629 \u0644\u062A\u0633\u0637\u064A\u062D\u0647\u0627.", "Keine Abdeckbereiche zum Reduzieren.", "No hay regiones cubiertas para acoplar.", "Aucune zone masqu\xE9e \xE0 aplatir.", "Tidak ada area penutup untuk diratakan.", "\u7D71\u5408\u3059\u308B\u8986\u3044\u9818\u57DF\u304C\u3042\u308A\u307E\u305B\u3093\u3002", "\uBCD1\uD569\uD560 \uAC00\uB9BC \uC601\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o h\xE1 regi\xF5es de cobertura para achatar.", "\u041D\u0435\u0442 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439 \u0434\u043B\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F.", "D\xFCzle\u015Ftirilecek kapak alan\u0131 yok.", "Kh\xF4ng c\xF3 v\xF9ng che \u0111\u1EC3 l\xE0m ph\u1EB3ng."],
  ["No highlight", "\u0628\u062F\u0648\u0646 \u062A\u0645\u064A\u064A\u0632", "Keine Markierung", "Sin resaltado", "Sans surlignage", "Tanpa sorotan", "\u30CF\u30A4\u30E9\u30A4\u30C8\u306A\u3057", "\uD558\uC774\uB77C\uC774\uD2B8 \uC5C6\uC74C", "Sem destaque", "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438", "Vurgusuz", "Kh\xF4ng t\xF4 s\xE1ng"],
  ["No image configured", "\u0644\u0645 \u064A\u062A\u0645 \u0625\u0639\u062F\u0627\u062F \u0635\u0648\u0631\u0629", "Kein Bild konfiguriert", "No hay imagen configurada", "Aucune image configur\xE9e", "Tidak ada gambar yang dikonfigurasi", "\u753B\u50CF\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093", "\uC124\uC815\uB41C \uC774\uBBF8\uC9C0 \uC5C6\uC74C", "Nenhuma imagem configurada", "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043E", "G\xF6r\xFCnt\xFC ayarlanmad\u0131", "Ch\u01B0a c\u1EA5u h\xECnh \u1EA3nh"],
  ["No insertable image was found.", "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0635\u0648\u0631\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0625\u062F\u0631\u0627\u062C.", "Kein einf\xFCgbares Bild gefunden.", "No se encontr\xF3 una imagen insertable.", "Aucune image ins\xE9rable trouv\xE9e.", "Tidak ditemukan gambar yang dapat disisipkan.", "\u633F\u5165\u3067\u304D\u308B\u753B\u50CF\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002", "\uC0BD\uC785\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", "Nenhuma imagem inser\xEDvel foi encontrada.", "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438.", "Eklenebilir g\xF6r\xFCnt\xFC bulunamad\u0131.", "Kh\xF4ng t\xECm th\u1EA5y \u1EA3nh c\xF3 th\u1EC3 ch\xE8n."],
  ["No new annotations to save.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u0644\u0644\u062D\u0641\u0638.", "Keine neuen Anmerkungen zu speichern.", "No hay anotaciones nuevas que guardar.", "Aucune nouvelle annotation \xE0 enregistrer.", "Tidak ada anotasi baru untuk disimpan.", "\u4FDD\u5B58\u3059\u308B\u65B0\u3057\u3044\u6CE8\u91C8\u306F\u3042\u308A\u307E\u305B\u3093\u3002", "\uC800\uC7A5\uD560 \uC0C8 \uC8FC\uC11D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", "N\xE3o h\xE1 novas anota\xE7\xF5es para salvar.", "\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F.", "Kaydedilecek yeni not yok.", "Kh\xF4ng c\xF3 ch\xFA th\xEDch m\u1EDBi \u0111\u1EC3 l\u01B0u."],
  ["No rendered covered pages are available. Scroll to covered pages and try again.", "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u062D\u0627\u062A \u0645\u063A\u0637\u0627\u0629 \u0645\u0639\u0631\u0648\u0636\u0629. \u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u063A\u0637\u0627\u0629 \u0648\u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627.", "Keine gerenderten abgedeckten Seiten verf\xFCgbar. Zu den Seiten scrollen und erneut versuchen.", "No hay p\xE1ginas cubiertas renderizadas. Despl\xE1zate hasta ellas e int\xE9ntalo de nuevo.", "Aucune page masqu\xE9e rendue n'est disponible. Faites d\xE9filer jusqu'aux pages concern\xE9es et r\xE9essayez.", "Tidak ada halaman tertutup yang sudah dirender. Gulir ke halaman tersebut lalu coba lagi.", "\u63CF\u753B\u6E08\u307F\u306E\u8986\u3044\u30DA\u30FC\u30B8\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5BFE\u8C61\u30DA\u30FC\u30B8\u307E\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "\uB80C\uB354\uB9C1\uB41C \uAC00\uB9BC \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uD398\uC774\uC9C0\uB85C \uC2A4\uD06C\uB864\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.", "N\xE3o h\xE1 p\xE1ginas cobertas renderizadas. Role at\xE9 elas e tente novamente.", "\u041D\u0435\u0442 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446. \u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u043A \u043D\u0438\u043C \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.", "\u0130\u015Flenmi\u015F kapal\u0131 sayfa yok. Kapal\u0131 sayfalara kayd\u0131r\u0131p yeniden deneyin.", "Kh\xF4ng c\xF3 trang b\u1ECB che \u0111\xE3 k\u1EBFt xu\u1EA5t. Cu\u1ED9n \u0111\u1EBFn c\xE1c trang \u0111\xF3 r\u1ED3i th\u1EED l\u1EA1i."],
  ["Open after export", "\u0627\u0644\u0641\u062A\u062D \u0628\u0639\u062F \u0627\u0644\u062A\u0635\u062F\u064A\u0631", "Nach Export \xF6ffnen", "Abrir despu\xE9s de exportar", "Ouvrir apr\xE8s l'export", "Buka setelah ekspor", "\u51FA\u529B\u5F8C\u306B\u958B\u304F", "\uB0B4\uBCF4\uB0B8 \uD6C4 \uC5F4\uAE30", "Abrir ap\xF3s exportar", "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430", "D\u0131\u015Fa aktard\u0131ktan sonra a\xE7", "M\u1EDF sau khi xu\u1EA5t"],
  ["PDF link", "\u0631\u0627\u0628\u0637 PDF", "PDF-Link", "Enlace PDF", "Lien PDF", "Tautan PDF", "PDF \u30EA\u30F3\u30AF", "PDF \uB9C1\uD06C", "Link PDF", "\u0421\u0441\u044B\u043B\u043A\u0430 PDF", "PDF ba\u011Flant\u0131s\u0131", "Li\xEAn k\u1EBFt PDF"],
  ["PDF text", "\u0646\u0635 PDF", "PDF-Text", "Texto PDF", "Texte PDF", "Teks PDF", "PDF \u30C6\u30AD\u30B9\u30C8", "PDF \uD14D\uC2A4\uD2B8", "Texto PDF", "\u0422\u0435\u043A\u0441\u0442 PDF", "PDF metni", "V\u0103n b\u1EA3n PDF"],
  ["PDF/Markdown/DOCX conversion", "\u062A\u062D\u0648\u064A\u0644 PDF/Markdown/DOCX", "PDF/Markdown/DOCX-Konvertierung", "Conversi\xF3n PDF/Markdown/DOCX", "Conversion PDF/Markdown/DOCX", "Konversi PDF/Markdown/DOCX", "PDF/Markdown/DOCX \u5909\u63DB", "PDF/Markdown/DOCX \uBCC0\uD658", "Convers\xE3o PDF/Markdown/DOCX", "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 PDF/Markdown/DOCX", "PDF/Markdown/DOCX d\xF6n\xFC\u015Ft\xFCrme", "Chuy\u1EC3n \u0111\u1ED5i PDF/Markdown/DOCX"],
  ["PNG conversion failed. Check the console.", "\u0641\u0634\u0644 \u062A\u062D\u0648\u064A\u0644 PNG. \u0631\u0627\u062C\u0639 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.", "PNG-Konvertierung fehlgeschlagen. Konsole pr\xFCfen.", "Fall\xF3 la conversi\xF3n PNG. Revisa la consola.", "\xC9chec de la conversion PNG. Consultez la console.", "Konversi PNG gagal. Periksa konsol.", "PNG \u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "PNG \uBCC0\uD658\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694.", "Falha na convers\xE3o PNG. Verifique o console.", "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F PNG. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.", "PNG d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z. Konsolu kontrol edin.", "Chuy\u1EC3n \u0111\u1ED5i PNG th\u1EA5t b\u1EA1i. H\xE3y ki\u1EC3m tra b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n."],
  ["Page crop values recorded.", "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0642\u064A\u0645 \u0642\u0635 \u0627\u0644\u0635\u0641\u062D\u0629.", "Seitenzuschnitt gespeichert.", "Valores de recorte registrados.", "Valeurs de rognage enregistr\xE9es.", "Nilai pangkas halaman dicatat.", "\u30DA\u30FC\u30B8\u306E\u5207\u308A\u629C\u304D\u5024\u3092\u8A18\u9332\u3057\u307E\u3057\u305F\u3002", "\uD398\uC774\uC9C0 \uC790\uB974\uAE30 \uAC12\uC744 \uAE30\uB85D\uD588\uC2B5\uB2C8\uB2E4.", "Valores de recorte registrados.", "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0431\u0440\u0435\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B.", "Sayfa k\u0131rpma de\u011Ferleri kaydedildi.", "\u0110\xE3 ghi gi\xE1 tr\u1ECB c\u1EAFt trang."],
  ["Pages deleted", "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u062D\u0627\u062A", "Seiten gel\xF6scht", "P\xE1ginas eliminadas", "Pages supprim\xE9es", "Halaman dihapus", "\u30DA\u30FC\u30B8\u3092\u524A\u9664\u3057\u307E\u3057\u305F", "\uD398\uC774\uC9C0 \uC0AD\uC81C\uB428", "P\xE1ginas exclu\xEDdas", "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B", "Sayfalar silindi", "\u0110\xE3 x\xF3a trang"],
  ["Pages reordered", "\u062A\u0645\u062A \u0625\u0639\u0627\u062F\u0629 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u0641\u062D\u0627\u062A", "Seiten neu angeordnet", "P\xE1ginas reordenadas", "Pages r\xE9ordonn\xE9es", "Halaman disusun ulang", "\u30DA\u30FC\u30B8\u3092\u4E26\u3079\u66FF\u3048\u307E\u3057\u305F", "\uD398\uC774\uC9C0 \uC21C\uC11C \uBCC0\uACBD\uB428", "P\xE1ginas reordenadas", "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0438\u0437\u043C\u0435\u043D\u0451\u043D", "Sayfalar yeniden s\u0131raland\u0131", "\u0110\xE3 s\u1EAFp x\u1EBFp l\u1EA1i trang"],
  ["Payment QR", "\u0631\u0645\u0632 QR \u0644\u0644\u062F\u0641\u0639", "Zahlungs-QR", "QR de pago", "QR de paiement", "QR pembayaran", "\u652F\u6255\u3044 QR", "\uACB0\uC81C QR", "QR de pagamento", "QR \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B", "\xD6deme QR", "QR thanh to\xE1n"],
  ["Pdftion auto-saves editable annotation data and exposes PdftionAI / __PDftionAI__ on the window for local scripts or AI agents to inspect, summarize, and operate the active PDF annotations.", "\u064A\u062D\u0641\u0638 Pdftion \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u0631\u064A\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u060C \u0648\u064A\u0639\u0631\u0636 PdftionAI / __PDftionAI__ \u0644\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0623\u0648 \u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0641\u062D\u0635 \u062A\u0639\u0644\u064A\u0642\u0627\u062A PDF \u0627\u0644\u0646\u0634\u0637\u0629 \u0648\u062A\u0644\u062E\u064A\u0635\u0647\u0627 \u0648\u062A\u0634\u063A\u064A\u0644\u0647\u0627.", "Pdftion speichert bearbeitbare Anmerkungen automatisch und stellt PdftionAI / __PDftionAI__ im Fenster bereit, damit lokale Skripte oder KI-Agenten aktive PDF-Anmerkungen pr\xFCfen, zusammenfassen und bedienen k\xF6nnen.", "Pdftion guarda autom\xE1ticamente las anotaciones editables y expone PdftionAI / __PDftionAI__ en la ventana para que scripts locales o agentes de IA inspeccionen, resuman y operen las anotaciones PDF activas.", "Pdftion enregistre automatiquement les annotations modifiables et expose PdftionAI / __PDftionAI__ dans la fen\xEAtre afin que les scripts locaux ou agents IA puissent inspecter, r\xE9sumer et manipuler les annotations PDF actives.", "Pdftion menyimpan otomatis data anotasi yang dapat diedit dan mengekspos PdftionAI / __PDftionAI__ agar skrip lokal atau agen AI dapat memeriksa, merangkum, dan mengoperasikan anotasi PDF aktif.", "Pdftion \u306F\u7DE8\u96C6\u53EF\u80FD\u306A\u6CE8\u91C8\u30C7\u30FC\u30BF\u3092\u81EA\u52D5\u4FDD\u5B58\u3057\u3001\u30ED\u30FC\u30AB\u30EB\u30B9\u30AF\u30EA\u30D7\u30C8\u3084 AI \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u73FE\u5728\u306E PDF \u6CE8\u91C8\u3092\u78BA\u8A8D\u3001\u8981\u7D04\u3001\u64CD\u4F5C\u3067\u304D\u308B\u3088\u3046 PdftionAI / __PDftionAI__ \u3092\u516C\u958B\u3057\u307E\u3059\u3002", "Pdftion\uC740 \uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uC8FC\uC11D \uB370\uC774\uD130\uB97C \uC790\uB3D9 \uC800\uC7A5\uD558\uACE0 \uB85C\uCEEC \uC2A4\uD06C\uB9BD\uD2B8\uB098 AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uD65C\uC131 PDF \uC8FC\uC11D\uC744 \uAC80\uC0AC, \uC694\uC57D, \uC870\uC791\uD560 \uC218 \uC788\uB3C4\uB85D PdftionAI / __PDftionAI__\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.", "O Pdftion salva automaticamente os dados de anota\xE7\xF5es edit\xE1veis e exp\xF5e PdftionAI / __PDftionAI__ para scripts locais ou agentes de IA inspecionarem, resumirem e operarem as anota\xE7\xF5es PDF ativas.", "Pdftion \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 PdftionAI / __PDftionAI__, \u0447\u0442\u043E\u0431\u044B \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043A\u0440\u0438\u043F\u0442\u044B \u0438\u043B\u0438 \u0418\u0418-\u0430\u0433\u0435\u043D\u0442\u044B \u043C\u043E\u0433\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C, \u0441\u0443\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 PDF.", "Pdftion d\xFCzenlenebilir not verilerini otomatik kaydeder ve yerel betiklerin veya yapay zeka ajanlar\u0131n\u0131n etkin PDF notlar\u0131n\u0131 incelemesi, \xF6zetlemesi ve i\u015Flemesi i\xE7in PdftionAI / __PDftionAI__ sunar.", "Pdftion t\u1EF1 \u0111\u1ED9ng l\u01B0u d\u1EEF li\u1EC7u ch\xFA th\xEDch c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa v\xE0 cung c\u1EA5p PdftionAI / __PDftionAI__ \u0111\u1EC3 t\u1EADp l\u1EC7nh c\u1EE5c b\u1ED9 ho\u1EB7c t\xE1c nh\xE2n AI ki\u1EC3m tra, t\xF3m t\u1EAFt v\xE0 thao t\xE1c ch\xFA th\xEDch PDF \u0111ang ho\u1EA1t \u0111\u1ED9ng."],
  ["Pdftion settings", "\u0625\u0639\u062F\u0627\u062F\u0627\u062A Pdftion", "Pdftion-Einstellungen", "Ajustes de Pdftion", "Param\xE8tres de Pdftion", "Pengaturan Pdftion", "Pdftion \u8A2D\u5B9A", "Pdftion \uC124\uC815", "Configura\xE7\xF5es do Pdftion", "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Pdftion", "Pdftion ayarlar\u0131", "C\xE0i \u0111\u1EB7t Pdftion"],
  ["Pixels. 22-32 is recommended; use larger values on touch screens.", "\u0628\u0627\u0644\u0628\u0643\u0633\u0644. \u064A\u0648\u0635\u0649 \u0628\u0640 22-32\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0642\u064A\u0645\u0627 \u0623\u0643\u0628\u0631 \u0639\u0644\u0649 \u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0644\u0645\u0633.", "Pixel. 22\u201332 wird empfohlen; auf Touchscreens gr\xF6\xDFere Werte verwenden.", "P\xEDxeles. Se recomienda 22-32; usa valores mayores en pantallas t\xE1ctiles.", "Pixels. 22 \xE0 32 est recommand\xE9 ; utilisez une valeur sup\xE9rieure sur \xE9cran tactile.", "Piksel. Disarankan 22-32; gunakan nilai lebih besar pada layar sentuh.", "\u30D4\u30AF\u30BB\u30EB\u300222\uFF5E32 \u3092\u63A8\u5968\u3057\u3001\u30BF\u30C3\u30C1\u753B\u9762\u3067\u306F\u5927\u304D\u3081\u306B\u3057\u307E\u3059\u3002", "\uD53D\uC140. 22~32\uB97C \uAD8C\uC7A5\uD558\uBA70 \uD130\uCE58 \uD654\uBA74\uC5D0\uC11C\uB294 \uB354 \uD070 \uAC12\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.", "Pixels. Recomenda-se 22-32; use valores maiores em telas sens\xEDveis ao toque.", "\u041F\u0438\u043A\u0441\u0435\u043B\u0438. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F 22\u201332; \u043D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.", "Piksel. 22-32 \xF6nerilir; dokunmatik ekranlarda daha b\xFCy\xFCk de\u011Fer kullan\u0131n.", "Pixel. Khuy\u1EBFn ngh\u1ECB 22-32; d\xF9ng gi\xE1 tr\u1ECB l\u1EDBn h\u01A1n tr\xEAn m\xE0n h\xECnh c\u1EA3m \u1EE9ng."],
  ["Pixels. Increase when the top is covered; use 0 for no extra gap.", "\u0628\u0627\u0644\u0628\u0643\u0633\u0644. \u0632\u062F \u0627\u0644\u0642\u064A\u0645\u0629 \u0639\u0646\u062F \u062D\u062C\u0628 \u0627\u0644\u0623\u0639\u0644\u0649\u061B \u0627\u0633\u062A\u062E\u062F\u0645 0 \u062F\u0648\u0646 \u0641\u0631\u0627\u063A \u0625\u0636\u0627\u0641\u064A.", "Pixel. Erh\xF6hen, wenn der obere Bereich verdeckt ist; 0 f\xFCr keinen zus\xE4tzlichen Abstand.", "P\xEDxeles. Aumenta el valor si la parte superior queda cubierta; usa 0 sin espacio extra.", "Pixels. Augmentez si le haut est masqu\xE9 ; utilisez 0 sans espace suppl\xE9mentaire.", "Piksel. Tingkatkan bila bagian atas tertutup; gunakan 0 tanpa jarak tambahan.", "\u30D4\u30AF\u30BB\u30EB\u3002\u4E0A\u90E8\u304C\u96A0\u308C\u308B\u5834\u5408\u306F\u5897\u3084\u3057\u3001\u8FFD\u52A0\u4F59\u767D\u306A\u3057\u306F 0 \u306B\u3057\u307E\u3059\u3002", "\uD53D\uC140. \uC0C1\uB2E8\uC774 \uAC00\uB824\uC9C0\uBA74 \uB298\uB9AC\uACE0 \uCD94\uAC00 \uAC04\uACA9\uC774 \uD544\uC694 \uC5C6\uC73C\uBA74 0\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.", "Pixels. Aumente quando o topo estiver coberto; use 0 sem espa\xE7o extra.", "\u041F\u0438\u043A\u0441\u0435\u043B\u0438. \u0423\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435, \u0435\u0441\u043B\u0438 \u0432\u0435\u0440\u0445 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442; 0 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0441\u0442\u0443\u043F\u0430.", "Piksel. \xDCst k\u0131s\u0131m kapal\u0131ysa art\u0131r\u0131n; ek bo\u015Fluk i\xE7in 0 kullan\u0131n.", "Pixel. T\u0103ng khi ph\u1EA7n tr\xEAn b\u1ECB che; d\xF9ng 0 n\u1EBFu kh\xF4ng c\u1EA7n kho\u1EA3ng tr\u1ED1ng."],
  ["Pixels. It is still clamped to the viewport on narrow screens.", "\u0628\u0627\u0644\u0628\u0643\u0633\u0644. \u0633\u062A\u0638\u0644 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0642\u064A\u062F\u0629 \u0628\u0625\u0637\u0627\u0631 \u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0636\u064A\u0642\u0629.", "Pixel. Auf schmalen Bildschirmen wird weiterhin an den sichtbaren Bereich angepasst.", "P\xEDxeles. En pantallas estrechas seguir\xE1 limitado al \xE1rea visible.", "Pixels. La valeur reste limit\xE9e \xE0 la zone visible sur les \xE9crans \xE9troits.", "Piksel. Pada layar sempit tetap dibatasi ke area tampilan.", "\u30D4\u30AF\u30BB\u30EB\u3002\u72ED\u3044\u753B\u9762\u3067\u306F\u8868\u793A\u9818\u57DF\u5185\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u3002", "\uD53D\uC140. \uC881\uC740 \uD654\uBA74\uC5D0\uC11C\uB294 \uC5EC\uC804\uD788 \uD654\uBA74 \uC601\uC5ED \uC548\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.", "Pixels. Em telas estreitas, continuar\xE1 limitado \xE0 \xE1rea vis\xEDvel.", "\u041F\u0438\u043A\u0441\u0435\u043B\u0438. \u041D\u0430 \u0443\u0437\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C\u044E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430.", "Piksel. Dar ekranlarda g\xF6r\xFCn\xFCm alan\u0131na g\xF6re s\u0131n\u0131rland\u0131r\u0131l\u0131r.", "Pixel. Tr\xEAn m\xE0n h\xECnh h\u1EB9p, gi\xE1 tr\u1ECB v\u1EABn b\u1ECB gi\u1EDBi h\u1EA1n trong v\xF9ng nh\xECn."],
  ["Raises PDF menu stacking and button hit areas to help inside review cards and embeds.", "\u064A\u0631\u0641\u0639 \u062A\u0631\u062A\u064A\u0628 \u0642\u0627\u0626\u0645\u0629 PDF \u0648\u0645\u0633\u0627\u062D\u0627\u062A \u0644\u0645\u0633 \u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0644\u062A\u0633\u0647\u064A\u0644 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u062F\u0627\u062E\u0644 \u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u0627\u0644\u062A\u0636\u0645\u064A\u0646\u0627\u062A.", "Erh\xF6ht die Stapelreihenfolge des PDF-Men\xFCs und die Trefferfl\xE4chen der Schaltfl\xE4chen in Review-Karten und Einbettungen.", "Eleva la capa del men\xFA PDF y las \xE1reas t\xE1ctiles de los botones para facilitar su uso en tarjetas y contenidos incrustados.", "Augmente le niveau du menu PDF et la zone cliquable des boutons dans les cartes de r\xE9vision et contenus int\xE9gr\xE9s.", "Menaikkan lapisan menu PDF dan area sentuh tombol agar mudah digunakan di kartu ulasan dan sematan.", "\u30EC\u30D3\u30E5\u30FC\u30AB\u30FC\u30C9\u3084\u57CB\u3081\u8FBC\u307F\u5185\u3067\u4F7F\u3044\u3084\u3059\u3044\u3088\u3046\u3001PDF \u30E1\u30CB\u30E5\u30FC\u306E\u91CD\u306A\u308A\u9806\u3068\u30DC\u30BF\u30F3\u306E\u30BF\u30C3\u30D7\u9818\u57DF\u3092\u62E1\u5927\u3057\u307E\u3059\u3002", "\uAC80\uD1A0 \uCE74\uB4DC\uC640 \uC784\uBCA0\uB4DC\uC5D0\uC11C \uC4F0\uAE30 \uC27D\uB3C4\uB85D PDF \uBA54\uB274\uC758 \uB808\uC774\uC5B4\uC640 \uBC84\uD2BC \uD130\uCE58 \uC601\uC5ED\uC744 \uB192\uC785\uB2C8\uB2E4.", "Eleva a camada do menu PDF e as \xE1reas de toque dos bot\xF5es para uso em cart\xF5es e conte\xFAdos incorporados.", "\u041F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0441\u043B\u043E\u0439 \u043C\u0435\u043D\u044E PDF \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043A\u043D\u043E\u043F\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u0438 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445.", "\u0130nceleme kartlar\u0131 ve g\xF6mmelerde kullan\u0131m i\xE7in PDF men\xFC katman\u0131n\u0131 ve d\xFC\u011Fme dokunma alanlar\u0131n\u0131 b\xFCy\xFCt\xFCr.", "T\u0103ng l\u1EDBp hi\u1EC3n th\u1ECB menu PDF v\xE0 v\xF9ng ch\u1EA1m n\xFAt \u0111\u1EC3 d\u1EC5 d\xF9ng trong th\u1EBB xem x\xE9t v\xE0 n\u1ED9i dung nh\xFAng."],
  ["Reorder pages", "\u0625\u0639\u0627\u062F\u0629 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u0641\u062D\u0627\u062A", "Seiten neu anordnen", "Reordenar p\xE1ginas", "R\xE9ordonner les pages", "Susun ulang halaman", "\u30DA\u30FC\u30B8\u3092\u4E26\u3079\u66FF\u3048\u308B", "\uD398\uC774\uC9C0 \uC7AC\uC815\uB82C", "Reordenar p\xE1ginas", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446", "Sayfalar\u0131 yeniden s\u0131rala", "S\u1EAFp x\u1EBFp l\u1EA1i trang"],
  ["Revert", "\u0627\u0633\u062A\u0639\u0627\u062F\u0629", "Wiederherstellen", "Revertir", "Restaurer", "Kembalikan", "\u5143\u306B\u623B\u3059", "\uB418\uB3CC\uB9AC\uAE30", "Reverter", "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C", "Geri al", "Kh\xF4i ph\u1EE5c"],
  ["Revert last PDF rewrite", "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0622\u062E\u0631 \u0625\u0639\u0627\u062F\u0629 \u0643\u062A\u0627\u0628\u0629 \u0644\u0640 PDF", "Letzte PDF-Neuschreibung r\xFCckg\xE4ngig machen", "Revertir la \xFAltima reescritura del PDF", "Annuler la derni\xE8re r\xE9\xE9criture du PDF", "Kembalikan penulisan ulang PDF terakhir", "\u76F4\u524D\u306E PDF \u66F8\u304D\u63DB\u3048\u3092\u5143\u306B\u623B\u3059", "\uB9C8\uC9C0\uB9C9 PDF \uB2E4\uC2DC \uC4F0\uAE30 \uB418\uB3CC\uB9AC\uAE30", "Reverter a \xFAltima regrava\xE7\xE3o do PDF", "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u044C PDF", "Son PDF yeniden yaz\u0131m\u0131n\u0131 geri al", "Ho\xE0n t\xE1c l\u1EA7n ghi l\u1EA1i PDF g\u1EA7n nh\u1EA5t"],
  ["Revert to the state before the last PDF rewrite? The current PDF file and editable annotations will be restored from backup.", "\u0627\u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0644\u0629 \u0642\u0628\u0644 \u0622\u062E\u0631 \u0625\u0639\u0627\u062F\u0629 \u0643\u062A\u0627\u0628\u0629 \u0644\u0640 PDF\u061F \u0633\u064A\u062A\u0645 \u0627\u0633\u062A\u0631\u062C\u0627\u0639 \u0645\u0644\u0641 PDF \u0627\u0644\u062D\u0627\u0644\u064A \u0648\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u0631\u064A\u0631 \u0645\u0646 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629.", "Zum Zustand vor der letzten PDF-Neuschreibung zur\xFCckkehren? PDF und bearbeitbare Anmerkungen werden aus der Sicherung wiederhergestellt.", "\xBFVolver al estado anterior a la \xFAltima reescritura? El PDF y las anotaciones editables se restaurar\xE1n desde la copia de seguridad.", "Revenir \xE0 l'\xE9tat pr\xE9c\xE9dant la derni\xE8re r\xE9\xE9criture ? Le PDF et les annotations modifiables seront restaur\xE9s depuis la sauvegarde.", "Kembali ke keadaan sebelum penulisan ulang PDF terakhir? PDF dan anotasi yang dapat diedit akan dipulihkan dari cadangan.", "\u76F4\u524D\u306E PDF \u66F8\u304D\u63DB\u3048\u524D\u306B\u623B\u3057\u307E\u3059\u304B\uFF1F\u73FE\u5728\u306E PDF \u3068\u7DE8\u96C6\u53EF\u80FD\u306A\u6CE8\u91C8\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3057\u307E\u3059\u3002", "\uB9C8\uC9C0\uB9C9 PDF \uB2E4\uC2DC \uC4F0\uAE30 \uC804 \uC0C1\uD0DC\uB85C \uB3CC\uC544\uAC08\uAE4C\uC694? \uD604\uC7AC PDF\uC640 \uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uC8FC\uC11D\uC744 \uBC31\uC5C5\uC5D0\uC11C \uBCF5\uC6D0\uD569\uB2C8\uB2E4.", "Voltar ao estado anterior \xE0 \xFAltima regrava\xE7\xE3o? O PDF e as anota\xE7\xF5es edit\xE1veis ser\xE3o restaurados do backup.", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044E \u0434\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0438 PDF? PDF \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u0438\u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438.", "Son PDF yeniden yaz\u0131m\u0131ndan \xF6nceki duruma d\xF6n\xFCls\xFCn m\xFC? PDF ve d\xFCzenlenebilir notlar yedekten geri y\xFCklenir.", "Kh\xF4i ph\u1EE5c v\u1EC1 tr\u1EA1ng th\xE1i tr\u01B0\u1EDBc l\u1EA7n ghi l\u1EA1i PDF g\u1EA7n nh\u1EA5t? PDF hi\u1EC7n t\u1EA1i v\xE0 ch\xFA th\xEDch c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa s\u1EBD \u0111\u01B0\u1EE3c ph\u1EE5c h\u1ED3i t\u1EEB b\u1EA3n sao l\u01B0u."],
  ["Reverted the last PDF rewrite.", "\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0622\u062E\u0631 \u0625\u0639\u0627\u062F\u0629 \u0643\u062A\u0627\u0628\u0629 \u0644\u0640 PDF.", "Letzte PDF-Neuschreibung wurde r\xFCckg\xE4ngig gemacht.", "Se revirti\xF3 la \xFAltima reescritura del PDF.", "La derni\xE8re r\xE9\xE9criture du PDF a \xE9t\xE9 annul\xE9e.", "Penulisan ulang PDF terakhir dikembalikan.", "\u76F4\u524D\u306E PDF \u66F8\u304D\u63DB\u3048\u3092\u5143\u306B\u623B\u3057\u307E\u3057\u305F\u3002", "\uB9C8\uC9C0\uB9C9 PDF \uB2E4\uC2DC \uC4F0\uAE30\uB97C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.", "A \xFAltima regrava\xE7\xE3o do PDF foi revertida.", "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u044C PDF \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430.", "Son PDF yeniden yaz\u0131m\u0131 geri al\u0131nd\u0131.", "\u0110\xE3 ho\xE0n t\xE1c l\u1EA7n ghi l\u1EA1i PDF g\u1EA7n nh\u1EA5t."],
  ["Right", "\u064A\u0645\u064A\u0646", "Rechts", "Derecha", "Droite", "Kanan", "\u53F3", "\uC624\uB978\uCABD", "Direita", "\u0421\u043F\u0440\u0430\u0432\u0430", "Sa\u011F", "Ph\u1EA3i"],
  ["Save", "\u062D\u0641\u0638", "Speichern", "Guardar", "Enregistrer", "Simpan", "\u4FDD\u5B58", "\uC800\uC7A5", "Salvar", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "Kaydet", "L\u01B0u"],
  ["Selected pages cropped", "\u062A\u0645 \u0642\u0635 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629", "Ausgew\xE4hlte Seiten zugeschnitten", "P\xE1ginas seleccionadas recortadas", "Pages s\xE9lectionn\xE9es rogn\xE9es", "Halaman terpilih dipangkas", "\u9078\u629E\u30DA\u30FC\u30B8\u3092\u5207\u308A\u629C\u304D\u307E\u3057\u305F", "\uC120\uD0DD\uD55C \uD398\uC774\uC9C0\uB97C \uC798\uB790\uC2B5\uB2C8\uB2E4", "P\xE1ginas selecionadas recortadas", "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u044B", "Se\xE7ili sayfalar k\u0131rp\u0131ld\u0131", "\u0110\xE3 c\u1EAFt c\xE1c trang \u0111\xE3 ch\u1ECDn"],
  ["Selected pages rotated", "\u062A\u0645 \u062A\u062F\u0648\u064A\u0631 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629", "Ausgew\xE4hlte Seiten gedreht", "P\xE1ginas seleccionadas rotadas", "Pages s\xE9lectionn\xE9es pivot\xE9es", "Halaman terpilih diputar", "\u9078\u629E\u30DA\u30FC\u30B8\u3092\u56DE\u8EE2\u3057\u307E\u3057\u305F", "\uC120\uD0DD\uD55C \uD398\uC774\uC9C0\uB97C \uD68C\uC804\uD588\uC2B5\uB2C8\uB2E4", "P\xE1ginas selecionadas giradas", "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u044B", "Se\xE7ili sayfalar d\xF6nd\xFCr\xFCld\xFC", "\u0110\xE3 xoay c\xE1c trang \u0111\xE3 ch\u1ECDn"],
  ["Selection", "\u062A\u062D\u062F\u064A\u062F", "Auswahl", "Selecci\xF3n", "S\xE9lection", "Pilihan", "\u9078\u629E", "\uC120\uD0DD", "Sele\xE7\xE3o", "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435", "Se\xE7im", "L\u1EF1a ch\u1ECDn"],
  ["Selection and touch", "\u0627\u0644\u062A\u062D\u062F\u064A\u062F \u0648\u0627\u0644\u0644\u0645\u0633", "Auswahl und Touch", "Selecci\xF3n y toque", "S\xE9lection et toucher", "Pilihan dan sentuh", "\u9078\u629E\u3068\u30BF\u30C3\u30C1", "\uC120\uD0DD \uBC0F \uD130\uCE58", "Sele\xE7\xE3o e toque", "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u0435", "Se\xE7im ve dokunma", "L\u1EF1a ch\u1ECDn v\xE0 c\u1EA3m \u1EE9ng"],
  ["Send to back", "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641", "In den Hintergrund", "Enviar al fondo", "Mettre \xE0 l'arri\xE8re-plan", "Kirim ke belakang", "\u6700\u80CC\u9762\u3078", "\uB9E8 \uB4A4\uB85C", "Enviar para tr\xE1s", "\u041D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D", "En arkaya g\xF6nder", "\u0110\u01B0a ra sau"],
  ["Show annotation toolbar when a PDF opens", "\u0625\u0638\u0647\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0639\u0646\u062F \u0641\u062A\u062D PDF", "Anmerkungsleiste beim \xD6ffnen eines PDFs anzeigen", "Mostrar la barra de anotaciones al abrir un PDF", "Afficher la barre d'annotations \xE0 l'ouverture d'un PDF", "Tampilkan bilah anotasi saat PDF dibuka", "PDF \u3092\u958B\u3044\u305F\u3068\u304D\u306B\u6CE8\u91C8\u30C4\u30FC\u30EB\u30D0\u30FC\u3092\u8868\u793A", "PDF\uB97C \uC5F4 \uB54C \uC8FC\uC11D \uB3C4\uAD6C \uBAA8\uC74C \uD45C\uC2DC", "Mostrar barra de anota\xE7\xF5es ao abrir um PDF", "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439 \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 PDF", "PDF a\xE7\u0131ld\u0131\u011F\u0131nda not ara\xE7 \xE7ubu\u011Funu g\xF6ster", "Hi\u1EC7n thanh ch\xFA th\xEDch khi m\u1EDF PDF"],
  ["Show page navigator", "\u0625\u0638\u0647\u0627\u0631 \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0635\u0641\u062D\u0627\u062A", "Seitennavigator anzeigen", "Mostrar navegador de p\xE1ginas", "Afficher le navigateur de pages", "Tampilkan navigator halaman", "\u30DA\u30FC\u30B8\u30CA\u30D3\u30B2\u30FC\u30BF\u30FC\u3092\u8868\u793A", "\uD398\uC774\uC9C0 \uD0D0\uC0C9\uAE30 \uD45C\uC2DC", "Mostrar navegador de p\xE1ginas", "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0442\u043E\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446", "Sayfa gezginini g\xF6ster", "Hi\u1EC7n tr\xECnh \u0111i\u1EC1u h\u01B0\u1EDBng trang"],
  ["Source PDF", "\u0645\u0644\u0641 PDF \u0627\u0644\u0645\u0635\u062F\u0631", "Quell-PDF", "PDF de origen", "PDF source", "PDF sumber", "\u5143\u306E PDF", "\uC6D0\uBCF8 PDF", "PDF de origem", "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 PDF", "Kaynak PDF", "PDF ngu\u1ED3n"],
  ["Support the author", "\u062F\u0639\u0645 \u0627\u0644\u0645\u0624\u0644\u0641", "Autor unterst\xFCtzen", "Apoyar al autor", "Soutenir l'auteur", "Dukung pembuat", "\u4F5C\u8005\u3092\u652F\u63F4", "\uAC1C\uBC1C\uC790 \uD6C4\uC6D0", "Apoiar o autor", "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0430", "Yazar\u0131 destekle", "\u1EE6ng h\u1ED9 t\xE1c gi\u1EA3"],
  ["Text is ready to copy.", "\u0627\u0644\u0646\u0635 \u062C\u0627\u0647\u0632 \u0644\u0644\u0646\u0633\u062E.", "Text kann kopiert werden.", "El texto est\xE1 listo para copiar.", "Le texte est pr\xEAt \xE0 \xEAtre copi\xE9.", "Teks siap disalin.", "\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002", "\uD14D\uC2A4\uD2B8\uB97C \uBCF5\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "O texto est\xE1 pronto para copiar.", "\u0422\u0435\u043A\u0441\u0442 \u0433\u043E\u0442\u043E\u0432 \u043A \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E.", "Metin kopyalanmaya haz\u0131r.", "V\u0103n b\u1EA3n \u0111\xE3 s\u1EB5n s\xE0ng \u0111\u1EC3 sao ch\xE9p."],
  ["The rewrite backup does not match the current PDF.", "\u0646\u0633\u062E\u0629 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0644\u0627 \u062A\u0637\u0627\u0628\u0642 \u0645\u0644\u0641 PDF \u0627\u0644\u062D\u0627\u0644\u064A.", "Die Sicherung passt nicht zum aktuellen PDF.", "La copia de seguridad no coincide con el PDF actual.", "La sauvegarde ne correspond pas au PDF actuel.", "Cadangan penulisan ulang tidak cocok dengan PDF saat ini.", "\u66F8\u304D\u63DB\u3048\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u73FE\u5728\u306E PDF \u3068\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002", "\uB2E4\uC2DC \uC4F0\uAE30 \uBC31\uC5C5\uC774 \uD604\uC7AC PDF\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", "O backup n\xE3o corresponde ao PDF atual.", "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 PDF.", "Yeniden yazma yede\u011Fi mevcut PDF ile e\u015Fle\u015Fmiyor.", "B\u1EA3n sao l\u01B0u kh\xF4ng kh\u1EDBp v\u1EDBi PDF hi\u1EC7n t\u1EA1i."],
  ["Toggle PDF annotation", "\u062A\u0628\u062F\u064A\u0644 \u062A\u0639\u0644\u064A\u0642\u0627\u062A PDF", "PDF-Anmerkung umschalten", "Alternar anotaci\xF3n PDF", "Activer/d\xE9sactiver l'annotation PDF", "Alihkan anotasi PDF", "PDF \u6CE8\u91C8\u3092\u5207\u308A\u66FF\u3048", "PDF \uC8FC\uC11D \uC804\uD658", "Alternar anota\xE7\xE3o PDF", "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 PDF", "PDF notunu a\xE7/kapat", "B\u1EADt/t\u1EAFt ch\xFA th\xEDch PDF"],
  ["Toolbar", "\u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A", "Werkzeugleiste", "Barra de herramientas", "Barre d'outils", "Bilah alat", "\u30C4\u30FC\u30EB\u30D0\u30FC", "\uB3C4\uAD6C \uBAA8\uC74C", "Barra de ferramentas", "\u041F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432", "Ara\xE7 \xE7ubu\u011Fu", "Thanh c\xF4ng c\u1EE5"],
  ["Toolbar button size", "\u062D\u062C\u0645 \u0623\u0632\u0631\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A", "Gr\xF6\xDFe der Werkzeugleisten-Schaltfl\xE4chen", "Tama\xF1o de botones de la barra", "Taille des boutons de la barre", "Ukuran tombol bilah alat", "\u30C4\u30FC\u30EB\u30D0\u30FC\u30DC\u30BF\u30F3\u306E\u30B5\u30A4\u30BA", "\uB3C4\uAD6C \uBAA8\uC74C \uBC84\uD2BC \uD06C\uAE30", "Tamanho dos bot\xF5es da barra", "\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A \u043F\u0430\u043D\u0435\u043B\u0438", "Ara\xE7 \xE7ubu\u011Fu d\xFC\u011Fme boyutu", "K\xEDch th\u01B0\u1EDBc n\xFAt thanh c\xF4ng c\u1EE5"],
  ["Toolbar max width", "\u0623\u0642\u0635\u0649 \u0639\u0631\u0636 \u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A", "Maximale Breite der Werkzeugleiste", "Ancho m\xE1ximo de la barra", "Largeur maximale de la barre", "Lebar maksimum bilah alat", "\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u6700\u5927\u5E45", "\uB3C4\uAD6C \uBAA8\uC74C \uCD5C\uB300 \uB108\uBE44", "Largura m\xE1xima da barra", "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438", "Ara\xE7 \xE7ubu\u011Fu azami geni\u015Fli\u011Fi", "Chi\u1EC1u r\u1ED9ng t\u1ED1i \u0111a thanh c\xF4ng c\u1EE5"],
  ["Toolbar top offset", "\u0625\u0632\u0627\u062D\u0629 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649", "Oberer Abstand der Werkzeugleiste", "Desplazamiento superior de la barra", "D\xE9calage sup\xE9rieur de la barre", "Jarak atas bilah alat", "\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u4E0A\u90E8\u30AA\u30D5\u30BB\u30C3\u30C8", "\uB3C4\uAD6C \uBAA8\uC74C \uC0C1\uB2E8 \uC624\uD504\uC14B", "Deslocamento superior da barra", "\u041E\u0442\u0441\u0442\u0443\u043F \u043F\u0430\u043D\u0435\u043B\u0438 \u0441\u0432\u0435\u0440\u0445\u0443", "Ara\xE7 \xE7ubu\u011Fu \xFCst uzakl\u0131\u011F\u0131", "\u0110\u1ED9 l\u1EC7ch tr\xEAn c\u1EE7a thanh c\xF4ng c\u1EE5"],
  ["Top", "\u0623\u0639\u0644\u0649", "Oben", "Arriba", "Haut", "Atas", "\u4E0A", "\uC704", "Superior", "\u0421\u0432\u0435\u0440\u0445\u0443", "\xDCst", "Tr\xEAn"],
  ["Useful when most PDFs are annotated with Pdftion; the pen button still works when disabled.", "\u0645\u0641\u064A\u062F \u0639\u0646\u062F \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0639\u0644\u0649 \u0645\u0639\u0638\u0645 \u0645\u0644\u0641\u0627\u062A PDF \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 Pdftion\u061B \u064A\u0638\u0644 \u0632\u0631 \u0627\u0644\u0642\u0644\u0645 \u064A\u0639\u0645\u0644 \u0639\u0646\u062F \u0627\u0644\u062A\u0639\u0637\u064A\u0644.", "N\xFCtzlich, wenn die meisten PDFs mit Pdftion annotiert werden; die Stift-Schaltfl\xE4che funktioniert auch bei deaktivierter Option.", "\xDAtil si la mayor\xEDa de los PDF se anotan con Pdftion; el bot\xF3n del l\xE1piz sigue funcionando al desactivarlo.", "Utile si la plupart des PDF sont annot\xE9s avec Pdftion ; le bouton stylo reste disponible lorsque l'option est d\xE9sactiv\xE9e.", "Berguna bila sebagian besar PDF dianotasi dengan Pdftion; tombol pena tetap berfungsi saat dinonaktifkan.", "\u591A\u304F\u306E PDF \u3092 Pdftion \u3067\u6CE8\u91C8\u3059\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002\u7121\u52B9\u3067\u3082\u30DA\u30F3\u30DC\u30BF\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002", "\uB300\uBD80\uBD84\uC758 PDF\uB97C Pdftion\uC73C\uB85C \uC8FC\uC11D \uCC98\uB9AC\uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4. \uAEBC\uB3C4 \uD39C \uBC84\uD2BC\uC740 \uC791\uB3D9\uD569\uB2C8\uB2E4.", "\xDAtil quando a maioria dos PDFs \xE9 anotada com Pdftion; o bot\xE3o de caneta continua funcionando quando desativado.", "\u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u0435\u0441\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E PDF \u0440\u0430\u0437\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0432 Pdftion; \u043A\u043D\u043E\u043F\u043A\u0430 \u043F\u0435\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0438 \u043F\u0440\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0451\u043D\u043D\u043E\u0439 \u043E\u043F\u0446\u0438\u0438.", "PDF'lerin \xE7o\u011Fu Pdftion ile notlan\u0131yorsa kullan\u0131\u015Fl\u0131d\u0131r; devre d\u0131\u015F\u0131yken de kalem d\xFC\u011Fmesi \xE7al\u0131\u015F\u0131r.", "H\u1EEFu \xEDch khi ph\u1EA7n l\u1EDBn PDF \u0111\u01B0\u1EE3c ch\xFA th\xEDch b\u1EB1ng Pdftion; n\xFAt b\xFAt v\u1EABn ho\u1EA1t \u0111\u1ED9ng khi t\u1EAFt."],
  ["When enabled, highlight/copy actions follow the selected text; disable to use the older edge placement.", "\u0639\u0646\u062F \u0627\u0644\u062A\u0641\u0639\u064A\u0644 \u062A\u062A\u0628\u0639 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062A\u0645\u064A\u064A\u0632 \u0648\u0627\u0644\u0646\u0633\u062E \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062D\u062F\u062F\u061B \u0639\u0637\u0644\u0647 \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0648\u0636\u0639 \u0627\u0644\u062D\u0627\u0641\u0629 \u0627\u0644\u0642\u062F\u064A\u0645.", "Wenn aktiviert, folgen Markieren/Kopieren dem ausgew\xE4hlten Text; deaktivieren f\xFCr die fr\xFChere Randposition.", "Al activarlo, resaltar/copiar sigue el texto seleccionado; desact\xEDvalo para usar la posici\xF3n anterior en el borde.", "Lorsque cette option est activ\xE9e, surligner/copier suit le texte s\xE9lectionn\xE9 ; d\xE9sactivez-la pour utiliser l'ancien placement au bord.", "Saat aktif, tindakan sorot/salin mengikuti teks terpilih; nonaktifkan untuk posisi tepi lama.", "\u6709\u52B9\u306B\u3059\u308B\u3068\u30CF\u30A4\u30E9\u30A4\u30C8/\u30B3\u30D4\u30FC\u64CD\u4F5C\u304C\u9078\u629E\u30C6\u30AD\u30B9\u30C8\u306B\u8FFD\u5F93\u3057\u307E\u3059\u3002\u4EE5\u524D\u306E\u7AEF\u914D\u7F6E\u3092\u4F7F\u3046\u306B\u306F\u7121\u52B9\u306B\u3057\u307E\u3059\u3002", "\uD65C\uC131\uD654\uD558\uBA74 \uAC15\uC870/\uBCF5\uC0AC \uC791\uC5C5\uC774 \uC120\uD0DD\uD55C \uD14D\uC2A4\uD2B8\uB97C \uB530\uB985\uB2C8\uB2E4. \uC774\uC804 \uAC00\uC7A5\uC790\uB9AC \uBC30\uCE58\uB97C \uC4F0\uB824\uBA74 \uB044\uC138\uC694.", "Quando ativado, destacar/copiar acompanha o texto selecionado; desative para usar o posicionamento antigo na borda.", "\u0415\u0441\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F/\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0442 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C; \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0440\u0435\u0436\u043D\u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0443 \u043A\u0440\u0430\u044F.", "Etkinle\u015Ftirildi\u011Finde vurgulama/kopyalama se\xE7ili metni izler; eski kenar yerle\u015Fimi i\xE7in kapat\u0131n.", "Khi b\u1EADt, thao t\xE1c t\xF4 s\xE1ng/sao ch\xE9p \u0111i theo v\u0103n b\u1EA3n \u0111\xE3 ch\u1ECDn; t\u1EAFt \u0111\u1EC3 d\xF9ng v\u1ECB tr\xED c\u1EA1nh c\u0169."],
  ["Default", "\u0627\u0641\u062A\u0631\u0627\u0636\u064A", "Standard", "Predeterminado", "Par d\xE9faut", "Bawaan", "\u65E2\u5B9A", "\uAE30\uBCF8\uAC12", "Padr\xE3o", "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E", "Varsay\u0131lan", "M\u1EB7c \u0111\u1ECBnh"],
  ["Serif CJK", "\u062E\u0637 CJK \u0645\u0632\u062E\u0631\u0641", "CJK-Serifenschrift", "Serif CJK", "Serif CJK", "Serif CJK", "\u660E\u671D\u4F53 CJK", "CJK \uBA85\uC870", "Serifa CJK", "CJK \u0441 \u0437\u0430\u0441\u0435\u0447\u043A\u0430\u043C\u0438", "CJK serif", "Serif CJK"],
  ["Sans CJK", "\u062E\u0637 CJK \u0628\u062F\u0648\u0646 \u0632\u0648\u0627\u0626\u062F", "CJK-Groteskschrift", "Sans CJK", "Sans CJK", "Sans CJK", "\u30B4\u30B7\u30C3\u30AF\u4F53 CJK", "CJK \uACE0\uB515", "Sem serifa CJK", "CJK \u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043A", "CJK sans", "Sans CJK"],
  ["Mono", "\u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0645\u0633\u0627\u0641\u0629", "Dicktengleich", "Monoespaciada", "Chasse fixe", "Monospace", "\u7B49\u5E45", "\uACE0\uC815\uD3ED", "Monoespa\xE7ada", "\u041C\u043E\u043D\u043E\u0448\u0438\u0440\u0438\u043D\u043D\u044B\u0439", "E\u015F aral\u0131kl\u0131", "\u0110\u01A1n c\xE1ch"],
  ["Serif", "\u0645\u0632\u062E\u0631\u0641", "Serifenschrift", "Serif", "Serif", "Serif", "\u30BB\u30EA\u30D5", "\uBA85\uC870", "Serifa", "\u0421 \u0437\u0430\u0441\u0435\u0447\u043A\u0430\u043C\u0438", "Serif", "Serif"]
];
var PDFTION_EXTENDED_TRANSLATIONS = (() => {
  const translations = Object.fromEntries(
    EXTENDED_LOCALES.map((locale) => [locale, {}])
  );
  for (const row of STATIC_TRANSLATION_ROWS) {
    EXTENDED_LOCALES.forEach((locale, index) => {
      const value = row[index + 1];
      if (value) {
        translations[locale][row[0]] = value;
      }
    });
  }
  return translations;
})();
var DYNAMIC_TRANSLATION_ROWS = [
  ["Page {page} comment", "\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0635\u0641\u062D\u0629 {page}", "Kommentar auf Seite {page}", "Comentario de la p\xE1gina {page}", "Commentaire de la page {page}", "Komentar halaman {page}", "{page} \u30DA\u30FC\u30B8\u306E\u30B3\u30E1\u30F3\u30C8", "{page}\uD398\uC774\uC9C0 \uB313\uAE00", "Coment\xE1rio da p\xE1gina {page}", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 {page}", "Sayfa {page} yorumu", "B\xECnh lu\u1EADn trang {page}"],
  ["Page {page}", "\u0627\u0644\u0635\u0641\u062D\u0629 {page}", "Seite {page}", "P\xE1gina {page}", "Page {page}", "Halaman {page}", "{page} \u30DA\u30FC\u30B8", "{page}\uD398\uC774\uC9C0", "P\xE1gina {page}", "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 {page}", "Sayfa {page}", "Trang {page}"],
  ["Page {page}, {count} elements", "\u0627\u0644\u0635\u0641\u062D\u0629 {page}\u060C {count} \u0639\u0646\u0627\u0635\u0631", "Seite {page}, {count} Elemente", "P\xE1gina {page}, {count} elementos", "Page {page}, {count} \xE9l\xE9ments", "Halaman {page}, {count} elemen", "{page} \u30DA\u30FC\u30B8\u3001{count} \u8981\u7D20", "{page}\uD398\uC774\uC9C0, \uC694\uC18C {count}\uAC1C", "P\xE1gina {page}, {count} elementos", "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 {page}, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: {count}", "Sayfa {page}, {count} \xF6\u011Fe", "Trang {page}, {count} ph\u1EA7n t\u1EED"],
  ["P {pages} | ink {strokes} | text {texts} | img {images} | cover {covers}", "\u0635 {pages} | \u062D\u0628\u0631 {strokes} | \u0646\u0635 {texts} | \u0635\u0648\u0631 {images} | \u062A\u063A\u0637\u064A\u0629 {covers}", "S {pages} | Tinte {strokes} | Text {texts} | Bild {images} | Abdeckung {covers}", "P {pages} | tinta {strokes} | texto {texts} | img {images} | cubierta {covers}", "P {pages} | encre {strokes} | texte {texts} | img {images} | cache {covers}", "H {pages} | tinta {strokes} | teks {texts} | gambar {images} | penutup {covers}", "P {pages} | \u30A4\u30F3\u30AF {strokes} | \u30C6\u30AD\u30B9\u30C8 {texts} | \u753B\u50CF {images} | \u8986\u3044 {covers}", "P {pages} | \uC789\uD06C {strokes} | \uD14D\uC2A4\uD2B8 {texts} | \uC774\uBBF8\uC9C0 {images} | \uAC00\uB9BC {covers}", "P {pages} | tinta {strokes} | texto {texts} | img {images} | cobertura {covers}", "\u0421 {pages} | \u0448\u0442\u0440\u0438\u0445\u0438 {strokes} | \u0442\u0435\u043A\u0441\u0442 {texts} | \u0438\u0437\u043E\u0431\u0440. {images} | \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F {covers}", "S {pages} | m\xFCrekkep {strokes} | metin {texts} | g\xF6rsel {images} | kapak {covers}", "T {pages} | n\xE9t {strokes} | ch\u1EEF {texts} | \u1EA3nh {images} | che {covers}"],
  ["Enter a new page order, for example 3,1,2 or 1-3,5. Current pages: {count}.", "\u0623\u062F\u062E\u0644 \u062A\u0631\u062A\u064A\u0628 \u0635\u0641\u062D\u0627\u062A \u062C\u062F\u064A\u062F\u0627\u060C \u0645\u062B\u0644 3,1,2 \u0623\u0648 1-3,5. \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629: {count}.", "Neue Seitenreihenfolge eingeben, z. B. 3,1,2 oder 1-3,5. Aktuelle Seiten: {count}.", "Introduce un nuevo orden, por ejemplo 3,1,2 o 1-3,5. P\xE1ginas actuales: {count}.", "Saisissez un nouvel ordre, par exemple 3,1,2 ou 1-3,5. Pages actuelles : {count}.", "Masukkan urutan baru, misalnya 3,1,2 atau 1-3,5. Halaman saat ini: {count}.", "\u65B0\u3057\u3044\u30DA\u30FC\u30B8\u9806\u3092\u5165\u529B\u3057\u307E\u3059\u3002\u4F8B: 3,1,2 \u307E\u305F\u306F 1-3,5\u3002\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u6570: {count}\u3002", "\uC0C8 \uD398\uC774\uC9C0 \uC21C\uC11C\uB97C \uC785\uB825\uD558\uC138\uC694. \uC608: 3,1,2 \uB610\uB294 1-3,5. \uD604\uC7AC \uD398\uC774\uC9C0: {count}.", "Digite uma nova ordem, por exemplo 3,1,2 ou 1-3,5. P\xE1ginas atuais: {count}.", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 3,1,2 \u0438\u043B\u0438 1-3,5. \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0447\u0438\u0441\u043B\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446: {count}.", "Yeni sayfa s\u0131ras\u0131 girin; \xF6rne\u011Fin 3,1,2 veya 1-3,5. Mevcut sayfalar: {count}.", "Nh\u1EADp th\u1EE9 t\u1EF1 trang m\u1EDBi, v\xED d\u1EE5 3,1,2 ho\u1EB7c 1-3,5. S\u1ED1 trang hi\u1EC7n t\u1EA1i: {count}."],
  ["Delete {count} pages? This will modify the current PDF.", "\u062D\u0630\u0641 {count} \u0635\u0641\u062D\u0627\u062A\u061F \u0633\u064A\u0624\u062F\u064A \u0630\u0644\u0643 \u0625\u0644\u0649 \u062A\u0639\u062F\u064A\u0644 PDF \u0627\u0644\u062D\u0627\u0644\u064A.", "{count} Seiten l\xF6schen? Dadurch wird das aktuelle PDF ge\xE4ndert.", "\xBFEliminar {count} p\xE1ginas? Se modificar\xE1 el PDF actual.", "Supprimer {count} pages ? Le PDF actuel sera modifi\xE9.", "Hapus {count} halaman? Ini akan mengubah PDF saat ini.", "{count} \u30DA\u30FC\u30B8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F\u73FE\u5728\u306E PDF \u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002", "{count}\uAC1C \uD398\uC774\uC9C0\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694? \uD604\uC7AC PDF\uAC00 \uC218\uC815\uB429\uB2C8\uB2E4.", "Excluir {count} p\xE1ginas? Isso modificar\xE1 o PDF atual.", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {count} \u0441\u0442\u0440\u0430\u043D\u0438\u0446? \u0422\u0435\u043A\u0443\u0449\u0438\u0439 PDF \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D.", "{count} sayfa silinsin mi? Mevcut PDF de\u011Fi\u015Ftirilecek.", "X\xF3a {count} trang? PDF hi\u1EC7n t\u1EA1i s\u1EBD b\u1ECB s\u1EEDa \u0111\u1ED5i."],
  ["Imported and merged {name}", "\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u062F\u0645\u062C {name}", "{name} importiert und zusammengef\xFChrt", "{name} importado y combinado", "{name} import\xE9 et fusionn\xE9", "{name} diimpor dan digabung", "{name} \u3092\u53D6\u308A\u8FBC\u3093\u3067\u7D50\u5408\u3057\u307E\u3057\u305F", "{name} \uAC00\uC838\uC624\uAE30 \uBC0F \uBCD1\uD569 \uC644\uB8CC", "{name} importado e mesclado", "{name} \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D", "{name} i\xE7e aktar\u0131ld\u0131 ve birle\u015Ftirildi", "\u0110\xE3 nh\u1EADp v\xE0 h\u1EE3p nh\u1EA5t {name}"],
  ["Saved into {name}.", "\u062A\u0645 \u0627\u0644\u062D\u0641\u0638 \u0641\u064A {name}.", "In {name} gespeichert.", "Guardado en {name}.", "Enregistr\xE9 dans {name}.", "Disimpan ke {name}.", "{name} \u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002", "{name}\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.", "Salvo em {name}.", "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0432 {name}.", "{name} i\xE7ine kaydedildi.", "\u0110\xE3 l\u01B0u v\xE0o {name}."],
  ["Exported converted documents: {paths}", "\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u062D\u0648\u0644\u0629: {paths}", "Konvertierte Dokumente exportiert: {paths}", "Documentos convertidos exportados: {paths}", "Documents convertis export\xE9s : {paths}", "Dokumen hasil konversi diekspor: {paths}", "\u5909\u63DB\u6587\u66F8\u3092\u51FA\u529B\u3057\u307E\u3057\u305F: {paths}", "\uBCC0\uD658 \uBB38\uC11C \uB0B4\uBCF4\uB0B4\uAE30 \uC644\uB8CC: {paths}", "Documentos convertidos exportados: {paths}", "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B: {paths}", "D\xF6n\xFC\u015Ft\xFCr\xFClen belgeler d\u0131\u015Fa aktar\u0131ld\u0131: {paths}", "\u0110\xE3 xu\u1EA5t t\xE0i li\u1EC7u chuy\u1EC3n \u0111\u1ED5i: {paths}"],
  ["Converted{opened} editable MD with native images and NoteDraw ink: {path}", "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644{opened} \u0625\u0644\u0649 MD \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0631\u064A\u0631 \u0645\u0639 \u0635\u0648\u0631 \u0623\u0635\u0644\u064A\u0629 \u0648\u062D\u0628\u0631 NoteDraw: {path}", "{opened}In bearbeitbares MD mit nativen Bildern und NoteDraw-Tinte konvertiert: {path}", "Convertido{opened} a MD editable con im\xE1genes nativas y tinta NoteDraw: {path}", "Converti{opened} en MD modifiable avec images natives et encre NoteDraw : {path}", "Dikonversi{opened} menjadi MD yang dapat diedit dengan gambar asli dan tinta NoteDraw: {path}", "\u30CD\u30A4\u30C6\u30A3\u30D6\u753B\u50CF\u3068 NoteDraw \u30A4\u30F3\u30AF\u3092\u542B\u3080\u7DE8\u96C6\u53EF\u80FD\u306A MD \u306B\u5909\u63DB{opened}: {path}", "\uAE30\uBCF8 \uC774\uBBF8\uC9C0\uC640 NoteDraw \uC789\uD06C\uAC00 \uC788\uB294 \uD3B8\uC9D1 \uAC00\uB2A5\uD55C MD\uB85C \uBCC0\uD658{opened}: {path}", "Convertido{opened} em MD edit\xE1vel com imagens nativas e tinta NoteDraw: {path}", "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043E{opened} \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0439 MD \u0441 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0448\u0442\u0440\u0438\u0445\u0430\u043C\u0438 NoteDraw: {path}", "Yerel g\xF6r\xFCnt\xFCler ve NoteDraw m\xFCrekkebi i\xE7eren d\xFCzenlenebilir MD'ye d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC{opened}: {path}", "\u0110\xE3 chuy\u1EC3n \u0111\u1ED5i{opened} sang MD c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa v\u1EDBi \u1EA3nh g\u1ED1c v\xE0 n\xE9t NoteDraw: {path}"],
  ["Converted{opened} MD with native image references: {path}", "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644{opened} \u0625\u0644\u0649 MD \u0645\u0639 \u0645\u0631\u0627\u062C\u0639 \u0635\u0648\u0631 \u0623\u0635\u0644\u064A\u0629: {path}", "{opened}In MD mit nativen Bildverweisen konvertiert: {path}", "Convertido{opened} a MD con referencias de im\xE1genes nativas: {path}", "Converti{opened} en MD avec r\xE9f\xE9rences d'images natives : {path}", "Dikonversi{opened} menjadi MD dengan referensi gambar asli: {path}", "\u30CD\u30A4\u30C6\u30A3\u30D6\u753B\u50CF\u53C2\u7167\u3092\u542B\u3080 MD \u306B\u5909\u63DB{opened}: {path}", "\uAE30\uBCF8 \uC774\uBBF8\uC9C0 \uCC38\uC870\uAC00 \uC788\uB294 MD\uB85C \uBCC0\uD658{opened}: {path}", "Convertido{opened} em MD com refer\xEAncias de imagens nativas: {path}", "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043E{opened} \u0432 MD \u0441\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C\u0438 \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: {path}", "Yerel g\xF6r\xFCnt\xFC ba\u015Fvurular\u0131 i\xE7eren MD'ye d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC{opened}: {path}", "\u0110\xE3 chuy\u1EC3n \u0111\u1ED5i{opened} sang MD c\xF3 tham chi\u1EBFu \u1EA3nh g\u1ED1c: {path}"],
  ["Converted{opened} {format}: {path}", "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644{opened} \u0625\u0644\u0649 {format}: {path}", "{opened}In {format} konvertiert: {path}", "Convertido{opened} a {format}: {path}", "Converti{opened} en {format} : {path}", "Dikonversi{opened} menjadi {format}: {path}", "{format} \u306B\u5909\u63DB{opened}: {path}", "{format}(\uC73C)\uB85C \uBCC0\uD658{opened}: {path}", "Convertido{opened} em {format}: {path}", "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043E{opened} \u0432 {format}: {path}", "{format} bi\xE7imine d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC{opened}: {path}", "\u0110\xE3 chuy\u1EC3n \u0111\u1ED5i{opened} sang {format}: {path}"],
  ["{format} conversion failed: {message}", "\u0641\u0634\u0644 \u062A\u062D\u0648\u064A\u0644 {format}: {message}", "{format}-Konvertierung fehlgeschlagen: {message}", "Fall\xF3 la conversi\xF3n {format}: {message}", "\xC9chec de la conversion {format} : {message}", "Konversi {format} gagal: {message}", "{format} \u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F: {message}", "{format} \uBCC0\uD658 \uC2E4\uD328: {message}", "Falha na convers\xE3o {format}: {message}", "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F {format}: {message}", "{format} d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z: {message}", "Chuy\u1EC3n \u0111\u1ED5i {format} th\u1EA5t b\u1EA1i: {message}"],
  ["Exported and opened: {path}", "\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0648\u0627\u0644\u0641\u062A\u062D: {path}", "Exportiert und ge\xF6ffnet: {path}", "Exportado y abierto: {path}", "Export\xE9 et ouvert : {path}", "Diekspor dan dibuka: {path}", "\u51FA\u529B\u3057\u3066\u958B\u304D\u307E\u3057\u305F: {path}", "\uB0B4\uBCF4\uB0B4\uACE0 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4: {path}", "Exportado e aberto: {path}", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u043E: {path}", "D\u0131\u015Fa aktar\u0131ld\u0131 ve a\xE7\u0131ld\u0131: {path}", "\u0110\xE3 xu\u1EA5t v\xE0 m\u1EDF: {path}"],
  ["Exported and shared: {path}", "\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629: {path}", "Exportiert und geteilt: {path}", "Exportado y compartido: {path}", "Export\xE9 et partag\xE9 : {path}", "Diekspor dan dibagikan: {path}", "\u51FA\u529B\u3057\u3066\u5171\u6709\u3057\u307E\u3057\u305F: {path}", "\uB0B4\uBCF4\uB0B4\uACE0 \uACF5\uC720\uD588\uC2B5\uB2C8\uB2E4: {path}", "Exportado e compartilhado: {path}", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E: {path}", "D\u0131\u015Fa aktar\u0131ld\u0131 ve payla\u015F\u0131ld\u0131: {path}", "\u0110\xE3 xu\u1EA5t v\xE0 chia s\u1EBB: {path}"],
  ["Exported: {path}", "\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631: {path}", "Exportiert: {path}", "Exportado: {path}", "Export\xE9 : {path}", "Diekspor: {path}", "\u51FA\u529B\u3057\u307E\u3057\u305F: {path}", "\uB0B4\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4: {path}", "Exportado: {path}", "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E: {path}", "D\u0131\u015Fa aktar\u0131ld\u0131: {path}", "\u0110\xE3 xu\u1EA5t: {path}"],
  ["Flattened covers on {count} pages", "\u062A\u0645 \u062A\u0633\u0637\u064A\u062D \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0641\u064A {count} \u0635\u0641\u062D\u0627\u062A", "Abdeckungen auf {count} Seiten reduziert", "Cubiertas acopladas en {count} p\xE1ginas", "Caches aplatis sur {count} pages", "Penutup diratakan pada {count} halaman", "{count} \u30DA\u30FC\u30B8\u306E\u8986\u3044\u3092\u7D71\u5408\u3057\u307E\u3057\u305F", "{count}\uAC1C \uD398\uC774\uC9C0\uC758 \uAC00\uB9BC \uC601\uC5ED\uC744 \uBCD1\uD569\uD588\uC2B5\uB2C8\uB2E4", "Coberturas achatadas em {count} p\xE1ginas", "\u0417\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0441\u0432\u0435\u0434\u0435\u043D\u044B \u043D\u0430 {count} \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445", "{count} sayfadaki kapaklar d\xFCzle\u015Ftirildi", "\u0110\xE3 l\xE0m ph\u1EB3ng v\xF9ng che tr\xEAn {count} trang"]
];
var DYNAMIC_TRANSLATIONS = (() => {
  const translations = Object.fromEntries(
    EXTENDED_LOCALES.map((locale) => [locale, {}])
  );
  for (const row of DYNAMIC_TRANSLATION_ROWS) {
    EXTENDED_LOCALES.forEach((locale, index) => {
      const value = row[index + 1];
      if (value) {
        translations[locale][row[0]] = value;
      }
    });
  }
  return translations;
})();
function getExtendedPdftionTranslation(locale, english) {
  if (!EXTENDED_LOCALES.includes(locale)) {
    return void 0;
  }
  const typedLocale = locale;
  const direct = PDFTION_EXTENDED_TRANSLATIONS[typedLocale][english];
  if (direct) {
    return direct;
  }
  const match = matchDynamicTranslation(english);
  const template = match ? DYNAMIC_TRANSLATIONS[typedLocale][match.key] : void 0;
  if (!match || !template) {
    return void 0;
  }
  const opened = match.values.opened === " and opened" ? OPENED_TRANSLATIONS[typedLocale] : "";
  return formatTranslation(template, { ...match.values, opened });
}
var OPENED_TRANSLATIONS = {
  ar: " \u0648\u0641\u062A\u062D\u0647",
  de: "Ge\xF6ffnet und ",
  es: " y abierto",
  fr: " et ouvert",
  id: " dan dibuka",
  ja: "\u3057\u3066\u958B\u304D\u307E\u3057\u305F",
  ko: "\uD558\uACE0 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4",
  pt: " e aberto",
  ru: " \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u043E",
  tr: " ve a\xE7\u0131ld\u0131",
  vi: " v\xE0 \u0111\xE3 m\u1EDF"
};
function matchDynamicTranslation(english) {
  let match = english.match(/^Page (\d+) comment$/);
  if (match) return { key: "Page {page} comment", values: { page: match[1] } };
  match = english.match(/^Page (\d+), (\d+) elements$/);
  if (match) return { key: "Page {page}, {count} elements", values: { count: match[2], page: match[1] } };
  match = english.match(/^Page (\d+)$/);
  if (match) return { key: "Page {page}", values: { page: match[1] } };
  match = english.match(/^P (\d+) \| ink (\d+) \| text (\d+) \| img (\d+) \| cover (\d+)$/);
  if (match) return { key: "P {pages} | ink {strokes} | text {texts} | img {images} | cover {covers}", values: { covers: match[5], images: match[4], pages: match[1], strokes: match[2], texts: match[3] } };
  match = english.match(/^Enter a new page order, for example 3,1,2 or 1-3,5\. Current pages: (\d+)\.$/);
  if (match) return { key: "Enter a new page order, for example 3,1,2 or 1-3,5. Current pages: {count}.", values: { count: match[1] } };
  match = english.match(/^Delete (\d+) pages\? This will modify the current PDF\.$/);
  if (match) return { key: "Delete {count} pages? This will modify the current PDF.", values: { count: match[1] } };
  match = english.match(/^Imported and merged (.+)$/);
  if (match) return { key: "Imported and merged {name}", values: { name: match[1] } };
  match = english.match(/^Saved into (.+)\.$/);
  if (match) return { key: "Saved into {name}.", values: { name: match[1] } };
  match = english.match(/^Exported converted documents: (.+)$/);
  if (match) return { key: "Exported converted documents: {paths}", values: { paths: match[1] } };
  match = english.match(/^Converted( and opened)? editable MD with native images and NoteDraw ink: (.+)$/);
  if (match) return { key: "Converted{opened} editable MD with native images and NoteDraw ink: {path}", values: { opened: match[1] ?? "", path: match[2] } };
  match = english.match(/^Converted( and opened)? MD with native image references: (.+)$/);
  if (match) return { key: "Converted{opened} MD with native image references: {path}", values: { opened: match[1] ?? "", path: match[2] } };
  match = english.match(/^Converted( and opened)? (DOCX|PNG|PPTX|HTML): (.+)$/);
  if (match) return { key: "Converted{opened} {format}: {path}", values: { format: match[2], opened: match[1] ?? "", path: match[3] } };
  match = english.match(/^(PPTX|PDF) conversion failed: (.+)$/);
  if (match) return { key: "{format} conversion failed: {message}", values: { format: match[1], message: match[2] } };
  match = english.match(/^Exported and opened: (.+)$/);
  if (match) return { key: "Exported and opened: {path}", values: { path: match[1] } };
  match = english.match(/^Exported and shared: (.+)$/);
  if (match) return { key: "Exported and shared: {path}", values: { path: match[1] } };
  match = english.match(/^Exported: (.+)$/);
  if (match) return { key: "Exported: {path}", values: { path: match[1] } };
  match = english.match(/^Flattened covers on (\d+) pages$/);
  if (match) return { key: "Flattened covers on {count} pages", values: { count: match[1] } };
  return null;
}
function formatTranslation(template, values) {
  return template.replace(/\{([a-z]+)\}/gi, (_match, key) => values[key] ?? "");
}

// src/.prof-.prof-plugin.cjs.ts
var activeWindow = window;
var activeDocument = document;
var AUTO_SAVE_IDLE_DELAY_MS = 5200;
var HIT_TOLERANCE_STRICT_PX = 3;
var HIT_TOLERANCE_LOOSE_PX = 12;
var DATA_MAINTENANCE_DELETE_DELAY_MS = 3e4;
var DATA_MAINTENANCE_START_DELAY_MS = 15e3;
var OVERLAY_HEALTH_CHECK_MS = 5e3;
var OVERLAY_MAX_DPR = 2;
var PDF_ZOOM_SETTLE_DELAY_MS = 160;
var PDF_SURFACE_MISSING_GRACE_MS = 2500;
var INK_AUTO_GROUP_GAP_PX = 28;
var INK_AUTO_GROUP_WINDOW_MS = 3500;
var NATIVE_POPUP_SUPPRESS_MS = 650;
var STROKE_FAST_SAVE_DELAY_MS = 180;
var EDITABLE_INK_PREPARE_MAX_WAIT_MS = 3e4;
var EDITABLE_INK_PREPARE_RETRY_MS = 180;
var STROKE_MIN_POINT_DISTANCE_PX = 0.35;
var STROKE_INTERPOLATION_STEP_PX = 0.75;
var VISUAL_EXPORT_PAGE_GAP_RATIO = 0.025;
var pdfFontkitModulePromise = null;
var PALETTE_COLORS = [
  "#000000",
  "#e03131",
  "#fab005",
  "#2f9e44",
  "#1971c2"
];
var PDFTION_AI_API_NAME = "PdftionAI";
var TEXT_FONTS = [
  { labelEn: "Default", labelZh: "\u9ED8\u8BA4", value: "sans-serif" },
  { labelEn: "Serif CJK", labelZh: "\u5B8B\u4F53", value: "SimSun, STSong, serif" },
  { labelEn: "Sans CJK", labelZh: "\u9ED1\u4F53", value: "SimHei, Microsoft YaHei, sans-serif" },
  { labelEn: "Mono", labelZh: "\u7B49\u5BBD", value: "Consolas, monospace" },
  { labelEn: "Serif", labelZh: "\u886C\u7EBF", value: "Georgia, serif" }
];
var TEXT_SELECTION_HIGHLIGHT_COLORS = ["#ffe066", "#ff8787", "#69db7c", "#74c0fc"];
var PDFTION_LANGUAGE_OPTIONS = [
  { label: "", value: "auto" },
  { label: "\u7B80\u4F53\u4E2D\u6587", value: "zh" },
  { label: "English", value: "en" },
  { label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", value: "ar" },
  { label: "Deutsch", value: "de" },
  { label: "Espa\xF1ol", value: "es" },
  { label: "Fran\xE7ais", value: "fr" },
  { label: "Bahasa Indonesia", value: "id" },
  { label: "\u65E5\u672C\u8A9E", value: "ja" },
  { label: "\uD55C\uAD6D\uC5B4", value: "ko" },
  { label: "Portugu\xEAs", value: "pt" },
  { label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", value: "ru" },
  { label: "T\xFCrk\xE7e", value: "tr" },
  { label: "Ti\u1EBFng Vi\u1EC7t", value: "vi" }
];
var pdftionLanguagePreference = "auto";
var PDFTION_TRANSLATIONS = {
  ar: {
    "Alpha": "\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629",
    "Cancel": "\u0625\u0644\u063A\u0627\u0621",
    "Close": "\u0625\u063A\u0644\u0627\u0642",
    "Color and size": "\u0627\u0644\u0644\u0648\u0646 \u0648\u0627\u0644\u062D\u062C\u0645",
    "Confirm": "\u062A\u0623\u0643\u064A\u062F",
    "Convert docs": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A",
    "Copied PDF text link.": "\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0646\u0635 PDF.",
    "Copied PDF text.": "\u062A\u0645 \u0646\u0633\u062E \u0646\u0635 PDF.",
    "Copy PDF link": "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 PDF",
    "Copy text": "\u0646\u0633\u062E \u0627\u0644\u0646\u0635",
    "Could not copy link.": "\u062A\u0639\u0630\u0631 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637.",
    "Could not copy text.": "\u062A\u0639\u0630\u0631 \u0646\u0633\u062E \u0627\u0644\u0646\u0635.",
    "Crop": "\u0642\u0635",
    "Custom color": "\u0644\u0648\u0646 \u0645\u062E\u0635\u0635",
    "Custom highlight": "\u062A\u0645\u064A\u064A\u0632 \u0645\u062E\u0635\u0635",
    "Delete pages": "\u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u062D\u0627\u062A",
    "Delete selection/clear annotations": "\u062D\u0630\u0641 \u0627\u0644\u062A\u062D\u062F\u064A\u062F/\u0645\u0633\u062D \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A",
    "Eraser": "\u0645\u0645\u062D\u0627\u0629",
    "Export DOCX": "\u062A\u0635\u062F\u064A\u0631 DOCX",
    "Export MD": "\u062A\u0635\u062F\u064A\u0631 MD",
    "Export PDF": "\u062A\u0635\u062F\u064A\u0631 PDF",
    "Font": "\u0627\u0644\u062E\u0637",
    "Highlight": "\u062A\u0645\u064A\u064A\u0632",
    "Highlighter": "\u0642\u0644\u0645 \u062A\u0645\u064A\u064A\u0632",
    "Image": "\u0635\u0648\u0631\u0629",
    "Import PDF": "\u0627\u0633\u062A\u064A\u0631\u0627\u062F PDF",
    "Insert image": "\u0625\u062F\u0631\u0627\u062C \u0635\u0648\u0631\u0629",
    "Insert link": "\u0625\u062F\u0631\u0627\u062C \u0631\u0627\u0628\u0637",
    "Loading pages...": "\u062C\u0627\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0627\u062A...",
    "Move toolbar": "\u0646\u0642\u0644 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A",
    "Open a PDF first.": "\u0627\u0641\u062A\u062D \u0645\u0644\u0641 PDF \u0623\u0648\u0644\u0627.",
    "PDF annotation": "\u062A\u0639\u0644\u064A\u0642\u0627\u062A PDF",
    "PDF annotation enabled.": "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u062A\u0639\u0644\u064A\u0642\u0627\u062A PDF.",
    "Page/annotation navigator": "\u062A\u0646\u0642\u0644 \u0627\u0644\u0635\u0641\u062D\u0627\u062A/\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A",
    "Pen": "\u0642\u0644\u0645",
    "Redo": "\u0625\u0639\u0627\u062F\u0629",
    "Reorder": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0631\u062A\u064A\u0628",
    "Rotate": "\u062A\u062F\u0648\u064A\u0631",
    "Select": "\u062A\u062D\u062F\u064A\u062F",
    "Share/export": "\u0645\u0634\u0627\u0631\u0643\u0629/\u062A\u0635\u062F\u064A\u0631",
    "Size": "\u0627\u0644\u062D\u062C\u0645",
    "Text": "\u0646\u0635",
    "Undo": "\u062A\u0631\u0627\u062C\u0639"
  },
  de: {
    "Alpha": "Deckkraft",
    "Cancel": "Abbrechen",
    "Close": "Schlie\xDFen",
    "Color and size": "Farbe und Gr\xF6\xDFe",
    "Confirm": "Best\xE4tigen",
    "Convert docs": "Dokumente umwandeln",
    "Copied PDF text link.": "PDF-Textlink kopiert.",
    "Copied PDF text.": "PDF-Text kopiert.",
    "Copy PDF link": "PDF-Link kopieren",
    "Copy text": "Text kopieren",
    "Could not copy link.": "Link konnte nicht kopiert werden.",
    "Could not copy text.": "Text konnte nicht kopiert werden.",
    "Crop": "Zuschneiden",
    "Custom color": "Eigene Farbe",
    "Custom highlight": "Eigene Markierung",
    "Delete pages": "Seiten l\xF6schen",
    "Delete selection/clear annotations": "Auswahl l\xF6schen/Anmerkungen leeren",
    "Eraser": "Radierer",
    "Export DOCX": "DOCX exportieren",
    "Export MD": "MD exportieren",
    "Export PDF": "PDF exportieren",
    "Font": "Schrift",
    "Highlight": "Markieren",
    "Highlighter": "Marker",
    "Image": "Bild",
    "Import PDF": "PDF importieren",
    "Insert image": "Bild einf\xFCgen",
    "Insert link": "Link einf\xFCgen",
    "Loading pages...": "Seiten werden geladen...",
    "Move toolbar": "Werkzeugleiste verschieben",
    "Open a PDF first.": "\xD6ffne zuerst ein PDF.",
    "PDF annotation": "PDF-Anmerkung",
    "PDF annotation enabled.": "PDF-Anmerkung aktiviert.",
    "Page/annotation navigator": "Seiten-/Anmerkungsnavigator",
    "Pen": "Stift",
    "Redo": "Wiederholen",
    "Reorder": "Neu anordnen",
    "Rotate": "Drehen",
    "Select": "Ausw\xE4hlen",
    "Share/export": "Teilen/exportieren",
    "Size": "Gr\xF6\xDFe",
    "Text": "Text",
    "Undo": "R\xFCckg\xE4ngig"
  },
  es: {
    "Alpha": "Opacidad",
    "Cancel": "Cancelar",
    "Close": "Cerrar",
    "Color and size": "Color y tama\xF1o",
    "Confirm": "Confirmar",
    "Convert docs": "Convertir documentos",
    "Copied PDF text link.": "Enlace de texto PDF copiado.",
    "Copied PDF text.": "Texto PDF copiado.",
    "Copy PDF link": "Copiar enlace PDF",
    "Copy text": "Copiar texto",
    "Could not copy link.": "No se pudo copiar el enlace.",
    "Could not copy text.": "No se pudo copiar el texto.",
    "Crop": "Recortar",
    "Custom color": "Color personalizado",
    "Custom highlight": "Resaltado personalizado",
    "Delete pages": "Eliminar p\xE1ginas",
    "Delete selection/clear annotations": "Eliminar selecci\xF3n/borrar anotaciones",
    "Eraser": "Borrador",
    "Export DOCX": "Exportar DOCX",
    "Export MD": "Exportar MD",
    "Export PDF": "Exportar PDF",
    "Font": "Fuente",
    "Highlight": "Resaltar",
    "Highlighter": "Marcador",
    "Image": "Imagen",
    "Import PDF": "Importar PDF",
    "Insert image": "Insertar imagen",
    "Insert link": "Insertar enlace",
    "Loading pages...": "Cargando p\xE1ginas...",
    "Move toolbar": "Mover barra",
    "Open a PDF first.": "Abre primero un PDF.",
    "PDF annotation": "Anotaci\xF3n PDF",
    "PDF annotation enabled.": "Anotaci\xF3n PDF activada.",
    "Page/annotation navigator": "Navegador de p\xE1ginas/anotaciones",
    "Pen": "L\xE1piz",
    "Redo": "Rehacer",
    "Reorder": "Reordenar",
    "Rotate": "Rotar",
    "Select": "Seleccionar",
    "Share/export": "Compartir/exportar",
    "Size": "Tama\xF1o",
    "Text": "Texto",
    "Undo": "Deshacer"
  },
  fr: {
    "Alpha": "Opacit\xE9",
    "Cancel": "Annuler",
    "Close": "Fermer",
    "Color and size": "Couleur et taille",
    "Confirm": "Confirmer",
    "Convert docs": "Convertir les documents",
    "Copied PDF text link.": "Lien du texte PDF copi\xE9.",
    "Copied PDF text.": "Texte PDF copi\xE9.",
    "Copy PDF link": "Copier le lien PDF",
    "Copy text": "Copier le texte",
    "Could not copy link.": "Impossible de copier le lien.",
    "Could not copy text.": "Impossible de copier le texte.",
    "Crop": "Rogner",
    "Custom color": "Couleur personnalis\xE9e",
    "Custom highlight": "Surlignage personnalis\xE9",
    "Delete pages": "Supprimer les pages",
    "Delete selection/clear annotations": "Supprimer la s\xE9lection/effacer les annotations",
    "Eraser": "Gomme",
    "Export DOCX": "Exporter DOCX",
    "Export MD": "Exporter MD",
    "Export PDF": "Exporter PDF",
    "Font": "Police",
    "Highlight": "Surligner",
    "Highlighter": "Surligneur",
    "Image": "Image",
    "Import PDF": "Importer PDF",
    "Insert image": "Ins\xE9rer une image",
    "Insert link": "Ins\xE9rer un lien",
    "Loading pages...": "Chargement des pages...",
    "Move toolbar": "D\xE9placer la barre",
    "Open a PDF first.": "Ouvrez d'abord un PDF.",
    "PDF annotation": "Annotation PDF",
    "PDF annotation enabled.": "Annotation PDF activ\xE9e.",
    "Page/annotation navigator": "Navigation pages/annotations",
    "Pen": "Stylo",
    "Redo": "R\xE9tablir",
    "Reorder": "R\xE9ordonner",
    "Rotate": "Pivoter",
    "Select": "S\xE9lectionner",
    "Share/export": "Partager/exporter",
    "Size": "Taille",
    "Text": "Texte",
    "Undo": "Annuler"
  },
  id: {
    "Alpha": "Opasitas",
    "Cancel": "Batal",
    "Close": "Tutup",
    "Color and size": "Warna dan ukuran",
    "Confirm": "Konfirmasi",
    "Convert docs": "Konversi dokumen",
    "Copied PDF text link.": "Tautan teks PDF disalin.",
    "Copied PDF text.": "Teks PDF disalin.",
    "Copy PDF link": "Salin tautan PDF",
    "Copy text": "Salin teks",
    "Could not copy link.": "Gagal menyalin tautan.",
    "Could not copy text.": "Gagal menyalin teks.",
    "Crop": "Pangkas",
    "Custom color": "Warna khusus",
    "Custom highlight": "Sorotan khusus",
    "Delete pages": "Hapus halaman",
    "Delete selection/clear annotations": "Hapus pilihan/bersihkan anotasi",
    "Eraser": "Penghapus",
    "Export DOCX": "Ekspor DOCX",
    "Export MD": "Ekspor MD",
    "Export PDF": "Ekspor PDF",
    "Font": "Font",
    "Highlight": "Sorot",
    "Highlighter": "Penyorot",
    "Image": "Gambar",
    "Import PDF": "Impor PDF",
    "Insert image": "Sisipkan gambar",
    "Insert link": "Sisipkan tautan",
    "Loading pages...": "Memuat halaman...",
    "Move toolbar": "Pindahkan bilah alat",
    "Open a PDF first.": "Buka PDF terlebih dahulu.",
    "PDF annotation": "Anotasi PDF",
    "PDF annotation enabled.": "Anotasi PDF aktif.",
    "Page/annotation navigator": "Navigasi halaman/anotasi",
    "Pen": "Pena",
    "Redo": "Ulangi",
    "Reorder": "Susun ulang",
    "Rotate": "Putar",
    "Select": "Pilih",
    "Share/export": "Bagikan/ekspor",
    "Size": "Ukuran",
    "Text": "Teks",
    "Undo": "Urungkan"
  },
  ja: {
    "Alpha": "\u4E0D\u900F\u660E\u5EA6",
    "Cancel": "\u30AD\u30E3\u30F3\u30BB\u30EB",
    "Close": "\u9589\u3058\u308B",
    "Color and size": "\u8272\u3068\u30B5\u30A4\u30BA",
    "Confirm": "\u78BA\u8A8D",
    "Convert docs": "\u6587\u66F8\u5909\u63DB",
    "Copied PDF text link.": "PDF\u30C6\u30AD\u30B9\u30C8\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002",
    "Copied PDF text.": "PDF\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002",
    "Copy PDF link": "PDF\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",
    "Copy text": "\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",
    "Could not copy link.": "\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3002",
    "Could not copy text.": "\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3002",
    "Crop": "\u5207\u308A\u629C\u304D",
    "Custom color": "\u30AB\u30B9\u30BF\u30E0\u8272",
    "Custom highlight": "\u30AB\u30B9\u30BF\u30E0\u30CF\u30A4\u30E9\u30A4\u30C8",
    "Delete pages": "\u30DA\u30FC\u30B8\u524A\u9664",
    "Delete selection/clear annotations": "\u9078\u629E\u524A\u9664/\u6CE8\u91C8\u30AF\u30EA\u30A2",
    "Eraser": "\u6D88\u3057\u30B4\u30E0",
    "Export DOCX": "DOCX\u51FA\u529B",
    "Export MD": "MD\u51FA\u529B",
    "Export PDF": "PDF\u51FA\u529B",
    "Font": "\u30D5\u30A9\u30F3\u30C8",
    "Highlight": "\u30CF\u30A4\u30E9\u30A4\u30C8",
    "Highlighter": "\u86CD\u5149\u30DA\u30F3",
    "Image": "\u753B\u50CF",
    "Import PDF": "PDF\u53D6\u308A\u8FBC\u307F",
    "Insert image": "\u753B\u50CF\u3092\u633F\u5165",
    "Insert link": "\u30EA\u30F3\u30AF\u3092\u633F\u5165",
    "Loading pages...": "\u30DA\u30FC\u30B8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",
    "Move toolbar": "\u30C4\u30FC\u30EB\u30D0\u30FC\u3092\u79FB\u52D5",
    "Open a PDF first.": "\u5148\u306BPDF\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
    "PDF annotation": "PDF\u6CE8\u91C8",
    "PDF annotation enabled.": "PDF\u6CE8\u91C8\u3092\u6709\u52B9\u306B\u3057\u307E\u3057\u305F\u3002",
    "Page/annotation navigator": "\u30DA\u30FC\u30B8/\u6CE8\u91C8\u30CA\u30D3",
    "Pen": "\u30DA\u30F3",
    "Redo": "\u3084\u308A\u76F4\u3057",
    "Reorder": "\u4E26\u3079\u66FF\u3048",
    "Rotate": "\u56DE\u8EE2",
    "Select": "\u9078\u629E",
    "Share/export": "\u5171\u6709/\u51FA\u529B",
    "Size": "\u30B5\u30A4\u30BA",
    "Text": "\u30C6\u30AD\u30B9\u30C8",
    "Undo": "\u5143\u306B\u623B\u3059"
  },
  ko: {
    "Alpha": "\uD22C\uBA85\uB3C4",
    "Cancel": "\uCDE8\uC18C",
    "Close": "\uB2EB\uAE30",
    "Color and size": "\uC0C9\uC0C1\uACFC \uD06C\uAE30",
    "Confirm": "\uD655\uC778",
    "Convert docs": "\uBB38\uC11C \uBCC0\uD658",
    "Copied PDF text link.": "PDF \uD14D\uC2A4\uD2B8 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.",
    "Copied PDF text.": "PDF \uD14D\uC2A4\uD2B8\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.",
    "Copy PDF link": "PDF \uB9C1\uD06C \uBCF5\uC0AC",
    "Copy text": "\uD14D\uC2A4\uD2B8 \uBCF5\uC0AC",
    "Could not copy link.": "\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    "Could not copy text.": "\uD14D\uC2A4\uD2B8\uB97C \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    "Crop": "\uC790\uB974\uAE30",
    "Custom color": "\uC0AC\uC6A9\uC790 \uC0C9\uC0C1",
    "Custom highlight": "\uC0AC\uC6A9\uC790 \uD558\uC774\uB77C\uC774\uD2B8",
    "Delete pages": "\uD398\uC774\uC9C0 \uC0AD\uC81C",
    "Delete selection/clear annotations": "\uC120\uD0DD \uC0AD\uC81C/\uC8FC\uC11D \uC9C0\uC6B0\uAE30",
    "Eraser": "\uC9C0\uC6B0\uAC1C",
    "Export DOCX": "DOCX \uB0B4\uBCF4\uB0B4\uAE30",
    "Export MD": "MD \uB0B4\uBCF4\uB0B4\uAE30",
    "Export PDF": "PDF \uB0B4\uBCF4\uB0B4\uAE30",
    "Font": "\uAE00\uAF34",
    "Highlight": "\uD558\uC774\uB77C\uC774\uD2B8",
    "Highlighter": "\uD615\uAD11\uD39C",
    "Image": "\uC774\uBBF8\uC9C0",
    "Import PDF": "PDF \uAC00\uC838\uC624\uAE30",
    "Insert image": "\uC774\uBBF8\uC9C0 \uC0BD\uC785",
    "Insert link": "\uB9C1\uD06C \uC0BD\uC785",
    "Loading pages...": "\uD398\uC774\uC9C0 \uB85C\uB4DC \uC911...",
    "Move toolbar": "\uB3C4\uAD6C\uB9C9\uB300 \uC774\uB3D9",
    "Open a PDF first.": "\uBA3C\uC800 PDF\uB97C \uC5EC\uC138\uC694.",
    "PDF annotation": "PDF \uC8FC\uC11D",
    "PDF annotation enabled.": "PDF \uC8FC\uC11D\uC774 \uCF1C\uC84C\uC2B5\uB2C8\uB2E4.",
    "Page/annotation navigator": "\uD398\uC774\uC9C0/\uC8FC\uC11D \uD0D0\uC0C9",
    "Pen": "\uD39C",
    "Redo": "\uB2E4\uC2DC \uC2E4\uD589",
    "Reorder": "\uC7AC\uC815\uB82C",
    "Rotate": "\uD68C\uC804",
    "Select": "\uC120\uD0DD",
    "Share/export": "\uACF5\uC720/\uB0B4\uBCF4\uB0B4\uAE30",
    "Size": "\uD06C\uAE30",
    "Text": "\uD14D\uC2A4\uD2B8",
    "Undo": "\uC2E4\uD589 \uCDE8\uC18C"
  },
  pt: {
    "Alpha": "Opacidade",
    "Cancel": "Cancelar",
    "Close": "Fechar",
    "Color and size": "Cor e tamanho",
    "Confirm": "Confirmar",
    "Convert docs": "Converter documentos",
    "Copied PDF text link.": "Link de texto PDF copiado.",
    "Copied PDF text.": "Texto PDF copiado.",
    "Copy PDF link": "Copiar link PDF",
    "Copy text": "Copiar texto",
    "Could not copy link.": "N\xE3o foi poss\xEDvel copiar o link.",
    "Could not copy text.": "N\xE3o foi poss\xEDvel copiar o texto.",
    "Crop": "Recortar",
    "Custom color": "Cor personalizada",
    "Custom highlight": "Destaque personalizado",
    "Delete pages": "Excluir p\xE1ginas",
    "Delete selection/clear annotations": "Excluir sele\xE7\xE3o/limpar anota\xE7\xF5es",
    "Eraser": "Borracha",
    "Export DOCX": "Exportar DOCX",
    "Export MD": "Exportar MD",
    "Export PDF": "Exportar PDF",
    "Font": "Fonte",
    "Highlight": "Destacar",
    "Highlighter": "Marcador",
    "Image": "Imagem",
    "Import PDF": "Importar PDF",
    "Insert image": "Inserir imagem",
    "Insert link": "Inserir link",
    "Loading pages...": "Carregando p\xE1ginas...",
    "Move toolbar": "Mover barra",
    "Open a PDF first.": "Abra um PDF primeiro.",
    "PDF annotation": "Anota\xE7\xE3o PDF",
    "PDF annotation enabled.": "Anota\xE7\xE3o PDF ativada.",
    "Page/annotation navigator": "Navegador de p\xE1ginas/anota\xE7\xF5es",
    "Pen": "Caneta",
    "Redo": "Refazer",
    "Reorder": "Reordenar",
    "Rotate": "Girar",
    "Select": "Selecionar",
    "Share/export": "Compartilhar/exportar",
    "Size": "Tamanho",
    "Text": "Texto",
    "Undo": "Desfazer"
  },
  ru: {
    "Alpha": "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C",
    "Cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
    "Close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    "Color and size": "\u0426\u0432\u0435\u0442 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440",
    "Confirm": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
    "Convert docs": "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
    "Copied PDF text link.": "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442 PDF \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430.",
    "Copied PDF text.": "\u0422\u0435\u043A\u0441\u0442 PDF \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D.",
    "Copy PDF link": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 PDF",
    "Copy text": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442",
    "Could not copy link.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443.",
    "Could not copy text.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442.",
    "Crop": "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C",
    "Custom color": "\u0421\u0432\u043E\u0439 \u0446\u0432\u0435\u0442",
    "Custom highlight": "\u0421\u0432\u043E\u044F \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430",
    "Delete pages": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
    "Delete selection/clear annotations": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440/\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438",
    "Eraser": "\u041B\u0430\u0441\u0442\u0438\u043A",
    "Export DOCX": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 DOCX",
    "Export MD": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 MD",
    "Export PDF": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PDF",
    "Font": "\u0428\u0440\u0438\u0444\u0442",
    "Highlight": "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u0438\u0442\u044C",
    "Highlighter": "\u041C\u0430\u0440\u043A\u0435\u0440",
    "Image": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
    "Import PDF": "\u0418\u043C\u043F\u043E\u0440\u0442 PDF",
    "Insert image": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
    "Insert link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
    "Loading pages...": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446...",
    "Move toolbar": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C",
    "Open a PDF first.": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 PDF.",
    "PDF annotation": "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F PDF",
    "PDF annotation enabled.": "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F PDF \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430.",
    "Page/annotation navigator": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446/\u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0439",
    "Pen": "\u041F\u0435\u0440\u043E",
    "Redo": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
    "Reorder": "\u041F\u0435\u0440\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0442\u044C",
    "Rotate": "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    "Select": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
    "Share/export": "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F/\u044D\u043A\u0441\u043F\u043E\u0440\u0442",
    "Size": "\u0420\u0430\u0437\u043C\u0435\u0440",
    "Text": "\u0422\u0435\u043A\u0441\u0442",
    "Undo": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
  },
  tr: {
    "Alpha": "Opakl\u0131k",
    "Cancel": "\u0130ptal",
    "Close": "Kapat",
    "Color and size": "Renk ve boyut",
    "Confirm": "Onayla",
    "Convert docs": "Belgeleri d\xF6n\xFC\u015Ft\xFCr",
    "Copied PDF text link.": "PDF metin ba\u011Flant\u0131s\u0131 kopyaland\u0131.",
    "Copied PDF text.": "PDF metni kopyaland\u0131.",
    "Copy PDF link": "PDF ba\u011Flant\u0131s\u0131n\u0131 kopyala",
    "Copy text": "Metni kopyala",
    "Could not copy link.": "Ba\u011Flant\u0131 kopyalanamad\u0131.",
    "Could not copy text.": "Metin kopyalanamad\u0131.",
    "Crop": "K\u0131rp",
    "Custom color": "\xD6zel renk",
    "Custom highlight": "\xD6zel vurgulama",
    "Delete pages": "Sayfalar\u0131 sil",
    "Delete selection/clear annotations": "Se\xE7imi sil/notlar\u0131 temizle",
    "Eraser": "Silgi",
    "Export DOCX": "DOCX d\u0131\u015Fa aktar",
    "Export MD": "MD d\u0131\u015Fa aktar",
    "Export PDF": "PDF d\u0131\u015Fa aktar",
    "Font": "Yaz\u0131 tipi",
    "Highlight": "Vurgula",
    "Highlighter": "Fosforlu kalem",
    "Image": "G\xF6rsel",
    "Import PDF": "PDF i\xE7e aktar",
    "Insert image": "G\xF6rsel ekle",
    "Insert link": "Ba\u011Flant\u0131 ekle",
    "Loading pages...": "Sayfalar y\xFCkleniyor...",
    "Move toolbar": "Ara\xE7 \xE7ubu\u011Funu ta\u015F\u0131",
    "Open a PDF first.": "\xD6nce bir PDF a\xE7\u0131n.",
    "PDF annotation": "PDF notu",
    "PDF annotation enabled.": "PDF notu etkin.",
    "Page/annotation navigator": "Sayfa/not gezgini",
    "Pen": "Kalem",
    "Redo": "Yinele",
    "Reorder": "Yeniden s\u0131rala",
    "Rotate": "D\xF6nd\xFCr",
    "Select": "Se\xE7",
    "Share/export": "Payla\u015F/d\u0131\u015Fa aktar",
    "Size": "Boyut",
    "Text": "Metin",
    "Undo": "Geri al"
  },
  vi: {
    "Alpha": "\u0110\u1ED9 m\u1EDD",
    "Cancel": "H\u1EE7y",
    "Close": "\u0110\xF3ng",
    "Color and size": "M\xE0u v\xE0 c\u1EE1",
    "Confirm": "X\xE1c nh\u1EADn",
    "Convert docs": "Chuy\u1EC3n \u0111\u1ED5i t\xE0i li\u1EC7u",
    "Copied PDF text link.": "\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt v\u0103n b\u1EA3n PDF.",
    "Copied PDF text.": "\u0110\xE3 sao ch\xE9p v\u0103n b\u1EA3n PDF.",
    "Copy PDF link": "Sao ch\xE9p li\xEAn k\u1EBFt PDF",
    "Copy text": "Sao ch\xE9p v\u0103n b\u1EA3n",
    "Could not copy link.": "Kh\xF4ng th\u1EC3 sao ch\xE9p li\xEAn k\u1EBFt.",
    "Could not copy text.": "Kh\xF4ng th\u1EC3 sao ch\xE9p v\u0103n b\u1EA3n.",
    "Crop": "C\u1EAFt",
    "Custom color": "M\xE0u t\xF9y ch\u1EC9nh",
    "Custom highlight": "T\xF4 s\xE1ng t\xF9y ch\u1EC9nh",
    "Delete pages": "X\xF3a trang",
    "Delete selection/clear annotations": "X\xF3a l\u1EF1a ch\u1ECDn/x\xF3a ch\xFA th\xEDch",
    "Eraser": "T\u1EA9y",
    "Export DOCX": "Xu\u1EA5t DOCX",
    "Export MD": "Xu\u1EA5t MD",
    "Export PDF": "Xu\u1EA5t PDF",
    "Font": "Ph\xF4ng",
    "Highlight": "T\xF4 s\xE1ng",
    "Highlighter": "B\xFAt t\xF4 s\xE1ng",
    "Image": "\u1EA2nh",
    "Import PDF": "Nh\u1EADp PDF",
    "Insert image": "Ch\xE8n \u1EA3nh",
    "Insert link": "Ch\xE8n li\xEAn k\u1EBFt",
    "Loading pages...": "\u0110ang t\u1EA3i trang...",
    "Move toolbar": "Di chuy\u1EC3n thanh c\xF4ng c\u1EE5",
    "Open a PDF first.": "M\u1EDF PDF tr\u01B0\u1EDBc.",
    "PDF annotation": "Ch\xFA th\xEDch PDF",
    "PDF annotation enabled.": "\u0110\xE3 b\u1EADt ch\xFA th\xEDch PDF.",
    "Page/annotation navigator": "\u0110i\u1EC1u h\u01B0\u1EDBng trang/ch\xFA th\xEDch",
    "Pen": "B\xFAt",
    "Redo": "L\xE0m l\u1EA1i",
    "Reorder": "S\u1EAFp x\u1EBFp l\u1EA1i",
    "Rotate": "Xoay",
    "Select": "Ch\u1ECDn",
    "Share/export": "Chia s\u1EBB/xu\u1EA5t",
    "Size": "C\u1EE1",
    "Text": "V\u0103n b\u1EA3n",
    "Undo": "Ho\xE0n t\xE1c"
  }
};
var NATIVE_TEXT_SELECTION_DESKTOP_LIMITS = {
  clearExcessive: false,
  maxAreaRatio: 0.45,
  maxChars: 1600,
  maxHeightRatio: 0.68,
  maxRects: 120
};
var NATIVE_TEXT_SELECTION_TOUCH_LIMITS = {
  clearExcessive: true,
  maxAreaRatio: 0.18,
  maxChars: 360,
  maxHeightRatio: 0.34,
  maxRects: 36
};
var BUILTIN_ALIPAY_QR_PATH = "plugins/pdftion/assets/alipay.png";
var BUILTIN_BINANCE_QR_PATH = "plugins/pdftion/assets/binance.png";
var DEFAULT_SETTINGS = {
  autoEnableAnnotationToolbar: false,
  boostPdfMenus: true,
  language: "auto",
  lastCropBottom: 0.03,
  lastCropLeft: 0.03,
  lastCropRight: 0.03,
  lastCropTop: 0.04,
  nativeTextSelectionMenuAttachedToText: true,
  openBurnedPdfAfterExport: true,
  paymentQrOneLabel: "\u652F\u4ED8\u5B9D",
  paymentQrOnePath: "builtin:alipay",
  paymentQrTwoLabel: "\u5E01\u5B89",
  paymentQrTwoPath: "builtin:binance",
  eraserWidth: 14,
  highlightColor: "#fab005",
  highlightOpacity: 0.36,
  highlightWidth: 9,
  nativeTextHighlightColor: "#ffd43b",
  nativeTextSelectionAction: "copy",
  penColor: "#d9480f",
  penOpacity: 1,
  penWidth: 3,
  textColor: "#000000",
  textFontFamily: "sans-serif",
  textFontSize: 18,
  textOpacity: 1,
  toolbarButtonSize: 25,
  toolbarMaxWidth: 640,
  toolbarTopOffset: 0
};
function normalizePdftionLocale(language) {
  const normalized = language.toLowerCase().replace("_", "-").trim();
  if (!normalized) {
    return null;
  }
  if (normalized.startsWith("zh") || normalized.includes("\u4E2D\u6587")) {
    return "zh";
  }
  if (normalized.startsWith("ja") || normalized.startsWith("jp")) {
    return "ja";
  }
  if (normalized.startsWith("ko")) {
    return "ko";
  }
  if (normalized.startsWith("es")) {
    return "es";
  }
  if (normalized.startsWith("fr")) {
    return "fr";
  }
  if (normalized.startsWith("de")) {
    return "de";
  }
  if (normalized.startsWith("ru")) {
    return "ru";
  }
  if (normalized.startsWith("pt")) {
    return "pt";
  }
  if (normalized.startsWith("tr")) {
    return "tr";
  }
  if (normalized.startsWith("ar")) {
    return "ar";
  }
  if (normalized.startsWith("id") || normalized.startsWith("in")) {
    return "id";
  }
  if (normalized.startsWith("vi")) {
    return "vi";
  }
  if (normalized.startsWith("en")) {
    return "en";
  }
  return null;
}
function getPdftionLocale() {
  if (pdftionLanguagePreference !== "auto") {
    return pdftionLanguagePreference;
  }
  const languages = [];
  if (activeDocument.documentElement.lang) {
    languages.push(activeDocument.documentElement.lang);
  }
  languages.push(activeWindow.navigator.language);
  languages.push(...activeWindow.navigator.languages ?? []);
  for (const language of languages) {
    const locale = normalizePdftionLocale(language);
    if (locale) {
      return locale;
    }
  }
  return "en";
}
function uiText(zh, en) {
  const locale = getPdftionLocale();
  if (locale === "zh") {
    return zh;
  }
  if (locale === "en") {
    return en;
  }
  return PDFTION_TRANSLATIONS[locale]?.[en] ?? getExtendedPdftionTranslation(locale, en) ?? en;
}
function toArrayBufferCopy(bytes) {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}
function createActiveElement(tagName) {
  return activeDocument.createElement(tagName);
}
function appendToActiveBody(element) {
  activeDocument.body.appendChild(element);
}
function getActiveBody() {
  return activeDocument.body;
}
function waitForUiPaint() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.setTimeout(resolve, 0);
    });
  });
}
function hasCrossWindowInstanceCheck(value) {
  return typeof value === "object" && value !== null && "instanceOf" in value;
}
function isHTMLElement(value) {
  return hasCrossWindowInstanceCheck(value) && value.instanceOf(HTMLElement);
}
function isTouchLikeViewport() {
  return Boolean(activeWindow.matchMedia?.("(pointer: coarse)").matches) || activeWindow.innerWidth <= 820;
}
function getNativeSelectionLimits() {
  return isTouchLikeViewport() ? NATIVE_TEXT_SELECTION_TOUCH_LIMITS : NATIVE_TEXT_SELECTION_DESKTOP_LIMITS;
}
function clearNativeSelectionSoon(selection) {
  window.setTimeout(() => {
    try {
      selection.removeAllRanges();
    } catch {
    }
  }, 0);
}
async function showPromptModal(options) {
  return new Promise((resolve) => {
    const modal = createActiveElement("div");
    modal.className = "pdftion-dialog-backdrop";
    const panel = createActiveElement("div");
    panel.className = "pdftion-dialog";
    const heading = createActiveElement("div");
    heading.className = "pdftion-dialog-title";
    heading.textContent = options.title;
    panel.appendChild(heading);
    const message = createActiveElement("div");
    message.className = "pdftion-dialog-message";
    message.textContent = options.message;
    panel.appendChild(message);
    const input = createActiveElement("textarea");
    input.className = "pdftion-dialog-input";
    input.value = options.defaultValue ?? "";
    panel.appendChild(input);
    const actions = createActiveElement("div");
    actions.className = "pdftion-dialog-actions";
    const cancel = createActiveElement("button");
    cancel.type = "button";
    cancel.textContent = options.cancelLabel ?? uiText("\u53D6\u6D88", "Cancel");
    cancel.addEventListener("click", () => {
      modal.remove();
      resolve(null);
    });
    actions.appendChild(cancel);
    const submit = createActiveElement("button");
    submit.type = "button";
    submit.textContent = options.actionLabel;
    submit.classList.add("mod-cta");
    submit.addEventListener("click", () => {
      const value = input.value.trim();
      modal.remove();
      resolve(value || null);
    });
    actions.appendChild(submit);
    panel.appendChild(actions);
    modal.appendChild(panel);
    appendToActiveBody(modal);
    input.focus({ preventScroll: true });
    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        modal.remove();
        resolve(null);
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        const value = input.value.trim();
        modal.remove();
        resolve(value || null);
      }
    });
  });
}
async function showConfirmModal(options) {
  return new Promise((resolve) => {
    const modal = createActiveElement("div");
    modal.className = "pdftion-dialog-backdrop";
    const panel = createActiveElement("div");
    panel.className = "pdftion-dialog";
    const heading = createActiveElement("div");
    heading.className = "pdftion-dialog-title";
    heading.textContent = options.title;
    panel.appendChild(heading);
    const message = createActiveElement("div");
    message.className = "pdftion-dialog-message";
    message.textContent = options.message;
    panel.appendChild(message);
    const actions = createActiveElement("div");
    actions.className = "pdftion-dialog-actions";
    const cancel = createActiveElement("button");
    cancel.type = "button";
    cancel.textContent = options.cancelLabel ?? uiText("\u53D6\u6D88", "Cancel");
    cancel.addEventListener("click", () => {
      modal.remove();
      resolve(false);
    });
    actions.appendChild(cancel);
    const confirm = createActiveElement("button");
    confirm.type = "button";
    confirm.textContent = options.confirmLabel ?? uiText("\u786E\u8BA4", "Confirm");
    confirm.classList.add("mod-cta");
    confirm.addEventListener("click", () => {
      modal.remove();
      resolve(true);
    });
    actions.appendChild(confirm);
    panel.appendChild(actions);
    modal.appendChild(panel);
    appendToActiveBody(modal);
    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        modal.remove();
        resolve(false);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        modal.remove();
        resolve(true);
      }
    });
  });
}
async function showCropModal(defaultCrop, onPreview) {
  return new Promise((resolve) => {
    const modal = createActiveElement("div");
    modal.className = "pdftion-dialog-backdrop";
    const panel = createActiveElement("div");
    panel.className = "pdftion-dialog pdftion-crop-dialog";
    const heading = createActiveElement("div");
    heading.className = "pdftion-dialog-title";
    heading.textContent = uiText("\u88C1\u5207\u9875\u9762", "Crop pages");
    panel.appendChild(heading);
    const message = createActiveElement("div");
    message.className = "pdftion-dialog-message";
    message.textContent = uiText("\u5206\u522B\u8F93\u5165\u5DE6\u3001\u4E0A\u3001\u53F3\u3001\u4E0B\u56DB\u4E2A\u8FB9\u8DDD\u3002\u652F\u6301 0.05 \u6216 5%\u3002\u8F93\u5165\u65F6\u4F1A\u5B9E\u65F6\u663E\u793A\u56DB\u8FB9\u9884\u89C8\u7EBF\u3002", "Enter left, top, right, and bottom margins separately. Use 0.05 or 5%. Preview lines update as you type.");
    panel.appendChild(message);
    const grid = createActiveElement("div");
    grid.className = "pdftion-crop-grid";
    const inputs = {
      bottom: createCropInput(defaultCrop.bottom),
      left: createCropInput(defaultCrop.left),
      right: createCropInput(defaultCrop.right),
      top: createCropInput(defaultCrop.top)
    };
    for (const item of [
      { key: "left", label: uiText("\u5DE6", "Left") },
      { key: "top", label: uiText("\u4E0A", "Top") },
      { key: "right", label: uiText("\u53F3", "Right") },
      { key: "bottom", label: uiText("\u4E0B", "Bottom") }
    ]) {
      const label = createActiveElement("label");
      label.className = "pdftion-crop-field";
      const span = createActiveElement("span");
      span.textContent = item.label;
      label.appendChild(span);
      label.appendChild(inputs[item.key]);
      grid.appendChild(label);
    }
    panel.appendChild(grid);
    const error = createActiveElement("div");
    error.className = "pdftion-dialog-error";
    panel.appendChild(error);
    const actions = createActiveElement("div");
    actions.className = "pdftion-dialog-actions";
    const cancel = createActiveElement("button");
    cancel.type = "button";
    cancel.textContent = uiText("\u53D6\u6D88", "Cancel");
    cancel.addEventListener("click", () => {
      modal.remove();
      resolve(null);
    });
    actions.appendChild(cancel);
    const submit = createActiveElement("button");
    submit.type = "button";
    submit.textContent = uiText("\u5E94\u7528\u88C1\u5207", "Apply crop");
    submit.classList.add("mod-cta");
    const previewCrop = () => {
      const crop = readCropInputs(inputs);
      onPreview(crop);
      error.textContent = crop ? "" : uiText("\u88C1\u5207\u53C2\u6570\u65E0\u6548\u3002\u56DB\u8FB9\u76F8\u52A0\u4E0D\u80FD\u88C1\u6389\u6574\u9875\u3002", "Invalid crop values. Margins cannot remove the whole page.");
      return crop;
    };
    const submitCrop = () => {
      const crop = previewCrop();
      if (!crop) {
        return;
      }
      modal.remove();
      resolve(crop);
    };
    submit.addEventListener("click", submitCrop);
    actions.appendChild(submit);
    panel.appendChild(actions);
    modal.appendChild(panel);
    appendToActiveBody(modal);
    inputs.left.focus({ preventScroll: true });
    previewCrop();
    for (const input of Object.values(inputs)) {
      input.addEventListener("input", () => {
        previewCrop();
      });
    }
    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        modal.remove();
        resolve(null);
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        submitCrop();
      }
    });
  });
}
function createCropInput(value) {
  const input = createActiveElement("input");
  input.className = "pdftion-crop-input";
  input.inputMode = "decimal";
  input.type = "text";
  input.value = formatCropValue(value);
  return input;
}
function readCropInputs(inputs) {
  const left = parseCropValue(inputs.left.value.trim());
  const top = parseCropValue(inputs.top.value.trim());
  const right = parseCropValue(inputs.right.value.trim());
  const bottom = parseCropValue(inputs.bottom.value.trim());
  if (left === null || top === null || right === null || bottom === null) {
    return null;
  }
  if (left + right >= 0.9 || top + bottom >= 0.9) {
    return null;
  }
  return { bottom, left, right, top };
}
function formatCropValue(value) {
  return String(Math.round(value * 1e3) / 1e3);
}
var INK_COMMIT_NOTHING = { committed: true, restored: true, verified: Promise.resolve(true) };
var PdftionPlugin = class extends import_obsidian.Plugin {
  annotationFontBytes = null;
  dataMaintenancePending = false;
  dataMaintenanceRunning = false;
  dataMaintenanceTimer = null;
  inkCommitPromises = /* @__PURE__ */ new Map();
  missingPdfSurfaces = /* @__PURE__ */ new Map();
  pdfReadCache = null;
  pdfReadCacheLoading = null;
  detachedBytesCache = null;
  pdfFingerprintCache = null;
  sessions = /* @__PURE__ */ new Map();
  surfaceScanTimers = [];
  settings = { ...DEFAULT_SETTINGS };
  // Reusing one parsed PDFDocument for read-only inspection removes the two
  // extra full parses per ink-edit toggle (enter used to parse the file three
  // times: page index scan, stroke import, then the detach transaction).
  // Shared with InkSession through the plugin instance: one parse per document.
  async getPdfReadCache(file) {
    const stat = file.stat;
    const cached = this.pdfReadCache;
    if (cached && cached.path === file.path) {
      if (cached.mtime === stat.mtime && cached.size === stat.size) {
        return cached;
      }
      const currentBytes = await this.app.vault.readBinary(file);
      if (arrayBuffersEqual(currentBytes, cached.bytes)) {
        cached.bytes = currentBytes;
        cached.mtime = stat.mtime;
        cached.size = currentBytes.byteLength;
        return cached;
      }
    }
    const pending = this.pdfReadCacheLoading;
    if (pending && pending.path === file.path) {
      return pending.promise;
    }
    const loading = {
      path: file.path,
      promise: (async () => {
        const bytes = await this.app.vault.readBinary(file);
        const pdf = await import_pdf_lib.PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
        const entry = { bytes, mtime: file.stat.mtime, path: file.path, pdf, size: bytes.byteLength };
        this.pdfReadCache = entry;
        return entry;
      })()
    };
    this.pdfReadCacheLoading = loading;
    try {
      return await loading.promise;
    } finally {
      if (this.pdfReadCacheLoading === loading) {
        this.pdfReadCacheLoading = null;
      }
    }
  }
  invalidatePdfReadCache(file) {
    if (!file || this.pdfReadCache?.path === file.path) {
      this.pdfReadCache = null;
    }
    this.invalidatePdfInkPageIndexes(file);
  }
  invalidatePdfInkPageIndexes(file) {
    if (!file) {
      this.pdfInkPageIndexCache.clear();
      return;
    }
    this.pdfInkPageIndexCache.delete(file.path);
  }
  // Checkpointing fingerprints the current PDF on every stroke pause. Keying on
  // stat avoids re-reading and re-hashing the whole file between edits.
  async getPdfFingerprint(file, currentBytes) {
    const stat = file.stat;
    if (!currentBytes) {
      const cached = this.pdfFingerprintCache;
      if (cached && cached.path === file.path && cached.mtime === stat.mtime && cached.size === stat.size) {
        return cached.fingerprint;
      }
    }
    const bytes = currentBytes ?? await this.app.vault.readBinary(file);
    const fingerprint = await fingerprintPdfBytes(bytes, stat.mtime);
    if (!currentBytes) {
      this.pdfFingerprintCache = { fingerprint, mtime: stat.mtime, path: file.path, size: stat.size };
    }
    return fingerprint;
  }
  async onload() {
    await this.loadSettings();
    window.setTimeout(() => {
      void this.recoverPendingInkEditTransactions();
    }, 0);
    this.applyRuntimeSettings();
    this.addSettingTab(new PdftionSettingTab(this));
    this.addCommand({
      id: "toggle",
      name: uiText("\u5207\u6362 PDF \u6279\u6CE8", "Toggle PDF annotation"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        session.toggle();
      }
    });
    this.addCommand({
      id: "export-annotated-pdf",
      name: uiText("\u5BFC\u51FA\u5E26\u6279\u6CE8 PDF", "Export visible annotated PDF"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportAnnotatedPdf();
      }
    });
    this.addCommand({
      id: "export-annotations-markdown",
      name: uiText("\u5BFC\u51FA\u6279\u6CE8 Markdown", "Export annotations to Markdown"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportAnnotationsMarkdown();
      }
    });
    this.addCommand({
      id: "export-annotations-docx",
      name: uiText("\u5BFC\u51FA\u6279\u6CE8 DOCX", "Export annotations to DOCX"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportConvertedDocx();
      }
    });
    this.addCommand({
      id: "export-annotations-pptx",
      name: uiText("\u5BFC\u51FA\u6279\u6CE8 PPTX", "Export annotations to PPTX"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportConvertedPptx();
      }
    });
    this.addCommand({
      id: "export-annotations-html",
      name: uiText("\u5BFC\u51FA HTML", "Export HTML"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportConvertedHtml();
      }
    });
    this.addCommand({
      id: "show-pdf-page-navigator",
      name: uiText("\u6253\u5F00\u9875\u9762\u5BFC\u822A", "Show page navigator"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        session.showPageNavigator();
      }
    });
    this.addCommand({
      id: "convert-pdf-markdown-docx",
      name: uiText("PDF/Markdown/DOCX \u8F6C\u6362", "PDF/Markdown/DOCX conversion"),
      callback: () => {
        const session = this.getActivePdfSession();
        if (!session) {
          new import_obsidian.Notice(uiText("\u8BF7\u5148\u6253\u5F00 PDF\u3002", "Open a PDF first."));
          return;
        }
        void session.exportMarkdownDocxBridge();
      }
    });
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      this.flushSessionsOutsideLeaf(leaf);
      this.queuePdfSurfaceScans();
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => this.queuePdfSurfaceScans()));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      this.flushSessionsOutsideFile(file);
      this.queuePdfSurfaceScans();
    }));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (file instanceof import_obsidian.TFile && file.extension.toLowerCase() === "pdf") {
        this.scheduleDataMaintenance(DATA_MAINTENANCE_DELETE_DELAY_MS);
      }
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (file instanceof import_obsidian.TFile && (file.extension.toLowerCase() === "pdf" || oldPath.toLowerCase().endsWith(".pdf"))) {
        void this.migratePdfData(oldPath, file.path);
      }
    }));
    this.registerDomEvent(activeDocument, "pointerdown", (event) => this.commitEditorsOnOutsidePointer(event), { capture: true });
    this.registerDomEvent(activeWindow, "pagehide", () => this.checkpointAllSessionsSoon());
    this.registerDomEvent(activeWindow, "beforeunload", () => this.checkpointAllSessionsSoon());
    this.register(() => this.clearSurfaceScanTimers());
    this.register(() => this.clearDataMaintenanceTimer());
    this.queuePdfSurfaceScans();
    this.scheduleDataMaintenance(DATA_MAINTENANCE_START_DELAY_MS);
    this.installAiApi();
  }
  async loadSettings() {
    this.settings = normalizeSettings(await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.applyRuntimeSettings();
  }
  onunload() {
    if (activeWindow.PdftionAI) {
      delete activeWindow.PdftionAI;
    }
    delete activeWindow[PDFTION_AI_API_NAME];
    getActiveBody().classList.remove("pdftion-menu-boost");
    getActiveBody().classList.remove("pdftion-editing-active");
    getActiveBody().setCssProps({
      "--pdftion-toolbar-button-size": "",
      "--pdftion-toolbar-max-width": "",
      "--pdftion-toolbar-top-offset": ""
    });
    for (const session of this.sessions.values()) {
      session.destroy(false);
    }
    this.sessions.clear();
    this.missingPdfSurfaces.clear();
    this.clearSurfaceScanTimers();
    this.clearDataMaintenanceTimer();
  }
  refreshGlobalEditingClass() {
    const hasActiveSession = Array.from(this.sessions.values()).some((session) => session.isEnabled());
    getActiveBody().classList.toggle("pdftion-editing-active", hasActiveSession);
  }
  applyRuntimeSettings() {
    pdftionLanguagePreference = this.settings.language;
    const body = getActiveBody();
    body.classList.toggle("pdftion-menu-boost", this.settings.boostPdfMenus);
    body.setCssProps({
      "--pdftion-toolbar-button-size": `${this.settings.toolbarButtonSize}px`,
      "--pdftion-toolbar-max-width": `${this.settings.toolbarMaxWidth}px`,
      "--pdftion-toolbar-top-offset": `${this.settings.toolbarTopOffset}px`
    });
  }
  queuePdfSurfaceScans() {
    this.clearSurfaceScanTimers();
    for (const delay of [0, 120, 480, 1400, 3200]) {
      const timer = window.setTimeout(() => {
        this.surfaceScanTimers = this.surfaceScanTimers.filter((value) => value !== timer);
        this.scanPdfSurfaces();
      }, delay);
      this.surfaceScanTimers.push(timer);
    }
  }
  clearSurfaceScanTimers() {
    for (const timer of this.surfaceScanTimers) {
      window.clearTimeout(timer);
    }
    this.surfaceScanTimers = [];
  }
  scheduleDataMaintenance(delay) {
    this.clearDataMaintenanceTimer();
    this.dataMaintenanceTimer = window.setTimeout(() => {
      this.dataMaintenanceTimer = null;
      void this.runDataMaintenance();
    }, delay);
  }
  clearDataMaintenanceTimer() {
    if (this.dataMaintenanceTimer !== null) {
      window.clearTimeout(this.dataMaintenanceTimer);
      this.dataMaintenanceTimer = null;
    }
  }
  async runDataMaintenance() {
    if (this.dataMaintenanceRunning) {
      this.dataMaintenancePending = true;
      return;
    }
    this.dataMaintenanceRunning = true;
    let removed = 0;
    try {
      removed = await this.pruneObsoletePdfData();
      if (removed > 0) {
        console.info(`pdftion removed ${removed} obsolete data files.`);
      }
    } catch (error) {
      console.warn("pdftion could not finish background data maintenance.", error);
    } finally {
      this.dataMaintenanceRunning = false;
      if (this.dataMaintenancePending) {
        this.dataMaintenancePending = false;
        this.scheduleDataMaintenance(1e3);
      }
    }
  }
  async listAdapterFiles(dir) {
    try {
      return (await this.app.vault.adapter.list(dir)).files ?? [];
    } catch {
      return [];
    }
  }
  async removeAdapterFile(path) {
    try {
      if (!await this.app.vault.adapter.exists(path)) {
        return false;
      }
      await this.app.vault.adapter.remove(path);
      return true;
    } catch (error) {
      console.debug("pdftion could not remove obsolete data.", path, error);
      return false;
    }
  }
  async moveAdapterFile(from, to) {
    if (!await this.app.vault.adapter.exists(from)) {
      return false;
    }
    if (await this.app.vault.adapter.exists(to)) {
      await this.app.vault.adapter.remove(to);
    }
    await this.app.vault.adapter.rename(from, to);
    return true;
  }
  async adapterFileIsOlderThan(path, ageMs) {
    try {
      const stat = await this.app.vault.adapter.stat(path);
      return Boolean(stat && Date.now() - stat.mtime >= ageMs);
    } catch {
      return false;
    }
  }
  getAnnotationStatePathForPath(filePath) {
    return `${this.manifest.dir}/data/annotations/${safeAnnotationKey(filePath)}.json`;
  }
  async migratePdfData(oldPath, newPath) {
    if (oldPath === newPath) {
      return;
    }
    const oldKey = safeAnnotationKey(oldPath);
    const newKey = safeAnnotationKey(newPath);
    try {
      const oldStatePath = this.getAnnotationStatePathForPath(oldPath);
      const newStatePath = this.getAnnotationStatePathForPath(newPath);
      if (await this.app.vault.adapter.exists(oldStatePath)) {
        const state = JSON.parse(await this.app.vault.adapter.read(oldStatePath));
        state.filePath = newPath;
        await this.app.vault.adapter.write(newStatePath, JSON.stringify(state, null, 2));
        await this.removeAdapterFile(oldStatePath);
      }
      const baseDir = `${this.manifest.dir}/data/base-pdfs`;
      for (const path of await this.listAdapterFiles(baseDir)) {
        const name = path.slice(path.lastIndexOf("/") + 1);
        if (name.startsWith(`${oldKey}--`)) {
          await this.moveAdapterFile(path, `${baseDir}/${newKey}${name.slice(oldKey.length)}`);
        }
      }
      const rewriteDir = `${this.manifest.dir}/data/rewrite-backups`;
      const oldRewritePdf = `${rewriteDir}/${oldKey}.pdf`;
      const newRewritePdf = `${rewriteDir}/${newKey}.pdf`;
      const oldRewriteJson = `${rewriteDir}/${oldKey}.json`;
      const newRewriteJson = `${rewriteDir}/${newKey}.json`;
      await this.moveAdapterFile(oldRewritePdf, newRewritePdf);
      if (await this.app.vault.adapter.exists(oldRewriteJson)) {
        const record = JSON.parse(await this.app.vault.adapter.read(oldRewriteJson));
        record.filePath = newPath;
        record.pdfPath = newRewritePdf;
        await this.app.vault.adapter.write(newRewriteJson, JSON.stringify(record, null, 2));
        await this.removeAdapterFile(oldRewriteJson);
      }
      const transactionDir = `${this.manifest.dir}/data/ink-edit-transactions`;
      const oldTransactionJson = `${transactionDir}/${oldKey}.json`;
      const newTransactionJson = `${transactionDir}/${newKey}.json`;
      if (await this.app.vault.adapter.exists(oldTransactionJson)) {
        const record = JSON.parse(await this.app.vault.adapter.read(oldTransactionJson));
        const newBackupPdfPath = `${transactionDir}/${newKey}.pdf`;
        const newBackupStatePath = record.backupAnnotationStatePath ? `${transactionDir}/${newKey}.state.json` : void 0;
        await this.moveAdapterFile(record.backupPdfPath, newBackupPdfPath);
        if (record.backupAnnotationStatePath && newBackupStatePath) {
          await this.moveAdapterFile(record.backupAnnotationStatePath, newBackupStatePath);
        }
        record.filePath = newPath;
        record.backupPdfPath = newBackupPdfPath;
        record.backupAnnotationStatePath = newBackupStatePath;
        await this.app.vault.adapter.write(newTransactionJson, JSON.stringify(record, null, 2));
        await this.removeAdapterFile(oldTransactionJson);
      }
    } catch (error) {
      console.warn("pdftion could not migrate PDF data after rename.", oldPath, newPath, error);
    } finally {
      this.scheduleDataMaintenance(1e3);
    }
  }
  async pruneObsoletePdfData() {
    const dataDir = `${this.manifest.dir}/data`;
    const annotationDir = `${dataDir}/annotations`;
    const baseDir = `${dataDir}/base-pdfs`;
    const rewriteDir = `${dataDir}/rewrite-backups`;
    const transactionDir = `${dataDir}/ink-edit-transactions`;
    const referencedBasePaths = /* @__PURE__ */ new Set();
    let removed = 0;
    let processed = 0;
    const yieldIfNeeded = async () => {
      processed += 1;
      if (processed % 12 === 0) {
        await sleepMs(0);
      }
    };
    const remove = async (path) => {
      if (await this.removeAdapterFile(path)) {
        removed += 1;
      }
      await yieldIfNeeded();
    };
    for (const path of await this.listAdapterFiles(annotationDir)) {
      if (!path.endsWith(".json")) {
        continue;
      }
      const name = path.slice(path.lastIndexOf("/") + 1, -5);
      let keyPath = "";
      try {
        keyPath = decodeURIComponent(name);
      } catch {
        await remove(path);
        continue;
      }
      try {
        const state = JSON.parse(await this.app.vault.adapter.read(path));
        const source = this.app.vault.getAbstractFileByPath(keyPath);
        const elements = Array.isArray(state.elements) ? state.elements.filter(isInkElement) : [];
        if (!(source instanceof import_obsidian.TFile) || source.extension.toLowerCase() !== "pdf" || state.filePath !== keyPath || elements.length === 0) {
          await remove(path);
          continue;
        }
        if (isPdfFingerprint(state.basePdfFingerprint)) {
          referencedBasePaths.add(`${baseDir}/${safeAnnotationKey(keyPath)}--${state.basePdfFingerprint.sha256}.pdf`);
        }
        await yieldIfNeeded();
      } catch {
        await remove(path);
      }
    }
    for (const path of await this.listAdapterFiles(baseDir)) {
      const name = path.slice(path.lastIndexOf("/") + 1);
      const match = name.match(/^(.*)--([0-9a-f]{64})\.pdf$/i);
      if (!match) {
        await remove(path);
        continue;
      }
      let sourcePath = "";
      try {
        sourcePath = decodeURIComponent(match[1]);
      } catch {
        await remove(path);
        continue;
      }
      const source = this.app.vault.getAbstractFileByPath(sourcePath);
      const unreferencedAndOld = !referencedBasePaths.has(path) && await this.adapterFileIsOlderThan(path, 60 * 60 * 1e3);
      if (!(source instanceof import_obsidian.TFile) || source.extension.toLowerCase() !== "pdf" || unreferencedAndOld) {
        await remove(path);
      } else {
        await yieldIfNeeded();
      }
    }
    const validRewritePdfs = /* @__PURE__ */ new Set();
    for (const path of (await this.listAdapterFiles(rewriteDir)).filter((item) => item.endsWith(".json"))) {
      try {
        const record = JSON.parse(await this.app.vault.adapter.read(path));
        const source = this.app.vault.getAbstractFileByPath(record.filePath);
        if (!(source instanceof import_obsidian.TFile) || source.extension.toLowerCase() !== "pdf" || !await this.app.vault.adapter.exists(record.pdfPath)) {
          await remove(record.pdfPath);
          await remove(path);
          continue;
        }
        validRewritePdfs.add(record.pdfPath);
        await yieldIfNeeded();
      } catch {
        await remove(path);
      }
    }
    for (const path of (await this.listAdapterFiles(rewriteDir)).filter((item) => item.endsWith(".pdf"))) {
      if (!validRewritePdfs.has(path)) {
        await remove(path);
      }
    }
    const validTransactionFiles = /* @__PURE__ */ new Set();
    for (const path of (await this.listAdapterFiles(transactionDir)).filter((item) => item.endsWith(".json"))) {
      try {
        const record = JSON.parse(await this.app.vault.adapter.read(path));
        const source = this.app.vault.getAbstractFileByPath(record.filePath);
        if (!(source instanceof import_obsidian.TFile) || source.extension.toLowerCase() !== "pdf" || !await this.app.vault.adapter.exists(record.backupPdfPath)) {
          await remove(record.backupPdfPath);
          if (record.backupAnnotationStatePath) {
            await remove(record.backupAnnotationStatePath);
          }
          await remove(path);
          continue;
        }
        validTransactionFiles.add(record.backupPdfPath);
        if (record.backupAnnotationStatePath) {
          validTransactionFiles.add(record.backupAnnotationStatePath);
        }
        await yieldIfNeeded();
      } catch {
        await remove(path);
      }
    }
    for (const path of await this.listAdapterFiles(transactionDir)) {
      if (!path.endsWith(".json") && !validTransactionFiles.has(path)) {
        await remove(path);
      }
    }
    return removed;
  }
  async loadAnnotationFontBytes() {
    if (this.annotationFontBytes) {
      return this.annotationFontBytes;
    }
    const dir = this.manifest.dir;
    if (!dir) {
      throw new Error("Plugin directory is unavailable.");
    }
    const buffer = await this.app.vault.adapter.readBinary(`${dir}/fonts/NotoSansSC-Regular.otf`);
    this.annotationFontBytes = new Uint8Array(buffer);
    return this.annotationFontBytes;
  }
  async loadAnnotationState(file) {
    if (!await this.app.vault.adapter.exists(this.getAnnotationStatePath(file))) {
      return null;
    }
    const currentFingerprint = await this.getPdfFingerprint(file);
    const state = await this.loadVerifiedAnnotationRecord(file, currentFingerprint);
    if (!state) {
      return null;
    }
    return {
      elements: state.elements,
      overlayAnnotationsOnly: state.overlayAnnotationsOnly === true,
      overlayTextOnly: state.overlayTextOnly === true
    };
  }
  async loadPdfInkAnnotations(file, pageIndexes) {
    try {
      const { pdf } = await this.getPdfReadCache(file);
      return extractPdfInkAnnotations(pdf, pageIndexes);
    } catch (error) {
      console.warn("pdftion could not import PDF ink annotations.", error);
      return [];
    }
  }
  pdfInkPageIndexCache = /* @__PURE__ */ new Map();
  async getPdfInkPageIndexes(file) {
    const stat = file.stat;
    const cached = this.pdfInkPageIndexCache.get(file.path);
    if (cached && cached.mtime === stat.mtime && cached.size === stat.size) {
      return cached.pageIndexes;
    }
    const strokes = await this.loadPdfInkAnnotations(file);
    const pageIndexes = new Set(strokes.map((stroke) => stroke.pageIndex));
    this.pdfInkPageIndexCache.set(file.path, { mtime: stat.mtime, pageIndexes, size: stat.size });
    return pageIndexes;
  }
  async saveAnnotationState(file, elements, basePdfFingerprint, savedBytes) {
    const path = this.getAnnotationStatePath(file);
    const pdfFingerprint = await fingerprintPdfBytes(savedBytes, file.stat.mtime);
    await this.ensureAdapterFolder(path.substring(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.write(
      path,
      JSON.stringify(
        {
          basePdfFingerprint,
          filePath: file.path,
          overlayAnnotationsOnly: true,
          overlayTextOnly: true,
          pdfFingerprint,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          version: 7,
          elements
        }
      )
    );
  }
  async saveEditableAnnotationState(file, elements, currentBytes) {
    const path = this.getAnnotationStatePath(file);
    const pdfFingerprint = await this.getPdfFingerprint(file, currentBytes);
    await this.ensureAdapterFolder(path.substring(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.write(
      path,
      JSON.stringify(
        {
          filePath: file.path,
          overlayAnnotationsOnly: true,
          overlayTextOnly: true,
          pdfFingerprint,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          version: 7,
          elements
        }
      )
    );
  }
  async loadBasePdfBytes(file, fingerprint) {
    try {
      return await this.app.vault.adapter.readBinary(this.getBasePdfPath(file, fingerprint.sha256));
    } catch {
      return null;
    }
  }
  async ensureBasePdfBytes(file, currentBytes) {
    const currentFingerprint = await fingerprintPdfBytes(currentBytes, file.stat.mtime);
    const state = await this.loadVerifiedAnnotationRecord(file, currentFingerprint);
    if (state?.basePdfFingerprint) {
      const existing = await this.loadBasePdfBytes(file, state.basePdfFingerprint);
      if (existing) {
        return { bytes: existing, fingerprint: state.basePdfFingerprint };
      }
    }
    const path = this.getBasePdfPath(file, currentFingerprint.sha256);
    await this.ensureAdapterFolder(path.substring(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.writeBinary(path, currentBytes);
    return { bytes: currentBytes, fingerprint: currentFingerprint };
  }
  async replaceBasePdfBytes(file, currentBytes) {
    const fingerprint = await fingerprintPdfBytes(currentBytes, file.stat.mtime);
    const path = this.getBasePdfPath(file, fingerprint.sha256);
    await this.ensureAdapterFolder(path.substring(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.writeBinary(path, currentBytes);
    return fingerprint;
  }
  getAnnotationStatePath(file) {
    return this.getAnnotationStatePathForPath(file.path);
  }
  getBasePdfPath(file, sha256) {
    return `${this.manifest.dir}/data/base-pdfs/${safeAnnotationKey(file.path)}--${sha256}.pdf`;
  }
  async loadVerifiedAnnotationRecord(file, currentFingerprint) {
    try {
      const raw = await this.app.vault.adapter.read(this.getAnnotationStatePath(file));
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed.elements)) {
        return null;
      }
      if (!isPdfFingerprint(parsed.pdfFingerprint)) {
        console.warn("pdftion skipped annotation state without a PDF fingerprint.", file.path);
        return null;
      }
      const filePath = typeof parsed.filePath === "string" ? parsed.filePath : void 0;
      if (filePath !== file.path) {
        console.warn("pdftion removed annotation state assigned to another PDF.", file.path, filePath);
        await this.removeAdapterFile(this.getAnnotationStatePath(file));
        return null;
      }
      if (parsed.pdfFingerprint.sha256 !== currentFingerprint.sha256) {
        console.warn("pdftion skipped annotation state for a replaced PDF.", file.path);
        await this.removeAdapterFile(this.getAnnotationStatePath(file));
        return null;
      }
      return {
        basePdfFingerprint: isPdfFingerprint(parsed.basePdfFingerprint) ? parsed.basePdfFingerprint : void 0,
        elements: parsed.elements.filter(isInkElement),
        filePath,
        overlayAnnotationsOnly: parsed.overlayAnnotationsOnly === true,
        overlayTextOnly: parsed.overlayTextOnly === true,
        pdfFingerprint: parsed.pdfFingerprint,
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : void 0,
        version: typeof parsed.version === "number" ? parsed.version : void 0
      };
    } catch {
      return null;
    }
  }
  async ensureAdapterFolder(path) {
    if (!path) {
      return;
    }
    const parts = path.split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!await this.app.vault.adapter.exists(current)) {
        await this.app.vault.adapter.mkdir(current);
      }
    }
  }
  scanPdfSurfaces() {
    const liveRoots = /* @__PURE__ */ new Set();
    this.app.workspace.iterateAllLeaves((leaf) => {
      const view = leaf.view;
      const hostEl = view.containerEl ?? view.contentEl;
      if (!hostEl) {
        return;
      }
      for (const surface of this.findPdfSurfaces(hostEl, view)) {
        liveRoots.add(surface.rootEl);
        const existing = this.sessions.get(surface.rootEl);
        if (existing) {
          this.missingPdfSurfaces.delete(surface.rootEl);
          existing.updateFile(surface.file);
          existing.scheduleQuietScan();
          continue;
        }
        const session = new InkSession(this, leaf, surface.file, surface.rootEl);
        this.sessions.set(surface.rootEl, session);
      }
    });
    const activeFile = this.app.workspace.getActiveFile();
    const currentLeaf = activeFile ? this.findLeafForFile(activeFile) : this.app.workspace.getMostRecentLeaf();
    if (currentLeaf) {
      for (const surface of this.findPdfSurfaces(activeDocument.body, currentLeaf.view)) {
        if (!this.isDetachedPdfSurface(surface.rootEl) || this.isCoveredByExistingSession(surface.rootEl)) {
          continue;
        }
        liveRoots.add(surface.rootEl);
        const existing = this.sessions.get(surface.rootEl);
        if (existing) {
          this.missingPdfSurfaces.delete(surface.rootEl);
          existing.updateFile(surface.file);
          existing.scheduleQuietScan();
          continue;
        }
        const session = new InkSession(this, currentLeaf, surface.file, surface.rootEl);
        this.sessions.set(surface.rootEl, session);
      }
    }
    const now = Date.now();
    for (const [rootEl, session] of this.sessions.entries()) {
      if (activeDocument.body.contains(rootEl) && liveRoots.has(rootEl)) {
        this.missingPdfSurfaces.delete(rootEl);
        continue;
      }
      const missingSince = this.missingPdfSurfaces.get(rootEl);
      if (missingSince === void 0) {
        this.missingPdfSurfaces.set(rootEl, now);
        continue;
      }
      if (now - missingSince < PDF_SURFACE_MISSING_GRACE_MS) {
        continue;
      }
      session.destroy();
      this.sessions.delete(rootEl);
      this.missingPdfSurfaces.delete(rootEl);
    }
    this.refreshGlobalEditingClass();
  }
  findLeafForFile(file) {
    const recentLeaf = this.app.workspace.getMostRecentLeaf();
    const recentView = recentLeaf?.view;
    if (recentLeaf && recentView?.file?.path === file.path && recentView.getViewType?.() === "pdf") {
      return recentLeaf;
    }
    let matchedPdf = null;
    let visiblePdf = null;
    let matchedOther = null;
    let visibleOther = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      const view = leaf.view;
      if (view.file?.path === file.path) {
        const isPdfView = view.getViewType?.() === "pdf";
        if (isPdfView) {
          matchedPdf = leaf;
        } else {
          matchedOther = leaf;
        }
        const rootEl = view.containerEl ?? view.contentEl;
        const rect = rootEl?.getBoundingClientRect();
        if (rect && rect.width > 0 && rect.height > 0) {
          if (isPdfView) {
            visiblePdf = leaf;
          } else {
            visibleOther = leaf;
          }
        }
      }
    });
    return visiblePdf ?? visibleOther ?? matchedPdf ?? matchedOther;
  }
  async beginInkEditTransaction(file, pageIndexes, baselineElements) {
    const normalizedPages = Array.from(pageIndexes).filter((pageIndex) => Number.isInteger(pageIndex) && pageIndex >= 0).sort((a, b) => a - b);
    if (normalizedPages.length === 0) {
      return false;
    }
    const existing = await this.readInkEditTransaction(file);
    if (existing) {
      if (existing.filePath !== file.path) {
        throw new Error(`An ink edit transaction is already active for ${existing.filePath}.`);
      }
      const additionalPages = normalizedPages.filter((pageIndex) => !existing.pageIndexes.includes(pageIndex));
      if (additionalPages.length === 0) {
        return false;
      }
      const { bytes: currentBytes2, pdf: pdf2 } = await this.getPdfReadCache(file);
      const validAdditionalPages = additionalPages.filter((pageIndex) => pageIndex < pdf2.getPageCount());
      if (validAdditionalPages.length === 0) {
        return false;
      }
      const expandedRecord = {
        ...existing,
        pageIndexes: Array.from(/* @__PURE__ */ new Set([...existing.pageIndexes, ...validAdditionalPages])).sort((a, b) => a - b)
      };
      await this.writeInkEditTransaction(file, expandedRecord);
      try {
        removeAllInkAnnotationsOnPages(pdf2, new Set(validAdditionalPages));
        const saved = await pdf2.save({ addDefaultPage: false, useObjectStreams: false });
        const detachedBytes = toPdfBytes(saved);
        await this.app.vault.modifyBinary(file, detachedBytes);
        this.invalidatePdfReadCache(file);
        return true;
      } catch (error) {
        this.invalidatePdfReadCache(file);
        await this.restoreInkEditTransaction(file, expandedRecord, true);
        throw error;
      }
    }
    const dir = `${this.manifest.dir}/data/ink-edit-transactions`;
    const safeKey = safeAnnotationKey(file.path);
    const backupPdfPath = `${dir}/${safeKey}.pdf`;
    const transactionPath = `${dir}/${safeKey}.json`;
    const known = this.pdfReadCache;
    const stat = file.stat;
    const reuse = known && known.path === file.path && known.mtime === stat.mtime && known.size === stat.size;
    const currentBytes = reuse ? known.bytes : await this.app.vault.readBinary(file);
    await this.ensureAdapterFolder(dir);
    await this.app.vault.adapter.writeBinary(backupPdfPath, currentBytes);
    const replay = await this.findDetachedBytes(file, currentBytes, normalizedPages);
    const pdf = replay ? null : reuse ? known.pdf : await import_pdf_lib.PDFDocument.load(currentBytes, { ignoreEncryption: true, updateMetadata: false });
    const pageCount = pdf ? pdf.getPageCount() : Number.MAX_SAFE_INTEGER;
    const transactionPages = normalizedPages.filter((pageIndex) => pageIndex < pageCount);
    if (transactionPages.length === 0) {
      return false;
    }
    const annotationStatePath = this.getAnnotationStatePath(file);
    const annotationStateExisted = await this.app.vault.adapter.exists(annotationStatePath);
    let backupAnnotationStatePath = annotationStateExisted ? `${dir}/${safeKey}.state.json` : void 0;
    if (backupAnnotationStatePath) {
      await this.app.vault.adapter.write(
        backupAnnotationStatePath,
        await this.app.vault.adapter.read(annotationStatePath)
      );
    } else if (baselineElements) {
      backupAnnotationStatePath = `${dir}/${safeKey}.state.json`;
      await this.app.vault.adapter.write(
        backupAnnotationStatePath,
        JSON.stringify({ filePath: file.path, elements: baselineElements, version: 1 })
      );
    }
    const record = {
      annotationStateExisted,
      backupAnnotationStatePath,
      backupPdfPath,
      filePath: file.path,
      pageIndexes: transactionPages,
      phase: "editing",
      startedAt: (/* @__PURE__ */ new Date()).toISOString(),
      version: 1
    };
    await this.app.vault.adapter.write(transactionPath, JSON.stringify(record, null, 2));
    if (replay) {
      await this.app.vault.modifyBinary(file, replay);
      this.invalidatePdfReadCache(file);
      return true;
    }
    try {
      removeAllInkAnnotationsOnPages(pdf, new Set(transactionPages));
      const saved = await pdf.save({ addDefaultPage: false, useObjectStreams: false });
      const detachedBytes = toPdfBytes(saved);
      this.rememberDetachedBytes(file, currentBytes, transactionPages, detachedBytes);
      await this.app.vault.modifyBinary(file, detachedBytes);
      this.invalidatePdfReadCache(file);
      return true;
    } catch (error) {
      this.invalidatePdfReadCache(file);
      await this.restoreInkEditTransaction(file, record, true);
      throw error;
    }
  }
  // Remembers the bytes produced by a detach so the same file can be detached
  // again without a parse. Only one entry is kept: the cost of holding it is the
  // size of the document, and the benefit only exists for the document in use.
  rememberDetachedBytes(file, sourceBytes, pageIndexes, detachedBytes) {
    void sha256Hex(sourceBytes).then((sourceSha256) => {
      this.detachedBytesCache = {
        detachedBytes,
        pageIndexes: [...pageIndexes],
        path: file.path,
        sourceSha256
      };
    });
  }
  async findDetachedBytes(file, currentBytes, pageIndexes) {
    const cached = this.detachedBytesCache;
    if (!cached || cached.path !== file.path) {
      return null;
    }
    if (await sha256Hex(currentBytes) !== cached.sourceSha256) {
      return null;
    }
    if (cached.pageIndexes.length !== pageIndexes.length || cached.pageIndexes.some((pageIndex, index) => pageIndex !== pageIndexes[index])) {
      return null;
    }
    return cached.detachedBytes;
  }
  async completeInkEditTransaction(file, elements, pageIndexes, hooks) {
    const existing = this.inkCommitPromises.get(file.path);
    if (existing) {
      return existing;
    }
    const commit = this.completeInkEditTransactionNow(file, elements, pageIndexes, hooks);
    this.inkCommitPromises.set(file.path, commit);
    try {
      return await commit;
    } finally {
      if (this.inkCommitPromises.get(file.path) === commit) {
        this.inkCommitPromises.delete(file.path);
      }
    }
  }
  async finishInkEditTransaction(file, elements, pageIndexes, hooks) {
    const record = await this.readInkEditTransaction(file);
    if (!record) {
      return INK_COMMIT_NOTHING;
    }
    const pages = new Set(record.pageIndexes.filter((pageIndex) => pageIndexes.has(pageIndex)));
    if (pages.size === 0) {
      return INK_COMMIT_NOTHING;
    }
    const backupElements = await this.readInkEditBackupElements(record);
    if (!backupElements || !inkStrokeSetsEquivalent(elements, backupElements, pages)) {
      return this.completeInkEditTransaction(file, elements, pages, hooks);
    }
    const restored = await this.restoreInkEditTransaction(file, record, true).then(
      () => true,
      (error) => {
        console.warn("pdftion could not restore the untouched PDF ink; rewriting instead.", error);
        return false;
      }
    );
    if (!restored) {
      return this.completeInkEditTransaction(file, elements, pages, hooks);
    }
    hooks?.onBytesWritten?.();
    return { committed: true, restored: true, verified: Promise.resolve(true) };
  }
  async completeInkEditTransactionNow(file, elements, pageIndexes, hooks) {
    const record = await this.readInkEditTransaction(file);
    if (!record) {
      return INK_COMMIT_NOTHING;
    }
    const pagesToCommit = new Set(record.pageIndexes.filter((pageIndex) => pageIndexes.has(pageIndex)));
    if (pagesToCommit.size === 0) {
      return INK_COMMIT_NOTHING;
    }
    const readCache = await this.getPdfReadCache(file);
    const currentBytes = readCache.bytes;
    try {
      const pdf = readCache.pdf;
      removeAllInkAnnotationsOnPages(pdf, pagesToCommit);
      const pages = pdf.getPages();
      const strokes = dedupeInkElements(elements.filter((element) => element.kind === "stroke" && pagesToCommit.has(element.pageIndex) && element.points.length >= 2)).filter((element) => element.kind === "stroke");
      for (const stroke of strokes) {
        const page = pages[stroke.pageIndex];
        if (!page || !addStandardInkAnnotation(pdf, page, stroke)) {
          throw new Error(`Could not write ink annotation for ${stroke.id}.`);
        }
      }
      const saved = await pdf.save({ addDefaultPage: false, useObjectStreams: false });
      const committedBytes = toPdfBytes(saved);
      await this.app.vault.modifyBinary(file, committedBytes);
      this.invalidatePdfReadCache(file);
      const marked = elements.map((element) => {
        if (element.kind !== "stroke" || !pagesToCommit.has(element.pageIndex)) {
          return cloneElement(element);
        }
        return {
          ...element,
          externalDirty: false,
          pdfPoints: element.points.map((point) => ({ ...point })),
          pdfSaved: true,
          saved: true,
          source: "pdftion"
        };
      });
      await this.saveEditableAnnotationState(file, marked, committedBytes);
      const remainingPages = record.pageIndexes.filter((pageIndex) => !pagesToCommit.has(pageIndex));
      try {
        if (remainingPages.length === 0) {
          await this.writeInkEditTransaction(file, { ...record, phase: "committed" });
        } else {
          await this.writeInkEditTransaction(file, { ...record, pageIndexes: remainingPages });
        }
      } catch (error) {
        console.warn("pdftion could not update the ink transaction record after committing.", error);
      }
      hooks?.onBytesWritten?.();
      const verified = this.verifyCommittedInkPages(file, record, committedBytes, strokes, pagesToCommit, remainingPages, hooks);
      return { committed: true, verified };
    } catch (error) {
      console.error("pdftion could not commit the PDF ink edit transaction; restoring the backup.", error);
      this.invalidatePdfReadCache(file);
      await this.restoreInkEditTransaction(file, record, true);
      return { committed: false, verified: Promise.resolve(false) };
    }
  }
  // Read the bytes back and confirm every expected stroke survived the write.
  // Runs after the caller asked the native view to reload, so the verification
  // cost is paid while the user is already looking at the refreshed page.
  verifyCommittedInkPages(file, record, committedBytes, strokes, pagesToCommit, remainingPages, hooks) {
    return (async () => {
      if (hooks?.waitForRender) {
        try {
          await hooks.waitForRender();
        } catch {
        }
      }
      try {
        const verifyPdf = await import_pdf_lib.PDFDocument.load(committedBytes, { ignoreEncryption: true, updateMetadata: false });
        const actual = extractPdfInkAnnotations(verifyPdf, pagesToCommit);
        for (const expected of strokes) {
          const match = actual.find((candidate) => candidate.id === expected.id || isSamePdfInkStrokeCandidate(candidate, expected));
          if (!match || !inkPointsApproximatelyEqual(
            match.points,
            simplifyInkPoints(smoothInkPointsForPdf(expected.points, 1600), 900)
          )) {
            throw new Error(`Ink verification failed for ${expected.id}.`);
          }
        }
        if (actual.length !== strokes.length) {
          throw new Error(`Ink verification count mismatch: ${actual.length}/${strokes.length}.`);
        }
      } catch (error) {
        console.error("pdftion could not verify the committed PDF ink; restoring the backup.", error);
        this.invalidatePdfReadCache(file);
        try {
          await this.restoreInkEditTransaction(file, record, true);
        } catch (restoreError) {
          console.error("pdftion could not restore the PDF ink backup after a failed verification.", restoreError);
        }
        return false;
      }
      if (remainingPages.length === 0) {
        try {
          await this.deleteInkEditTransaction(record);
        } catch (error) {
          console.warn("pdftion committed ink edits but could not remove all transaction backup files.", error);
        }
      }
      return true;
    })();
  }
  async rollbackInkEditTransaction(file) {
    const record = await this.readInkEditTransaction(file);
    if (!record) {
      return true;
    }
    await this.restoreInkEditTransaction(file, record, true);
    return true;
  }
  async getInkEditTransactionPages(file) {
    const record = await this.readInkEditTransaction(file);
    return new Set(record?.phase === "editing" ? record.pageIndexes : []);
  }
  getInkEditTransactionPath(filePath) {
    return `${this.manifest.dir}/data/ink-edit-transactions/${safeAnnotationKey(filePath)}.json`;
  }
  async readInkEditTransaction(file) {
    try {
      const raw = await this.app.vault.adapter.read(this.getInkEditTransactionPath(file.path));
      const record = JSON.parse(raw);
      if (record.version !== 1 || record.filePath !== file.path || typeof record.backupPdfPath !== "string" || !Array.isArray(record.pageIndexes) || !record.pageIndexes.every((value) => Number.isInteger(value) && value >= 0)) {
        return null;
      }
      return {
        annotationStateExisted: record.annotationStateExisted === true,
        backupAnnotationStatePath: typeof record.backupAnnotationStatePath === "string" ? record.backupAnnotationStatePath : void 0,
        backupPdfPath: record.backupPdfPath,
        filePath: record.filePath,
        pageIndexes: record.pageIndexes,
        phase: record.phase === "committed" ? "committed" : "editing",
        startedAt: typeof record.startedAt === "string" ? record.startedAt : "",
        version: 1
      };
    } catch {
      return null;
    }
  }
  async readInkEditBackupElements(record) {
    if (!record.backupAnnotationStatePath) {
      return null;
    }
    try {
      const raw = await this.app.vault.adapter.read(record.backupAnnotationStatePath);
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed.elements) ? parsed.elements.filter(isInkElement) : null;
    } catch {
      return null;
    }
  }
  async writeInkEditTransaction(file, record) {
    await this.ensureAdapterFolder(`${this.manifest.dir}/data/ink-edit-transactions`);
    await this.app.vault.adapter.write(this.getInkEditTransactionPath(file.path), JSON.stringify(record, null, 2));
  }
  async deleteInkEditTransaction(record) {
    const transactionPath = this.getInkEditTransactionPath(record.filePath);
    if (await this.app.vault.adapter.exists(transactionPath)) {
      await this.app.vault.adapter.remove(transactionPath);
    }
    if (await this.app.vault.adapter.exists(record.backupPdfPath)) {
      await this.app.vault.adapter.remove(record.backupPdfPath);
    }
    if (record.backupAnnotationStatePath && await this.app.vault.adapter.exists(record.backupAnnotationStatePath)) {
      await this.app.vault.adapter.remove(record.backupAnnotationStatePath);
    }
  }
  async restoreInkEditTransaction(file, record, removeRecord) {
    const backupBytes = await this.app.vault.adapter.readBinary(record.backupPdfPath);
    await this.app.vault.modifyBinary(file, backupBytes);
    this.invalidatePdfReadCache(file);
    const annotationStatePath = this.getAnnotationStatePath(file);
    if (record.annotationStateExisted && record.backupAnnotationStatePath) {
      const state = await this.app.vault.adapter.read(record.backupAnnotationStatePath);
      await this.app.vault.adapter.write(annotationStatePath, state);
    } else if (await this.app.vault.adapter.exists(annotationStatePath)) {
      await this.app.vault.adapter.remove(annotationStatePath);
    }
    if (removeRecord) {
      await this.deleteInkEditTransaction(record);
    }
  }
  async recoverPendingInkEditTransactions() {
    const dir = `${this.manifest.dir}/data/ink-edit-transactions`;
    let listing;
    try {
      listing = await this.app.vault.adapter.list(dir);
    } catch {
      return;
    }
    for (const path of listing.files ?? []) {
      if (!path.endsWith(".json")) {
        continue;
      }
      try {
        const raw = await this.app.vault.adapter.read(path);
        const record = JSON.parse(raw);
        const file = this.app.vault.getAbstractFileByPath(record.filePath);
        if (!(file instanceof import_obsidian.TFile) || record.version !== 1 || typeof record.backupPdfPath !== "string") {
          continue;
        }
        if (record.phase === "committed") {
          await this.deleteInkEditTransaction(record);
          continue;
        }
        const elements = await this.readPendingInkEditElements(file);
        await this.restoreInkEditTransaction(file, record, true);
        if (elements) {
          const restoredBytes = await this.app.vault.readBinary(file);
          await this.saveEditableAnnotationState(file, elements, restoredBytes);
        }
        console.info(`pdftion restored interrupted PDF ink editing for ${file.path}.`);
      } catch (error) {
        console.warn("pdftion could not recover an interrupted PDF ink transaction.", path, error);
      }
    }
  }
  async readPendingInkEditElements(file) {
    try {
      const raw = await this.app.vault.adapter.read(this.getAnnotationStatePath(file));
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed.elements) ? parsed.elements.filter(isInkElement) : null;
    } catch {
      return null;
    }
  }
  flushAllSessionsSoon() {
    for (const session of this.sessions.values()) {
      session.flushSoon();
    }
  }
  flushSessionsOutsideLeaf(activeLeaf) {
    for (const session of this.sessions.values()) {
      if (!session.isForLeaf(activeLeaf)) {
        session.flushSoon();
      }
    }
  }
  flushSessionsOutsideFile(activeFile) {
    for (const session of this.sessions.values()) {
      if (!activeFile || session.getFilePath() !== activeFile.path) {
        session.flushSoon();
      }
    }
  }
  checkpointAllSessionsSoon() {
    for (const session of this.sessions.values()) {
      session.checkpointSoon();
    }
  }
  isCoveredByExistingSession(rootEl) {
    for (const existingRoot of this.sessions.keys()) {
      if (existingRoot === rootEl || existingRoot.contains(rootEl) || rootEl.contains(existingRoot)) {
        return true;
      }
    }
    return false;
  }
  isDetachedPdfSurface(rootEl) {
    if (rootEl.closest(".workspace-leaf-content")) {
      return false;
    }
    return rootEl.closest(".sr-modal, .sr-card, .spaced-repetition, .spaced-repetition-modal, .review-modal, .review-card, .modal") !== null;
  }
  commitEditorsOnOutsidePointer(event) {
    const target = event.target;
    if (isHTMLElement(target) && target.closest(".pdftion-native-editor, .pdftion-panel")) {
      return;
    }
    for (const session of this.sessions.values()) {
      session.commitNativeTextEditor();
    }
  }
  findPdfSurfaces(hostEl, view) {
    const directFile = view.file?.extension === "pdf" ? view.file : null;
    const viewType = view.getViewType?.();
    if (directFile || viewType === "pdf") {
      const file = directFile ?? this.resolvePdfFile(hostEl, view.file);
      return file ? [{ file, rootEl: hostEl }] : [];
    }
    const roots = /* @__PURE__ */ new Set();
    for (const page of this.findPdfPageElements(hostEl)) {
      const root = page.closest(".internal-embed, .media-embed, .file-embed, .markdown-embed") ?? page.closest(".pdf-embed, .pdf-container, .pdf-viewer, .pdfViewer") ?? page.parentElement ?? hostEl;
      roots.add(root);
    }
    const surfaces = [];
    for (const rootEl of roots) {
      const file = this.resolvePdfFile(rootEl, view.file);
      if (file && this.hasPdfPages(rootEl)) {
        surfaces.push({ file, rootEl });
      }
    }
    return surfaces;
  }
  findPdfPageElements(rootEl) {
    return Array.from(
      rootEl.querySelectorAll(
        ".pdfViewer .page, .pdf-viewer .page, .pdf-container .page, .page[data-page-number]"
      )
    ).filter((page) => page.querySelector("canvas") !== null);
  }
  hasPdfPages(rootEl) {
    return this.findPdfPageElements(rootEl).some((page) => page.clientWidth > 0 && page.clientHeight > 0);
  }
  resolvePdfFile(rootEl, sourceFile) {
    if (sourceFile?.extension === "pdf") {
      return sourceFile;
    }
    for (const rawPath of collectPdfPathHints(rootEl)) {
      const file = this.resolvePdfPathHint(rawPath, sourceFile);
      if (file) {
        return file;
      }
    }
    return null;
  }
  resolvePdfPathHint(rawPath, sourceFile) {
    const cleaned = cleanPdfPathHint(rawPath);
    if (!cleaned) {
      return null;
    }
    const linked = this.app.metadataCache.getFirstLinkpathDest(cleaned, sourceFile?.path ?? "");
    if (linked instanceof import_obsidian.TFile && linked.extension === "pdf") {
      return linked;
    }
    const normalized = cleaned.replace(/\\/g, "/").replace(/^\/+/, "");
    const direct = this.app.vault.getAbstractFileByPath(normalized);
    if (direct instanceof import_obsidian.TFile && direct.extension === "pdf") {
      return direct;
    }
    return null;
  }
  getActivePdfSession() {
    const activeFile = this.app.workspace.getActiveFile();
    const leaf = activeFile ? this.findLeafForFile(activeFile) : this.app.workspace.getMostRecentLeaf();
    if (!leaf) {
      return null;
    }
    const view = leaf.view;
    const rootEl = view.containerEl ?? view.contentEl;
    if (!rootEl) {
      return null;
    }
    this.scanPdfSurfaces();
    const direct = this.sessions.get(rootEl);
    if (direct) {
      return direct;
    }
    for (const [sessionRoot, session] of this.sessions.entries()) {
      if (rootEl.contains(sessionRoot) || sessionRoot.contains(rootEl)) {
        return session;
      }
    }
    return this.getVisiblePdfSession();
  }
  getVisiblePdfSession() {
    let best = null;
    for (const [rootEl, session] of this.sessions.entries()) {
      const rect = rootEl.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0 || rect.bottom < 0 || rect.top > activeWindow.innerHeight) {
        continue;
      }
      const score = Math.abs(rect.top + rect.height / 2 - activeWindow.innerHeight / 2);
      if (!best || score < best.score) {
        best = { score, session };
      }
    }
    return best?.session ?? null;
  }
  installAiApi() {
    const api = {
      addImage: (input) => this.getActivePdfSession()?.aiAddImage(input) ?? null,
      addCover: (input) => this.getActivePdfSession()?.aiAddCover(input) ?? null,
      addStroke: (input) => this.getActivePdfSession()?.aiAddStroke(input) ?? null,
      addText: (input) => this.getActivePdfSession()?.aiAddText(input) ?? null,
      applyPlan: (operations) => this.getActivePdfSession()?.aiApplyPlan(operations) ?? Promise.resolve({ added: [], deleted: 0, errors: ["No active PDF session."], exported: [], ok: false, selected: 0, updated: 0 }),
      convertNativeDocument: () => this.getActivePdfSession()?.convertNativeDocumentToEditable() ?? { covers: 0, skipped: 0, texts: 0 },
      convertNativePage: (pageIndex) => this.getActivePdfSession()?.convertNativePageToEditable(pageIndex) ?? { covers: 0, skipped: 0, texts: 0 },
      convertNativeSelection: () => this.getActivePdfSession()?.convertNativeSelectionToEditable() ?? { covers: 0, skipped: 0, texts: 0 },
      coverNativeSelection: () => this.getActivePdfSession()?.aiCoverNativeSelection() ?? null,
      deleteElements: (ids) => this.getActivePdfSession()?.aiDeleteElements(ids) ?? 0,
      exportAnnotatedPdf: () => this.getActivePdfSession()?.exportAnnotatedPdf() ?? Promise.resolve(null),
      exportAnnotationsDocx: () => this.getActivePdfSession()?.exportAnnotationsDocx() ?? Promise.resolve(null),
      exportAnnotationsHtml: () => this.getActivePdfSession()?.exportConvertedHtml() ?? Promise.resolve(null),
      exportAnnotationsMarkdown: () => this.getActivePdfSession()?.exportAnnotationsMarkdown() ?? Promise.resolve(null),
      exportAnnotationsPng: () => this.getActivePdfSession()?.exportConvertedPng() ?? Promise.resolve(null),
      exportAnnotationsPptx: () => this.getActivePdfSession()?.exportConvertedPptx() ?? Promise.resolve(null),
      exportMarkdownDocxBridge: () => this.getActivePdfSession()?.exportMarkdownDocxBridge() ?? Promise.resolve(null),
      findElements: (query) => this.getActivePdfSession()?.aiFindElements(query) ?? [],
      getAnnotationsMarkdown: () => this.getActivePdfSession()?.getAnnotationsMarkdown() ?? "",
      getCurrentFile: () => this.getActivePdfSession()?.getFilePath() ?? null,
      getElements: () => this.getActivePdfSession()?.aiGetElements() ?? [],
      getNativeSelection: () => this.getActivePdfSession()?.aiGetNativeSelection() ?? null,
      getSelectedElements: () => this.getActivePdfSession()?.aiGetSelectedElements() ?? [],
      getStats: () => this.getActivePdfSession()?.aiGetStats() ?? { covers: 0, images: 0, pages: 0, strokes: 0, texts: 0, total: 0 },
      groupElementsByPage: () => this.getActivePdfSession()?.aiGroupElementsByPage() ?? {},
      jumpToPage: (pageIndex) => this.getActivePdfSession()?.jumpToPage(pageIndex) ?? false,
      replaceNativeText: (text) => this.getActivePdfSession()?.aiReplaceNativeText(text) ?? null,
      replaceElements: (elements) => this.getActivePdfSession()?.aiReplaceElements(elements) ?? false,
      selectElements: (ids) => this.getActivePdfSession()?.aiSelectElements(ids) ?? 0,
      insertObsidianLink: (input) => this.getActivePdfSession()?.insertObsidianLink(input) ?? Promise.resolve(null),
      insertVaultImage: (input) => this.getActivePdfSession()?.insertVaultImage(input) ?? Promise.resolve(null),
      setPageCrop: (pageIndex, crop) => this.getActivePdfSession()?.setPageCrop(pageIndex, crop) ?? false,
      getPageCrops: () => this.getActivePdfSession()?.getPageCrops() ?? {},
      updateElements: (elements) => this.getActivePdfSession()?.aiUpdateElements(elements) ?? 0
    };
    activeWindow.PdftionAI = api;
    window[PDFTION_AI_API_NAME] = api;
  }
};
var PdftionSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }
  plugin;
  display() {
    const { containerEl } = this;
    containerEl.replaceChildren();
    new import_obsidian.Setting(containerEl).setName(uiText("Pdftion \u8BBE\u7F6E", "Pdftion settings")).setHeading();
    new import_obsidian.Setting(containerEl).setName(uiText("\u754C\u9762\u8BED\u8A00", "Interface language")).setDesc(uiText(
      "\u9ED8\u8BA4\u8DDF\u968F Obsidian\u3002\u5207\u6362\u540E\u7ACB\u5373\u751F\u6548\uFF1B\u5982\u679C\u5DF2\u6253\u5F00\u7684 PDF \u4ECD\u6709\u5C11\u91CF\u65E7\u6587\u5B57\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u8BE5 PDF\u3002",
      "Follow Obsidian by default. Changes apply immediately; reopen an existing PDF if a few labels remain unchanged."
    )).addDropdown((dropdown) => {
      for (const option of PDFTION_LANGUAGE_OPTIONS) {
        dropdown.addOption(
          option.value,
          option.value === "auto" ? uiText("\u8DDF\u968F Obsidian", "Follow Obsidian") : option.label
        );
      }
      dropdown.setValue(this.plugin.settings.language).onChange(async (value) => {
        this.plugin.settings.language = normalizePdftionLanguageSetting(value);
        await this.plugin.saveSettings();
        this.display();
      });
    });
    this.addSection(uiText("\u5BFC\u51FA", "Export"));
    new import_obsidian.Setting(containerEl).setName(uiText("\u5BFC\u51FA\u540E\u81EA\u52A8\u6253\u5F00", "Open after export")).setDesc(uiText("\u81EA\u52A8\u6253\u5F00\u751F\u6210\u7684 PDF\u3001MD\u3001DOCX\u3001PPTX\u3001PNG \u6216 HTML \u6587\u4EF6\u3002", "Automatically open generated PDF, MD, DOCX, PPTX, PNG, or HTML files.")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.openBurnedPdfAfterExport).onChange(async (value) => {
        this.plugin.settings.openBurnedPdfAfterExport = value;
        await this.plugin.saveSettings();
      });
    });
    this.addSection(uiText("\u5DE5\u5177\u680F", "Toolbar"));
    this.addToggleSetting(
      uiText("\u589E\u5F3A PDF \u9876\u90E8\u83DC\u5355", "Boost PDF top menu"),
      uiText("\u63D0\u9AD8 PDF \u83DC\u5355\u5C42\u7EA7\u548C\u6309\u94AE\u53EF\u70B9\u533A\u57DF\uFF0C\u51CF\u5C11\u88AB\u590D\u4E60\u5361\u7247\u6216\u5D4C\u5165\u89C6\u56FE\u5939\u4F4F\u65F6\u70B9\u4E0D\u5230\u3002", "Raises PDF menu stacking and button hit areas to help inside review cards and embeds."),
      "boostPdfMenus"
    );
    this.addToggleSetting(
      uiText("\u6253\u5F00 PDF \u65F6\u81EA\u52A8\u663E\u793A\u6279\u6CE8\u5DE5\u5177\u680F", "Show annotation toolbar when a PDF opens"),
      uiText("\u9002\u5408\u4E3B\u8981\u7528 Pdftion \u6279\u6CE8 PDF \u7684\u5DE5\u4F5C\u6D41\uFF1B\u5173\u95ED\u540E\u4ECD\u53EF\u70B9 PDF \u83DC\u5355\u91CC\u7684\u7B14\u6309\u94AE\u3002", "Useful when most PDFs are annotated with Pdftion; the pen button still works when disabled."),
      "autoEnableAnnotationToolbar"
    );
    this.addNumberSetting(
      uiText("\u5DE5\u5177\u680F\u6309\u94AE\u5927\u5C0F", "Toolbar button size"),
      uiText("\u5355\u4F4D px\u3002\u5EFA\u8BAE 22-32\uFF0C\u624B\u673A\u53EF\u9002\u5F53\u52A0\u5927\u3002", "Pixels. 22-32 is recommended; use larger values on touch screens."),
      "toolbarButtonSize",
      18,
      44
    );
    this.addNumberSetting(
      uiText("\u5DE5\u5177\u680F\u6700\u5927\u5BBD\u5EA6", "Toolbar max width"),
      uiText("\u5355\u4F4D px\u3002\u5C4F\u5E55\u7A84\u65F6\u4ECD\u4F1A\u81EA\u52A8\u538B\u5230\u5C4F\u5E55\u5185\u3002", "Pixels. It is still clamped to the viewport on narrow screens."),
      "toolbarMaxWidth",
      360,
      1200
    );
    this.addNumberSetting(
      uiText("\u5DE5\u5177\u680F\u4E0B\u79FB\u8DDD\u79BB", "Toolbar top offset"),
      uiText("\u5355\u4F4D px\u3002\u9876\u90E8\u88AB\u6321\u65F6\u8C03\u5927\uFF1B\u4E0D\u60F3\u7559\u7A7A\u5C31\u8BBE\u4E3A 0\u3002", "Pixels. Increase when the top is covered; use 0 for no extra gap."),
      "toolbarTopOffset",
      0,
      160
    );
    this.addSection(uiText("\u9009\u62E9\u4E0E\u89E6\u63A7", "Selection and touch"));
    this.addToggleSetting(
      uiText("\u624B\u673A\u6587\u5B57\u83DC\u5355\u8D34\u8FD1\u9009\u4E2D\u6587\u5B57", "Attach mobile text menu to selected text"),
      uiText("\u5F00\u542F\u540E\u9AD8\u4EAE/\u590D\u5236\u83DC\u5355\u8DDF\u968F\u9009\u4E2D\u6587\u5B57\uFF1B\u5173\u95ED\u540E\u4F7F\u7528\u65E7\u7684\u5C4F\u5E55\u8FB9\u7F18\u5B9A\u4F4D\u3002", "When enabled, highlight/copy actions follow the selected text; disable to use the older edge placement."),
      "nativeTextSelectionMenuAttachedToText"
    );
    this.addSection(uiText("\u6570\u636E\u4E0E AI", "Data and AI"));
    const apiNote = containerEl.createDiv({ cls: "pdftion-settings-note" });
    apiNote.textContent = uiText(
      "Pdftion \u4F1A\u81EA\u52A8\u4FDD\u5B58\u53EF\u7F16\u8F91\u6279\u6CE8\u6570\u636E\uFF0C\u5E76\u5728\u7A97\u53E3\u66B4\u9732 PdftionAI / __PDftionAI__\uFF0C\u65B9\u4FBF\u672C\u5730\u811A\u672C\u6216 AI \u8BFB\u53D6\u3001\u7EDF\u8BA1\u548C\u64CD\u4F5C\u5F53\u524D PDF \u6279\u6CE8\u3002",
      "Pdftion auto-saves editable annotation data and exposes PdftionAI / __PDftionAI__ on the window for local scripts or AI agents to inspect, summarize, and operate the active PDF annotations."
    );
    this.addSection(uiText("\u652F\u6301\u4F5C\u8005", "Support the author"));
    this.renderPaymentQrCodes(containerEl);
  }
  addSection(title) {
    new import_obsidian.Setting(this.containerEl).setName(title).setHeading().settingEl.addClass("pdftion-settings-section");
  }
  addToggleSetting(name, desc, key) {
    new import_obsidian.Setting(this.containerEl).setName(name).setDesc(desc).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings[key]).onChange(async (value) => {
        this.plugin.settings[key] = value;
        await this.plugin.saveSettings();
      });
    });
  }
  addNumberSetting(name, desc, key, min, max) {
    new import_obsidian.Setting(this.containerEl).setName(name).setDesc(desc).addText((text) => {
      text.setValue(String(this.plugin.settings[key])).onChange(async (value) => {
        const next = clamp(Math.round(Number(value)), min, max);
        if (!Number.isFinite(next)) {
          return;
        }
        this.plugin.settings[key] = next;
        await this.plugin.saveSettings();
      });
      text.inputEl.type = "number";
      text.inputEl.min = String(min);
      text.inputEl.max = String(max);
    });
  }
  addTextSetting(name, placeholder, key) {
    new import_obsidian.Setting(this.containerEl).setName(name).addText((text) => {
      text.setPlaceholder(placeholder).setValue(this.plugin.settings[key]).onChange(async (value) => {
        this.plugin.settings[key] = value.trim();
        await this.plugin.saveSettings();
      });
    });
  }
  renderPaymentQrCodes(containerEl) {
    const wrap = containerEl.createDiv({ cls: "pdftion-payment-grid" });
    this.renderPaymentQrCode(wrap, this.plugin.settings.paymentQrOneLabel, this.plugin.settings.paymentQrOnePath);
    this.renderPaymentQrCode(wrap, this.plugin.settings.paymentQrTwoLabel, this.plugin.settings.paymentQrTwoPath);
  }
  renderPaymentQrCode(containerEl, label, rawPath) {
    const card = containerEl.createDiv({ cls: "pdftion-payment-card" });
    const title = card.createDiv({ cls: "pdftion-payment-title" });
    title.textContent = label || uiText("\u6536\u6B3E\u7801", "Payment QR");
    const src = this.getPaymentImageSource(rawPath);
    if (src) {
      const image = card.createEl("img", {
        attr: {
          alt: title.textContent,
          loading: "lazy",
          src
        },
        cls: "pdftion-payment-image"
      });
      image.addEventListener("error", () => {
        image.remove();
        this.renderPaymentPlaceholder(card, uiText("\u56FE\u7247\u65E0\u6CD5\u52A0\u8F7D", "Image could not be loaded"));
      });
      return;
    }
    this.renderPaymentPlaceholder(card, uiText("\u672A\u914D\u7F6E\u56FE\u7247", "No image configured"));
  }
  renderPaymentPlaceholder(card, message) {
    const placeholder = card.createDiv({ cls: "pdftion-payment-placeholder" });
    (0, import_obsidian.setIcon)(placeholder, "qr-code");
    placeholder.createSpan({ text: message });
  }
  getPaymentImageSource(rawPath) {
    const path = rawPath.trim();
    if (!path) {
      return null;
    }
    if (path === "builtin:alipay") {
      return this.plugin.app.vault.adapter.getResourcePath(`${this.plugin.app.vault.configDir}/${BUILTIN_ALIPAY_QR_PATH}`);
    }
    if (path === "builtin:binance") {
      return this.plugin.app.vault.adapter.getResourcePath(`${this.plugin.app.vault.configDir}/${BUILTIN_BINANCE_QR_PATH}`);
    }
    if (/^(https?:|data:image\/)/i.test(path)) {
      return path;
    }
    if (/^[a-z]:[\\/]/i.test(path)) {
      return `file:///${path.replace(/\\/g, "/")}`;
    }
    return this.plugin.app.vault.adapter.getResourcePath(path.replace(/\\/g, "/").replace(/^\/+/, ""));
  }
};
function normalizeSettings(data) {
  const record = data && typeof data === "object" ? data : {};
  return {
    autoEnableAnnotationToolbar: typeof record.autoEnableAnnotationToolbar === "boolean" ? record.autoEnableAnnotationToolbar : DEFAULT_SETTINGS.autoEnableAnnotationToolbar,
    boostPdfMenus: typeof record.boostPdfMenus === "boolean" ? record.boostPdfMenus : DEFAULT_SETTINGS.boostPdfMenus,
    language: normalizePdftionLanguageSetting(record.language),
    lastCropBottom: normalizeNumberSetting(record.lastCropBottom, DEFAULT_SETTINGS.lastCropBottom, 0, 0.45, 1e-3),
    lastCropLeft: normalizeNumberSetting(record.lastCropLeft, DEFAULT_SETTINGS.lastCropLeft, 0, 0.45, 1e-3),
    lastCropRight: normalizeNumberSetting(record.lastCropRight, DEFAULT_SETTINGS.lastCropRight, 0, 0.45, 1e-3),
    lastCropTop: normalizeNumberSetting(record.lastCropTop, DEFAULT_SETTINGS.lastCropTop, 0, 0.45, 1e-3),
    nativeTextSelectionMenuAttachedToText: typeof record.nativeTextSelectionMenuAttachedToText === "boolean" ? record.nativeTextSelectionMenuAttachedToText : DEFAULT_SETTINGS.nativeTextSelectionMenuAttachedToText,
    openBurnedPdfAfterExport: typeof record.openBurnedPdfAfterExport === "boolean" ? record.openBurnedPdfAfterExport : DEFAULT_SETTINGS.openBurnedPdfAfterExport,
    paymentQrOneLabel: normalizeStringSetting(record.paymentQrOneLabel, DEFAULT_SETTINGS.paymentQrOneLabel),
    paymentQrOnePath: normalizeStringSetting(record.paymentQrOnePath, DEFAULT_SETTINGS.paymentQrOnePath),
    paymentQrTwoLabel: normalizeStringSetting(record.paymentQrTwoLabel, DEFAULT_SETTINGS.paymentQrTwoLabel),
    paymentQrTwoPath: normalizeStringSetting(record.paymentQrTwoPath, DEFAULT_SETTINGS.paymentQrTwoPath),
    eraserWidth: normalizeNumberSetting(record.eraserWidth, DEFAULT_SETTINGS.eraserWidth, 2, 120, 0.5),
    highlightColor: normalizeColorSetting(record.highlightColor, DEFAULT_SETTINGS.highlightColor),
    highlightOpacity: normalizeNumberSetting(record.highlightOpacity, DEFAULT_SETTINGS.highlightOpacity, 0.05, 1, 0.05),
    highlightWidth: normalizeNumberSetting(record.highlightWidth, DEFAULT_SETTINGS.highlightWidth, 2, 96, 0.5),
    nativeTextHighlightColor: normalizeColorSetting(record.nativeTextHighlightColor, DEFAULT_SETTINGS.nativeTextHighlightColor),
    nativeTextSelectionAction: record.nativeTextSelectionAction === "copy" ? "copy" : "highlight",
    penColor: normalizeColorSetting(record.penColor, DEFAULT_SETTINGS.penColor),
    penOpacity: normalizeNumberSetting(record.penOpacity, DEFAULT_SETTINGS.penOpacity, 0.05, 1, 0.05),
    penWidth: normalizeNumberSetting(record.penWidth, DEFAULT_SETTINGS.penWidth, 0.5, 72, 0.5),
    textColor: normalizeColorSetting(record.textColor, DEFAULT_SETTINGS.textColor),
    textFontFamily: normalizeFontFamilySetting(record.textFontFamily, DEFAULT_SETTINGS.textFontFamily),
    textFontSize: normalizeNumberSetting(record.textFontSize, DEFAULT_SETTINGS.textFontSize, 6, 120, 1),
    textOpacity: normalizeNumberSetting(record.textOpacity, DEFAULT_SETTINGS.textOpacity, 0.05, 1, 0.05),
    toolbarButtonSize: normalizeNumberSetting(record.toolbarButtonSize, DEFAULT_SETTINGS.toolbarButtonSize, 18, 44),
    toolbarMaxWidth: normalizeNumberSetting(record.toolbarMaxWidth, DEFAULT_SETTINGS.toolbarMaxWidth, 360, 1200),
    toolbarTopOffset: normalizeNumberSetting(record.toolbarTopOffset, DEFAULT_SETTINGS.toolbarTopOffset, 0, 160)
  };
}
function normalizePdftionLanguageSetting(value) {
  if (value === "auto") {
    return "auto";
  }
  return typeof value === "string" ? normalizePdftionLocale(value) ?? DEFAULT_SETTINGS.language : DEFAULT_SETTINGS.language;
}
function normalizeNumberSetting(value, fallback, min, max, step = 1) {
  const numeric = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numeric)) {
    return fallback;
  }
  return clamp(Math.round(numeric / step) * step, min, max);
}
function normalizeStringSetting(value, fallback) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}
function normalizeColorSetting(value, fallback) {
  return typeof value === "string" ? normalizeHexColor(value) : fallback;
}
function normalizeFontFamilySetting(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }
  return TEXT_FONTS.some((font) => font.value === value) ? value : fallback;
}
var InkSession = class {
  constructor(plugin, leaf, file, rootEl) {
    this.plugin = plugin;
    this.leaf = leaf;
    this.file = file;
    this.rootEl = rootEl;
    this.applyToolSettingsFromPlugin();
    this.rootEl.classList.add("pdftion-root");
    this.injectButton();
    void this.loadEditableAnnotations();
    if (this.plugin.settings.autoEnableAnnotationToolbar) {
      window.setTimeout(() => this.setEnabled(true, { notice: false }), 0);
    }
    this.scanPages();
    this.mutationObserver = new MutationObserver((mutations) => {
      if (this.shouldScanForMutations(mutations)) {
        if (this.enabled) {
          this.scheduleExternalInkLayerUpdate();
          this.scheduleEditableInkPrepare(320, true);
        }
        this.scheduleQuietScan();
      }
    });
    this.mutationObserver.observe(this.rootEl, {
      childList: true,
      subtree: true
    });
    activeDocument.addEventListener("selectionchange", () => this.scheduleNativeTextSelectionMenu(), {
      signal: this.nativeTextSelectionAbort.signal
    });
    this.rootEl.addEventListener("pointerup", () => this.scheduleNativeTextSelectionMenu(20), {
      signal: this.nativeTextSelectionAbort.signal
    });
    this.rootEl.addEventListener("keyup", () => this.scheduleNativeTextSelectionMenu(20), {
      signal: this.nativeTextSelectionAbort.signal
    });
    this.rootEl.addEventListener("scroll", () => {
      this.scheduleScanPages(90);
      this.scheduleEditableInkPrepare(180);
      this.scheduleVisibleOverlayRefresh();
    }, {
      capture: true,
      passive: true,
      signal: this.nativeTextSelectionAbort.signal
    });
    activeDocument.addEventListener("scroll", () => {
      this.scheduleScanPages(90);
      this.scheduleEditableInkPrepare(180);
      this.scheduleVisibleOverlayRefresh();
    }, {
      capture: true,
      passive: true,
      signal: this.nativeTextSelectionAbort.signal
    });
    for (const eventName of ["auxclick", "click", "contextmenu", "dblclick", "focusin", "mousedown", "mousemove", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerup", "touchstart"]) {
      this.rootEl.addEventListener(eventName, (event) => this.blockNativePdfAnnotationEvent(event), {
        capture: true,
        signal: this.nativeTextSelectionAbort.signal
      });
      activeDocument.addEventListener(eventName, (event) => this.blockNativePdfAnnotationEvent(event), {
        capture: true,
        signal: this.nativeTextSelectionAbort.signal
      });
    }
  }
  plugin;
  leaf;
  file;
  rootEl;
  cropByPage = /* @__PURE__ */ new Map();
  button = null;
  currentCover = null;
  currentStroke = null;
  currentStrokeStartedAt = 0;
  currentStrokeMoved = false;
  currentStrokeHadTouchMove = false;
  cropPreview = null;
  dirty = false;
  destroyed = false;
  enabled = false;
  imageCache = /* @__PURE__ */ new Map();
  imageMenu = null;
  layerMenu = null;
  layerLongPressTimer = null;
  layerLongPressStart = null;
  layerLongPressTriggered = false;
  textMenu = null;
  shareMenu = null;
  mutationObserver;
  hiddenNativeAnnotationStyles = /* @__PURE__ */ new Map();
  pendingNativeInkHidePages = /* @__PURE__ */ new Set();
  detachedInkEditPages = /* @__PURE__ */ new Set();
  overlays = /* @__PURE__ */ new Map();
  activeTouchId = null;
  annotationLoadToken = 0;
  annotationLoadPromise = null;
  checkpointPending = false;
  checkpointing = false;
  conversionInProgress = false;
  exportRenderFallbackPages = /* @__PURE__ */ new Set();
  preparingPdfInkForEditing = false;
  pdfInkPreparationComplete = false;
  // Pages whose detach rewrite is still awaiting the native view reload: the
  // native PDF still paints the ink here, so the overlay must NOT draw its
  // imported copy yet, otherwise both layers show at once.
  inkDetachReloadPendingPages = /* @__PURE__ */ new Set();
  // Pages whose ink was just committed back into the PDF: keep drawing the
  // overlay copy until the reloaded native view actually paints the ink, then
  // hand display ownership back to the PDF (prevents a persistent duplicate).
  inkCommitSettlePages = /* @__PURE__ */ new Set();
  pendingEditableInkPrepareAfterSave = false;
  pendingSaveAfterCurrentSave = false;
  finishingPdfInkEditing = null;
  palette = null;
  penColor = DEFAULT_SETTINGS.penColor;
  penOpacity = DEFAULT_SETTINGS.penOpacity;
  penWidth = DEFAULT_SETTINGS.penWidth;
  nativeTextEditor = null;
  nativeTextEditorCover = null;
  eraserWidth = DEFAULT_SETTINGS.eraserWidth;
  textColor = DEFAULT_SETTINGS.textColor;
  textFontFamily = DEFAULT_SETTINGS.textFontFamily;
  textFontSize = DEFAULT_SETTINGS.textFontSize;
  textOpacity = DEFAULT_SETTINGS.textOpacity;
  coverHistory = [];
  loadedAnnotationState = false;
  redoStack = [];
  undoStack = [];
  redoHistoryStack = [];
  saveTimer = null;
  settingsSaveTimer = null;
  scanTimer = null;
  healthTimer = null;
  externalInkLayerFrame = null;
  visibleOverlayRefreshFrame = null;
  zoomGeometryTimer = null;
  inkPrepareTimer = null;
  inkPrepareTimerForce = false;
  inkPrepareRun = null;
  annotationStateTrusted = false;
  preparingIndicator = false;
  preparingDepth = 0;
  nativeAnnotationPopupTimer = null;
  nativePopupHideTimers = /* @__PURE__ */ new Set();
  nativePopupSuppressUntil = 0;
  recentInkGroup = null;
  selectionDrag = null;
  nativeSelection = null;
  nativeInkScannedPages = /* @__PURE__ */ new Set();
  pendingImageCrop = null;
  pageNavigator = null;
  commentManager = null;
  commentPopover = null;
  selectedPageIndexes = /* @__PURE__ */ new Set();
  selectedStrokeIds = /* @__PURE__ */ new Set();
  selectionChangedAt = 0;
  dirtyInkPages = /* @__PURE__ */ new Set();
  deletedExternalInkIds = /* @__PURE__ */ new Set();
  deletedPdftionInkIds = /* @__PURE__ */ new Set();
  nativeTextSelectionMenu = null;
  nativeTextSelectionInfo = null;
  nativeTextAutoHighlight = null;
  nativeTextSelectionTimer = null;
  nativeTextSelectionAbort = new AbortController();
  saving = false;
  strokeHistory = [];
  textHistory = [];
  imageHistory = [];
  toolbar = null;
  toolbarHost = null;
  tool = "pen";
  lastTap = null;
  savedInkIsBurnedIntoPdf = false;
  savedTextIsBurnedIntoPdf = false;
  touchGestureCooldownUntil = 0;
  touchScroll = null;
  highlightColor = DEFAULT_SETTINGS.highlightColor;
  highlightOpacity = DEFAULT_SETTINGS.highlightOpacity;
  highlightWidth = DEFAULT_SETTINGS.highlightWidth;
  nativeTextHighlightColor = DEFAULT_SETTINGS.nativeTextHighlightColor;
  nativeTextSelectionAction = DEFAULT_SETTINGS.nativeTextSelectionAction;
  destroy(commitInk = true) {
    if (!commitInk) {
      this.checkpointSoon();
    } else if (this.detachedInkEditPages.size > 0) {
      const file = this.file;
      const elements = this.getEditableElements().map(cloneElement);
      const pages = new Set(this.detachedInkEditPages);
      void this.plugin.finishInkEditTransaction(file, elements, pages);
    } else if (this.detachedInkEditPages.size === 0) {
      this.flushSoon();
    }
    this.destroyed = true;
    this.enabled = false;
    this.restoreHiddenNativeInkAnnotations();
    this.clearAutoSaveTimer();
    this.clearToolSettingsSaveTimer();
    this.clearScanTimer();
    this.clearEditableInkPrepareTimer();
    this.clearZoomGeometryTimer();
    if (this.externalInkLayerFrame !== null) {
      window.cancelAnimationFrame(this.externalInkLayerFrame);
      this.externalInkLayerFrame = null;
    }
    if (this.visibleOverlayRefreshFrame !== null) {
      window.cancelAnimationFrame(this.visibleOverlayRefreshFrame);
      this.visibleOverlayRefreshFrame = null;
    }
    this.clearNativePopupHideTimers();
    this.stopOverlayHealthCheck();
    this.stopNativeAnnotationPopupSuppressor();
    this.mutationObserver.disconnect();
    this.button?.remove();
    this.closeNativeTextEditor(false);
    this.palette?.remove();
    this.hideNativeTextSelectionMenu();
    this.clearNativeTextSelectionTimer();
    this.nativeTextSelectionAbort.abort();
    this.pageNavigator?.remove();
    this.commentManager?.remove();
    this.commentPopover?.remove();
    this.imageMenu?.remove();
    this.clearLayerLongPress();
    this.layerMenu?.remove();
    this.textMenu?.remove();
    this.shareMenu?.remove();
    this.toolbar?.remove();
    this.toolbarHost?.remove();
    this.rootEl.querySelector(".pdftion-inline-actions")?.remove();
    this.toolbarHost = null;
    for (const overlay of this.overlays.values()) {
      overlay.abort.abort();
      overlay.resizeObserver?.disconnect();
      if (overlay.redrawFrame !== null && overlay.redrawFrame !== void 0) {
        window.cancelAnimationFrame(overlay.redrawFrame);
      }
      if (overlay.geometryFrame !== null && overlay.geometryFrame !== void 0) {
        window.cancelAnimationFrame(overlay.geometryFrame);
      }
      if (overlay.resizeTimer !== null && overlay.resizeTimer !== void 0) {
        window.clearTimeout(overlay.resizeTimer);
      }
      overlay.canvas.remove();
      overlay.staticCanvas.remove();
      overlay.pageEl.classList.remove("pdftion-page", "pdftion-hide-native-ink-layer");
    }
    this.overlays.clear();
    this.imageCache.clear();
    this.pendingImageCrop = null;
    this.rootEl.classList.remove("pdftion-enabled", "pdftion-root", "pdftion-selecting");
    this.plugin.refreshGlobalEditingClass();
  }
  isEnabled() {
    return this.enabled;
  }
  isForLeaf(leaf) {
    return leaf === this.leaf;
  }
  updateFile(file) {
    if (file.path === this.file.path) {
      return;
    }
    const previousFile = this.file;
    const previousPages = new Set(this.detachedInkEditPages);
    const previousElements = this.getEditableElements().map(cloneElement);
    if (previousPages.size > 0) {
      void this.plugin.finishInkEditTransaction(previousFile, previousElements, previousPages);
    } else {
      this.flushSoon();
    }
    this.restoreHiddenNativeInkAnnotations();
    this.closeNativeTextEditor(false);
    this.clearOverlayCanvases();
    this.file = file;
    this.clearAutoSaveTimer();
    this.clearEditableInkPrepareTimer();
    this.clearCurrentStroke();
    this.currentCover = null;
    this.recentInkGroup = null;
    this.activeTouchId = null;
    this.touchScroll = null;
    this.dirty = false;
    this.cropByPage.clear();
    this.cropPreview = null;
    this.imageCache.clear();
    this.pendingNativeInkHidePages.clear();
    this.dirtyInkPages.clear();
    this.deletedExternalInkIds.clear();
    this.deletedPdftionInkIds.clear();
    this.redoStack = [];
    this.undoStack = [];
    this.redoHistoryStack = [];
    this.selectionDrag = null;
    this.clearEditableSelection();
    this.hideNativeTextSelectionMenu();
    this.pendingImageCrop = null;
    this.selectedPageIndexes.clear();
    this.savedInkIsBurnedIntoPdf = false;
    this.savedTextIsBurnedIntoPdf = false;
    this.pdfInkPreparationComplete = false;
    this.lastTap = null;
    this.nativeTextAutoHighlight = null;
    this.strokeHistory = [];
    this.textHistory = [];
    this.coverHistory = [];
    this.imageHistory = [];
    this.nativeInkScannedPages.clear();
    this.clearLayerLongPress();
    this.layerMenu?.remove();
    this.layerMenu = null;
    this.textMenu?.remove();
    this.textMenu = null;
    this.commentManager?.remove();
    this.commentManager = null;
    this.commentPopover?.remove();
    this.commentPopover = null;
    this.pageNavigator?.remove();
    this.pageNavigator = null;
    this.detachedInkEditPages.clear();
    this.loadedAnnotationState = false;
    this.annotationLoadToken += 1;
    this.annotationLoadPromise = null;
    void this.loadEditableAnnotations();
    this.redrawAll();
  }
  clearOverlayCanvases() {
    for (const overlay of this.overlays.values()) {
      overlay.staticCanvas.width = overlay.staticCanvas.width;
      overlay.canvas.width = overlay.canvas.width;
    }
  }
  async loadEditableAnnotations() {
    if (this.loadedAnnotationState) {
      return;
    }
    if (this.annotationLoadPromise) {
      return this.annotationLoadPromise;
    }
    this.annotationLoadPromise = this.loadEditableAnnotationsInner().finally(() => {
      this.annotationLoadPromise = null;
    });
    return this.annotationLoadPromise;
  }
  async loadEditableAnnotationsInner() {
    if (this.loadedAnnotationState) {
      return;
    }
    const filePath = this.file.path;
    const loadToken = ++this.annotationLoadToken;
    const state = await this.plugin.loadAnnotationState(this.file);
    if (loadToken !== this.annotationLoadToken || this.file.path !== filePath) {
      return;
    }
    const pdfInkStrokes = [];
    const loadedElements = [
      ...state?.elements ?? [],
      ...pdfInkStrokes.filter((stroke) => !(state?.elements ?? []).some((element) => element.id === stroke.id || element.kind === "stroke" && isSamePdfInkStrokeCandidate(element, stroke)))
    ].map((element) => {
      if (element.kind !== "stroke") {
        return markElementSaved(element);
      }
      const pdfStroke = pdfInkStrokes.find((stroke2) => stroke2.id === element.id);
      const pdfPoints = element.pdfPoints ?? pdfStroke?.points;
      const matchesPdfStroke = Boolean(pdfStroke && pdfPoints && inkPointsApproximatelyEqual(element.points, pdfPoints));
      const stroke = {
        ...element,
        externalDirty: matchesPdfStroke ? false : element.externalDirty,
        pdfPoints: pdfPoints?.map((point) => ({ ...point })),
        pdfSaved: matchesPdfStroke ? true : element.pdfSaved ?? (pdfStroke ? true : void 0),
        source: element.source ?? pdfStroke?.source
      };
      return markElementSaved(stroke);
    });
    const elements = dedupeInkElements(loadedElements);
    this.strokeHistory = elements.filter((element) => element.kind === "stroke");
    this.textHistory = elements.filter((element) => element.kind === "text");
    this.coverHistory = elements.filter((element) => element.kind === "cover");
    this.imageHistory = elements.filter((element) => element.kind === "image");
    const transactionPages = await this.plugin.getInkEditTransactionPages(this.file);
    if (loadToken !== this.annotationLoadToken || this.file.path !== filePath) {
      return;
    }
    this.detachedInkEditPages = transactionPages;
    this.savedInkIsBurnedIntoPdf = state !== null && !state.overlayAnnotationsOnly && this.strokeHistory.some((stroke) => !Array.isArray(stroke.pdfPoints));
    this.savedTextIsBurnedIntoPdf = state !== null && !state.overlayAnnotationsOnly && !state.overlayTextOnly && this.textHistory.length > 0;
    if (this.savedInkIsBurnedIntoPdf || this.savedTextIsBurnedIntoPdf) {
      this.dirty = true;
      this.scheduleAutoSave(250);
    }
    this.annotationStateTrusted = state !== null;
    this.loadedAnnotationState = true;
    this.redrawAll();
    this.refreshCommentManager();
  }
  toggle() {
    this.setEnabled(!this.enabled);
  }
  scanPages() {
    this.clearScanTimer();
    if (this.isInteracting()) {
      this.scheduleScanPages(700);
      return;
    }
    this.injectButton();
    this.cleanupDetachedOverlays();
    const pageEls = this.findPageElements();
    const viewportCenter = activeWindow.innerHeight / 2;
    const retainedPages = pageEls.map((pageEl, index) => {
      const rect = pageEl.getBoundingClientRect();
      return { distance: Math.abs((rect.top + rect.bottom) / 2 - viewportCenter), index, pageEl };
    }).filter((item) => this.isPageElementNearViewport(item.pageEl)).sort((a, b) => a.distance - b.distance).slice(0, 12);
    const retainedElements = new Set(retainedPages.map((item) => item.pageEl));
    for (const item of retainedPages) {
      this.ensureOverlay(item.pageEl, item.index);
    }
    this.cleanupUnretainedOverlays(retainedElements);
    if (this.enabled) {
      this.rememberNativeInkHidePagesForCurrentPages();
    }
    this.redrawAll();
    this.scheduleEditableInkPrepare(120);
  }
  scheduleQuietScan() {
    this.scheduleScanPages(this.enabled ? 320 : 120);
  }
  scheduleScanPages(delay = 250) {
    this.clearScanTimer();
    this.scanTimer = window.setTimeout(() => {
      this.scanTimer = null;
      this.scanPages();
    }, delay);
  }
  shouldScanForMutations(mutations) {
    if (this.isInteracting()) {
      return false;
    }
    return mutations.some((mutation) => {
      for (const node of Array.from(mutation.addedNodes)) {
        if (this.isRelevantPdfMutationNode(node)) {
          return true;
        }
      }
      for (const node of Array.from(mutation.removedNodes)) {
        if (this.isRelevantPdfMutationNode(node)) {
          return true;
        }
      }
      return false;
    });
  }
  isRelevantPdfMutationNode(node) {
    if (!node.instanceOf(HTMLElement)) {
      return false;
    }
    if (node.closest(".pdftion-root") && node.classList.contains("pdftion-canvas")) {
      return false;
    }
    if (node.closest(".pdftion-toolbar-host, .pdftion-toolbar, .pdftion-palette-panel, .pdftion-image-menu, .pdftion-text-menu, .pdftion-share-menu, .pdftion-comment-popover, .pdftion-embed-actions, .pdftion-inline-actions")) {
      return false;
    }
    if (node.classList.contains("page") || node.matches("canvas, .pdfViewer, .pdf-viewer, .pdf-container, .view-actions, .view-header, .file-embed-title, .embed-title")) {
      return true;
    }
    return node.querySelector(".page, canvas, .pdfViewer, .pdf-viewer, .pdf-container, .view-actions, .view-header, .file-embed-title, .embed-title") !== null;
  }
  isInteracting() {
    return this.currentStroke !== null || this.activeTouchId !== null || this.selectionDrag !== null || this.touchScroll !== null;
  }
  injectButton() {
    if (this.button?.isConnected) {
      this.moveButtonIntoHostIfAvailable(this.button);
      return;
    }
    const existing = this.rootEl.querySelector(".pdftion-button");
    if (existing) {
      this.button = existing;
      this.moveButtonIntoHostIfAvailable(existing);
      return;
    }
    const button = createIconButton("pen-line", uiText("PDF \u6279\u6CE8", "PDF annotation"));
    button.classList.add("pdftion-button");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggle();
    });
    const actions = this.findButtonHost();
    if (actions) {
      this.placeButtonInHost(actions, button);
    } else {
      (this.ensureInlineEmbedHost() ?? this.rootEl).appendChild(button);
    }
    this.button = button;
    this.updateButtonState();
  }
  moveButtonIntoHostIfAvailable(button) {
    const actions = this.findButtonHost();
    if (!actions) {
      return;
    }
    const oldHost = button.closest(".pdftion-embed-actions");
    this.placeButtonInHost(actions, button);
    if (oldHost && oldHost.childElementCount === 0) {
      oldHost.remove();
    }
  }
  placeButtonInHost(host, button) {
    if (button.parentElement === host && host.firstElementChild === button) {
      return;
    }
    const zoomOut = this.findZoomOutButton(host);
    if (zoomOut?.parentElement === host) {
      host.insertBefore(button, zoomOut);
      return;
    }
    host.prepend(button);
  }
  findZoomOutButton(host) {
    for (const item of Array.from(host.querySelectorAll("button, .clickable-icon, [aria-label], [title]"))) {
      if (item.classList.contains("pdftion-button")) {
        continue;
      }
      const label = `${item.getAttribute("aria-label") ?? ""} ${item.getAttribute("title") ?? ""} ${item.textContent ?? ""}`.toLowerCase();
      if (label.includes("zoom out") || label.includes("\u7F29\u5C0F") || label.includes("\u653E\u5C0F") || label.includes("zoom-out")) {
        return item;
      }
    }
    return null;
  }
  findButtonHost() {
    const view = this.leaf.view;
    const leafContent = this.rootEl.closest(".workspace-leaf-content") ?? view.containerEl ?? view.contentEl ?? this.rootEl;
    const leafEl = this.rootEl.closest(".workspace-leaf") ?? leafContent;
    const pdfHost = this.rootEl.querySelector(".pdf-toolbar-actions") ?? this.rootEl.querySelector(".pdf-toolbar-items") ?? this.rootEl.querySelector(".pdf-viewer-toolbar") ?? this.rootEl.querySelector(".pdf-toolbar") ?? this.rootEl.querySelector(".pdf-toolbar-container") ?? this.rootEl.querySelector(".pdf-embed-toolbar") ?? leafContent.querySelector(".pdf-toolbar-actions") ?? leafContent.querySelector(".pdf-toolbar-items") ?? leafContent.querySelector(".pdf-viewer-toolbar") ?? leafContent.querySelector(".pdf-toolbar") ?? leafContent.querySelector(".pdf-toolbar-container") ?? leafContent.querySelector(".pdf-embed-toolbar") ?? leafEl.querySelector(".pdf-toolbar-actions") ?? leafEl.querySelector(".pdf-toolbar-items") ?? leafEl.querySelector(".pdf-viewer-toolbar") ?? leafEl.querySelector(".pdf-toolbar") ?? leafEl.querySelector(".pdf-toolbar-container") ?? leafEl.querySelector(".pdf-embed-toolbar");
    if (pdfHost) {
      return pdfHost;
    }
    const officialHost = this.rootEl.querySelector(".view-actions") ?? leafContent.querySelector(".view-actions") ?? leafEl.querySelector(".view-actions");
    if (officialHost) {
      return officialHost;
    }
    if (this.isEmbeddedPdfSurface()) {
      if (this.isSpacedRepetitionSurface()) {
        return this.ensureInlineEmbedHost();
      }
      return this.rootEl.querySelector(".file-embed-title .file-embed-title-inner") ?? this.rootEl.querySelector(".file-embed-title") ?? this.rootEl.querySelector(".embed-title .embed-title-inner") ?? this.rootEl.querySelector(".embed-title") ?? this.findSpacedRepetitionHost() ?? this.ensureInlineEmbedHost();
    }
    return null;
  }
  isEmbeddedPdfSurface() {
    return this.rootEl.matches(".internal-embed, .media-embed, .file-embed, .markdown-embed") || this.rootEl.closest(".internal-embed, .media-embed, .file-embed, .markdown-embed") !== null || this.rootEl.closest(".sr-modal, .sr-card, .spaced-repetition, .spaced-repetition-modal, .review-modal, .review-card") !== null;
  }
  isSpacedRepetitionSurface() {
    return this.rootEl.closest(".sr-modal, .sr-card, .spaced-repetition, .spaced-repetition-modal, .review-modal, .review-card") !== null;
  }
  findSpacedRepetitionHost() {
    const srRoot = this.rootEl.closest(".sr-modal, .sr-card, .spaced-repetition, .spaced-repetition-modal, .review-modal, .review-card");
    if (!srRoot) {
      return null;
    }
    return srRoot.querySelector(".file-embed-title .file-embed-title-inner") ?? srRoot.querySelector(".file-embed-title") ?? srRoot.querySelector(".embed-title .embed-title-inner") ?? srRoot.querySelector(".embed-title") ?? this.ensureInlineEmbedHost();
  }
  ensureInlineEmbedHost(create = true) {
    const existing = this.rootEl.querySelector(".pdftion-inline-actions");
    if (existing || !create) {
      return existing;
    }
    const host = activeDocument.createElement("div");
    host.className = this.isSpacedRepetitionSurface() ? "pdftion-inline-actions pdftion-sr-inline-actions" : "pdftion-inline-actions";
    const title = this.rootEl.querySelector(".file-embed-title, .embed-title, .markdown-embed-title") ?? this.rootEl.firstElementChild;
    if (title?.parentElement) {
      title.insertAdjacentElement("afterend", host);
    } else {
      this.rootEl.prepend(host);
    }
    return host;
  }
  findPageElements() {
    const candidates = Array.from(
      this.rootEl.querySelectorAll(
        ".pdfViewer .page, .pdf-viewer .page, .pdf-container .page, .page[data-page-number]"
      )
    );
    const unique = /* @__PURE__ */ new Set();
    const visibleCandidates = candidates.filter((candidate) => {
      if (unique.has(candidate)) {
        return false;
      }
      unique.add(candidate);
      return candidate.clientWidth > 0 && candidate.clientHeight > 0;
    });
    if (visibleCandidates.length === 0) {
      const canvas = this.rootEl.querySelector(
        ".notedraw-static-canvas:not(.pdftion-canvas), canvas:not(.pdftion-canvas)"
      );
      const stage = canvas?.parentElement;
      if (canvas && stage && canvas.width > 1 && canvas.height > 1 && stage.clientWidth > 0 && stage.clientHeight > 0) {
        return [stage];
      }
    }
    return visibleCandidates;
  }
  ensureOverlay(pageEl, fallbackIndex) {
    const pageIndex = getPageIndex(pageEl, fallbackIndex);
    let overlay = this.overlays.get(pageEl);
    if (!overlay) {
      const staticCanvas = activeDocument.createElement("canvas");
      staticCanvas.className = "pdftion-canvas pdftion-static-canvas";
      const canvas = activeDocument.createElement("canvas");
      canvas.className = "pdftion-canvas pdftion-live-canvas";
      const abort = new AbortController();
      const newOverlay = {
        abort,
        canvas,
        cssHeight: 0,
        cssWidth: 0,
        dpr: 1,
        geometryFrame: null,
        observedCanvas: null,
        pageEl,
        pageIndex,
        redrawFrame: null,
        redrawPreviewStroke: null,
        resizeObserver: null,
        resizeTimer: null,
        staticCanvas
      };
      canvas.addEventListener("pointerdown", (event) => this.onPointerDown(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("dblclick", (event) => this.onDoubleClick(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("pointermove", (event) => this.onPointerMove(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("pointerup", (event) => this.onPointerUp(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("pointercancel", (event) => this.onPointerUp(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("lostpointercapture", (event) => this.onPointerUp(event, newOverlay), { signal: abort.signal });
      canvas.addEventListener("touchstart", (event) => this.onTouchStart(event, newOverlay), {
        passive: false,
        signal: abort.signal
      });
      canvas.addEventListener("touchmove", (event) => this.onTouchMove(event, newOverlay), {
        passive: false,
        signal: abort.signal
      });
      canvas.addEventListener("touchend", (event) => this.onTouchEnd(event, newOverlay), {
        passive: false,
        signal: abort.signal
      });
      canvas.addEventListener("touchcancel", (event) => this.onTouchEnd(event, newOverlay), {
        passive: false,
        signal: abort.signal
      });
      pageEl.classList.add("pdftion-page");
      pageEl.appendChild(staticCanvas);
      pageEl.appendChild(canvas);
      overlay = newOverlay;
      this.overlays.set(pageEl, overlay);
    }
    overlay.pageIndex = pageIndex;
    this.observeOverlayResize(overlay);
    if (this.isOverlayNearViewport(overlay)) {
      this.resizeOverlay(overlay);
    }
  }
  observeOverlayResize(overlay) {
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    if (!overlay.resizeObserver) {
      overlay.resizeObserver = new ResizeObserver(() => this.scheduleOverlayResize(overlay));
      overlay.resizeObserver.observe(overlay.pageEl);
    }
    const visibleCanvas = overlay.pageEl.querySelector("canvas:not(.pdftion-canvas)");
    if (overlay.observedCanvas !== visibleCanvas) {
      if (overlay.observedCanvas) {
        overlay.resizeObserver.unobserve(overlay.observedCanvas);
      }
      if (visibleCanvas) {
        overlay.resizeObserver.observe(visibleCanvas);
      }
      overlay.observedCanvas = visibleCanvas;
    }
  }
  measureOverlayGeometry(overlay) {
    const visibleCanvas = overlay.pageEl.querySelector("canvas:not(.pdftion-canvas)");
    const pageRect = overlay.pageEl.getBoundingClientRect();
    const visibleRect = visibleCanvas?.getBoundingClientRect() ?? pageRect;
    const pageLocalWidth = overlay.pageEl.offsetWidth || overlay.pageEl.clientWidth || pageRect.width;
    const pageLocalHeight = overlay.pageEl.offsetHeight || overlay.pageEl.clientHeight || pageRect.height;
    const canvasLocalWidth = visibleCanvas?.clientWidth || visibleCanvas?.offsetWidth || 0;
    const canvasLocalHeight = visibleCanvas?.clientHeight || visibleCanvas?.offsetHeight || 0;
    const scaleX = canvasLocalWidth > 0 ? visibleRect.width / canvasLocalWidth : pageRect.width > 0 && pageLocalWidth > 0 ? pageRect.width / pageLocalWidth : 1;
    const scaleY = canvasLocalHeight > 0 ? visibleRect.height / canvasLocalHeight : pageRect.height > 0 && pageLocalHeight > 0 ? pageRect.height / pageLocalHeight : 1;
    const pageStyle = activeWindow.getComputedStyle(overlay.pageEl);
    const borderLeft = Number.parseFloat(pageStyle.borderLeftWidth) || 0;
    const borderTop = Number.parseFloat(pageStyle.borderTopWidth) || 0;
    const cssWidth = canvasLocalWidth > 0 ? canvasLocalWidth : visibleRect.width / Math.max(0.01, scaleX);
    const cssHeight = canvasLocalHeight > 0 ? canvasLocalHeight : visibleRect.height / Math.max(0.01, scaleY);
    if (cssWidth <= 0 || cssHeight <= 0) {
      return null;
    }
    return {
      cssHeight,
      cssWidth,
      left: Math.max(0, (visibleRect.left - pageRect.left) / Math.max(0.01, scaleX) - borderLeft),
      top: Math.max(0, (visibleRect.top - pageRect.top) / Math.max(0.01, scaleY) - borderTop)
    };
  }
  applyOverlayCssGeometry(overlay, geometry) {
    const styles = {
      height: `${geometry.cssHeight}px`,
      left: `${geometry.left}px`,
      top: `${geometry.top}px`,
      width: `${geometry.cssWidth}px`
    };
    overlay.staticCanvas.setCssStyles(styles);
    overlay.canvas.setCssStyles(styles);
  }
  syncOverlayCssGeometry(overlay) {
    this.ensureOverlayCanvasMounted(overlay);
    const geometry = this.measureOverlayGeometry(overlay);
    if (geometry) {
      this.applyOverlayCssGeometry(overlay, geometry);
    }
    return geometry;
  }
  scheduleOverlayResize(overlay, delay = PDF_ZOOM_SETTLE_DELAY_MS) {
    if (!this.isOverlayNearViewport(overlay)) {
      if (overlay.resizeTimer !== null && overlay.resizeTimer !== void 0) {
        window.clearTimeout(overlay.resizeTimer);
        overlay.resizeTimer = null;
      }
      return;
    }
    if (overlay.geometryFrame === null || overlay.geometryFrame === void 0) {
      overlay.geometryFrame = window.requestAnimationFrame(() => {
        overlay.geometryFrame = null;
        if (overlay.pageEl.isConnected) {
          this.syncOverlayCssGeometry(overlay);
        }
      });
    }
    if (overlay.resizeTimer !== null && overlay.resizeTimer !== void 0) {
      window.clearTimeout(overlay.resizeTimer);
    }
    overlay.resizeTimer = window.setTimeout(() => {
      overlay.resizeTimer = null;
      if (this.currentStroke?.pageIndex === overlay.pageIndex) {
        this.scheduleOverlayResize(overlay, 80);
        return;
      }
      if (this.isOverlayNearViewport(overlay)) {
        this.resizeOverlay(overlay);
      }
    }, delay);
  }
  resizeOverlay(overlay) {
    const geometry = this.syncOverlayCssGeometry(overlay);
    if (!geometry) {
      this.scheduleScanPages(260);
      return false;
    }
    const cssWidth = geometry.cssWidth;
    const cssHeight = geometry.cssHeight;
    const dpr = Math.max(1, Math.min(OVERLAY_MAX_DPR, activeWindow.devicePixelRatio || 1));
    const bitmapWidth = Math.max(1, Math.round(cssWidth * dpr));
    const bitmapHeight = Math.max(1, Math.round(cssHeight * dpr));
    const geometryUnchanged = Math.abs(overlay.cssWidth - cssWidth) < 0.1 && Math.abs(overlay.cssHeight - cssHeight) < 0.1 && overlay.dpr === dpr && overlay.canvas.width === bitmapWidth && overlay.canvas.height === bitmapHeight && overlay.staticCanvas.width === bitmapWidth && overlay.staticCanvas.height === bitmapHeight;
    if (geometryUnchanged) {
      return false;
    }
    overlay.cssWidth = cssWidth;
    overlay.cssHeight = cssHeight;
    overlay.dpr = dpr;
    overlay.staticCanvas.width = bitmapWidth;
    overlay.staticCanvas.height = bitmapHeight;
    overlay.canvas.width = bitmapWidth;
    overlay.canvas.height = bitmapHeight;
    this.redrawOverlay(overlay, this.currentStroke?.pageIndex === overlay.pageIndex ? this.currentStroke : void 0);
    return true;
  }
  refreshOverlayGeometry() {
    for (const overlay of this.overlays.values()) {
      if (this.isOverlayNearViewport(overlay)) {
        this.resizeOverlay(overlay);
      }
    }
  }
  refreshVisibleOverlays() {
    for (const overlay of this.overlays.values()) {
      if (!this.isOverlayNearViewport(overlay)) {
        continue;
      }
      const geometry = this.measureOverlayGeometry(overlay);
      if (!geometry) {
        continue;
      }
      this.applyOverlayCssGeometry(overlay, geometry);
      if (overlay.cssWidth <= 0 || overlay.cssHeight <= 0 || Math.abs(overlay.cssWidth - geometry.cssWidth) >= 0.1 || Math.abs(overlay.cssHeight - geometry.cssHeight) >= 0.1) {
        this.requestOverlayRedraw(overlay);
      }
    }
  }
  scheduleVisibleOverlayRefresh() {
    if (this.visibleOverlayRefreshFrame !== null) {
      return;
    }
    this.visibleOverlayRefreshFrame = window.requestAnimationFrame(() => {
      this.visibleOverlayRefreshFrame = null;
      this.refreshVisibleOverlays();
    });
  }
  scheduleZoomGeometryRefresh(delay = PDF_ZOOM_SETTLE_DELAY_MS) {
    this.clearZoomGeometryTimer();
    this.zoomGeometryTimer = window.setTimeout(() => {
      this.zoomGeometryTimer = null;
      this.refreshOverlayGeometry();
    }, delay);
  }
  clearZoomGeometryTimer() {
    if (this.zoomGeometryTimer !== null) {
      window.clearTimeout(this.zoomGeometryTimer);
      this.zoomGeometryTimer = null;
    }
  }
  getOverlayClientRect(overlay) {
    const visibleCanvas = overlay.pageEl.querySelector("canvas:not(.pdftion-canvas)");
    const visibleRect = visibleCanvas?.getBoundingClientRect();
    if (visibleRect && visibleRect.width > 0 && visibleRect.height > 0) {
      return visibleRect;
    }
    const canvasRect = overlay.canvas.getBoundingClientRect();
    if (canvasRect.width > 0 && canvasRect.height > 0) {
      return canvasRect;
    }
    return overlay.pageEl.getBoundingClientRect();
  }
  getOverlayInputPoint(overlay, clientX, clientY) {
    const rect = this.getOverlayClientRect(overlay);
    return {
      x: clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1),
      y: clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1)
    };
  }
  ensureOverlayCanvasMounted(overlay) {
    if (!this.rootEl.contains(overlay.pageEl)) {
      return false;
    }
    overlay.pageEl.classList.add("pdftion-page");
    let changed = false;
    if (overlay.staticCanvas.parentElement !== overlay.pageEl) {
      overlay.pageEl.appendChild(overlay.staticCanvas);
      changed = true;
    }
    if (overlay.canvas.parentElement !== overlay.pageEl || overlay.pageEl.lastElementChild !== overlay.canvas) {
      overlay.pageEl.appendChild(overlay.canvas);
      changed = true;
    }
    if (overlay.staticCanvas.nextElementSibling !== overlay.canvas) {
      overlay.pageEl.insertBefore(overlay.staticCanvas, overlay.canvas);
      changed = true;
    }
    return changed;
  }
  startOverlayHealthCheck() {
    if (this.healthTimer !== null) {
      return;
    }
    this.healthTimer = window.setInterval(() => this.repairActiveOverlays(), OVERLAY_HEALTH_CHECK_MS);
  }
  stopOverlayHealthCheck() {
    if (this.healthTimer !== null) {
      window.clearInterval(this.healthTimer);
      this.healthTimer = null;
    }
  }
  startNativeAnnotationPopupSuppressor() {
    if (this.nativeAnnotationPopupTimer !== null) {
      return;
    }
    this.nativeAnnotationPopupTimer = window.setInterval(() => this.hideNativePdfAnnotationPopups(), 180);
  }
  stopNativeAnnotationPopupSuppressor() {
    if (this.nativeAnnotationPopupTimer !== null) {
      window.clearInterval(this.nativeAnnotationPopupTimer);
      this.nativeAnnotationPopupTimer = null;
    }
    this.nativePopupSuppressUntil = 0;
    this.clearNativePopupHideTimers();
    this.hideNativePdfAnnotationPopups();
  }
  clearNativePopupHideTimers() {
    for (const timer of this.nativePopupHideTimers) {
      window.clearTimeout(timer);
    }
    this.nativePopupHideTimers.clear();
  }
  suppressNativePdfPopupBurst(duration = NATIVE_POPUP_SUPPRESS_MS) {
    this.clearNativePopupHideTimers();
    this.nativePopupSuppressUntil = Math.max(this.nativePopupSuppressUntil, Date.now() + duration);
    this.hideNativePdfAnnotationPopups();
    for (const delay of [0, 16, 60, 160, 320, duration]) {
      const timer = window.setTimeout(() => {
        this.nativePopupHideTimers.delete(timer);
        if (this.enabled || Date.now() <= this.nativePopupSuppressUntil) {
          this.hideNativePdfAnnotationPopups();
        }
      }, delay);
      this.nativePopupHideTimers.add(timer);
    }
  }
  repairActiveOverlays() {
    if (!this.enabled || this.isInteracting()) {
      return;
    }
    let repaired = false;
    this.cleanupDetachedOverlays();
    for (const overlay of this.overlays.values()) {
      const wasMounted = this.ensureOverlayCanvasMounted(overlay);
      this.observeOverlayResize(overlay);
      if (!this.isOverlayNearViewport(overlay)) {
        continue;
      }
      const geometry = this.syncOverlayCssGeometry(overlay);
      const sizeChanged = Boolean(
        geometry && (Math.abs(overlay.cssWidth - geometry.cssWidth) >= 0.1 || Math.abs(overlay.cssHeight - geometry.cssHeight) >= 0.1)
      );
      if (wasMounted || sizeChanged) {
        this.resizeOverlay(overlay);
        repaired = true;
      }
    }
    this.updateExternalInkLayerState();
    if (repaired) {
      this.redrawAll();
      void this.prepareEditableInkForCurrentPage();
      return;
    }
    void this.prepareEditableInkForCurrentPage();
    this.scheduleScanPages(0);
  }
  setEnabled(enabled, options = {}) {
    this.enabled = enabled;
    this.rootEl.classList.toggle("pdftion-enabled", this.enabled);
    this.rootEl.classList.toggle("pdftion-selecting", this.enabled && (this.tool === "select" || this.tool === "image-crop"));
    this.plugin.refreshGlobalEditingClass();
    this.updateButtonState();
    if (this.enabled) {
      this.pendingEditableInkPrepareAfterSave = false;
      this.showToolbar();
      this.scanPages();
      this.primeNativeInkHidingForCurrentPages(true);
      this.startOverlayHealthCheck();
      this.startNativeAnnotationPopupSuppressor();
      this.scheduleEditableInkPrepare(0, true);
      window.setTimeout(() => this.scheduleEditableInkPrepare(0, true), 260);
      window.setTimeout(() => this.scheduleEditableInkPrepare(0, true), 760);
      if (options.notice !== false) {
        new import_obsidian.Notice(uiText("PDF \u6279\u6CE8\u5DF2\u5F00\u542F\u3002", "PDF annotation enabled."));
      }
    } else {
      this.stopOverlayHealthCheck();
      this.stopNativeAnnotationPopupSuppressor();
      this.clearCurrentStroke();
      this.recentInkGroup = null;
      this.selectionDrag = null;
      this.pendingImageCrop = null;
      this.pendingNativeInkHidePages.clear();
      this.clearEditableSelection();
      this.palette?.remove();
      this.palette = null;
      this.clearLayerLongPress();
      this.layerMenu?.remove();
      this.layerMenu = null;
      this.imageMenu?.remove();
      this.imageMenu = null;
      this.textMenu?.remove();
      this.textMenu = null;
      this.shareMenu?.remove();
      this.shareMenu = null;
      this.commentManager?.remove();
      this.commentManager = null;
      this.commentPopover?.remove();
      this.commentPopover = null;
      this.toolbar?.remove();
      this.toolbar = null;
      this.pdfInkPreparationComplete = false;
      void this.finishPdfInkEditing();
      this.redrawAll();
    }
  }
  // Entering edit mode schedules the ink preparation up to three times (0 / 260 /
  // 760 ms) so late-mounting pages are covered. Without joining those runs every
  // one of them parsed the whole PDF again, which is what made big files take
  // tens of seconds and behave differently from one attempt to the next.
  async prepareEditableInkForCurrentPage(force = false) {
    if (this.inkPrepareRun) {
      return this.inkPrepareRun;
    }
    const run = this.runEditableInkPrepare(force).finally(() => {
      if (this.inkPrepareRun === run) {
        this.inkPrepareRun = null;
      }
    });
    this.inkPrepareRun = run;
    return run;
  }
  async runEditableInkPrepare(force = false) {
    let spinnerTimer = window.setTimeout(() => {
      spinnerTimer = null;
      this.setPreparingIndicator(true);
    }, 120);
    const stopSpinner = () => {
      if (spinnerTimer !== null) {
        window.clearTimeout(spinnerTimer);
        spinnerTimer = null;
        return;
      }
      this.setPreparingIndicator(false);
    };
    try {
      if (this.conversionInProgress) {
        return;
      }
      await this.loadEditableAnnotations();
      if (!this.enabled) {
        return;
      }
      if (this.saving) {
        this.pendingEditableInkPrepareAfterSave = true;
        return;
      }
      if (this.pdfInkPreparationComplete) {
        return;
      }
      if (this.detachedInkEditPages.size > 0) {
        for (const pageIndex of this.detachedInkEditPages) {
          this.pendingNativeInkHidePages.add(pageIndex);
        }
        this.pdfInkPreparationComplete = true;
        this.updateExternalInkLayerState();
        return;
      }
      const pageIndexes = await this.plugin.getPdfInkPageIndexes(this.file);
      if (pageIndexes.size === 0) {
        this.pdfInkPreparationComplete = true;
        return;
      }
      await this.preparePdfInkOverlayForEditing(pageIndexes);
    } catch (error) {
      console.warn("pdftion could not prepare PDF ink for editable mode.", error);
    } finally {
      stopSpinner();
    }
  }
  // Ref-counted so enter and exit cannot clear each other's spinner when they
  // overlap (leaving while the enter preparation is still running).
  setPreparingIndicator(preparing) {
    this.preparingDepth = Math.max(0, this.preparingDepth + (preparing ? 1 : -1));
    const visible = this.preparingDepth > 0;
    if (this.preparingIndicator === visible) {
      return;
    }
    this.preparingIndicator = visible;
    this.button?.classList.toggle("is-preparing", visible);
  }
  scheduleEditableInkPrepare(delay = 160, force = false) {
    if (!this.enabled) {
      return;
    }
    const shouldForce = force || this.inkPrepareTimerForce;
    this.clearEditableInkPrepareTimer();
    this.inkPrepareTimerForce = shouldForce;
    const deadline = Date.now() + EDITABLE_INK_PREPARE_MAX_WAIT_MS;
    const attempt = () => {
      this.inkPrepareTimer = null;
      if (this.conversionInProgress || this.preparingPdfInkForEditing) {
        if (Date.now() < deadline && this.enabled) {
          this.inkPrepareTimer = window.setTimeout(attempt, EDITABLE_INK_PREPARE_RETRY_MS);
        }
        return;
      }
      const runForce = this.inkPrepareTimerForce;
      this.inkPrepareTimerForce = false;
      void this.prepareEditableInkForCurrentPage(runForce);
    };
    this.inkPrepareTimer = window.setTimeout(attempt, delay);
  }
  clearEditableInkPrepareTimer() {
    if (this.inkPrepareTimer !== null) {
      window.clearTimeout(this.inkPrepareTimer);
      this.inkPrepareTimer = null;
    }
    this.inkPrepareTimerForce = false;
  }
  getCurrentInkPreparePages(force = false) {
    const pages = /* @__PURE__ */ new Set();
    const viewportHeight = activeWindow.innerHeight || activeDocument.documentElement.clientHeight || 1;
    const margin = force ? 160 : 80;
    const candidates = [];
    for (const overlay of this.overlays.values()) {
      const rect = overlay.pageEl.getBoundingClientRect();
      if (rect.bottom >= -margin && rect.top <= viewportHeight + margin) {
        candidates.push({
          overlay,
          visibleHeight: Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0))
        });
      }
    }
    const best = candidates.sort((a, b) => b.visibleHeight - a.visibleHeight || a.overlay.pageIndex - b.overlay.pageIndex)[0]?.overlay;
    if (best) {
      pages.add(best.pageIndex);
    } else {
      const overlay = this.getVisibleOverlay() ?? Array.from(this.overlays.values()).sort((a, b) => a.pageIndex - b.pageIndex)[0];
      if (overlay) {
        pages.add(overlay.pageIndex);
      }
    }
    return pages;
  }
  // True when the platform renders native ink as DOM annotation elements that
  // the existing CSS hiding can actually cover. Only then can editing skip
  // the file-level detach + view reload entirely.
  canHideNativeInkOnPage(overlay) {
    const targets = this.strokeHistory.filter((stroke) => stroke.pageIndex === overlay.pageIndex && Array.isArray(stroke.pdfPoints));
    if (targets.length === 0) {
      return false;
    }
    const canvasRect = overlay.canvas.getBoundingClientRect();
    const targetRects = targets.map((stroke) => normalizedStrokeBounds({ ...stroke, points: stroke.pdfPoints ?? stroke.points })).filter((bounds) => bounds !== null).map((bounds) => ({
      bottom: canvasRect.top + bounds.maxY * canvasRect.height + 24,
      left: canvasRect.left + bounds.minX * canvasRect.width - 24,
      right: canvasRect.left + bounds.maxX * canvasRect.width + 24,
      top: canvasRect.top + bounds.minY * canvasRect.height - 24
    }));
    if (targetRects.length === 0) {
      return false;
    }
    for (const candidate of this.collectNativeAnnotationElements(overlay.pageEl, true)) {
      const rect = candidate.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && targetRects.some((target) => rectsOverlap(target, rect))) {
        return true;
      }
    }
    return false;
  }
  async preparePdfInkOverlayForEditing(pageIndexes) {
    if (pageIndexes.size === 0 || this.preparingPdfInkForEditing) {
      return;
    }
    this.preparingPdfInkForEditing = true;
    try {
      for (const pageIndex of pageIndexes) {
        this.pendingNativeInkHidePages.add(pageIndex);
        this.inkDetachReloadPendingPages.add(pageIndex);
      }
      this.updateExternalInkLayerState();
      if (!this.annotationStateTrusted) {
        await this.importPdfInkForPages(pageIndexes);
      }
      const relevantOverlays = Array.from(this.overlays.values()).filter((overlay) => pageIndexes.has(overlay.pageIndex));
      const cssHidingCapable = relevantOverlays.length > 0 && relevantOverlays.every((overlay) => this.canHideNativeInkOnPage(overlay));
      if (cssHidingCapable) {
        for (const pageIndex of pageIndexes) {
          this.inkDetachReloadPendingPages.delete(pageIndex);
          const hasNativeInk = this.strokeHistory.some((stroke) => stroke.pageIndex === pageIndex && Array.isArray(stroke.pdfPoints));
          if (!hasNativeInk) {
            this.pendingNativeInkHidePages.delete(pageIndex);
          }
        }
        this.updateExternalInkLayerState();
        this.redrawAll();
        this.pdfInkPreparationComplete = true;
        return;
      }
      const detachedNow = await this.plugin.beginInkEditTransaction(
        this.file,
        pageIndexes,
        this.getEditableElements().map(cloneElement)
      );
      for (const pageIndex of pageIndexes) {
        this.detachedInkEditPages.add(pageIndex);
      }
      if (detachedNow) {
        await yieldForCollector();
        await this.reloadNativePdfView();
      }
      for (const pageIndex of pageIndexes) {
        const hasNativeInk = this.strokeHistory.some((stroke) => stroke.pageIndex === pageIndex && Array.isArray(stroke.pdfPoints));
        if (!hasNativeInk) {
          this.pendingNativeInkHidePages.delete(pageIndex);
        }
        this.inkDetachReloadPendingPages.delete(pageIndex);
      }
      this.updateExternalInkLayerState();
      this.redrawAll();
      this.pdfInkPreparationComplete = true;
    } catch (error) {
      console.warn("pdftion could not prepare PDF ink annotations for editing.", error);
      for (const pageIndex of pageIndexes) {
        this.pendingNativeInkHidePages.delete(pageIndex);
        this.inkDetachReloadPendingPages.delete(pageIndex);
      }
      this.updateExternalInkLayerState();
      this.redrawAll();
    } finally {
      this.preparingPdfInkForEditing = false;
    }
  }
  async commitDetachedInkPages(pageIndexes = new Set(this.detachedInkEditPages)) {
    if (pageIndexes.size === 0) {
      return true;
    }
    if (this.finishingPdfInkEditing) {
      return this.finishingPdfInkEditing;
    }
    const targetFile = this.file;
    const targetPath = targetFile.path;
    const elements = this.getEditableElements().map(cloneElement);
    for (const pageIndex of pageIndexes) {
      this.inkCommitSettlePages.add(pageIndex);
    }
    this.clearAutoSaveTimer();
    let reloadStarted = null;
    const startReload = () => {
      if (!reloadStarted) {
        reloadStarted = this.reloadNativePdfView();
      }
      return reloadStarted;
    };
    this.finishingPdfInkEditing = this.plugin.finishInkEditTransaction(targetFile, elements, pageIndexes, {
      onBytesWritten: () => {
        void startReload();
      },
      waitForRender: () => startReload().then(() => sleepMs(360))
    }).then(async (result) => {
      const committed = result.committed;
      if (this.file.path !== targetPath) {
        for (const pageIndex of pageIndexes) {
          this.inkCommitSettlePages.delete(pageIndex);
        }
        return committed;
      }
      if (!committed) {
        await this.reloadEditableAnnotationsAfterInkRollback();
        return false;
      }
      for (const stroke of this.strokeHistory) {
        if (!pageIndexes.has(stroke.pageIndex)) {
          continue;
        }
        stroke.externalDirty = false;
        stroke.pdfPoints = stroke.points.map((point) => ({ ...point }));
        stroke.pdfSaved = true;
        stroke.saved = true;
        if (!result.restored) {
          stroke.source = "pdftion";
        }
      }
      for (const pageIndex of pageIndexes) {
        this.detachedInkEditPages.delete(pageIndex);
        this.pendingNativeInkHidePages.delete(pageIndex);
        this.dirtyInkPages.delete(pageIndex);
      }
      if (this.dirtyInkPages.size === 0) {
        this.deletedExternalInkIds.clear();
        this.deletedPdftionInkIds.clear();
      }
      this.dirty = this.getEditableElements().some((element) => !element.saved);
      this.updateExternalInkLayerState();
      this.redrawAll();
      this.pdfInkPreparationComplete = false;
      await startReload();
      await sleepMs(320);
      if (this.file.path === targetPath) {
        for (const pageIndex of pageIndexes) {
          this.inkCommitSettlePages.delete(pageIndex);
        }
        this.updateExternalInkLayerState();
        this.redrawAll();
      }
      this.scheduleQuietScan();
      void result.verified.then(async (verified) => {
        if (verified || this.file.path !== targetPath || this.destroyed) {
          return;
        }
        await this.reloadEditableAnnotationsAfterInkRollback();
        new import_obsidian.Notice(uiText("\u58A8\u8FF9\u6821\u9A8C\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u5230\u7F16\u8F91\u524D\u3002", "Ink verification failed; the pre-edit state was restored."));
      });
      return true;
    }).finally(() => {
      this.finishingPdfInkEditing = null;
    });
    return this.finishingPdfInkEditing;
  }
  async finishPdfInkEditing() {
    this.clearEditableInkPrepareTimer();
    this.commitNativeTextEditor();
    this.setPreparingIndicator(true);
    try {
      if (this.detachedInkEditPages.size > 0) {
        const committed = await this.commitDetachedInkPages(new Set(this.detachedInkEditPages));
        if (!committed) {
          return false;
        }
      }
      if (this.hasPendingPdfWrite()) {
        await this.saveIntoPdf(true);
      }
      return true;
    } finally {
      this.setPreparingIndicator(false);
    }
  }
  async reloadEditableAnnotationsAfterInkRollback() {
    const rollbackPages = new Set(this.detachedInkEditPages);
    this.detachedInkEditPages.clear();
    this.pendingNativeInkHidePages.clear();
    this.inkCommitSettlePages.clear();
    for (const pageIndex of rollbackPages) {
      this.inkDetachReloadPendingPages.add(pageIndex);
    }
    this.dirtyInkPages.clear();
    this.deletedExternalInkIds.clear();
    this.deletedPdftionInkIds.clear();
    this.strokeHistory = [];
    this.textHistory = [];
    this.coverHistory = [];
    this.imageHistory = [];
    this.loadedAnnotationState = false;
    this.annotationLoadToken += 1;
    this.annotationLoadPromise = null;
    await this.loadEditableAnnotations();
    await this.reloadNativePdfView();
    await sleepMs(320);
    this.inkDetachReloadPendingPages.clear();
    this.updateExternalInkLayerState();
    this.redrawAll();
  }
  async reloadNativePdfView() {
    const view = this.leaf.view;
    if (view.file?.path !== this.file.path || typeof view.onLoadFile !== "function") {
      return;
    }
    try {
      await view.onLoadFile(this.file);
    } catch (error) {
      console.debug("pdftion could not reload the current PDF view after an ink transaction.", error);
    }
    this.updateExternalInkLayerState();
    window.requestAnimationFrame(() => this.updateExternalInkLayerState());
    window.setTimeout(() => this.updateExternalInkLayerState(), 120);
    window.setTimeout(() => this.updateExternalInkLayerState(), 420);
  }
  async importPdfInkForPages(pageIndexes) {
    if (pageIndexes?.size === 0) {
      return false;
    }
    const pagesToScan = pageIndexes ? new Set(Array.from(pageIndexes).filter((pageIndex) => !this.nativeInkScannedPages.has(pageIndex))) : void 0;
    if (pagesToScan?.size === 0) {
      return false;
    }
    const targetPath = this.file.path;
    const pdfInkStrokes = await this.plugin.loadPdfInkAnnotations(this.file, pagesToScan);
    if (this.file.path !== targetPath) {
      return false;
    }
    for (const pageIndex of pagesToScan ?? []) {
      this.nativeInkScannedPages.add(pageIndex);
    }
    if (pdfInkStrokes.length === 0) {
      return false;
    }
    let changed = false;
    for (const stroke of pdfInkStrokes) {
      changed = this.mergePdfInkStrokeForEditing(stroke) || changed;
    }
    const strokeCountBeforeDedupe = this.strokeHistory.length;
    this.strokeHistory = dedupeInkElements(this.strokeHistory).filter((element) => element.kind === "stroke");
    changed = this.strokeHistory.length !== strokeCountBeforeDedupe || changed;
    if (changed) {
      this.savedInkIsBurnedIntoPdf = this.strokeHistory.some((stroke) => !Array.isArray(stroke.pdfPoints)) && this.savedInkIsBurnedIntoPdf;
      this.dirty = true;
    }
    return changed;
  }
  mergePdfInkStrokeForEditing(stroke) {
    const existing = this.strokeHistory.find((candidate) => candidate.id === stroke.id || isSamePdfInkStrokeCandidate(candidate, stroke));
    const pdfPoints = (stroke.pdfPoints ?? stroke.points).map((point) => ({ ...point }));
    if (!existing) {
      this.strokeHistory.push({
        ...stroke,
        externalDirty: false,
        pdfPoints,
        pdfSaved: true,
        points: stroke.points.map((point) => ({ ...point })),
        // The stroke already exists as a native ink annotation inside the PDF,
        // so it is "saved" until the user edits it. This keeps a plain
        // enter-then-exit cycle from rewriting the whole file.
        saved: true
      });
      return true;
    }
    let changed = false;
    const canRefreshFromPdf = existing.saved && existing.pdfSaved !== false && existing.externalDirty !== true && (!existing.pdfPoints || inkPointsApproximatelyEqual(existing.points, existing.pdfPoints));
    if (canRefreshFromPdf && !inkStrokesEquivalentForPdf(existing, stroke)) {
      existing.points = stroke.points.map((point) => ({ ...point }));
      existing.color = stroke.color;
      existing.opacity = stroke.opacity;
      existing.pageCssHeight = stroke.pageCssHeight;
      existing.pageCssWidth = stroke.pageCssWidth;
      existing.groupId = stroke.groupId;
      existing.tool = stroke.tool;
      existing.width = stroke.width;
      changed = true;
    }
    if (!existing.pdfPoints || !inkPointsApproximatelyEqual(existing.pdfPoints, pdfPoints)) {
      existing.pdfPoints = pdfPoints;
      changed = true;
    }
    if (existing.pdfSaved !== false && existing.pdfSaved !== true) {
      existing.pdfSaved = true;
      changed = true;
    }
    if (!existing.source && stroke.source) {
      existing.source = stroke.source;
      changed = true;
    }
    if (existing.pdfSaved === true && existing.externalDirty === true) {
      existing.externalDirty = false;
      changed = true;
    }
    if (changed && existing.saved) {
      existing.saved = false;
    }
    return changed;
  }
  updateButtonState() {
    this.button?.classList.toggle("is-active", this.enabled);
  }
  showToolbar() {
    if (this.toolbar?.isConnected) {
      this.updateToolbarState();
      return;
    }
    const toolbar = activeDocument.createElement("div");
    toolbar.className = "pdftion-toolbar";
    const dragHandle = createIconButton("grip-horizontal", uiText("\u62D6\u52A8\u5DE5\u5177\u680F", "Move toolbar"));
    dragHandle.classList.add("pdftion-drag-handle");
    this.attachToolbarDragHandle(dragHandle);
    toolbar.appendChild(dragHandle);
    const select = createIconButton("mouse-pointer-2", uiText("\u9009\u62E9", "Select"));
    select.dataset.tool = "select";
    select.addEventListener("click", () => this.setTool("select"));
    toolbar.appendChild(select);
    const pen = createIconButton("pen-line", uiText("\u7B14", "Pen"));
    pen.dataset.tool = "pen";
    pen.classList.add("pdftion-color-tool", "pdftion-pen-button");
    pen.addEventListener("click", () => this.setTool("pen"));
    toolbar.appendChild(pen);
    const highlighter = createIconButton("highlighter", uiText("\u6C34\u5F69", "Highlighter"));
    highlighter.dataset.tool = "highlight";
    highlighter.classList.add("pdftion-color-tool", "pdftion-highlight-button");
    highlighter.addEventListener("click", () => this.setTool("highlight"));
    toolbar.appendChild(highlighter);
    const text = createIconButton("type", uiText("\u6587\u5B57", "Text"));
    text.dataset.tool = "text";
    text.classList.add("pdftion-color-tool", "pdftion-text-button");
    text.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.tool !== "text" && this.tool !== "comment") {
        this.setTool("text");
      }
      this.toggleTextMenu();
    });
    toolbar.appendChild(text);
    const image = createIconButton("image", uiText("\u56FE\u7247", "Image"));
    image.classList.add("pdftion-image-button");
    image.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggleImageMenu();
    });
    toolbar.appendChild(image);
    const eraser = createIconButton("eraser", uiText("\u6A61\u76AE", "Eraser"));
    eraser.dataset.tool = "eraser";
    eraser.addEventListener("click", () => this.setTool("eraser"));
    toolbar.appendChild(eraser);
    const palette = createIconButton("palette", uiText("\u989C\u8272\u4E0E\u5927\u5C0F", "Color and size"));
    palette.classList.add("pdftion-color-tool", "pdftion-palette-button");
    palette.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.togglePalette();
    });
    toolbar.appendChild(palette);
    const undo = createIconButton("undo-2", uiText("\u64A4\u9500", "Undo"));
    undo.addEventListener("click", () => this.undo());
    toolbar.appendChild(undo);
    const redo = createIconButton("redo-2", uiText("\u91CD\u505A", "Redo"));
    redo.addEventListener("click", () => this.redo());
    toolbar.appendChild(redo);
    const exportPdf = createIconButton("share-2", uiText("\u5206\u4EAB/\u5BFC\u51FA", "Share/export"));
    exportPdf.classList.add("pdftion-share-button");
    exportPdf.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggleShareMenu();
    });
    toolbar.appendChild(exportPdf);
    const navigator2 = createIconButton("list", uiText("\u9875\u9762/\u6807\u6CE8\u5BFC\u822A", "Page/annotation navigator"));
    navigator2.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.showPageNavigator();
    });
    toolbar.appendChild(navigator2);
    const clear = createIconButton("trash-2", uiText("\u5220\u9664\u9009\u4E2D/\u6E05\u7A7A\u6807\u6CE8", "Delete selection/clear annotations"));
    clear.addEventListener("click", () => void this.clearUnsavedInk());
    toolbar.appendChild(clear);
    (this.ensureToolbarHost() ?? activeDocument.body).appendChild(toolbar);
    this.toolbar = toolbar;
    this.updateToolbarState();
  }
  ensureToolbarHost() {
    const placement = this.getToolbarHostPlacement();
    const existingHosts = Array.from(
      placement.container.querySelectorAll(":scope > .pdftion-toolbar-host")
    );
    let host = this.toolbarHost?.isConnected && this.toolbarHost.parentElement === placement.container ? this.toolbarHost : existingHosts[0] ?? null;
    if (!host) {
      host = activeDocument.createElement("div");
      host.className = "pdftion-toolbar-host";
    }
    if (placement.before !== host && (host.parentElement !== placement.container || host.nextElementSibling !== placement.before)) {
      placement.container.insertBefore(host, placement.before);
    }
    for (const duplicate of existingHosts) {
      if (duplicate !== host) {
        duplicate.remove();
      }
    }
    this.toolbarHost = host;
    return host;
  }
  attachToolbarDragHandle(handle) {
    handle.addEventListener("pointerdown", (event) => {
      if (!this.toolbarHost) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const startRect = (this.toolbar ?? this.toolbarHost).getBoundingClientRect();
      const startX = event.clientX;
      const startY = event.clientY;
      const host = this.toolbarHost;
      handle.setPointerCapture?.(event.pointerId);
      host.classList.add("is-floating");
      host.classList.add("is-dragging");
      host.setCssStyles({
        height: `${startRect.height}px`,
        left: `${startRect.left}px`,
        top: `${startRect.top}px`,
        transform: "translate3d(0, 0, 0)",
        width: `${startRect.width}px`
      });
      let dragX = 0;
      let dragY = 0;
      let frame = 0;
      const applyTransform = () => {
        frame = 0;
        host.setCssStyles({ transform: `translate3d(${dragX}px, ${dragY}px, 0)` });
      };
      const move = (moveEvent) => {
        const maxLeft = Math.max(0, activeWindow.innerWidth - host.offsetWidth);
        const maxTop = Math.max(0, activeWindow.innerHeight - host.offsetHeight);
        dragX = clamp(startRect.left + moveEvent.clientX - startX, 0, maxLeft) - startRect.left;
        dragY = clamp(startRect.top + moveEvent.clientY - startY, 0, maxTop) - startRect.top;
        if (frame === 0) {
          frame = window.requestAnimationFrame(applyTransform);
        }
      };
      const up = () => {
        if (frame !== 0) {
          activeWindow.cancelAnimationFrame(frame);
          frame = 0;
        }
        host.setCssStyles({
          left: `${startRect.left + dragX}px`,
          top: `${startRect.top + dragY}px`,
          transform: ""
        });
        host.classList.remove("is-dragging");
        handle.releasePointerCapture?.(event.pointerId);
        activeWindow.removeEventListener("pointermove", move, true);
        activeWindow.removeEventListener("pointerup", up, true);
        activeWindow.removeEventListener("pointercancel", up, true);
      };
      activeWindow.addEventListener("pointermove", move, true);
      activeWindow.addEventListener("pointerup", up, true);
      activeWindow.addEventListener("pointercancel", up, true);
    });
  }
  getToolbarHostPlacement() {
    const viewer = this.rootEl.querySelector(".pdf-viewer, .pdfViewer, .pdf-container");
    if (viewer?.parentElement) {
      return { container: viewer.parentElement, before: viewer };
    }
    const firstChild = this.rootEl.firstElementChild;
    return {
      container: this.rootEl,
      before: firstChild?.classList.contains("pdftion-toolbar-host") ? firstChild.nextElementSibling : firstChild
    };
  }
  updateToolbarState() {
    if (!this.toolbar) {
      return;
    }
    for (const button of Array.from(this.toolbar.querySelectorAll("[data-tool]")).filter(isHTMLElement)) {
      button.classList.toggle("is-active", button.dataset.tool === this.tool);
    }
    this.toolbar.querySelector(".pdftion-text-button")?.classList.toggle("is-active", this.tool === "text" || this.tool === "comment");
    this.toolbar.querySelector(".pdftion-image-button")?.classList.toggle("is-active", this.tool === "image-crop");
    this.setToolbarIconColor(".pdftion-pen-button", this.penColor);
    this.setToolbarIconColor(".pdftion-highlight-button", this.highlightColor);
    this.setToolbarIconColor(".pdftion-text-button", this.getTextPaletteColor());
    this.setToolbarIconColor(".pdftion-palette-button", this.getCurrentPaletteColor());
    const colorButtons = this.palette ? Array.from(this.palette.querySelectorAll(".pdftion-color")).filter(isHTMLElement) : [];
    for (const colorButton of colorButtons) {
      const target = colorButton.dataset.target;
      const activeColor = this.getPaletteColorForTarget(target);
      const colorInput = colorButton.querySelector("input[type='color']");
      colorButton.setCssProps({ "--pdftion-current-color": activeColor });
      if (colorInput) {
        colorInput.value = activeColor;
      }
      const isAdvanced = colorButton.classList.contains("pdftion-color-advanced");
      const swatchColor = normalizeHexColor(colorButton.dataset.color ?? colorButton.title);
      colorButton.classList.toggle("is-active", isAdvanced ? !PALETTE_COLORS.includes(activeColor) : swatchColor === activeColor);
    }
    this.updatePaletteState();
  }
  setToolbarIconColor(selector, color) {
    this.toolbar?.querySelector(selector)?.setCssProps({
      "--pdftion-tool-color": normalizeHexColor(color)
    });
  }
  getCurrentPaletteColor() {
    if (this.hasEditableSelection()) {
      return this.getSelectedPaletteColor();
    }
    if (this.tool === "highlight") {
      return normalizeHexColor(this.highlightColor);
    }
    if (this.tool === "text" || this.tool === "comment" || this.hasSelectedText()) {
      return normalizeHexColor(this.getTextPaletteColor());
    }
    return normalizeHexColor(this.penColor);
  }
  getPaletteColorForTarget(target) {
    if (target === "selection") {
      return this.getSelectedPaletteColor();
    }
    if (target === "highlight") {
      return normalizeHexColor(this.highlightColor);
    }
    if (target === "text") {
      return normalizeHexColor(this.getTextPaletteColor());
    }
    return normalizeHexColor(this.penColor);
  }
  setTool(tool) {
    if (this.tool !== tool) {
      this.recentInkGroup = null;
    }
    this.tool = tool;
    this.rootEl.classList.toggle("pdftion-selecting", this.enabled && (this.tool === "select" || this.tool === "image-crop"));
    if (tool !== "select" && tool !== "image-crop") {
      this.selectionDrag = null;
      this.nativeSelection = null;
      this.pendingImageCrop = null;
      if (tool === "eraser" || tool === "cover") {
        this.clearEditableSelection();
      }
      this.redrawAll();
    }
    if (tool === "select" || tool === "image-crop") {
      this.palette?.remove();
      this.palette = null;
      if (tool === "image-crop") {
        new import_obsidian.Notice(uiText("\u62D6\u62FD\u6846\u9009 PDF \u533A\u57DF\uFF0C\u622A\u53D6\u4E3A\u53EF\u7F16\u8F91\u56FE\u7247\u3002", "Drag a PDF region to capture it as an editable image."));
      }
      this.updateToolbarState();
      return;
    }
    this.imageMenu?.remove();
    this.imageMenu = null;
    this.textMenu?.remove();
    this.textMenu = null;
    this.shareMenu?.remove();
    this.shareMenu = null;
    if (this.palette?.isConnected) {
      this.showPalette();
    }
    this.updateToolbarState();
  }
  toggleTextMenu() {
    if (this.textMenu?.isConnected) {
      this.textMenu.remove();
      this.textMenu = null;
      return;
    }
    this.imageMenu?.remove();
    this.imageMenu = null;
    this.shareMenu?.remove();
    this.shareMenu = null;
    this.showTextMenu();
  }
  showTextMenu() {
    this.textMenu?.remove();
    const button = this.toolbar?.querySelector(".pdftion-text-button");
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-text-menu";
    const text = createIconButton("type", uiText("\u6587\u5B57", "Text"));
    text.classList.add("pdftion-text-menu-button");
    text.addEventListener("click", () => {
      panel.remove();
      this.textMenu = null;
      this.setTool("text");
    });
    panel.appendChild(text);
    const comment = createIconButton("message-square-text", uiText("\u6279\u6CE8", "Comment"));
    comment.classList.add("pdftion-text-menu-button");
    comment.addEventListener("click", () => {
      panel.remove();
      this.textMenu = null;
      this.setTool("comment");
      new import_obsidian.Notice(uiText("\u70B9\u51FB\u9875\u9762\u6DFB\u52A0\u6279\u6CE8\u3002", "Click the page to add a comment."));
    });
    panel.appendChild(comment);
    const manage = createIconButton("list-tree", uiText("\u6279\u6CE8\u7BA1\u7406", "Comment manager"));
    manage.classList.add("pdftion-text-menu-button");
    manage.addEventListener("click", () => {
      panel.remove();
      this.textMenu = null;
      this.showCommentManager();
    });
    panel.appendChild(manage);
    appendToActiveBody(panel);
    const rect = button?.getBoundingClientRect();
    const fallbackTop = Math.max(76, (this.toolbarHost?.getBoundingClientRect().bottom ?? 68) + 6);
    panel.setCssStyles({
      left: `${Math.min(activeWindow.innerWidth - 150, Math.max(8, rect ? rect.left : 16))}px`,
      top: `${Math.min(activeWindow.innerHeight - 96, Math.max(8, rect ? rect.bottom + 6 : fallbackTop))}px`
    });
    this.textMenu = panel;
  }
  toggleImageMenu() {
    if (this.imageMenu?.isConnected) {
      this.imageMenu.remove();
      this.imageMenu = null;
      return;
    }
    this.shareMenu?.remove();
    this.shareMenu = null;
    this.textMenu?.remove();
    this.textMenu = null;
    this.showImageMenu();
  }
  showImageMenu() {
    this.imageMenu?.remove();
    const button = this.toolbar?.querySelector(".pdftion-image-button");
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-image-menu";
    const capture = createIconButton("scan-line", uiText("\u622A\u53D6\u56FE\u7247", "Capture image"));
    capture.classList.add("pdftion-image-menu-button");
    capture.addEventListener("click", () => {
      panel.remove();
      this.imageMenu = null;
      this.setTool("image-crop");
    });
    panel.appendChild(capture);
    const insert = createIconButton("image-plus", uiText("\u63D2\u5165\u56FE\u7247", "Insert image"));
    insert.classList.add("pdftion-image-menu-button");
    insert.addEventListener("click", () => {
      panel.remove();
      this.imageMenu = null;
      void this.pickAndInsertImageFile();
    });
    panel.appendChild(insert);
    appendToActiveBody(panel);
    const rect = button?.getBoundingClientRect();
    const fallbackTop = Math.max(76, (this.toolbarHost?.getBoundingClientRect().bottom ?? 68) + 6);
    panel.setCssStyles({
      left: `${Math.min(activeWindow.innerWidth - 190, Math.max(8, rect ? rect.left : 16))}px`,
      top: `${Math.min(activeWindow.innerHeight - 96, Math.max(8, rect ? rect.bottom + 6 : fallbackTop))}px`
    });
    this.imageMenu = panel;
  }
  toggleShareMenu() {
    if (this.shareMenu?.isConnected) {
      this.shareMenu.remove();
      this.shareMenu = null;
      return;
    }
    this.imageMenu?.remove();
    this.imageMenu = null;
    this.textMenu?.remove();
    this.textMenu = null;
    this.showShareMenu();
  }
  showShareMenu() {
    this.shareMenu?.remove();
    const button = this.toolbar?.querySelector(".pdftion-share-button");
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-share-menu";
    const pdf = createIconButton("file-output", uiText("\u5BFC\u51FA PDF", "Export PDF"));
    pdf.classList.add("pdftion-share-menu-button");
    pdf.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportAnnotatedPdf();
    });
    panel.appendChild(pdf);
    const docx = createIconButton("file-type-2", uiText("\u5BFC\u51FA DOCX", "Export DOCX"));
    docx.classList.add("pdftion-share-menu-button");
    docx.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportConvertedDocx();
    });
    panel.appendChild(docx);
    const md = createIconButton("file-text", uiText("\u5BFC\u51FA MD", "Export MD"));
    md.classList.add("pdftion-share-menu-button");
    md.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportConvertedMarkdown();
    });
    panel.appendChild(md);
    const png = createIconButton("image", uiText("\u5BFC\u51FA PNG", "Export PNG"));
    png.classList.add("pdftion-share-menu-button");
    png.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportConvertedPng();
    });
    panel.appendChild(png);
    const pptx = createIconButton("presentation", uiText("\u5BFC\u51FA PPTX", "Export PPTX"));
    pptx.classList.add("pdftion-share-menu-button");
    pptx.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportConvertedPptx();
    });
    panel.appendChild(pptx);
    const html = createIconButton("file-code-2", uiText("\u5BFC\u51FA HTML", "Export HTML"));
    html.classList.add("pdftion-share-menu-button");
    html.addEventListener("click", () => {
      panel.remove();
      this.shareMenu = null;
      void this.exportConvertedHtml();
    });
    panel.appendChild(html);
    appendToActiveBody(panel);
    const rect = button?.getBoundingClientRect();
    const fallbackTop = Math.max(76, (this.toolbarHost?.getBoundingClientRect().bottom ?? 68) + 6);
    panel.setCssStyles({
      left: `${Math.min(activeWindow.innerWidth - 232, Math.max(8, rect ? rect.left : 16))}px`,
      top: `${Math.min(activeWindow.innerHeight - 96, Math.max(8, rect ? rect.bottom + 6 : fallbackTop))}px`
    });
    this.shareMenu = panel;
  }
  onPointerDown(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.pointerType === "touch") {
      return;
    }
    this.suppressNativePdfPopupBurst();
    event.preventDefault();
    event.stopPropagation();
    this.resizeOverlay(overlay);
    const point = this.getOverlayInputPoint(overlay, event.clientX, event.clientY);
    if (event.detail >= 2 && this.openEditorAtPoint(point, overlay)) {
      this.clearLayerLongPress();
      return;
    }
    overlay.canvas.setPointerCapture(event.pointerId);
    const hitElement = this.findElementAt(overlay, point);
    this.startLayerLongPress(overlay, point, event.clientX, event.clientY, hitElement);
    this.beginInkInteraction(point, overlay, hitElement);
  }
  onDoubleClick(event, overlay) {
    if (!this.enabled) {
      return;
    }
    this.suppressNativePdfPopupBurst();
    event.preventDefault();
    event.stopPropagation();
    this.resizeOverlay(overlay);
    this.openEditorAtPoint(this.getOverlayInputPoint(overlay, event.clientX, event.clientY), overlay);
  }
  openEditorAtPoint(point, overlay) {
    const element = this.findElementAt(overlay, point);
    if (element?.kind === "text") {
      this.clearCurrentStroke();
      this.currentCover = null;
      this.selectionDrag = null;
      this.setSingleSelectedElement(element.id);
      this.nativeSelection = null;
      if (element.presentation === "comment") {
        void this.editCommentAnnotation(element);
      } else {
        this.openExistingTextEditor(element, overlay);
      }
      this.redrawAll();
      return true;
    }
    if (this.findCoverElementAt(overlay, point)) {
      return false;
    }
    const native = this.findNativeObjectAt(overlay, point);
    if (native?.kind === "text") {
      this.clearCurrentStroke();
      this.currentCover = null;
      this.selectionDrag = null;
      this.clearEditableSelection();
      this.openNativeTextEditor(native, overlay);
      this.redrawAll();
      return true;
    }
    return false;
  }
  beginInkInteraction(point, overlay, hitElement = this.findElementAt(overlay, point)) {
    if (this.tool === "image-crop") {
      if (this.pendingImageCrop?.pageIndex === overlay.pageIndex && nativeRegionContainsPoint(this.pendingImageCrop, point)) {
        const region = this.pendingImageCrop;
        this.pendingImageCrop = null;
        this.nativeSelection = null;
        if (this.convertNativeRegionToImage(region, overlay)) {
          this.selectionDrag = {
            current: point,
            mode: "move",
            moved: false,
            pageIndex: overlay.pageIndex,
            start: point
          };
          this.redrawAll();
        } else {
          this.selectionDrag = null;
        }
        return;
      }
      this.clearEditableSelection();
      this.pendingImageCrop = null;
      this.selectionDrag = {
        current: point,
        mode: "marquee",
        moved: false,
        pageIndex: overlay.pageIndex,
        start: point
      };
      this.redrawAll();
      return;
    }
    const tool = this.tool;
    const drawingTool = this.isDrawingToolMode(tool);
    const selectedElements = this.getSelectedEditableElements(overlay.pageIndex);
    const selectionBounds = normalizedElementsBounds(selectedElements);
    const selectionHandle = selectionBounds ? this.findSelectionHandleAt(overlay, point, selectionBounds) : null;
    const startsInsideEditableSelection = selectionHandle !== null || selectionBounds !== null && this.selectionBoxContainsPoint(overlay, point, selectionBounds);
    const canDragSelection = tool !== "eraser" && tool !== "cover" && !drawingTool && selectedElements.length > 0 && startsInsideEditableSelection && this.canDragSelectedElements(overlay.pageIndex, selectedElements);
    if (canDragSelection) {
      this.beginSelectionInteraction(point, overlay, hitElement, selectedElements, selectionBounds, selectionHandle);
      return;
    }
    if (hitElement?.kind === "text" && hitElement.presentation === "comment" && tool !== "eraser" && tool !== "cover") {
      this.setSingleSelectedElement(hitElement.id);
      this.showCommentPopover(hitElement, overlay);
      this.redrawAll();
      return;
    }
    if (drawingTool) {
      this.selectionDrag = null;
      this.currentStrokeMoved = false;
      this.currentStrokeHadTouchMove = false;
      this.currentStrokeStartedAt = Date.now();
      this.currentStroke = {
        color: this.getToolColor(tool),
        createdAt: this.currentStrokeStartedAt,
        id: makeStrokeId(),
        kind: "stroke",
        opacity: this.getToolOpacity(tool),
        pageCssHeight: overlay.cssHeight,
        pageCssWidth: overlay.cssWidth,
        pageIndex: overlay.pageIndex,
        points: [point],
        saved: false,
        tool,
        width: this.getToolWidth(tool)
      };
      this.redrawOverlay(overlay, this.currentStroke);
      return;
    }
    if (hitElement && !drawingTool && tool !== "eraser" && tool !== "cover") {
      this.beginSelectionInteraction(point, overlay, hitElement, selectedElements, selectionBounds, selectionHandle);
      return;
    }
    if (tool === "select") {
      this.beginSelectionInteraction(point, overlay, hitElement, selectedElements, selectionBounds, selectionHandle);
      return;
    }
    if (tool === "eraser") {
      this.eraseAt(overlay, point);
      return;
    }
    if (tool === "text") {
      this.addTextAnnotation(point, overlay);
      return;
    }
    if (tool === "comment") {
      void this.addCommentAnnotation(point, overlay);
      return;
    }
    if (tool === "cover") {
      this.currentCover = {
        color: "#ffffff",
        height: 1e-3,
        id: makeStrokeId(),
        kind: "cover",
        opacity: 1,
        pageCssHeight: overlay.cssHeight,
        pageCssWidth: overlay.cssWidth,
        pageIndex: overlay.pageIndex,
        saved: false,
        width: 1e-3,
        x: point.x,
        y: point.y
      };
      return;
    }
  }
  addTextAnnotation(point, overlay) {
    const textElement = {
      color: this.textColor,
      fontFamily: this.textFontFamily,
      fontSize: this.textFontSize,
      id: makeStrokeId(),
      kind: "text",
      opacity: this.textOpacity,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: overlay.pageIndex,
      saved: false,
      text: "",
      x: point.x,
      y: point.y,
      zIndex: this.getNextLayerIndex(overlay.pageIndex)
    };
    this.rememberHistory();
    this.textHistory.push(textElement);
    this.redoStack = [];
    this.setSingleSelectedElement(textElement.id);
    this.markDirty();
    this.redrawOverlay(overlay);
    this.openExistingTextEditor(textElement, overlay);
  }
  async addCommentAnnotation(point, overlay) {
    const targetPath = this.file.path;
    const content = await showPromptModal({
      actionLabel: uiText("\u6DFB\u52A0", "Add"),
      message: uiText("\u8F93\u5165\u6279\u6CE8\u5185\u5BB9\u3002", "Enter the comment content."),
      title: uiText("\u6DFB\u52A0\u6279\u6CE8", "Add comment")
    });
    if (!content || this.destroyed || this.file.path !== targetPath) {
      return;
    }
    const comment = {
      color: this.textColor,
      createdAt: Date.now(),
      fontFamily: this.textFontFamily,
      fontSize: this.textFontSize,
      id: makeStrokeId(),
      kind: "text",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: overlay.pageIndex,
      presentation: "comment",
      saved: false,
      text: content,
      x: point.x,
      y: point.y,
      zIndex: this.getNextLayerIndex(overlay.pageIndex)
    };
    this.rememberHistory();
    this.textHistory.push(comment);
    this.redoStack = [];
    this.setSingleSelectedElement(comment.id);
    this.markDirty();
    this.redrawOverlay(overlay);
    this.scheduleAutoSave();
    this.refreshCommentManager();
    this.showCommentPopover(comment, overlay);
  }
  async editCommentAnnotation(comment) {
    if (comment.presentation !== "comment") {
      return;
    }
    const content = await showPromptModal({
      actionLabel: uiText("\u4FDD\u5B58", "Save"),
      defaultValue: comment.text,
      message: uiText("\u4FEE\u6539\u6279\u6CE8\u5185\u5BB9\u3002", "Edit the comment content."),
      title: uiText("\u7F16\u8F91\u6279\u6CE8", "Edit comment")
    });
    if (!content || content === comment.text || !this.findElementById(comment.id)) {
      return;
    }
    this.rememberHistory();
    comment.text = content;
    comment.saved = false;
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
    this.refreshCommentManager();
    const overlay = this.findOverlayByPageIndex(comment.pageIndex);
    if (overlay) {
      this.showCommentPopover(comment, overlay);
    }
  }
  deleteCommentAnnotation(comment) {
    if (comment.presentation !== "comment" || !this.findElementById(comment.id)) {
      return;
    }
    this.rememberHistory();
    this.removeElementById(comment.id);
    this.selectedStrokeIds.delete(comment.id);
    this.commentPopover?.remove();
    this.commentPopover = null;
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
    this.refreshCommentManager();
  }
  showCommentPopover(comment, overlay) {
    this.commentPopover?.remove();
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-comment-popover";
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    panel.addEventListener("click", (event) => event.stopPropagation());
    const header = activeDocument.createElement("div");
    header.className = "pdftion-comment-popover-header";
    const page = activeDocument.createElement("span");
    page.textContent = uiText(`\u7B2C ${comment.pageIndex + 1} \u9875\u6279\u6CE8`, `Page ${comment.pageIndex + 1} comment`);
    header.appendChild(page);
    const close = createIconButton("x", uiText("\u5173\u95ED", "Close"));
    close.addEventListener("click", () => {
      panel.remove();
      this.commentPopover = null;
    });
    header.appendChild(close);
    panel.appendChild(header);
    const content = activeDocument.createElement("div");
    content.className = "pdftion-comment-content";
    content.textContent = comment.text;
    panel.appendChild(content);
    const actions = activeDocument.createElement("div");
    actions.className = "pdftion-comment-actions";
    const edit = createIconButton("pencil", uiText("\u7F16\u8F91\u6279\u6CE8", "Edit comment"));
    edit.addEventListener("click", () => void this.editCommentAnnotation(comment));
    actions.appendChild(edit);
    const remove = createIconButton("trash-2", uiText("\u5220\u9664\u6279\u6CE8", "Delete comment"));
    remove.addEventListener("click", () => this.deleteCommentAnnotation(comment));
    actions.appendChild(remove);
    panel.appendChild(actions);
    appendToActiveBody(panel);
    const overlayRect = this.getOverlayClientRect(overlay);
    const iconX = overlayRect.left + comment.x * overlay.cssWidth;
    const iconY = overlayRect.top + comment.y * overlay.cssHeight;
    panel.setCssStyles({
      left: `${clamp(iconX + 18, 8, Math.max(8, activeWindow.innerWidth - 292))}px`,
      top: `${clamp(iconY - 8, 8, Math.max(8, activeWindow.innerHeight - 220))}px`
    });
    this.commentPopover = panel;
  }
  openNativeTextEditor(selection, overlay) {
    this.closeNativeTextEditor(false);
    this.suppressNativePdfPopupBurst();
    const overlayRect = this.getOverlayClientRect(overlay);
    const x = selection.x * overlay.cssWidth;
    const y = selection.y * overlay.cssHeight;
    const rawWidth = selection.width * overlay.cssWidth;
    const rawHeight = selection.height * overlay.cssHeight;
    const editorPadX = Math.max(4, Math.min(14, rawHeight * 0.35));
    const editorPadY = Math.max(2, Math.min(8, rawHeight * 0.18));
    const editorX = Math.max(0, x - editorPadX);
    const editorY = Math.max(0, y - editorPadY * 0.65);
    const editorWidth = Math.min(overlay.cssWidth - editorX, Math.max(42, rawWidth + editorPadX * 2.5));
    const editorHeight = Math.min(overlay.cssHeight - editorY, Math.max(26, rawHeight + editorPadY * 2.4));
    const editor = activeDocument.createElement("textarea");
    editor.className = "pdftion-native-editor";
    editor.classList.add("is-native-text-editor");
    editor.value = selection.text ?? "";
    const sampledBackground = this.samplePdfBackgroundColor(overlay, selection);
    this.nativeTextEditorCover = this.createNativeTextCover(selection, overlay, sampledBackground, false);
    this.redrawOverlay(overlay);
    editor.dataset.coverColor = sampledBackground;
    editor.setCssStyles({
      backgroundColor: sampledBackground,
      borderColor: "#1c7ed6",
      color: readableTextColor(sampledBackground),
      fontSize: `${Math.max(8, rawHeight * 0.82)}px`,
      height: `${editorHeight}px`,
      left: `${overlayRect.left + editorX}px`,
      lineHeight: "1.15",
      top: `${overlayRect.top + editorY}px`,
      width: `${editorWidth}px`
    });
    const commit = () => {
      if (this.nativeTextEditor !== editor) {
        return;
      }
      const value = editor.value.trim();
      this.closeNativeTextEditor(false);
      if (!value || value === (selection.text ?? "").trim()) {
        return;
      }
      this.replaceNativeSelectionWithText(selection, overlay, value, editor.dataset.coverColor ?? sampledBackground);
    };
    editor.addEventListener("blur", commit);
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.closeNativeTextEditor(false);
      } else if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        commit();
      }
    });
    editor.addEventListener("input", () => {
    });
    appendToActiveBody(editor);
    this.nativeTextEditor = editor;
    focusTextEditor(editor);
  }
  openExistingTextEditor(textElement, overlay) {
    this.closeNativeTextEditor(false);
    this.suppressNativePdfPopupBurst();
    const overlayRect = this.getOverlayClientRect(overlay);
    const bounds = textBounds(textElement, overlay.cssWidth, overlay.cssHeight);
    const editor = activeDocument.createElement("textarea");
    editor.className = "pdftion-native-editor";
    editor.value = textElement.text;
    const estimatedWidth = estimateTextEditorWidth(editor.value, textElement.fontSize, bounds.maxX - bounds.minX);
    editor.setCssStyles({
      backgroundColor: "rgba(255, 255, 255, 0.92)",
      color: textElement.color,
      fontFamily: textElement.fontFamily ?? "sans-serif",
      fontSize: `${textElement.fontSize}px`,
      height: `${Math.max(24, bounds.maxY - bounds.minY + 8)}px`,
      left: `${overlayRect.left + bounds.minX}px`,
      lineHeight: "1.15",
      top: `${overlayRect.top + bounds.minY}px`,
      width: `${Math.min(Math.max(48, estimatedWidth + 24), Math.max(80, activeWindow.innerWidth - (overlayRect.left + bounds.minX) - 12))}px`
    });
    const commit = () => {
      if (this.nativeTextEditor !== editor) {
        return;
      }
      const value = editor.value.trim();
      this.closeNativeTextEditor(false);
      if (!value) {
        if (textElement.text.trim()) {
          this.rememberHistory();
        }
        this.removeElementById(textElement.id);
        this.selectedStrokeIds.delete(textElement.id);
        this.markDirty();
        this.redrawOverlay(overlay);
        this.scheduleAutoSave();
        return;
      }
      if (value === textElement.text.trim()) {
        return;
      }
      this.rememberHistory();
      textElement.text = value;
      textElement.saved = false;
      this.markDirty();
      this.redrawOverlay(overlay);
      this.scheduleAutoSave();
    };
    editor.addEventListener("blur", commit);
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.closeNativeTextEditor(false);
      } else if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        commit();
      }
    });
    editor.addEventListener("input", () => {
      editor.setCssStyles({ height: `${Math.max(24, editor.scrollHeight)}px` });
    });
    appendToActiveBody(editor);
    this.nativeTextEditor = editor;
    focusTextEditor(editor);
  }
  closeNativeTextEditor(commit) {
    const editor = this.nativeTextEditor;
    if (!editor) {
      return;
    }
    this.nativeTextEditor = null;
    const tempCover = this.nativeTextEditorCover;
    this.nativeTextEditorCover = null;
    if (commit) {
      editor.blur();
      return;
    }
    editor.remove();
    if (tempCover) {
      const overlay = this.findOverlayByPageIndex(tempCover.pageIndex);
      if (overlay) {
        this.redrawOverlay(overlay);
      }
    }
  }
  commitNativeTextEditor() {
    const editor = this.nativeTextEditor;
    if (!editor) {
      return;
    }
    editor.blur();
  }
  clearNativeTextSelectionTimer() {
    if (this.nativeTextSelectionTimer !== null) {
      window.clearTimeout(this.nativeTextSelectionTimer);
      this.nativeTextSelectionTimer = null;
    }
  }
  scheduleNativeTextSelectionMenu(delay = 100) {
    this.clearNativeTextSelectionTimer();
    this.nativeTextSelectionTimer = window.setTimeout(() => {
      this.nativeTextSelectionTimer = null;
      this.updateNativeTextSelectionMenu();
    }, delay);
  }
  updateNativeTextSelectionMenu() {
    if (this.nativeTextEditor) {
      this.hideNativeTextSelectionMenu();
      return;
    }
    const info = this.getNativeTextSelectionInfo();
    if (!info) {
      this.hideNativeTextSelectionMenu();
      return;
    }
    this.showNativeTextSelectionMenu(info);
  }
  getNativeTextSelectionInfo() {
    const selection = activeDocument.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return null;
    }
    const limits = getNativeSelectionLimits();
    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;
    if ((!anchorNode || !this.rootEl.contains(anchorNode)) && (!focusNode || !this.rootEl.contains(focusNode))) {
      return null;
    }
    const text = selection.toString().replace(/\s+/g, " ").trim();
    if (!text) {
      return null;
    }
    if (text.length > limits.maxChars) {
      if (limits.clearExcessive) {
        clearNativeSelectionSoon(selection);
      }
      return null;
    }
    const ranges = [];
    for (let index = 0; index < selection.rangeCount; index += 1) {
      ranges.push(selection.getRangeAt(index));
    }
    let best = null;
    for (const overlay of this.overlays.values()) {
      const overlayRect = this.getOverlayClientRect(overlay);
      const rects = [];
      let score = 0;
      let excessive = false;
      for (const range of ranges) {
        for (const rect of Array.from(range.getClientRects())) {
          const area = rectIntersectionArea(rect, overlayRect);
          if (area < 4) {
            continue;
          }
          const clipped = clipRectToBounds(rect, overlayRect);
          if (clipped.right - clipped.left < 2 || clipped.bottom - clipped.top < 2) {
            continue;
          }
          rects.push(clipped);
          score += area;
          if (rects.length > limits.maxRects) {
            excessive = true;
            break;
          }
        }
        if (excessive) {
          break;
        }
      }
      if (excessive) {
        if (limits.clearExcessive) {
          clearNativeSelectionSoon(selection);
        }
        return null;
      }
      if (rects.length === 0 || best && score <= best.score) {
        continue;
      }
      const union = unionRects(rects);
      const normalizedWidth = Math.max(1, overlayRect.width);
      const normalizedHeight = Math.max(1, overlayRect.height);
      const selectionAreaRatio = (union.right - union.left) * (union.bottom - union.top) / Math.max(1, normalizedWidth * normalizedHeight);
      const selectionHeightRatio = (union.bottom - union.top) / normalizedHeight;
      if (selectionAreaRatio > limits.maxAreaRatio || selectionHeightRatio > limits.maxHeightRatio) {
        if (limits.clearExcessive) {
          clearNativeSelectionSoon(selection);
        }
        return null;
      }
      const objects = rects.map((rect, index) => ({
        height: clamp((rect.bottom - rect.top) / normalizedHeight, 1e-3, 1),
        id: `native-text-selection-${overlay.pageIndex}-${index}`,
        kind: "text",
        pageIndex: overlay.pageIndex,
        text,
        width: clamp((rect.right - rect.left) / normalizedWidth, 1e-3, 1),
        x: clamp((rect.left - overlayRect.left) / normalizedWidth, 0, 1),
        y: clamp((rect.top - overlayRect.top) / normalizedHeight, 0, 1)
      }));
      best = { objects, overlay, rect: union, score };
    }
    return best ? { objects: best.objects, overlay: best.overlay, rect: best.rect, text } : null;
  }
  showNativeTextSelectionMenu(info) {
    this.nativeTextSelectionInfo = info;
    this.nativeTextSelectionMenu?.remove();
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-native-selection-menu";
    panel.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    panel.addEventListener("click", (event) => event.stopPropagation());
    const colorRow = activeDocument.createElement("div");
    colorRow.className = "pdftion-native-selection-colors";
    for (const color of TEXT_SELECTION_HIGHLIGHT_COLORS) {
      const button = activeDocument.createElement("button");
      button.className = "pdftion-native-selection-color";
      button.type = "button";
      button.title = uiText("\u9AD8\u4EAE", "Highlight");
      button.setAttribute("aria-label", uiText("\u9AD8\u4EAE", "Highlight"));
      button.setCssProps({ "--pdftion-selection-color": color });
      const swatch = activeDocument.createElement("span");
      swatch.setAttribute("aria-hidden", "true");
      button.appendChild(swatch);
      button.addEventListener("click", () => this.applyNativeTextHighlight(color));
      colorRow.appendChild(button);
    }
    const noColor = createIconButton("ban", uiText("\u65E0\u8272", "No highlight"));
    noColor.classList.add("pdftion-native-selection-color", "pdftion-native-selection-color-none");
    noColor.addEventListener("click", () => this.applyNativeTextNoHighlight());
    colorRow.appendChild(noColor);
    colorRow.appendChild(this.createNativeTextAdvancedColorButton());
    panel.appendChild(colorRow);
    const actionRow = activeDocument.createElement("div");
    actionRow.className = "pdftion-native-selection-actions";
    const copyText = createIconButton("type", uiText("\u590D\u5236\u6587\u5B57", "Copy text"));
    copyText.classList.add("pdftion-native-selection-action", "pdftion-native-selection-copy-text");
    copyText.addEventListener("click", () => void this.copyNativeTextSelectionText());
    actionRow.appendChild(copyText);
    const copyLink = createIconButton("link", uiText("\u590D\u5236 PDF \u94FE\u63A5", "Copy PDF link"));
    copyLink.classList.add("pdftion-native-selection-action", "pdftion-native-selection-copy-link");
    copyLink.addEventListener("click", () => void this.copyNativeTextSelectionLink());
    actionRow.appendChild(copyLink);
    panel.appendChild(actionRow);
    appendToActiveBody(panel);
    this.nativeTextSelectionMenu = panel;
    this.positionNativeTextSelectionMenu(info, panel);
  }
  createNativeTextAdvancedColorButton() {
    const button = activeDocument.createElement("button");
    button.className = "pdftion-native-selection-color pdftion-native-selection-color-advanced";
    button.type = "button";
    button.title = uiText("\u81EA\u5B9A\u4E49\u9AD8\u4EAE", "Custom highlight");
    button.setAttribute("aria-label", uiText("\u81EA\u5B9A\u4E49\u9AD8\u4EAE", "Custom highlight"));
    button.setCssProps({ "--pdftion-selection-current-color": normalizeHexColor(this.nativeTextHighlightColor) });
    const input = activeDocument.createElement("input");
    input.type = "color";
    input.value = normalizeHexColor(this.nativeTextHighlightColor);
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("input", () => {
      const color = normalizeHexColor(input.value);
      this.nativeTextHighlightColor = color;
      this.scheduleToolSettingsSave();
      this.applyNativeTextHighlight(color);
    });
    button.addEventListener("click", () => input.click());
    button.appendChild(input);
    return button;
  }
  positionNativeTextSelectionMenu(info, panel) {
    if (isTouchLikeViewport() && this.plugin.settings.nativeTextSelectionMenuAttachedToText) {
      panel.classList.add("is-mobile-attached");
      const centerX = info.rect.left + (info.rect.right - info.rect.left) / 2;
      panel.setCssStyles({
        bottom: "auto",
        left: `${clamp(centerX, 8, Math.max(8, activeWindow.innerWidth - 8))}px`,
        right: "auto",
        top: `${clamp(info.rect.bottom + 8, 8, Math.max(8, activeWindow.innerHeight - 8))}px`,
        transform: "translateX(-50%)"
      });
      window.requestAnimationFrame(() => {
        const menuRect = panel.getBoundingClientRect();
        let left = centerX - menuRect.width / 2;
        let top = info.rect.bottom + 8;
        if (top + menuRect.height > activeWindow.innerHeight - 8) {
          top = info.rect.top - menuRect.height - 8;
        }
        left = clamp(left, 8, Math.max(8, activeWindow.innerWidth - menuRect.width - 8));
        top = clamp(top, 8, Math.max(8, activeWindow.innerHeight - menuRect.height - 8));
        panel.setCssStyles({
          bottom: "auto",
          left: `${left}px`,
          right: "auto",
          top: `${top}px`,
          transform: "none"
        });
      });
      return;
    }
    panel.classList.remove("is-mobile-attached");
    panel.setCssStyles({
      bottom: "auto",
      left: `${clamp(info.rect.left, 8, Math.max(8, activeWindow.innerWidth - 8))}px`,
      top: `${clamp(info.rect.top - 40, 8, Math.max(8, activeWindow.innerHeight - 8))}px`,
      transform: "none"
    });
    window.requestAnimationFrame(() => {
      const menuRect = panel.getBoundingClientRect();
      let left = info.rect.left + (info.rect.right - info.rect.left) / 2 - menuRect.width / 2;
      let top = info.rect.top - menuRect.height - 8;
      if (top < 8) {
        top = info.rect.bottom + 8;
      }
      left = clamp(left, 8, Math.max(8, activeWindow.innerWidth - menuRect.width - 8));
      top = clamp(top, 8, Math.max(8, activeWindow.innerHeight - menuRect.height - 8));
      panel.setCssStyles({ left: `${left}px`, top: `${top}px` });
    });
  }
  hideNativeTextSelectionMenu() {
    this.nativeTextSelectionMenu?.remove();
    this.nativeTextSelectionMenu = null;
    this.nativeTextSelectionInfo = null;
    this.nativeTextAutoHighlight = null;
  }
  applyNativeTextHighlight(color) {
    const info = this.nativeTextSelectionInfo;
    if (!info) {
      return;
    }
    const normalizedColor = normalizeHexColor(color);
    this.nativeTextHighlightColor = normalizedColor;
    this.nativeTextSelectionAction = "highlight";
    this.scheduleToolSettingsSave();
    const selectionKey = this.getNativeTextSelectionKey(info);
    const pending = this.nativeTextAutoHighlight?.key === selectionKey ? this.nativeTextAutoHighlight : null;
    const collapsed = this.collapseNativeTextHighlightCovers(info, this.findNativeTextHighlightCovers(info));
    const pendingCovers = collapsed.kept;
    if (pendingCovers.length === 0) {
      this.ensureNativeTextAutoHighlight(info, normalizedColor);
    } else if (collapsed.duplicates.length > 0 || pendingCovers.some((cover) => normalizeHexColor(cover.color) !== normalizedColor)) {
      this.rememberHistory();
      const duplicateIds = new Set(collapsed.duplicates.map((cover) => cover.id));
      this.coverHistory = this.coverHistory.filter((cover) => !duplicateIds.has(cover.id));
      for (const cover of pendingCovers) {
        cover.color = normalizedColor;
        cover.saved = false;
      }
      this.redoStack = [];
      this.markDirty();
      this.redrawOverlay(info.overlay);
      this.scheduleAutoSave();
    }
    const currentCovers = this.findNativeTextHighlightCovers(info);
    this.nativeTextAutoHighlight = {
      createdIds: pending?.createdIds ?? currentCovers.map((cover) => cover.id),
      ids: currentCovers.map((cover) => cover.id),
      key: selectionKey,
      pageIndex: info.overlay.pageIndex
    };
    activeDocument.getSelection()?.removeAllRanges();
    this.hideNativeTextSelectionMenu();
  }
  applyNativeTextNoHighlight() {
    const info = this.nativeTextSelectionInfo;
    if (!info) {
      return;
    }
    this.nativeTextSelectionAction = "copy";
    this.scheduleToolSettingsSave();
    const covers = this.findNativeTextHighlightCovers(info);
    if (covers.length > 0) {
      this.rememberHistory();
      const ids = new Set(covers.map((cover) => cover.id));
      this.coverHistory = this.coverHistory.filter((cover) => !ids.has(cover.id));
      this.redoStack = [];
      this.markDirty();
      this.redrawOverlay(info.overlay);
      this.scheduleAutoSave();
    }
    this.nativeTextAutoHighlight = null;
    activeDocument.getSelection()?.removeAllRanges();
    this.hideNativeTextSelectionMenu();
  }
  ensureNativeTextAutoHighlight(info, color = this.nativeTextHighlightColor) {
    const selectionKey = this.getNativeTextSelectionKey(info);
    const collapsed = this.collapseNativeTextHighlightCovers(info, this.findNativeTextHighlightCovers(info));
    const existing = collapsed.kept;
    const missing = info.objects.filter((object) => !existing.some((cover) => this.nativeTextHighlightMatchesObject(cover, object, info.overlay)));
    if (missing.length === 0 && collapsed.duplicates.length === 0) {
      this.nativeTextAutoHighlight = {
        createdIds: [],
        ids: existing.map((cover) => cover.id),
        key: selectionKey,
        pageIndex: info.overlay.pageIndex
      };
      return;
    }
    this.rememberHistory();
    const duplicateIds = new Set(collapsed.duplicates.map((cover) => cover.id));
    this.coverHistory = this.coverHistory.filter((cover) => !duplicateIds.has(cover.id));
    const normalizedColor = normalizeHexColor(color);
    const createdIds = missing.map((object) => {
      const id = makeStrokeId();
      this.coverHistory.push({
        color: normalizedColor,
        height: object.height,
        id,
        kind: "cover",
        opacity: 0.36,
        pageCssHeight: info.overlay.cssHeight,
        pageCssWidth: info.overlay.cssWidth,
        pageIndex: info.overlay.pageIndex,
        saved: false,
        source: "native-text",
        width: object.width,
        x: object.x,
        y: object.y
      });
      return id;
    });
    this.nativeTextAutoHighlight = {
      createdIds,
      ids: [...existing.map((cover) => cover.id), ...createdIds],
      key: selectionKey,
      pageIndex: info.overlay.pageIndex
    };
    this.redoStack = [];
    this.markDirty();
    this.redrawOverlay(info.overlay);
    this.scheduleAutoSave();
  }
  findNativeTextHighlightCovers(info) {
    return this.coverHistory.filter((cover) => cover.pageIndex === info.overlay.pageIndex && cover.source === "native-text" && cover.opacity < 0.9 && info.objects.some((object) => this.nativeTextHighlightMatchesObject(cover, object, info.overlay)));
  }
  collapseNativeTextHighlightCovers(info, covers) {
    const keptByObject = /* @__PURE__ */ new Map();
    const duplicates = [];
    for (const cover of covers) {
      const objectIndex = info.objects.findIndex((object) => this.nativeTextHighlightMatchesObject(cover, object, info.overlay));
      if (objectIndex < 0) {
        continue;
      }
      const previous = keptByObject.get(objectIndex);
      if (previous) {
        duplicates.push(previous);
      }
      keptByObject.set(objectIndex, cover);
    }
    return {
      duplicates,
      kept: Array.from(keptByObject.entries()).sort((a, b) => a[0] - b[0]).map(([, cover]) => cover)
    };
  }
  nativeTextHighlightMatchesObject(cover, object, overlay) {
    const toleranceX = Math.max(3 / Math.max(1, overlay.cssWidth), 2e-3);
    const toleranceY = Math.max(3 / Math.max(1, overlay.cssHeight), 2e-3);
    const coverRight = cover.x + cover.width;
    const coverBottom = cover.y + cover.height;
    const objectRight = object.x + object.width;
    const objectBottom = object.y + object.height;
    const overlapWidth = Math.max(0, Math.min(coverRight, objectRight) - Math.max(cover.x, object.x));
    const overlapHeight = Math.max(0, Math.min(coverBottom, objectBottom) - Math.max(cover.y, object.y));
    const horizontalOverlap = overlapWidth / Math.max(toleranceX, Math.min(cover.width, object.width));
    const verticalOverlap = overlapHeight / Math.max(toleranceY, Math.min(cover.height, object.height));
    return horizontalOverlap >= 0.55 && verticalOverlap >= 0.6;
  }
  getNativeTextSelectionKey(info) {
    const geometry = info.objects.map((object) => [object.x, object.y, object.width, object.height].map((value) => value.toFixed(5)).join(",")).join(";");
    return `${info.overlay.pageIndex}:${geometry}:${info.text}`;
  }
  prepareNativeTextCopy(info) {
    this.nativeTextSelectionAction = "copy";
    this.scheduleToolSettingsSave();
    const pending = this.nativeTextAutoHighlight;
    if (!pending || pending.key !== this.getNativeTextSelectionKey(info)) {
      return;
    }
    const ids = new Set(pending.createdIds);
    if (this.coverHistory.some((cover) => ids.has(cover.id))) {
      this.rememberHistory();
      this.coverHistory = this.coverHistory.filter((cover) => !ids.has(cover.id));
      this.redoStack = [];
      this.markDirty();
      this.redrawOverlay(info.overlay);
      this.scheduleAutoSave();
    }
    this.nativeTextAutoHighlight = null;
  }
  async copyNativeTextSelectionLink() {
    const info = this.nativeTextSelectionInfo;
    if (!info) {
      return;
    }
    this.prepareNativeTextCopy(info);
    const link = buildPdfSelectionWikilink(this.file, info.overlay.pageIndex, info.text);
    if (await this.copyTextToClipboard(link, uiText("Copied PDF text link.", "Copied PDF text link."))) {
      this.hideNativeTextSelectionMenu();
      activeDocument.getSelection()?.removeAllRanges();
      return;
    }
    this.showManualCopyPanel(link, uiText("PDF \u94FE\u63A5", "PDF link"));
  }
  async copyNativeTextSelectionText() {
    const info = this.nativeTextSelectionInfo;
    if (!info) {
      return;
    }
    this.prepareNativeTextCopy(info);
    if (await this.copyTextToClipboard(info.text, uiText("Copied PDF text.", "Copied PDF text."))) {
      this.hideNativeTextSelectionMenu();
      activeDocument.getSelection()?.removeAllRanges();
      return;
    }
    this.showManualCopyPanel(info.text, uiText("PDF \u6587\u5B57", "PDF text"));
  }
  async copyTextToClipboard(value, successMessage) {
    try {
      if (!activeWindow.navigator.clipboard?.writeText) {
        return false;
      }
      await activeWindow.navigator.clipboard.writeText(value);
      new import_obsidian.Notice(successMessage);
      return true;
    } catch (error) {
      console.warn("pdftion clipboard write failed; showing manual copy panel.", error);
      return false;
    }
  }
  showManualCopyPanel(value, title) {
    const info = this.nativeTextSelectionInfo;
    this.nativeTextSelectionMenu?.remove();
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-native-selection-menu pdftion-native-selection-copy-panel";
    panel.addEventListener("pointerdown", (event) => {
      if (isHTMLElement(event.target) && event.target.closest("textarea")) {
        event.stopPropagation();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    });
    panel.addEventListener("click", (event) => event.stopPropagation());
    const header = activeDocument.createElement("div");
    header.className = "pdftion-native-selection-copy-title";
    header.textContent = title;
    panel.appendChild(header);
    const textarea = activeDocument.createElement("textarea");
    textarea.className = "pdftion-native-selection-copy-value";
    textarea.readOnly = true;
    textarea.rows = clamp(value.split(/\r?\n/).length, 2, 6);
    textarea.value = value;
    panel.appendChild(textarea);
    const closeButton = createIconButton("x", uiText("\u5173\u95ED", "Close"));
    closeButton.classList.add("pdftion-native-selection-action");
    closeButton.addEventListener("click", () => {
      activeDocument.getSelection()?.removeAllRanges();
      this.hideNativeTextSelectionMenu();
    });
    panel.appendChild(closeButton);
    appendToActiveBody(panel);
    this.nativeTextSelectionMenu = panel;
    if (info) {
      this.positionNativeTextSelectionMenu(info, panel);
    }
    focusTextEditor(textarea);
    new import_obsidian.Notice(uiText("\u5DF2\u663E\u793A\u53EF\u590D\u5236\u5185\u5BB9\u3002", "Text is ready to copy."));
  }
  replaceNativeSelectionWithText(selection, overlay, text, backgroundColor) {
    const coverLayer = this.getNextLayerIndex(selection.pageIndex);
    const cover = this.createNativeTextCover(selection, overlay, backgroundColor, false, coverLayer);
    const textElement = {
      color: readableTextColor(backgroundColor),
      fontSize: Math.max(6, selection.height * overlay.cssHeight * 0.82),
      id: makeStrokeId(),
      kind: "text",
      opacity: this.textOpacity,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: selection.pageIndex,
      saved: false,
      text,
      x: selection.x,
      y: selection.y,
      zIndex: coverLayer + 1
    };
    this.rememberHistory();
    this.coverHistory.push(cover);
    this.textHistory.push(textElement);
    this.clearEditableSelection();
    this.redoStack = [];
    this.markDirty();
    this.redrawOverlay(overlay);
    this.scheduleAutoSave();
  }
  createNativeTextCover(selection, overlay, backgroundColor, saved, zIndex = this.getNextLayerIndex(selection.pageIndex)) {
    return expandCoverToHideNativeText({
      color: cssColorToHex(backgroundColor) ?? "#ffffff",
      height: selection.height,
      id: makeStrokeId(),
      kind: "cover",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: selection.pageIndex,
      saved,
      source: "native-text",
      width: selection.width,
      x: selection.x,
      y: selection.y,
      zIndex
    }, overlay);
  }
  samplePdfBackgroundColor(overlay, selection) {
    const pdfCanvas = this.getPdfCanvas(overlay);
    if (!pdfCanvas) {
      return "#ffffff";
    }
    try {
      const ctx = pdfCanvas.getContext("2d");
      if (!ctx) {
        return "#ffffff";
      }
      const samples = [
        { x: selection.x + selection.width * 0.08, y: selection.y + selection.height * 0.12 },
        { x: selection.x + selection.width * 0.92, y: selection.y + selection.height * 0.12 },
        { x: selection.x + selection.width * 0.08, y: selection.y + selection.height * 0.88 },
        { x: selection.x + selection.width * 0.92, y: selection.y + selection.height * 0.88 },
        { x: selection.x + selection.width * 0.5, y: selection.y + selection.height * 0.08 },
        { x: selection.x + selection.width * 0.5, y: selection.y + selection.height * 0.92 },
        { x: selection.x + selection.width * 0.02, y: selection.y + selection.height * 0.5 },
        { x: selection.x + selection.width * 0.98, y: selection.y + selection.height * 0.5 }
      ];
      const colors = samples.map((sample) => {
        const x = clamp(sample.x * pdfCanvas.width, 0, Math.max(0, pdfCanvas.width - 1));
        const y = clamp(sample.y * pdfCanvas.height, 0, Math.max(0, pdfCanvas.height - 1));
        const data = ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
        return { b: data[2], g: data[1], luminance: 0.299 * data[0] + 0.587 * data[1] + 0.114 * data[2], r: data[0] };
      });
      const candidate = colors.some((color) => color.luminance > 220) ? colors.filter((color) => color.luminance > 220).sort((a, b) => b.luminance - a.luminance)[0] : colors.some((color) => color.luminance < 35) ? colors.filter((color) => color.luminance < 35).sort((a, b) => a.luminance - b.luminance)[0] : colors.sort((a, b) => a.luminance - b.luminance)[Math.floor(colors.length / 2)];
      return rgbToHex(candidate.r, candidate.g, candidate.b);
    } catch {
      return "#ffffff";
    }
  }
  getPdfCanvas(overlay) {
    const viewer = this.getNativePdfViewerApp()?.pdfViewer;
    const pageViewCanvas = viewer?.getPageView?.(overlay.pageIndex)?.canvas ?? viewer?._pages?.[overlay.pageIndex]?.canvas ?? null;
    const wrappedCanvas = overlay.pageEl.querySelector(
      ".canvasWrapper canvas:not(.pdftion-canvas), .notedraw-static-canvas:not(.pdftion-canvas)"
    );
    const candidates = Array.from(new Set([
      pageViewCanvas,
      wrappedCanvas,
      overlay.observedCanvas ?? null,
      ...Array.from(overlay.pageEl.querySelectorAll("canvas"))
    ].filter((canvas) => canvas !== null && !canvas.classList.contains("pdftion-canvas") && canvas.closest(".annotationLayer, .annotationEditorLayer") === null)));
    return candidates.filter((canvas) => canvas.width > 1 && canvas.height > 1).sort((a, b) => {
      const score = (canvas) => {
        const nativePriority = canvas === pageViewCanvas ? 1e9 : 0;
        const wrapperPriority = canvas === wrappedCanvas || canvas.closest(".canvasWrapper") !== null ? 1e8 : 0;
        const visibleContent = measureCanvasVisualRatio(canvas) * 1e7;
        return nativePriority + wrapperPriority + visibleContent + canvas.width * canvas.height;
      };
      return score(b) - score(a);
    })[0] ?? candidates[0] ?? null;
  }
  async renderPdfPageCanvasForExport(overlay) {
    if (this.exportRenderFallbackPages.has(overlay.pageIndex)) {
      return this.getPdfCanvas(overlay);
    }
    const viewer = this.getNativePdfViewerApp()?.pdfViewer;
    const pageView = viewer?.getPageView?.(overlay.pageIndex) ?? viewer?._pages?.[overlay.pageIndex] ?? null;
    const pdfPage = pageView?.pdfPage;
    const viewport = pageView?.viewport;
    if (!pdfPage?.render || !viewport?.width || !viewport.height) {
      return this.getPdfCanvas(overlay);
    }
    const maxSize = 1200;
    const outputScale = Math.min(2, maxSize / Math.max(viewport.width, viewport.height));
    const canvas = activeDocument.createElement("canvas");
    canvas.width = Math.max(1, Math.round(viewport.width * outputScale));
    canvas.height = Math.max(1, Math.round(viewport.height * outputScale));
    const context = canvas.getContext("2d");
    if (!context) {
      return this.getPdfCanvas(overlay);
    }
    try {
      const task = pdfPage.render({
        canvas,
        canvasContext: context,
        intent: "print",
        transform: outputScale === 1 ? void 0 : [outputScale, 0, 0, outputScale, 0, 0],
        viewport
      });
      const renderPromise = task && "promise" in task && task.promise ? task.promise : Promise.resolve(task);
      const completed = await Promise.race([
        renderPromise.then(() => true),
        sleepMs(8e3).then(() => false)
      ]);
      if (!completed) {
        this.exportRenderFallbackPages.add(overlay.pageIndex);
        if (task && "cancel" in task && typeof task.cancel === "function") {
          task.cancel();
        }
        await Promise.race([renderPromise.catch(() => void 0), sleepMs(250)]);
        console.warn("pdftion timed out rendering an offscreen PDF page; using the displayed canvas.", overlay.pageIndex + 1);
        return this.getPdfCanvas(overlay);
      }
      return canvas;
    } catch (error) {
      this.exportRenderFallbackPages.add(overlay.pageIndex);
      console.warn("pdftion could not render an offscreen PDF page for conversion.", error);
      return this.getPdfCanvas(overlay);
    }
  }
  blockNativePdfAnnotationEvent(event) {
    if (!this.enabled) {
      return;
    }
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    const target = event.target;
    const insideSession = path.some((value) => value === this.rootEl || isHTMLElement(value) && this.rootEl.contains(value));
    const targetElement = isHTMLElement(target) ? target : null;
    const popupTriggerEvent = ["click", "contextmenu", "dblclick", "focusin", "mousedown", "pointerdown", "touchstart"].includes(event.type);
    const fromPdftionInteraction = path.some((value) => isHTMLElement(value) && value.closest(
      ".pdftion-live-canvas, .pdftion-native-editor, .pdftion-native-selection-menu, .pdftion-palette-panel, .pdftion-text-menu, .pdftion-comment-popover, .pdftion-panel"
    ) !== null);
    if (!insideSession && !fromPdftionInteraction && !(targetElement && (this.isNativePdfAnnotationPopup(targetElement) || this.looksLikeNativeAnnotationMenu(targetElement)))) {
      return;
    }
    if (fromPdftionInteraction) {
      if (popupTriggerEvent) {
        this.suppressNativePdfPopupBurst();
      } else {
        this.hideNativePdfAnnotationPopups();
      }
      return;
    }
    const fromNativeAnnotation = path.some((value) => isHTMLElement(value) && this.isNativePdfAnnotationElement(value));
    const fromNativePopup = targetElement !== null && (this.isNativePdfAnnotationPopup(targetElement) || this.looksLikeNativeAnnotationMenu(targetElement));
    if (!fromNativeAnnotation && !fromNativePopup) {
      if (popupTriggerEvent) {
        this.suppressNativePdfPopupBurst();
      } else {
        this.hideNativePdfAnnotationPopups();
      }
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
    this.suppressNativePdfPopupBurst();
  }
  hideNativePdfAnnotationPopups() {
    const rootRect = this.rootEl.getBoundingClientRect();
    const genericSuppressionActive = this.nativeTextEditor !== null || Date.now() <= this.nativePopupSuppressUntil;
    const selectors = [
      ".annotationLayer .popupWrapper",
      ".annotationLayer .popup",
      ".annotationEditorLayer .popupWrapper",
      ".annotationEditorLayer .popup",
      ".annotationEditorParams",
      ".annotationEditorToolbar",
      ".editorParamsToolbar",
      ".pdf-annotation-popup",
      ".pdf-annotation-menu",
      ".pdfAnnotationPopup",
      ".popupAnnotation",
      ".popover",
      ".hover-popover",
      ".menu",
      "[role='menu']"
    ];
    for (const candidate of Array.from(activeDocument.querySelectorAll(selectors.join(",")))) {
      if (candidate.closest(".pdftion-root, .pdftion-toolbar, .pdftion-panel, .pdftion-palette-panel, .pdftion-text-menu, .pdftion-comment-popover, .pdftion-native-selection-menu")) {
        continue;
      }
      const rect = candidate.getBoundingClientRect();
      const nearSession = rectsOverlap(
        {
          bottom: rootRect.bottom + 80,
          left: rootRect.left - 80,
          right: rootRect.right + 80,
          top: rootRect.top - 80
        },
        rect
      );
      if (!nearSession && !this.isNativePdfAnnotationPopup(candidate)) {
        continue;
      }
      const genericNearbyMenu = genericSuppressionActive && candidate.matches(".menu, .popover, .hover-popover, [role='menu']");
      if (!this.isNativePdfAnnotationPopup(candidate) && !this.looksLikeNativeAnnotationMenu(candidate) && !genericNearbyMenu) {
        continue;
      }
      candidate.classList.add("pdftion-hide-native-popup");
      candidate.setAttribute("aria-hidden", "true");
    }
  }
  isNativePdfAnnotationElement(element) {
    return element.closest(
      ".annotationLayer, .annotationEditorLayer, .annotationEditorParams, .annotationEditorToolbar, .editorParamsToolbar, .popupAnnotation, [data-annotation-id], [data-pdf-annotation-id]"
    ) !== null;
  }
  isNativePdfAnnotationPopup(element) {
    return element.closest(
      ".annotationLayer .popupWrapper, .annotationLayer .popup, .annotationEditorLayer .popupWrapper, .annotationEditorLayer .popup, .annotationEditorParams, .annotationEditorToolbar, .editorParamsToolbar, .pdf-annotation-popup, .pdf-annotation-menu, .pdfAnnotationPopup, .popupAnnotation"
    ) !== null;
  }
  looksLikeNativeAnnotationMenu(element) {
    const text = (element.textContent ?? "").trim();
    if (!text) {
      return Date.now() <= this.nativePopupSuppressUntil && element.closest(".menu, .popover, .hover-popover, [role='menu']") !== null;
    }
    if (text.length > 120) {
      return false;
    }
    return /复制|信息|注释|批注|copy|info|annotation/i.test(text);
  }
  beginSelectionInteraction(point, overlay, hitElement = this.findElementAt(overlay, point), selectedElements = this.getSelectedEditableElements(overlay.pageIndex), selectionBounds = normalizedElementsBounds(selectedElements), selectionHandle = selectionBounds ? this.findSelectionHandleAt(overlay, point, selectionBounds) : null) {
    if (selectionHandle && this.canDragSelectedElements(overlay.pageIndex, selectedElements)) {
      const selected2 = selectedElements;
      const bounds = selectionBounds;
      if (selected2.length > 0 && bounds) {
        this.selectionDrag = {
          current: point,
          elements: selected2,
          handle: selectionHandle,
          mode: "resize",
          moved: false,
          originalBounds: bounds,
          originalElements: selected2.map(cloneElement),
          pageIndex: overlay.pageIndex,
          start: point
        };
        this.redrawSelectionState();
        return;
      }
    }
    const selected = hitElement;
    if (selected) {
      if (!this.selectedStrokeIds.has(selected.id)) {
        this.setSelectedElementForEditing(selected);
        const dragElements = [selected];
        this.selectionDrag = this.canDragSelectedElements(overlay.pageIndex, dragElements) ? {
          current: point,
          elements: dragElements,
          mode: "move",
          moved: false,
          pageIndex: overlay.pageIndex,
          start: point
        } : null;
        this.redrawSelectionState();
        return;
      }
      if (!this.canDragSelectedElements(overlay.pageIndex, selectedElements)) {
        this.nativeSelection = null;
        this.selectionDrag = null;
        this.redrawSelectionState();
        return;
      }
      this.nativeSelection = null;
      this.selectionDrag = {
        current: point,
        elements: selectedElements,
        mode: "move",
        moved: false,
        pageIndex: overlay.pageIndex,
        start: point
      };
      this.redrawSelectionState();
      return;
    }
    if (selectedElements.length > 0 && selectionBounds && this.selectionBoxContainsPoint(overlay, point, selectionBounds) && this.canDragSelectedElements(overlay.pageIndex, selectedElements)) {
      this.nativeSelection = null;
      this.selectionDrag = {
        clearSelectionOnTap: true,
        current: point,
        elements: selectedElements,
        mode: "move",
        moved: false,
        pageIndex: overlay.pageIndex,
        start: point
      };
      this.redrawSelectionState();
      return;
    }
    if (!selected) {
      if (this.selectedStrokeIds.size > 0 || this.nativeSelection !== null) {
        this.clearEditableSelection();
        this.selectionDrag = null;
        this.redrawSelectionState();
        return;
      }
      const blockingCover = this.findCoverElementAt(overlay, point, true);
      if (blockingCover?.source === "native-text") {
        this.clearEditableSelection();
        this.selectionDrag = null;
        this.redrawSelectionState();
        return;
      }
      const native = this.findNativeObjectAt(overlay, point);
      if (native) {
        this.clearEditableSelection();
        this.nativeSelection = native;
        this.selectionDrag = null;
        this.redrawSelectionState();
        return;
      }
      this.clearEditableSelection();
      this.selectionDrag = {
        current: point,
        mode: "marquee",
        moved: false,
        pageIndex: overlay.pageIndex,
        start: point
      };
    } else {
      this.selectionDrag = null;
    }
    this.redrawSelectionState();
  }
  startLayerLongPress(overlay, point, clientX, clientY, hitElement = this.findElementAt(overlay, point)) {
    this.clearLayerLongPress();
    this.layerMenu?.remove();
    this.layerMenu = null;
    const element = hitElement;
    if (!element) {
      return;
    }
    this.layerLongPressStart = { clientX, clientY, elementId: element.id, pageIndex: overlay.pageIndex };
    this.layerLongPressTimer = window.setTimeout(() => {
      this.layerLongPressTimer = null;
      const start = this.layerLongPressStart;
      const live = start ? this.findElementById(start.elementId) : null;
      const liveOverlay = start ? this.findOverlayByPageIndex(start.pageIndex) : null;
      if (!start || !live || !liveOverlay || !this.enabled) {
        this.layerLongPressStart = null;
        return;
      }
      this.layerLongPressTriggered = true;
      this.clearCurrentStroke();
      this.currentCover = null;
      this.selectionDrag = null;
      this.setSingleSelectedElement(live.id);
      this.showLayerMenuForElement(live, liveOverlay);
      this.redrawAll();
      this.updateToolbarState();
    }, 520);
  }
  cancelLayerLongPressOnMove(clientX, clientY) {
    const start = this.layerLongPressStart;
    if (!start || this.layerLongPressTriggered) {
      return;
    }
    if (Math.hypot(clientX - start.clientX, clientY - start.clientY) > 9) {
      this.clearLayerLongPress();
    }
  }
  clearLayerLongPress() {
    if (this.layerLongPressTimer !== null) {
      window.clearTimeout(this.layerLongPressTimer);
      this.layerLongPressTimer = null;
    }
    this.layerLongPressStart = null;
  }
  consumeLayerLongPress() {
    this.clearLayerLongPress();
    if (!this.layerLongPressTriggered) {
      return false;
    }
    this.layerLongPressTriggered = false;
    return true;
  }
  showLayerMenuForElement(element, overlay) {
    this.layerMenu?.remove();
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-layer-menu";
    panel.setAttribute("role", "toolbar");
    panel.setAttribute("aria-label", uiText("\u5143\u7D20\u5C42\u7EA7", "Element layer"));
    panel.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    panel.addEventListener("click", (event) => event.stopPropagation());
    const actions = [
      { icon: "arrow-up", mode: "up", title: uiText("\u4E0A\u79FB\u4E00\u5C42", "Move one layer up") },
      { icon: "arrow-down", mode: "down", title: uiText("\u4E0B\u79FB\u4E00\u5C42", "Move one layer down") },
      { icon: "chevrons-up", mode: "top", title: uiText("\u7F6E\u4E8E\u9876\u5C42", "Bring to front") },
      { icon: "chevrons-down", mode: "bottom", title: uiText("\u7F6E\u4E8E\u5E95\u5C42", "Send to back") }
    ];
    for (const action of actions) {
      const button = createIconButton(action.icon, action.title);
      button.addEventListener("click", () => {
        this.reorderSelectedLayers(action.mode);
        panel.remove();
        this.layerMenu = null;
      });
      panel.appendChild(button);
    }
    appendToActiveBody(panel);
    const bounds = normalizedElementBounds(element);
    const rect = this.getOverlayClientRect(overlay);
    const menuWidth = 4 * 30 + 3 * 5 + 12;
    const menuHeight = 42;
    const centerX = bounds ? rect.left + (bounds.minX + bounds.maxX) / 2 * rect.width : rect.left + rect.width / 2;
    const elementTop = bounds ? rect.top + bounds.minY * rect.height : rect.top;
    const elementBottom = bounds ? rect.top + bounds.maxY * rect.height : rect.bottom;
    const top = elementTop - menuHeight - 7 >= 8 ? elementTop - menuHeight - 7 : elementBottom + 7;
    panel.setCssStyles({
      left: `${clamp(centerX - menuWidth / 2, 8, Math.max(8, activeWindow.innerWidth - menuWidth - 8))}px`,
      top: `${clamp(top, 8, Math.max(8, activeWindow.innerHeight - menuHeight - 8))}px`
    });
    this.layerMenu = panel;
  }
  togglePalette() {
    if (this.palette?.isConnected) {
      this.palette.remove();
      this.palette = null;
      return;
    }
    this.showPalette();
  }
  showPalette() {
    this.palette?.remove();
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-palette-panel";
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    panel.addEventListener("click", (event) => event.stopPropagation());
    if (this.hasEditableSelection()) {
      panel.appendChild(this.createPaletteSelectionGroup());
    } else if (this.tool === "eraser") {
      panel.appendChild(
        this.createPaletteRange(uiText("\u6A61\u76AE", "Eraser"), "eraser", "pdftion-width-eraser", 2, 120, 1, this.eraserWidth, (value) => {
          this.eraserWidth = value;
          this.scheduleToolSettingsSave();
        })
      );
    } else if (this.tool === "highlight") {
      panel.appendChild(this.createPaletteToolGroup("highlight", uiText("\u6C34\u5F69", "Highlighter")));
    } else if (this.hasSelectedText()) {
      panel.appendChild(this.createPaletteTextGroup());
    } else if (this.tool === "text" || this.tool === "comment") {
      panel.appendChild(this.createPaletteTextGroup());
    } else {
      panel.appendChild(this.createPaletteToolGroup("pen", uiText("\u7B14", "Pen")));
    }
    activeDocument.body.appendChild(panel);
    this.palette = panel;
    this.positionPalettePanel(panel);
    this.updateToolbarState();
  }
  positionPalettePanel(panel) {
    const button = this.toolbar?.querySelector(".pdftion-palette-button");
    const gap = 8;
    const fallbackTop = Math.max(76, (this.toolbarHost?.getBoundingClientRect().bottom ?? 68) + gap);
    panel.classList.remove("is-mobile-bottom");
    panel.setCssStyles({
      bottom: "auto",
      right: `${Math.max(8, activeWindow.innerWidth - (button?.getBoundingClientRect().right ?? activeWindow.innerWidth - 12))}px`,
      top: `${fallbackTop}px`,
      transform: "none"
    });
    window.requestAnimationFrame(() => {
      const rect = panel.getBoundingClientRect();
      const buttonRect = button?.getBoundingClientRect();
      let left = buttonRect ? buttonRect.right - rect.width : activeWindow.innerWidth - rect.width - 12;
      let top = buttonRect ? buttonRect.bottom + gap : fallbackTop;
      left = clamp(left, 8, Math.max(8, activeWindow.innerWidth - rect.width - 8));
      if (buttonRect && top + rect.height > activeWindow.innerHeight - 8) {
        top = buttonRect.top - rect.height - gap;
      }
      top = clamp(top, 8, Math.max(8, activeWindow.innerHeight - rect.height - 8));
      panel.setCssStyles({
        bottom: "auto",
        left: `${left}px`,
        right: "auto",
        top: `${top}px`,
        transform: "none"
      });
    });
  }
  createPaletteToolGroup(tool, title) {
    const group = activeDocument.createElement("div");
    group.className = "pdftion-palette-group";
    group.setAttribute("aria-label", title);
    group.title = title;
    const colorRow = activeDocument.createElement("div");
    colorRow.className = "pdftion-palette-colors";
    for (const swatch of PALETTE_COLORS) {
      const colorButton = this.createPaletteColorButton(swatch, tool);
      colorButton.addEventListener("click", () => {
        this.setToolColor(tool, swatch);
        this.updateToolbarState();
      });
      colorRow.appendChild(colorButton);
    }
    colorRow.appendChild(this.createAdvancedColorInput(tool, this.getToolColor(tool), (color) => this.setToolColor(tool, color)));
    group.appendChild(colorRow);
    group.appendChild(
      this.createPaletteRange(uiText("\u5927\u5C0F", "Size"), "maximize-2", `pdftion-width-${tool}`, tool === "highlight" ? 2 : 0.5, tool === "highlight" ? 96 : 72, 0.5, this.getToolWidth(tool), (value) => {
        this.setToolWidth(tool, value);
      })
    );
    group.appendChild(
      this.createPaletteRange(uiText("\u900F\u660E", "Alpha"), "droplet", `pdftion-opacity-${tool}`, 0.05, 1, 0.05, this.getToolOpacity(tool), (value) => {
        this.setToolOpacity(tool, value);
      })
    );
    return group;
  }
  createPaletteTextGroup() {
    const group = activeDocument.createElement("div");
    group.className = "pdftion-palette-group";
    group.setAttribute("aria-label", uiText("\u6587\u5B57", "Text"));
    group.title = uiText("\u6587\u5B57", "Text");
    const colorRow = activeDocument.createElement("div");
    colorRow.className = "pdftion-palette-colors";
    for (const swatch of PALETTE_COLORS) {
      const colorButton = this.createPaletteColorButton(swatch, "text");
      colorButton.addEventListener("click", () => {
        this.setTextPaletteColor(swatch);
        this.updateToolbarState();
      });
      colorRow.appendChild(colorButton);
    }
    colorRow.appendChild(this.createAdvancedColorInput("text", this.getTextPaletteColor(), (color) => this.setTextPaletteColor(color)));
    group.appendChild(colorRow);
    const fontRow = activeDocument.createElement("label");
    fontRow.className = "pdftion-palette-range";
    fontRow.title = uiText("\u5B57\u4F53", "Font");
    const fontLabel = activeDocument.createElement("span");
    fontLabel.className = "pdftion-palette-icon";
    fontLabel.setAttribute("aria-hidden", "true");
    (0, import_obsidian.setIcon)(fontLabel, "type");
    fontRow.appendChild(fontLabel);
    const fontButton = createIconButton("case-sensitive", uiText("\u5B57\u4F53", "Font"));
    fontButton.classList.add("pdftion-font-family");
    this.updateFontButtonTitle(fontButton);
    fontButton.addEventListener("click", () => {
      const current = this.getTextPaletteFontFamily();
      const index = TEXT_FONTS.findIndex((font) => font.value === current);
      const next = TEXT_FONTS[(index + 1) % TEXT_FONTS.length] ?? TEXT_FONTS[0];
      this.setTextPaletteFontFamily(next.value);
      this.updateFontButtonTitle(fontButton);
      this.updateToolbarState();
    });
    fontRow.appendChild(fontButton);
    group.appendChild(fontRow);
    group.appendChild(
      this.createPaletteRange(uiText("\u5927\u5C0F", "Size"), "maximize-2", "pdftion-size-text", 6, 120, 1, this.getTextPaletteFontSize(), (value) => this.setTextPaletteFontSize(value))
    );
    group.appendChild(
      this.createPaletteRange(uiText("\u900F\u660E", "Alpha"), "droplet", "pdftion-opacity-text", 0.05, 1, 0.05, this.getTextPaletteOpacity(), (value) => this.setTextPaletteOpacity(value))
    );
    return group;
  }
  updateFontButtonTitle(button) {
    const current = this.getTextPaletteFontFamily();
    const font = TEXT_FONTS.find((item) => item.value === current) ?? TEXT_FONTS[0];
    const title = `${uiText("\u5B57\u4F53", "Font")}: ${uiText(font.labelZh, font.labelEn)}`;
    button.title = title;
    button.setAttribute("aria-label", title);
  }
  createPaletteSelectionGroup() {
    const group = activeDocument.createElement("div");
    group.className = "pdftion-palette-group";
    group.setAttribute("aria-label", uiText("\u9009\u4E2D\u5143\u7D20", "Selection"));
    group.title = uiText("\u9009\u4E2D\u5143\u7D20", "Selection");
    const colorRow = activeDocument.createElement("div");
    colorRow.className = "pdftion-palette-colors";
    for (const swatch of PALETTE_COLORS) {
      const colorButton = this.createPaletteColorButton(swatch, "selection");
      colorButton.addEventListener("click", () => {
        this.setSelectedPaletteColor(swatch);
        this.updateToolbarState();
      });
      colorRow.appendChild(colorButton);
    }
    colorRow.appendChild(this.createAdvancedColorInput("selection", this.getSelectedPaletteColor(), (color) => this.setSelectedPaletteColor(color)));
    group.appendChild(colorRow);
    return group;
  }
  createPaletteColorButton(swatch, target) {
    const colorButton = activeDocument.createElement("button");
    colorButton.className = "pdftion-color";
    colorButton.dataset.color = swatch;
    colorButton.dataset.target = target;
    colorButton.setCssProps({ "--pdftion-swatch-color": swatch });
    colorButton.title = swatch;
    colorButton.type = "button";
    colorButton.setAttribute("aria-label", swatch);
    const chip = activeDocument.createElement("span");
    chip.className = "pdftion-color-swatch";
    chip.setCssProps({ "--pdftion-swatch-color": swatch });
    chip.setAttribute("aria-hidden", "true");
    colorButton.appendChild(chip);
    return colorButton;
  }
  createAdvancedColorInput(target, value, onInput) {
    const row = activeDocument.createElement("button");
    row.className = "pdftion-color pdftion-color-advanced";
    row.dataset.target = target;
    row.setCssProps({ "--pdftion-current-color": normalizeHexColor(value) });
    row.title = uiText("\u81EA\u5B9A\u4E49\u989C\u8272", "Custom color");
    row.type = "button";
    const input = activeDocument.createElement("input");
    input.dataset.target = target;
    input.type = "color";
    input.value = normalizeHexColor(value);
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("input", () => {
      onInput(input.value);
      this.updateToolbarState();
    });
    row.addEventListener("click", () => {
      input.click();
    });
    row.appendChild(input);
    return row;
  }
  createPaletteRange(title, icon, className, min, max, step, value, onInput) {
    const row = activeDocument.createElement("label");
    row.className = "pdftion-palette-range";
    row.title = title;
    const label = activeDocument.createElement("span");
    label.className = "pdftion-palette-icon";
    label.setAttribute("aria-hidden", "true");
    (0, import_obsidian.setIcon)(label, icon);
    row.appendChild(label);
    const input = activeDocument.createElement("input");
    input.className = className;
    input.title = title;
    input.setAttribute("aria-label", title);
    input.max = String(max);
    input.min = String(min);
    input.step = String(step);
    input.type = "range";
    input.value = String(value);
    input.addEventListener("input", () => onInput(Number(input.value)));
    row.appendChild(input);
    return row;
  }
  updatePaletteState() {
    if (!this.palette) {
      return;
    }
    for (const tool of ["pen", "highlight"]) {
      const widthInput = this.palette.querySelector(`.pdftion-width-${tool}`);
      if (widthInput) {
        widthInput.value = String(this.getToolWidth(tool));
      }
      const opacityInput = this.palette.querySelector(`.pdftion-opacity-${tool}`);
      if (opacityInput) {
        opacityInput.value = String(this.getToolOpacity(tool));
      }
    }
    const eraserInput = this.palette.querySelector(".pdftion-width-eraser");
    if (eraserInput) {
      eraserInput.value = String(this.eraserWidth);
    }
    const textSizeInput = this.palette.querySelector(".pdftion-size-text");
    if (textSizeInput) {
      textSizeInput.value = String(this.getTextPaletteFontSize());
    }
    const textOpacityInput = this.palette.querySelector(".pdftion-opacity-text");
    if (textOpacityInput) {
      textOpacityInput.value = String(this.getTextPaletteOpacity());
    }
    const textFontButton = this.palette.querySelector(".pdftion-font-family");
    if (textFontButton) {
      this.updateFontButtonTitle(textFontButton);
    }
  }
  hasSelectedText() {
    return this.getSelectedTextElements().length > 0;
  }
  getSelectedTextElements() {
    return this.textHistory.filter((text) => this.selectedStrokeIds.has(text.id));
  }
  getTextPaletteColor() {
    return this.getSelectedTextElements()[0]?.color ?? this.textColor;
  }
  getTextPaletteFontSize() {
    return this.getSelectedTextElements()[0]?.fontSize ?? this.textFontSize;
  }
  getTextPaletteFontFamily() {
    return this.getSelectedTextElements()[0]?.fontFamily ?? this.textFontFamily;
  }
  getTextPaletteOpacity() {
    return this.getSelectedTextElements()[0]?.opacity ?? this.textOpacity;
  }
  setTextPaletteColor(color) {
    color = normalizeHexColor(color);
    this.textColor = color;
    this.scheduleToolSettingsSave();
    this.updateSelectedTextElements((text) => {
      text.color = color;
    });
  }
  setTextPaletteFontSize(fontSize) {
    this.textFontSize = fontSize;
    this.scheduleToolSettingsSave();
    this.updateSelectedTextElements((text) => {
      text.fontSize = fontSize;
    });
  }
  setTextPaletteFontFamily(fontFamily) {
    this.textFontFamily = fontFamily;
    this.scheduleToolSettingsSave();
    this.updateSelectedTextElements((text) => {
      text.fontFamily = fontFamily;
    });
  }
  setTextPaletteOpacity(opacity) {
    this.textOpacity = opacity;
    this.scheduleToolSettingsSave();
    this.updateSelectedTextElements((text) => {
      text.opacity = opacity;
    });
  }
  updateSelectedTextElements(update) {
    const selected = this.getSelectedTextElements();
    if (selected.length === 0) {
      return;
    }
    this.rememberHistory();
    for (const text of selected) {
      update(text);
      text.saved = false;
    }
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
  }
  getCommentElements() {
    return this.textHistory.filter((text) => text.presentation === "comment").sort(compareInkElements);
  }
  showCommentManager() {
    if (this.commentManager?.isConnected) {
      this.commentManager.remove();
      this.commentManager = null;
      return;
    }
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-panel pdftion-comment-manager";
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    panel.addEventListener("click", (event) => event.stopPropagation());
    const header = activeDocument.createElement("div");
    header.className = "pdftion-panel-header";
    header.textContent = uiText("\u6279\u6CE8\u7BA1\u7406", "Comment manager");
    const close = createIconButton("x", uiText("\u5173\u95ED", "Close"));
    close.addEventListener("click", () => {
      panel.remove();
      this.commentManager = null;
    });
    header.appendChild(close);
    panel.appendChild(header);
    const list = activeDocument.createElement("div");
    list.className = "pdftion-comment-list";
    panel.appendChild(list);
    this.populateCommentManagerList(list);
    appendToActiveBody(panel);
    const button = this.toolbar?.querySelector(".pdftion-text-button");
    const rect = button?.getBoundingClientRect();
    panel.setCssStyles({
      left: `${clamp(rect?.left ?? 12, 8, Math.max(8, activeWindow.innerWidth - 340))}px`,
      top: `${clamp((rect?.bottom ?? 72) + 8, 8, Math.max(8, activeWindow.innerHeight - 420))}px`
    });
    this.commentManager = panel;
  }
  populateCommentManagerList(list) {
    list.textContent = "";
    const comments = this.getCommentElements();
    if (comments.length === 0) {
      const empty = activeDocument.createElement("div");
      empty.className = "pdftion-comment-empty";
      empty.textContent = uiText("\u6682\u65E0\u6279\u6CE8", "No comments");
      list.appendChild(empty);
      return;
    }
    for (const comment of comments) {
      const row = activeDocument.createElement("div");
      row.className = "pdftion-comment-row";
      const locate = activeDocument.createElement("button");
      locate.type = "button";
      locate.className = "pdftion-comment-locate";
      const page = activeDocument.createElement("span");
      page.className = "pdftion-comment-page";
      page.textContent = uiText(`\u7B2C ${comment.pageIndex + 1} \u9875`, `Page ${comment.pageIndex + 1}`);
      locate.appendChild(page);
      const preview = activeDocument.createElement("span");
      preview.className = "pdftion-comment-preview";
      preview.textContent = comment.text.trim();
      locate.appendChild(preview);
      locate.addEventListener("click", () => {
        this.setSingleSelectedElement(comment.id);
        this.jumpToPage(comment.pageIndex);
        window.setTimeout(() => {
          const overlay = this.findOverlayByPageIndex(comment.pageIndex);
          if (overlay) {
            this.showCommentPopover(comment, overlay);
            this.redrawAll();
          }
        }, 180);
      });
      row.appendChild(locate);
      const edit = createIconButton("pencil", uiText("\u7F16\u8F91\u6279\u6CE8", "Edit comment"));
      edit.addEventListener("click", () => void this.editCommentAnnotation(comment));
      row.appendChild(edit);
      const remove = createIconButton("trash-2", uiText("\u5220\u9664\u6279\u6CE8", "Delete comment"));
      remove.addEventListener("click", () => this.deleteCommentAnnotation(comment));
      row.appendChild(remove);
      list.appendChild(row);
    }
  }
  refreshCommentManager() {
    const list = this.commentManager?.querySelector(".pdftion-comment-list");
    if (list) {
      this.populateCommentManagerList(list);
    }
  }
  showPageNavigator() {
    if (this.pageNavigator?.isConnected) {
      this.pageNavigator.remove();
      this.pageNavigator = null;
      return;
    }
    const panel = activeDocument.createElement("div");
    panel.className = "pdftion-panel pdftion-page-navigator";
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    panel.addEventListener("click", (event) => event.stopPropagation());
    const header = activeDocument.createElement("div");
    header.className = "pdftion-panel-header";
    header.textContent = "Pdftion";
    const close = createIconButton("x", uiText("\u5173\u95ED", "Close"));
    close.addEventListener("click", () => {
      panel.remove();
      this.pageNavigator = null;
    });
    header.appendChild(close);
    panel.appendChild(header);
    const stats = this.aiGetStats();
    const summary = activeDocument.createElement("div");
    summary.className = "pdftion-panel-summary";
    summary.textContent = this.getPageNavigatorSummary(null, stats);
    panel.appendChild(summary);
    const list = activeDocument.createElement("div");
    list.className = "pdftion-page-list";
    list.textContent = uiText("\u8BFB\u53D6\u9875\u9762...", "Loading pages...");
    panel.appendChild(list);
    const actions = activeDocument.createElement("div");
    actions.className = "pdftion-panel-actions";
    const up = createIconButton("arrow-up", uiText("\u4E0A\u79FB", "Move up"));
    up.addEventListener("click", () => void this.moveSelectedPages(-1));
    actions.appendChild(up);
    const down = createIconButton("arrow-down", uiText("\u4E0B\u79FB", "Move down"));
    down.addEventListener("click", () => void this.moveSelectedPages(1));
    actions.appendChild(down);
    const reorder = createIconButton("shuffle", uiText("\u91CD\u6392", "Reorder"));
    reorder.addEventListener("click", () => void this.reorderPagesByPrompt());
    actions.appendChild(reorder);
    const rotate = createIconButton("rotate-cw", uiText("\u65CB\u8F6C", "Rotate"));
    rotate.addEventListener("click", () => void this.rotateSelectedPagesClockwise());
    actions.appendChild(rotate);
    const crop = createIconButton("crop", uiText("\u88C1\u5207", "Crop"));
    crop.addEventListener("click", () => void this.cropSelectedPagesByPrompt());
    actions.appendChild(crop);
    const undoRewrite = createIconButton("rotate-ccw", uiText("\u56DE\u9000\u4E0A\u6B21 PDF \u6539\u5199", "Revert last PDF rewrite"));
    undoRewrite.addEventListener("click", () => void this.restoreLastPdfRewrite());
    actions.appendChild(undoRewrite);
    const deletePages = createIconButton("file-minus", uiText("\u5220\u9875", "Delete pages"));
    deletePages.addEventListener("click", () => void this.deleteSelectedPages());
    actions.appendChild(deletePages);
    const importPdf = createIconButton("file-plus", uiText("\u5BFC\u5165 PDF", "Import PDF"));
    importPdf.addEventListener("click", () => void this.importPdfByPrompt());
    actions.appendChild(importPdf);
    const exportMd = createIconButton("file-text", uiText("\u5BFC\u51FA MD", "Export MD"));
    exportMd.addEventListener("click", () => void this.exportAnnotationsMarkdown());
    actions.appendChild(exportMd);
    const insertLink = createIconButton("link", uiText("\u63D2\u5165\u94FE\u63A5", "Insert link"));
    insertLink.addEventListener("click", () => void this.insertObsidianLinkInteractive());
    actions.appendChild(insertLink);
    const convert = createIconButton("files", uiText("\u8F6C\u6362\u6587\u6863", "Convert docs"));
    convert.addEventListener("click", () => void this.exportMarkdownDocxBridge());
    actions.appendChild(convert);
    panel.appendChild(actions);
    activeDocument.body.appendChild(panel);
    this.pageNavigator = panel;
    void this.populatePageNavigatorList(list, summary);
    const anchor = this.toolbarHost?.getBoundingClientRect();
    panel.setCssStyles({
      right: "12px",
      top: `${Math.max(8, anchor ? anchor.bottom + 8 : 80)}px`
    });
  }
  async populatePageNavigatorList(list, summary) {
    const pageCount = await this.getCurrentPdfPageCount();
    const stats = this.aiGetStats();
    summary.textContent = this.getPageNavigatorSummary(pageCount, stats);
    list.textContent = "";
    if (this.selectedPageIndexes.size === 0) {
      this.selectedPageIndexes.add(clamp(Math.floor(this.getVisibleOverlay()?.pageIndex ?? 0), 0, Math.max(0, pageCount - 1)));
    }
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
      const row = activeDocument.createElement("div");
      row.className = "pdftion-page-row";
      const checkbox = activeDocument.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = this.selectedPageIndexes.has(pageIndex);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          this.selectedPageIndexes.add(pageIndex);
        } else {
          this.selectedPageIndexes.delete(pageIndex);
        }
      });
      row.appendChild(checkbox);
      const item = activeDocument.createElement("button");
      item.type = "button";
      item.className = "pdftion-page-item";
      const count = this.getEditableElements().filter((element) => element.pageIndex === pageIndex).length;
      item.textContent = `${pageIndex + 1} (${count})`;
      item.title = uiText(`\u7B2C ${pageIndex + 1} \u9875\uFF0C${count} \u4E2A\u5143\u7D20`, `Page ${pageIndex + 1}, ${count} elements`);
      item.addEventListener("click", () => {
        checkbox.checked = true;
        this.selectedPageIndexes.add(pageIndex);
        this.jumpToPage(pageIndex);
      });
      row.appendChild(item);
      list.appendChild(row);
    }
  }
  getPageNavigatorSummary(pageCount, stats) {
    const pages = pageCount === null ? "..." : String(pageCount);
    return uiText(
      `\u9875 ${pages} | \u7B14 ${stats.strokes} | \u6587 ${stats.texts} | \u56FE ${stats.images} | \u906E ${stats.covers}`,
      `P ${pages} | ink ${stats.strokes} | text ${stats.texts} | img ${stats.images} | cover ${stats.covers}`
    );
  }
  async getCurrentPdfPageCount() {
    const binary = await this.plugin.app.vault.readBinary(this.file);
    const pdf = await import_pdf_lib.PDFDocument.load(binary, { ignoreEncryption: true });
    return pdf.getPageCount();
  }
  getSelectedPageIndexes(pageCount) {
    const selected = Array.from(this.selectedPageIndexes).map((pageIndex) => Math.floor(pageIndex)).filter((pageIndex) => pageIndex >= 0 && pageIndex < pageCount).sort((a, b) => a - b);
    if (selected.length > 0) {
      return selected;
    }
    return [clamp(Math.floor(this.getVisibleOverlay()?.pageIndex ?? 0), 0, Math.max(0, pageCount - 1))];
  }
  refreshPageNavigator() {
    const panel = this.pageNavigator;
    if (!panel?.isConnected) {
      return;
    }
    const list = panel.querySelector(".pdftion-page-list");
    const summary = panel.querySelector(".pdftion-panel-summary");
    if (list && summary) {
      void this.populatePageNavigatorList(list, summary);
    }
  }
  async moveSelectedPages(delta) {
    const pageCount = await this.getCurrentPdfPageCount();
    const selected = new Set(this.getSelectedPageIndexes(pageCount));
    const order = Array.from({ length: pageCount }, (_, index) => index);
    if (delta < 0) {
      for (let i = 1; i < order.length; i += 1) {
        if (selected.has(order[i]) && !selected.has(order[i - 1])) {
          [order[i - 1], order[i]] = [order[i], order[i - 1]];
        }
      }
    } else {
      for (let i = order.length - 2; i >= 0; i -= 1) {
        if (selected.has(order[i]) && !selected.has(order[i + 1])) {
          [order[i + 1], order[i]] = [order[i], order[i + 1]];
        }
      }
    }
    await this.rewritePdfWithPageOrder(order, "\u9875\u7801\u5DF2\u79FB\u52A8");
  }
  async reorderPagesByPrompt() {
    const pageCount = await this.getCurrentPdfPageCount();
    const raw = await showPromptModal({
      actionLabel: uiText("\u91CD\u6392", "Reorder"),
      defaultValue: "",
      message: uiText(`\u8F93\u5165\u65B0\u7684\u9875\u7801\u987A\u5E8F\uFF0C\u4F8B\u5982 3,1,2 \u6216 1-3,5\u3002\u5F53\u524D\u5171 ${pageCount} \u9875\u3002`, `Enter a new page order, for example 3,1,2 or 1-3,5. Current pages: ${pageCount}.`),
      title: uiText("\u91CD\u7EC4\u9875\u9762", "Reorder pages")
    });
    if (!raw) {
      return;
    }
    const order = parsePageOrder(raw, pageCount);
    if (!order) {
      new import_obsidian.Notice(uiText("\u9875\u7801\u987A\u5E8F\u65E0\u6548\u3002", "Invalid page order."));
      return;
    }
    await this.rewritePdfWithPageOrder(order, uiText("\u9875\u7801\u5DF2\u91CD\u7EC4", "Pages reordered"));
  }
  async deleteSelectedPages() {
    const pageCount = await this.getCurrentPdfPageCount();
    const selected = new Set(this.getSelectedPageIndexes(pageCount));
    if (selected.size >= pageCount) {
      new import_obsidian.Notice(uiText("\u4E0D\u80FD\u5220\u9664\u5168\u90E8\u9875\u9762\u3002", "Cannot delete all pages."));
      return;
    }
    if (!await showConfirmModal({
      confirmLabel: uiText("\u5220\u9664", "Delete"),
      message: uiText(`\u5220\u9664 ${selected.size} \u9875\uFF1F\u6B64\u64CD\u4F5C\u4F1A\u4FEE\u6539\u5F53\u524D PDF\u3002`, `Delete ${selected.size} pages? This will modify the current PDF.`),
      title: uiText("\u5220\u9664\u9875\u9762", "Delete pages")
    })) {
      return;
    }
    const order = Array.from({ length: pageCount }, (_, index) => index).filter((pageIndex) => !selected.has(pageIndex));
    await this.rewritePdfWithPageOrder(order, uiText("\u5DF2\u5220\u9664\u9875\u9762", "Pages deleted"));
  }
  async rotateSelectedPagesClockwise() {
    const pageCount = await this.getCurrentPdfPageCount();
    const selected = this.getSelectedPageIndexes(pageCount);
    const binary = await this.plugin.app.vault.readBinary(this.file);
    const pdf = await import_pdf_lib.PDFDocument.load(binary, { ignoreEncryption: true });
    for (const pageIndex of selected) {
      const page = pdf.getPage(pageIndex);
      const angle = page.getRotation().angle;
      page.setRotation((0, import_pdf_lib.degrees)((angle + 90) % 360));
    }
    const rotated = this.getEditableElements().map((element) => selected.includes(element.pageIndex) ? rotateElementClockwise(element) : cloneElement(element));
    const saved = await pdf.save({ useObjectStreams: true });
    await this.persistPdfRewrite(saved, rotated, uiText("\u5DF2\u65CB\u8F6C\u9009\u4E2D\u9875\u9762", "Selected pages rotated"));
  }
  async cropSelectedPagesByPrompt() {
    const pageCount = await this.getCurrentPdfPageCount();
    const selected = this.getSelectedPageIndexes(pageCount);
    const selectedSet = new Set(selected);
    const crop = await showCropModal({
      bottom: this.plugin.settings.lastCropBottom,
      left: this.plugin.settings.lastCropLeft,
      right: this.plugin.settings.lastCropRight,
      top: this.plugin.settings.lastCropTop
    }, (previewCrop) => {
      this.cropPreview = previewCrop ? { crop: previewCrop, pageIndexes: selectedSet } : null;
      this.redrawAll();
    });
    if (!crop) {
      this.cropPreview = null;
      this.redrawAll();
      return;
    }
    this.plugin.settings.lastCropBottom = crop.bottom;
    this.plugin.settings.lastCropLeft = crop.left;
    this.plugin.settings.lastCropRight = crop.right;
    this.plugin.settings.lastCropTop = crop.top;
    await this.plugin.saveSettings();
    const binary = await this.plugin.app.vault.readBinary(this.file);
    const pdf = await import_pdf_lib.PDFDocument.load(binary, { ignoreEncryption: true });
    for (const pageIndex of selected) {
      const page = pdf.getPage(pageIndex);
      const size = page.getSize();
      const width = size.width * Math.max(0.01, 1 - crop.left - crop.right);
      const height = size.height * Math.max(0.01, 1 - crop.top - crop.bottom);
      page.setCropBox(crop.left * size.width, crop.bottom * size.height, width, height);
    }
    const cropped = this.getEditableElements().map((element) => selected.includes(element.pageIndex) ? cropElement(element, crop) : cloneElement(element));
    const saved = await pdf.save({ useObjectStreams: true });
    this.cropPreview = null;
    await this.persistPdfRewrite(saved, cropped, uiText("\u5DF2\u88C1\u5207\u9009\u4E2D\u9875\u9762", "Selected pages cropped"));
  }
  async importPdfByPrompt() {
    const file = await pickPdfFile();
    if (!file) {
      return;
    }
    const pageCount = await this.getCurrentPdfPageCount();
    const defaultInsert = this.getSelectedPageIndexes(pageCount).at(-1) ?? pageCount - 1;
    const raw = await showPromptModal({
      actionLabel: uiText("\u63D2\u5165", "Insert"),
      defaultValue: String(defaultInsert + 1),
      message: uiText("\u63D2\u5165\u5230\u7B2C\u51E0\u9875\u4E4B\u540E\uFF1F\u586B 0 \u8868\u793A\u63D2\u5230\u6700\u524D\uFF0C\u7559\u7A7A\u8868\u793A\u63D2\u5230\u9009\u4E2D\u9875\u4E4B\u540E\u3002", "Insert after which page? Use 0 for the beginning, or leave blank to insert after the selected page."),
      title: uiText("\u5BFC\u5165 PDF", "Import PDF")
    });
    const insertAfter = raw?.trim() ? Math.max(0, Math.floor(Number(raw)) || 0) : defaultInsert + 1;
    const insertIndex = clamp(insertAfter, 0, pageCount);
    const currentBytes = await this.plugin.app.vault.readBinary(this.file);
    const incomingBytes = await file.arrayBuffer();
    const currentPdf = await import_pdf_lib.PDFDocument.load(currentBytes, { ignoreEncryption: true });
    const incomingPdf = await import_pdf_lib.PDFDocument.load(incomingBytes, { ignoreEncryption: true });
    const output = await import_pdf_lib.PDFDocument.create();
    const before = await output.copyPages(currentPdf, Array.from({ length: insertIndex }, (_, index) => index));
    for (const page of before) {
      output.addPage(page);
    }
    const imported = await output.copyPages(incomingPdf, Array.from({ length: incomingPdf.getPageCount() }, (_, index) => index));
    for (const page of imported) {
      output.addPage(page);
    }
    const after = await output.copyPages(currentPdf, Array.from({ length: pageCount - insertIndex }, (_, index) => insertIndex + index));
    for (const page of after) {
      output.addPage(page);
    }
    const shifted = this.getEditableElements().map((element) => {
      const clone = cloneElement(element);
      if (clone.pageIndex >= insertIndex) {
        clone.pageIndex += incomingPdf.getPageCount();
      }
      return clone;
    });
    const saved = await output.save({ useObjectStreams: true });
    await this.persistPdfRewrite(saved, shifted, uiText(`\u5DF2\u5BFC\u5165\u5E76\u5408\u5E76 ${file.name}`, `Imported and merged ${file.name}`));
  }
  async rewritePdfWithPageOrder(order, message) {
    const binary = await this.plugin.app.vault.readBinary(this.file);
    const source = await import_pdf_lib.PDFDocument.load(binary, { ignoreEncryption: true });
    if (order.length === 0 || order.some((pageIndex) => pageIndex < 0 || pageIndex >= source.getPageCount())) {
      new import_obsidian.Notice(uiText("\u9875\u7801\u987A\u5E8F\u65E0\u6548\u3002", "Invalid page order."));
      return;
    }
    const output = await import_pdf_lib.PDFDocument.create();
    const pages = await output.copyPages(source, order);
    for (const page of pages) {
      output.addPage(page);
    }
    const indexMap = /* @__PURE__ */ new Map();
    order.forEach((oldIndex, newIndex) => indexMap.set(oldIndex, newIndex));
    const remapped = this.getEditableElements().filter((element) => indexMap.has(element.pageIndex)).map((element) => {
      const clone = cloneElement(element);
      clone.pageIndex = indexMap.get(element.pageIndex) ?? clone.pageIndex;
      return clone;
    });
    const selected = this.getSelectedPageIndexes(source.getPageCount()).map((pageIndex) => indexMap.get(pageIndex)).filter((pageIndex) => typeof pageIndex === "number");
    this.selectedPageIndexes = new Set(selected);
    const saved = await output.save({ useObjectStreams: true });
    await this.persistPdfRewrite(saved, remapped, message);
  }
  async persistPdfRewrite(saved, elements, message) {
    await this.savePdfRewriteBackup();
    const buffer = toPdfBytes(saved);
    await this.plugin.app.vault.modifyBinary(this.file, buffer);
    const basePdf = await this.plugin.ensureBasePdfBytes(this.file, buffer);
    const marked = elements.map((element) => markElementSaved(cloneElement(element)));
    await this.plugin.saveAnnotationState(this.file, marked, basePdf.fingerprint, buffer);
    this.applyLocalElementsAfterPdfRewrite(marked);
    new import_obsidian.Notice(message);
  }
  applyLocalElementsAfterPdfRewrite(elements) {
    this.strokeHistory = elements.filter((element) => element.kind === "stroke");
    this.textHistory = elements.filter((element) => element.kind === "text");
    this.coverHistory = elements.filter((element) => element.kind === "cover");
    this.imageHistory = elements.filter((element) => element.kind === "image");
    this.clearCurrentStroke();
    this.currentCover = null;
    this.cropPreview = null;
    this.redoStack = [];
    this.undoStack = [];
    this.redoHistoryStack = [];
    this.clearEditableSelection();
    this.dirty = false;
    this.redrawAll();
    this.refreshPageNavigator();
    this.scheduleQuietScan();
  }
  getPdfRewriteBackupPdfPath() {
    return `${this.plugin.manifest.dir}/data/rewrite-backups/${safeAnnotationKey(this.file.path)}.pdf`;
  }
  getPdfRewriteBackupJsonPath() {
    return `${this.plugin.manifest.dir}/data/rewrite-backups/${safeAnnotationKey(this.file.path)}.json`;
  }
  async savePdfRewriteBackup() {
    const pdfPath = this.getPdfRewriteBackupPdfPath();
    const jsonPath = this.getPdfRewriteBackupJsonPath();
    await this.ensureVaultFolder(pdfPath.substring(0, pdfPath.lastIndexOf("/")));
    const currentBytes = await this.plugin.app.vault.readBinary(this.file);
    await this.plugin.app.vault.adapter.writeBinary(pdfPath, currentBytes);
    const record = {
      elements: this.getEditableElements().map(cloneElement),
      filePath: this.file.path,
      pdfPath,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      version: 1
    };
    await this.plugin.app.vault.adapter.write(jsonPath, JSON.stringify(record, null, 2));
  }
  async restoreLastPdfRewrite() {
    const jsonPath = this.getPdfRewriteBackupJsonPath();
    let record;
    try {
      record = JSON.parse(await this.plugin.app.vault.adapter.read(jsonPath));
    } catch {
      new import_obsidian.Notice(uiText("\u6CA1\u6709\u53EF\u56DE\u9000\u7684 PDF \u6539\u5199\u5907\u4EFD\u3002", "No PDF rewrite backup is available."));
      return;
    }
    if (record.filePath !== this.file.path || !record.pdfPath) {
      new import_obsidian.Notice(uiText("\u56DE\u9000\u5907\u4EFD\u4E0E\u5F53\u524D PDF \u4E0D\u5339\u914D\u3002", "The rewrite backup does not match the current PDF."));
      return;
    }
    if (!await showConfirmModal({
      confirmLabel: uiText("\u56DE\u9000", "Revert"),
      message: uiText("\u56DE\u9000\u5230\u4E0A\u6B21 PDF \u6539\u5199\u524D\uFF1F\u5F53\u524D PDF \u6587\u4EF6\u548C\u53EF\u7F16\u8F91\u6279\u6CE8\u90FD\u4F1A\u6062\u590D\u5230\u5907\u4EFD\u72B6\u6001\u3002", "Revert to the state before the last PDF rewrite? The current PDF file and editable annotations will be restored from backup."),
      title: uiText("\u56DE\u9000\u4E0A\u6B21 PDF \u6539\u5199", "Revert last PDF rewrite")
    })) {
      return;
    }
    try {
      const backupBytes = await this.plugin.app.vault.adapter.readBinary(record.pdfPath);
      await this.plugin.app.vault.modifyBinary(this.file, backupBytes);
      const basePdf = await this.plugin.ensureBasePdfBytes(this.file, backupBytes);
      const elements = Array.isArray(record.elements) ? record.elements.filter(isInkElement).map((element) => markElementSaved(cloneElement(element))) : [];
      await this.plugin.saveAnnotationState(this.file, elements, basePdf.fingerprint, backupBytes);
      this.cropPreview = null;
      this.applyLocalElementsAfterPdfRewrite(elements);
      new import_obsidian.Notice(uiText("\u5DF2\u56DE\u9000\u4E0A\u6B21 PDF \u6539\u5199\u3002", "Reverted the last PDF rewrite."));
    } catch (error) {
      console.error(error);
      new import_obsidian.Notice(uiText("\u56DE\u9000\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "Could not revert. Check the console."));
    }
  }
  getToolColor(tool) {
    return tool === "highlight" ? this.highlightColor : this.penColor;
  }
  isDrawingToolMode(tool = this.tool) {
    return tool === "pen" || tool === "highlight";
  }
  shouldShowEditableSelection() {
    return !this.isDrawingToolMode();
  }
  applyToolSettingsFromPlugin() {
    this.penColor = this.plugin.settings.penColor;
    this.penOpacity = this.plugin.settings.penOpacity;
    this.penWidth = this.plugin.settings.penWidth;
    this.highlightColor = this.plugin.settings.highlightColor;
    this.highlightOpacity = this.plugin.settings.highlightOpacity;
    this.highlightWidth = this.plugin.settings.highlightWidth;
    this.eraserWidth = this.plugin.settings.eraserWidth;
    this.textColor = this.plugin.settings.textColor;
    this.textFontFamily = this.plugin.settings.textFontFamily;
    this.textFontSize = this.plugin.settings.textFontSize;
    this.textOpacity = this.plugin.settings.textOpacity;
    this.nativeTextHighlightColor = this.plugin.settings.nativeTextHighlightColor;
    this.nativeTextSelectionAction = this.plugin.settings.nativeTextSelectionAction;
  }
  setToolColor(tool, color) {
    color = normalizeHexColor(color);
    if (tool === "highlight") {
      this.highlightColor = color;
    } else {
      this.penColor = color;
    }
    this.scheduleToolSettingsSave();
  }
  getSelectedPaletteColor() {
    const selected = this.getSelectedEditableElements();
    const colored = selected.find((element) => "color" in element);
    return normalizeHexColor(colored?.color ?? this.penColor);
  }
  setSelectedPaletteColor(color) {
    color = normalizeHexColor(color);
    let changed = false;
    const selected = this.getSelectedEditableElements();
    if (selected.some((element) => "color" in element && normalizeHexColor(element.color) !== color)) {
      this.rememberHistory();
    }
    for (const element of selected) {
      if (!("color" in element) || normalizeHexColor(element.color) === color) {
        continue;
      }
      this.markElementChanged(element);
      element.color = color;
      changed = true;
    }
    if (!changed) {
      return;
    }
    this.redoStack = [];
    this.markDirty();
    this.redrawAll();
    this.refreshCommentManager();
    this.scheduleAutoSave();
  }
  getToolOpacity(tool) {
    return tool === "highlight" ? this.highlightOpacity : this.penOpacity;
  }
  setToolOpacity(tool, opacity) {
    if (tool === "highlight") {
      this.highlightOpacity = opacity;
    } else {
      this.penOpacity = opacity;
    }
    this.scheduleToolSettingsSave();
  }
  getToolWidth(tool) {
    return tool === "highlight" ? this.highlightWidth : this.penWidth;
  }
  setToolWidth(tool, width) {
    if (tool === "highlight") {
      this.highlightWidth = width;
    } else {
      this.penWidth = width;
    }
    this.scheduleToolSettingsSave();
  }
  onPointerMove(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.pointerType === "touch") {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.cancelLayerLongPressOnMove(event.clientX, event.clientY);
    if (this.layerLongPressTriggered) {
      return;
    }
    const events = typeof event.getCoalescedEvents === "function" ? event.getCoalescedEvents() : [event];
    const stroke = this.currentStroke;
    if (stroke?.pageIndex === overlay.pageIndex) {
      const startIndex = stroke.points.length - 1;
      for (const pointerEvent of events) {
        this.appendPointToCurrentStroke(
          stroke,
          this.getOverlayInputPoint(overlay, pointerEvent.clientX, pointerEvent.clientY),
          overlay,
          false
        );
      }
      if (stroke.points.length > startIndex + 1) {
        this.drawLiveStrokeSegments(overlay, stroke, startIndex);
      }
      return;
    }
    for (const pointerEvent of events) {
      this.moveInkInteraction(this.getOverlayInputPoint(overlay, pointerEvent.clientX, pointerEvent.clientY), overlay);
    }
  }
  moveInkInteraction(point, overlay) {
    const tool = this.tool;
    const drawingTool = this.isDrawingToolMode(tool);
    if (this.selectionDrag) {
      if (drawingTool) {
        this.selectionDrag = null;
      } else {
        this.moveSelectionInteraction(point, overlay);
        return;
      }
    }
    if (this.currentCover && this.currentCover.pageIndex === overlay.pageIndex) {
      this.updateCurrentCover(point, overlay);
      return;
    }
    if (tool === "select") {
      this.moveSelectionInteraction(point, overlay);
      return;
    }
    if (tool === "eraser") {
      this.eraseAt(overlay, point);
      return;
    }
    const stroke = this.currentStroke;
    if (!stroke || stroke.pageIndex !== overlay.pageIndex) {
      return;
    }
    this.appendPointToCurrentStroke(stroke, point, overlay);
  }
  isStrictDrawingTap(stroke, overlay) {
    if (this.currentStrokeHadTouchMove || this.currentStrokeMoved || stroke.points.length > 3) {
      return false;
    }
    if (Date.now() - this.currentStrokeStartedAt > 260) {
      return false;
    }
    const first = stroke.points[0];
    if (!first) {
      return false;
    }
    return stroke.points.every((point) => normalizedDistance(first, point, overlay.cssWidth, overlay.cssHeight) <= 1.25);
  }
  clearCurrentStroke() {
    const pageIndex = this.currentStroke?.pageIndex;
    this.currentStroke = null;
    this.currentStrokeMoved = false;
    this.currentStrokeHadTouchMove = false;
    this.currentStrokeStartedAt = 0;
    if (pageIndex !== void 0) {
      const overlay = this.findOverlayByPageIndex(pageIndex);
      if (overlay) {
        this.clearLiveOverlay(overlay);
      }
    }
  }
  resolveInkGroupId(stroke, overlay) {
    const now = Date.now();
    const bounds = normalizedStrokeBounds(stroke);
    const recent = this.recentInkGroup;
    const canReuseRecentGroup = Boolean(
      bounds && recent && now - recent.lastAt <= INK_AUTO_GROUP_WINDOW_MS && recent.pageIndex === stroke.pageIndex && recent.tool === stroke.tool && recent.color === stroke.color && Math.abs(recent.opacity - stroke.opacity) <= 1e-3 && Math.abs(recent.width - stroke.width) <= 0.01 && normalizedBoundsAreNear(recent.bounds, bounds, overlay.cssWidth, overlay.cssHeight, INK_AUTO_GROUP_GAP_PX)
    );
    const groupId = canReuseRecentGroup && recent ? recent.id : makeInkGroupId();
    if (bounds) {
      this.recentInkGroup = {
        bounds: canReuseRecentGroup && recent ? unionNormalizedBounds(recent.bounds, bounds) : bounds,
        color: stroke.color,
        id: groupId,
        lastAt: now,
        opacity: stroke.opacity,
        pageIndex: stroke.pageIndex,
        tool: stroke.tool,
        width: stroke.width
      };
    }
    return groupId;
  }
  updateCurrentCover(point, overlay) {
    const cover = this.currentCover;
    if (!cover) {
      return;
    }
    const x1 = cover.x;
    const y1 = cover.y;
    cover.x = Math.min(x1, point.x);
    cover.y = Math.min(y1, point.y);
    cover.width = Math.max(1e-3, Math.abs(point.x - x1));
    cover.height = Math.max(1e-3, Math.abs(point.y - y1));
    this.redrawOverlay(overlay);
  }
  appendPointToCurrentStroke(stroke, point, overlay, render = true) {
    const last = stroke.points[stroke.points.length - 1];
    if (!last) {
      stroke.points.push(point);
      return true;
    }
    const distance = normalizedDistance(last, point, overlay.cssWidth, overlay.cssHeight);
    if (distance < STROKE_MIN_POINT_DISTANCE_PX) {
      return false;
    }
    this.currentStrokeMoved = true;
    const startIndex = stroke.points.length - 1;
    const steps = Math.max(1, Math.ceil(distance / STROKE_INTERPOLATION_STEP_PX));
    for (let i = 1; i <= steps; i += 1) {
      const ratio = i / steps;
      stroke.points.push({
        x: last.x + (point.x - last.x) * ratio,
        y: last.y + (point.y - last.y) * ratio
      });
    }
    if (render) {
      this.drawLiveStrokeSegments(overlay, stroke, startIndex);
    }
    return true;
  }
  drawLiveStrokeSegments(overlay, stroke, startIndex) {
    const ctx = overlay.canvas.getContext("2d");
    if (!ctx || startIndex < 0 || startIndex >= stroke.points.length - 1) {
      this.requestOverlayRedraw(overlay, stroke);
      return;
    }
    ctx.setTransform(overlay.dpr, 0, 0, overlay.dpr, 0, 0);
    ctx.save();
    ctx.globalAlpha = stroke.opacity;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = strokeDisplayWidth(stroke, overlay.cssWidth);
    ctx.strokeStyle = stroke.color;
    ctx.beginPath();
    const first = stroke.points[startIndex];
    ctx.moveTo(first.x * overlay.cssWidth, first.y * overlay.cssHeight);
    for (let i = startIndex + 1; i < stroke.points.length; i += 1) {
      const point = stroke.points[i];
      ctx.lineTo(point.x * overlay.cssWidth, point.y * overlay.cssHeight);
    }
    ctx.stroke();
    ctx.restore();
  }
  moveSelectionInteraction(point, overlay) {
    const drag = this.selectionDrag;
    if (!drag || drag.pageIndex !== overlay.pageIndex) {
      return;
    }
    const dx = point.x - drag.current.x;
    const dy = point.y - drag.current.y;
    const moved = normalizedDistance(drag.current, point, overlay.cssWidth, overlay.cssHeight) > 0.45;
    if (drag.mode === "move") {
      const selected = drag.elements ?? this.getSelectedEditableElements(overlay.pageIndex);
      if (selected.length === 0 || !moved) {
        return;
      }
      if (!drag.historyRecorded) {
        this.rememberHistory();
        drag.historyRecorded = true;
      }
      for (const element of selected) {
        this.markElementChanged(element);
        translateElement(element, dx, dy);
      }
      shiftElementsInsidePage(selected);
      this.markDirty();
      this.redoStack = [];
      drag.moved = true;
      drag.current = point;
      this.redrawPageOverlays(overlay.pageIndex);
      return;
    }
    if (drag.mode === "resize") {
      if (!drag.handle || !drag.originalBounds || !drag.originalElements || !moved) {
        return;
      }
      if (!drag.historyRecorded) {
        this.rememberHistory();
        drag.historyRecorded = true;
      }
      this.resizeSelectedElements(drag, point);
      this.markDirty();
      this.redoStack = [];
      drag.moved = true;
      drag.current = point;
      this.redrawPageOverlays(overlay.pageIndex);
      return;
    }
    drag.current = point;
    drag.moved = drag.moved || moved;
    this.requestOverlayRedraw(overlay);
  }
  onPointerUp(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.pointerType === "touch") {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (overlay.canvas.hasPointerCapture(event.pointerId)) {
      overlay.canvas.releasePointerCapture(event.pointerId);
    }
    if (this.consumeLayerLongPress()) {
      return;
    }
    this.endInkInteraction(overlay);
  }
  endInkInteraction(overlay) {
    if (this.selectionDrag) {
      this.endSelectionInteraction(overlay);
      return;
    }
    if (this.currentCover) {
      this.endCoverInteraction(overlay);
      return;
    }
    const stroke = this.currentStroke;
    if (!stroke) {
      return;
    }
    if (this.isStrictDrawingTap(stroke, overlay)) {
      const selected = this.findElementAt(overlay, stroke.points[0]);
      if (selected) {
        this.setSelectedElementForEditing(selected);
        this.clearCurrentStroke();
        this.redrawAll();
        this.updateToolbarState();
        return;
      }
      if (this.hasEditableSelection(overlay.pageIndex) || this.nativeSelection?.pageIndex === overlay.pageIndex) {
        this.clearEditableSelection();
        this.clearCurrentStroke();
        this.redrawAll();
        this.updateToolbarState();
        return;
      }
    }
    if (stroke.points.length === 1) {
      const only = stroke.points[0];
      stroke.points.push({
        x: Math.min(1, only.x + 1e-3),
        y: Math.min(1, only.y + 1e-3)
      });
    }
    this.rememberHistory();
    stroke.groupId = this.resolveInkGroupId(stroke, overlay);
    this.strokeHistory.push(stroke);
    this.redoStack = [];
    this.clearEditableSelection();
    this.clearCurrentStroke();
    this.markInkPageDirty(stroke.pageIndex);
    this.markDirty();
    this.redrawOverlay(overlay);
    this.scheduleAutoSave(STROKE_FAST_SAVE_DELAY_MS);
  }
  endCoverInteraction(overlay) {
    const cover = this.currentCover;
    if (!cover) {
      return;
    }
    this.currentCover = null;
    if (cover.width * overlay.cssWidth < 6 || cover.height * overlay.cssHeight < 6) {
      this.redrawOverlay(overlay);
      return;
    }
    this.rememberHistory();
    this.coverHistory.push(cover);
    this.redoStack = [];
    this.clearEditableSelection();
    this.markDirty();
    this.redrawOverlay(overlay);
    this.scheduleAutoSave();
  }
  endSelectionInteraction(overlay) {
    const drag = this.selectionDrag;
    if (!drag) {
      return;
    }
    this.selectionDrag = null;
    if (drag.mode === "move") {
      if (drag.moved) {
        this.scheduleExternalInkLayerUpdate();
        this.redrawPageOverlays(overlay.pageIndex);
        this.scheduleAutoSave(250);
      } else if (drag.clearSelectionOnTap) {
        this.clearEditableSelection();
        this.redrawAll();
      }
      this.updateToolbarState();
      return;
    }
    if (drag.mode === "resize") {
      if (drag.moved) {
        this.scheduleExternalInkLayerUpdate();
        this.redrawPageOverlays(overlay.pageIndex);
        this.scheduleAutoSave(250);
      }
      this.updateToolbarState();
      return;
    }
    if (drag.moved) {
      if (this.tool === "image-crop") {
        const region = this.createNativeImageRegionFromSelection(overlay, drag.start, drag.current);
        if (region) {
          this.pendingImageCrop = region;
          this.nativeSelection = region;
          this.redrawAll();
        }
        this.updateToolbarState();
        return;
      }
      const selectedElements = this.findElementsInSelection(overlay, drag.start, drag.current);
      this.setSelectedElements(selectedElements);
      const native = selectedElements.length === 0 ? this.createNativeRegionFromSelection(overlay, drag.start, drag.current) : null;
      this.nativeSelection = native?.kind === "text" ? native : null;
      this.redrawAll();
    }
    this.updateToolbarState();
  }
  redrawPageOverlays(pageIndex) {
    for (const candidate of this.overlays.values()) {
      if (candidate.pageIndex === pageIndex) {
        this.requestOverlayRedraw(candidate);
      }
    }
  }
  redrawSelectionState() {
    for (const overlay of this.overlays.values()) {
      if (this.isOverlayNearViewport(overlay)) {
        this.requestOverlayRedraw(overlay);
      }
    }
  }
  onTouchStart(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.touches.length >= 2) {
      event.preventDefault();
      event.stopPropagation();
      this.clearLayerLongPress();
      this.touchGestureCooldownUntil = Date.now() + 450;
      this.clearCurrentStroke();
      this.activeTouchId = null;
      this.redrawAll();
      this.resizeOverlay(overlay);
      const center = getTouchCenter(event.touches);
      const centerPoint = this.getOverlayInputPoint(overlay, center.x, center.y);
      const selected = this.getSelectedEditableElements(overlay.pageIndex);
      const bounds = normalizedElementsBounds(selected);
      const resizeSelection = this.tool === "select" && selected.length > 0 && bounds !== null && this.selectionBoxContainsPoint(overlay, centerPoint, bounds);
      this.touchScroll = {
        initialDistance: getTouchDistance(event.touches),
        initialBounds: resizeSelection ? bounds : void 0,
        initialElements: resizeSelection ? selected.map(cloneElement) : void 0,
        lastX: center.x,
        lastY: center.y,
        mode: resizeSelection ? "resize-selection" : "scroll",
        scrollEl: findScrollableAncestor(overlay.pageEl)
      };
      return;
    }
    if (event.touches.length !== 1) {
      return;
    }
    if (Date.now() < this.touchGestureCooldownUntil) {
      event.preventDefault();
      event.stopPropagation();
      this.clearCurrentStroke();
      this.activeTouchId = null;
      return;
    }
    const touch = event.changedTouches[0];
    this.touchScroll = null;
    this.activeTouchId = touch.identifier;
    event.preventDefault();
    event.stopPropagation();
    this.resizeOverlay(overlay);
    const point = this.getOverlayInputPoint(overlay, touch.clientX, touch.clientY);
    const now = Date.now();
    const previousTap = this.lastTap;
    const isDoubleTap = previousTap !== null && previousTap.pageIndex === overlay.pageIndex && now - previousTap.time < 420 && normalizedDistance(previousTap.point, point, overlay.cssWidth, overlay.cssHeight) < 18;
    this.lastTap = { pageIndex: overlay.pageIndex, point, time: now };
    if (isDoubleTap && this.openEditorAtPoint(point, overlay)) {
      this.clearLayerLongPress();
      this.activeTouchId = null;
      return;
    }
    const hitElement = this.findElementAt(overlay, point);
    this.startLayerLongPress(overlay, point, touch.clientX, touch.clientY, hitElement);
    this.beginInkInteraction(point, overlay, hitElement);
  }
  onTouchMove(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.touches.length >= 2) {
      event.preventDefault();
      event.stopPropagation();
      this.touchGestureCooldownUntil = Date.now() + 450;
      this.clearCurrentStroke();
      this.activeTouchId = null;
      const center = getTouchCenter(event.touches);
      if (!this.touchScroll) {
        this.touchScroll = {
          initialDistance: getTouchDistance(event.touches),
          lastX: center.x,
          lastY: center.y,
          mode: "scroll",
          scrollEl: findScrollableAncestor(overlay.pageEl)
        };
        return;
      }
      const distance = getTouchDistance(event.touches);
      const zoomDelta = distance - this.touchScroll.initialDistance;
      if (this.touchScroll.mode === "resize-selection") {
        if (this.touchScroll.initialBounds && this.touchScroll.initialElements && Math.abs(zoomDelta) > 4) {
          if (!this.touchScroll.historyRecorded) {
            this.rememberHistory();
            this.touchScroll.historyRecorded = true;
          }
          this.resizeSelectedElementsFromPinch(this.touchScroll, distance);
          this.markDirty();
          this.redoStack = [];
          this.requestOverlayRedraw(overlay);
        }
        this.touchScroll.lastX = center.x;
        this.touchScroll.lastY = center.y;
        return;
      }
      const moveY = Math.abs(center.y - this.touchScroll.lastY);
      const moveX = Math.abs(center.x - this.touchScroll.lastX);
      if (Math.abs(zoomDelta) > 26 && Math.abs(zoomDelta) > Math.max(moveY, moveX) * 1.8) {
        dispatchPdfZoomGesture(this.rootEl, zoomDelta);
        this.touchScroll.initialDistance = distance;
        this.scheduleZoomGeometryRefresh();
      }
      this.touchScroll.scrollEl.scrollTop += this.touchScroll.lastY - center.y;
      this.touchScroll.scrollEl.scrollLeft += this.touchScroll.lastX - center.x;
      this.touchScroll.lastX = center.x;
      this.touchScroll.lastY = center.y;
      return;
    }
    if (this.activeTouchId === null) {
      return;
    }
    const touch = findTouch(event.touches, this.activeTouchId);
    if (!touch) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.cancelLayerLongPressOnMove(touch.clientX, touch.clientY);
    if (this.layerLongPressTriggered) {
      return;
    }
    this.currentStrokeHadTouchMove = true;
    this.moveInkInteraction(this.getOverlayInputPoint(overlay, touch.clientX, touch.clientY), overlay);
  }
  onTouchEnd(event, overlay) {
    if (!this.enabled) {
      return;
    }
    if (event.touches.length >= 2) {
      this.touchGestureCooldownUntil = Date.now() + 450;
      return;
    }
    if (event.touches.length === 1 && this.touchScroll) {
      this.touchGestureCooldownUntil = Date.now() + 450;
      if (this.touchScroll.mode === "resize-selection" && this.dirty) {
        this.scheduleAutoSave();
      }
      this.touchScroll = null;
      this.scheduleZoomGeometryRefresh(80);
      return;
    }
    this.touchScroll = null;
    this.scheduleZoomGeometryRefresh(80);
    if (this.activeTouchId === null) {
      return;
    }
    if (findTouch(event.touches, this.activeTouchId)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.activeTouchId = null;
    if (this.consumeLayerLongPress()) {
      return;
    }
    this.endInkInteraction(overlay);
  }
  eraseAt(overlay, point) {
    const before = this.strokeHistory.length;
    const removed = [];
    const nextStrokes = this.strokeHistory.filter((stroke) => {
      if (stroke.pageIndex !== overlay.pageIndex) {
        return true;
      }
      const keep = !strokeContainsPoint(stroke, point, overlay.cssWidth, overlay.cssHeight, this.eraserWidth);
      if (!keep) {
        removed.push(stroke);
      }
      return keep;
    });
    if (nextStrokes.length !== before) {
      this.rememberHistory();
      this.markElementsDeleted(removed);
      this.strokeHistory = nextStrokes;
      this.redoStack = [];
      this.pruneSelection();
      this.markDirty();
      this.redrawOverlay(overlay);
      this.scheduleAutoSave();
    }
  }
  undo() {
    const snapshot = this.undoStack.pop();
    if (!snapshot) {
      return;
    }
    this.redoHistoryStack.push(this.createHistorySnapshot());
    this.restoreHistorySnapshot(snapshot);
  }
  redo() {
    const snapshot = this.redoHistoryStack.pop();
    if (!snapshot) {
      return;
    }
    this.undoStack.push(this.createHistorySnapshot());
    this.restoreHistorySnapshot(snapshot);
  }
  async clearUnsavedInk() {
    if (this.selectedStrokeIds.size > 0) {
      const selected = new Set(this.selectedStrokeIds);
      const before = this.getEditableElements().length;
      const removed = this.getEditableElements().filter((element) => selected.has(element.id));
      const nextStrokes = this.strokeHistory.filter((stroke) => !selected.has(stroke.id));
      const nextTexts = this.textHistory.filter((text) => !selected.has(text.id));
      const nextCovers = this.coverHistory.filter((cover) => !selected.has(cover.id));
      const nextImages = this.imageHistory.filter((image) => !selected.has(image.id));
      if (nextStrokes.length + nextTexts.length + nextCovers.length + nextImages.length !== before) {
        this.rememberHistory();
        this.markElementsDeleted(removed);
        this.strokeHistory = nextStrokes;
        this.textHistory = nextTexts;
        this.coverHistory = nextCovers;
        this.imageHistory = nextImages;
        this.clearCurrentStroke();
        this.currentCover = null;
        this.clearEditableSelection();
        this.redoStack = [];
        this.markDirty();
        this.redrawAll();
        this.refreshCommentManager();
        this.scheduleAutoSave();
        return;
      }
    }
    if (this.nativeSelection) {
      const covered = this.aiCoverNativeSelection();
      if (covered) {
        this.nativeSelection = null;
        this.redrawAll();
      }
      return;
    }
    if (this.getEditableElements().length === 0) {
      return;
    }
    if (!await showConfirmModal({
      confirmLabel: uiText("\u6E05\u7A7A", "Clear"),
      message: uiText("\u6E05\u7A7A\u53EF\u7F16\u8F91\u6807\u6CE8\uFF1F\u4E0D\u4F1A\u76F4\u63A5\u5220\u9664\u539F PDF \u5185\u5BB9\uFF0C\u4F46\u4F1A\u79FB\u9664\u8986\u76D6\u5C42\u548C\u672C\u63D2\u4EF6\u6807\u6CE8\u3002", "Clear editable annotations? This will not delete original PDF content, but it will remove overlays and plugin annotations."),
      title: uiText("\u6E05\u7A7A\u6807\u6CE8", "Clear annotations")
    })) {
      return;
    }
    this.clearCurrentStroke();
    this.currentCover = null;
    this.rememberHistory();
    this.markElementsDeleted(this.getEditableElements());
    this.strokeHistory = [];
    this.textHistory = [];
    this.coverHistory = [];
    this.imageHistory = [];
    this.redoStack = [];
    this.pruneSelection();
    this.markDirty();
    this.redrawAll();
    this.refreshCommentManager();
    this.scheduleAutoSave();
  }
  redrawAll() {
    this.pruneImageCache();
    this.scheduleExternalInkLayerUpdate();
    for (const overlay of this.overlays.values()) {
      if (this.isOverlayNearViewport(overlay)) {
        this.requestOverlayRedraw(overlay);
      }
    }
  }
  pruneImageCache() {
    const activeDataUrls = new Set(this.imageHistory.map((image) => image.dataUrl));
    for (const dataUrl of this.imageCache.keys()) {
      if (!activeDataUrls.has(dataUrl)) {
        this.imageCache.delete(dataUrl);
      }
    }
  }
  requestOverlayRedraw(overlay, previewStroke) {
    if (previewStroke) {
      overlay.redrawPreviewStroke = previewStroke;
    }
    if (overlay.redrawFrame !== null && overlay.redrawFrame !== void 0) {
      return;
    }
    overlay.redrawFrame = window.requestAnimationFrame(() => {
      overlay.redrawFrame = null;
      const pendingPreview = overlay.redrawPreviewStroke ?? void 0;
      overlay.redrawPreviewStroke = null;
      let resized = false;
      if (!this.currentStroke || this.currentStroke.pageIndex !== overlay.pageIndex) {
        resized = this.resizeOverlay(overlay);
      }
      if (!resized) {
        this.redrawOverlay(overlay, pendingPreview);
      }
    });
  }
  isOverlayNearViewport(overlay) {
    return this.isPageElementNearViewport(overlay.pageEl);
  }
  isPageElementNearViewport(pageEl) {
    const rect = pageEl.getBoundingClientRect();
    const margin = Math.max(activeWindow.innerHeight * 1.5, 900);
    return rect.bottom >= -margin && rect.top <= activeWindow.innerHeight + margin;
  }
  // Who paints external (PDF-native) ink on a page right now. Exactly one
  // layer may own the display at any moment or the user sees double doodles.
  shouldDrawExternalInk(pageIndex) {
    if (this.inkCommitSettlePages.has(pageIndex)) {
      return true;
    }
    if (!this.enabled) {
      return false;
    }
    if (this.inkDetachReloadPendingPages.has(pageIndex)) {
      return false;
    }
    return true;
  }
  redrawOverlay(overlay, previewStroke) {
    const ctx = overlay.staticCanvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.setTransform(overlay.dpr, 0, 0, overlay.dpr, 0, 0);
    ctx.clearRect(0, 0, overlay.cssWidth, overlay.cssHeight);
    const editingText = this.nativeTextEditor !== null;
    const tintEditableSelection = !editingText;
    const showEditableSelectionControls = !editingText && this.shouldShowEditableSelection();
    if (this.nativeTextEditorCover && this.nativeTextEditorCover.pageIndex === overlay.pageIndex) {
      drawCoverElement(ctx, this.nativeTextEditorCover, overlay.cssWidth, overlay.cssHeight, false);
    }
    const orderedElements = this.getEditableElementsForPage(overlay.pageIndex);
    for (const element of orderedElements) {
      const selected2 = tintEditableSelection && this.selectedStrokeIds.has(element.id);
      if (element.kind === "cover") {
        drawCoverElement(ctx, element, overlay.cssWidth, overlay.cssHeight, selected2);
      } else if (element.kind === "image") {
        this.drawImageElement(ctx, element, overlay.cssWidth, overlay.cssHeight, selected2);
      } else if (element.kind === "stroke") {
        if (Array.isArray(element.pdfPoints)) {
          if (this.shouldDrawExternalInk(element.pageIndex)) {
            drawStroke(ctx, element, overlay.cssWidth, overlay.cssHeight, selected2);
          }
        } else if (!this.savedInkIsBurnedIntoPdf || !element.saved) {
          drawStroke(ctx, element, overlay.cssWidth, overlay.cssHeight, selected2);
        }
      } else if (!element.saved || !this.savedTextIsBurnedIntoPdf || element.presentation === "comment") {
        drawTextElement(ctx, element, overlay.cssWidth, overlay.cssHeight, selected2);
      }
    }
    if (this.currentCover && this.currentCover.pageIndex === overlay.pageIndex) {
      drawCoverElement(ctx, this.currentCover, overlay.cssWidth, overlay.cssHeight, false);
    }
    if (showEditableSelectionControls && this.selectionDrag?.mode === "marquee" && this.selectionDrag.pageIndex === overlay.pageIndex) {
      drawMarqueeBox(ctx, this.selectionDrag.start, this.selectionDrag.current, overlay.cssWidth, overlay.cssHeight);
    }
    const selected = orderedElements.filter((element) => this.selectedStrokeIds.has(element.id));
    if (showEditableSelectionControls && selected.length > 0) {
      drawSelectionGroup(ctx, selected, overlay.cssWidth, overlay.cssHeight);
    }
    if (showEditableSelectionControls && this.nativeSelection?.pageIndex === overlay.pageIndex) {
      drawNativeSelection(ctx, this.nativeSelection, overlay.cssWidth, overlay.cssHeight);
    }
    if (this.cropPreview?.pageIndexes.has(overlay.pageIndex)) {
      drawCropPreview(ctx, this.cropPreview.crop, overlay.cssWidth, overlay.cssHeight);
    }
    const liveStroke = previewStroke ?? (this.currentStroke?.pageIndex === overlay.pageIndex ? this.currentStroke : void 0);
    this.redrawLiveOverlay(overlay, liveStroke);
  }
  clearLiveOverlay(overlay) {
    const ctx = overlay.canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, overlay.canvas.width, overlay.canvas.height);
  }
  redrawLiveOverlay(overlay, stroke) {
    this.clearLiveOverlay(overlay);
    if (!stroke || stroke.pageIndex !== overlay.pageIndex) {
      return;
    }
    const ctx = overlay.canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.setTransform(overlay.dpr, 0, 0, overlay.dpr, 0, 0);
    drawStroke(ctx, stroke, overlay.cssWidth, overlay.cssHeight, false);
  }
  drawImageElement(ctx, image, cssWidth, cssHeight, selected = false) {
    let bitmap = this.imageCache.get(image.dataUrl);
    if (!bitmap) {
      bitmap = new Image();
      bitmap.onload = () => this.redrawAll();
      bitmap.src = image.dataUrl;
      this.imageCache.set(image.dataUrl, bitmap);
    }
    if (!bitmap.complete || bitmap.naturalWidth === 0) {
      return;
    }
    ctx.save();
    ctx.globalAlpha = selected ? Math.max(0.2, image.opacity * 0.55) : image.opacity;
    ctx.drawImage(bitmap, image.x * cssWidth, image.y * cssHeight, image.width * cssWidth, image.height * cssHeight);
    ctx.restore();
  }
  async saveIntoPdf(auto = false) {
    const elements = this.getEditableElements();
    const targetFile = this.file;
    const targetPath = targetFile.path;
    if (this.detachedInkEditPages.size > 0) {
      await this.commitDetachedInkPages(new Set(this.detachedInkEditPages));
      return;
    }
    const hasUnsavedPdfStroke = elements.some((element) => element.kind === "stroke" && element.pdfSaved !== true);
    const changedInkPages = /* @__PURE__ */ new Set([
      ...Array.from(this.dirtyInkPages),
      ...elements.filter((element) => element.kind === "stroke" && element.pdfSaved !== true).map((stroke) => stroke.pageIndex)
    ]);
    const deletedExternalInkIds = new Set(this.deletedExternalInkIds);
    const deletedPdftionInkIds = new Set(this.deletedPdftionInkIds);
    const hasInkPdfChange = changedInkPages.size > 0 || deletedExternalInkIds.size > 0 || deletedPdftionInkIds.size > 0;
    if (!this.dirty && elements.every((element) => element.saved) && !hasUnsavedPdfStroke && !hasInkPdfChange) {
      if (!auto) {
        new import_obsidian.Notice(uiText("\u6CA1\u6709\u65B0\u7684\u6807\u6CE8\u9700\u8981\u4FDD\u5B58\u3002", "No new annotations to save."));
      }
      return;
    }
    if (this.saving) {
      this.pendingSaveAfterCurrentSave = true;
      return;
    }
    this.clearAutoSaveTimer();
    this.saving = true;
    try {
      const readCache = await this.plugin.getPdfReadCache(targetFile);
      const binary = readCache.bytes;
      let buffer = binary;
      if (hasInkPdfChange) {
        const pdf = readCache.pdf;
        const sourcePageCount = pdf.getPageCount();
        await syncEditableInkAnnotationsOnPdf(pdf, elements, {
          deletedExternalInkIds,
          deletedPdftionInkIds,
          dirtyPages: changedInkPages
        });
        const saved = await pdf.save({ addDefaultPage: false, useObjectStreams: false });
        buffer = toPdfBytes(saved);
        await validatePdfWriteCandidate(buffer, sourcePageCount);
        await this.savePdfRewriteBackup();
        let sourceModified = false;
        try {
          sourceModified = true;
          await this.plugin.app.vault.modifyBinary(targetFile, buffer);
          const written = await this.plugin.app.vault.readBinary(targetFile);
          await validatePdfWriteCandidate(written, sourcePageCount);
          if (await sha256Hex(written) !== await sha256Hex(buffer)) {
            throw new Error("PDF write verification failed: saved bytes changed after writing.");
          }
          this.plugin.invalidatePdfReadCache(targetFile);
        } catch (error) {
          if (sourceModified) {
            this.plugin.invalidatePdfReadCache(targetFile);
            await this.plugin.app.vault.modifyBinary(targetFile, binary.slice(0));
          }
          throw error;
        }
      }
      const markedElements = elements.map((element) => {
        const wroteStrokeToPdf = element.kind === "stroke" && changedInkPages.has(element.pageIndex);
        element.saved = true;
        if (element.kind === "stroke") {
          if (wroteStrokeToPdf) {
            element.pdfSaved = true;
            element.pdfPoints = element.points.map((point) => ({ ...point }));
            element.externalDirty = false;
          }
          if (wroteStrokeToPdf) {
            element.source = "pdftion";
          }
        }
        return cloneElement(element);
      });
      await this.plugin.saveEditableAnnotationState(targetFile, markedElements, buffer);
      if (this.file.path !== targetPath) {
        return;
      }
      this.clearCurrentStroke();
      this.currentCover = null;
      this.savedInkIsBurnedIntoPdf = false;
      this.savedTextIsBurnedIntoPdf = false;
      this.pendingNativeInkHidePages.clear();
      this.detachedInkEditPages.clear();
      this.dirtyInkPages.clear();
      this.deletedExternalInkIds.clear();
      this.deletedPdftionInkIds.clear();
      this.pruneSelection();
      this.dirty = false;
      this.updateExternalInkLayerState();
      if (!auto) {
        this.redrawAll();
      }
      if (!auto) {
        new import_obsidian.Notice(uiText(`\u5DF2\u4FDD\u5B58\u5230 ${targetFile.name}\u3002`, `Saved into ${targetFile.name}.`));
      }
    } catch (error) {
      console.error(error);
      if (auto) {
        await this.saveEditableStateWhileSaving();
      } else {
        new import_obsidian.Notice(uiText("\u81EA\u52A8\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "Could not auto-save into this PDF. Check the console for details."));
      }
    } finally {
      this.saving = false;
      this.flushPendingEditableInkPrepare();
      if (this.pendingSaveAfterCurrentSave) {
        this.pendingSaveAfterCurrentSave = false;
        this.scheduleAutoSave(AUTO_SAVE_IDLE_DELAY_MS);
      }
    }
  }
  async saveEditableState() {
    const elements = this.getEditableElements();
    const targetFile = this.file;
    const targetPath = targetFile.path;
    if (!this.dirty && elements.every((element) => element.saved)) {
      return;
    }
    if (this.saving) {
      this.pendingSaveAfterCurrentSave = true;
      return;
    }
    this.clearAutoSaveTimer();
    this.saving = true;
    try {
      const binary = await this.plugin.app.vault.readBinary(targetFile);
      await this.plugin.saveEditableAnnotationState(targetFile, elements.map(markElementSaved), binary);
      if (this.file.path !== targetPath) {
        return;
      }
      this.savedInkIsBurnedIntoPdf = false;
      this.savedTextIsBurnedIntoPdf = false;
      for (const element of elements) {
        element.saved = true;
      }
      this.dirty = false;
    } catch (error) {
      console.warn("pdftion could not save editable annotation state; retrying.", error);
      if (this.file.path === targetPath) {
        this.scheduleAutoSave(1200);
      }
    } finally {
      this.saving = false;
      this.flushPendingEditableInkPrepare();
      if (this.pendingSaveAfterCurrentSave) {
        this.pendingSaveAfterCurrentSave = false;
        this.scheduleAutoSave(AUTO_SAVE_IDLE_DELAY_MS);
      }
    }
  }
  flushPendingEditableInkPrepare() {
    if (!this.pendingEditableInkPrepareAfterSave || !this.enabled) {
      return;
    }
    this.pendingEditableInkPrepareAfterSave = false;
    this.scheduleEditableInkPrepare(0);
  }
  async exportAnnotationsMarkdown() {
    return this.exportConvertedMarkdown();
  }
  async exportAnnotationsDocx() {
    return this.exportConvertedDocx();
  }
  async exportMarkdownDocxBridge() {
    const mdPath = await this.exportConvertedMarkdown({ notice: false });
    const docxPath = await this.exportConvertedDocx({ notice: false });
    if (mdPath || docxPath) {
      new import_obsidian.Notice(uiText(`\u5DF2\u5BFC\u51FA\u8F6C\u6362\u6587\u6863\uFF1A${[mdPath, docxPath].filter(Boolean).join(", ")}`, `Exported converted documents: ${[mdPath, docxPath].filter(Boolean).join(", ")}`));
    }
    return mdPath ?? docxPath;
  }
  async prepareExportSnapshot() {
    this.conversionInProgress = true;
    this.clearAutoSaveTimer();
    this.clearEditableInkPrepareTimer();
    try {
      if (this.finishingPdfInkEditing) {
        await Promise.race([this.finishingPdfInkEditing, sleepMs(1e4)]);
      }
      for (let attempt = 0; attempt < 200 && (this.saving || this.preparingPdfInkForEditing || this.finishingPdfInkEditing); attempt += 1) {
        await sleepMs(50);
      }
      if (this.saving || this.preparingPdfInkForEditing || this.finishingPdfInkEditing) {
        throw new Error("PDF editing state is still being prepared; conversion did not start.");
      }
      const sourceSnapshot = await this.captureSourcePdfSnapshot();
      await this.loadEditableAnnotations();
      this.commitNativeTextEditor();
      await sleepMs(0);
      this.redrawAll();
      await waitForNextFrame();
      return sourceSnapshot;
    } catch (error) {
      this.conversionInProgress = false;
      throw error;
    }
  }
  async captureSourcePdfSnapshot() {
    const bytes = await this.plugin.app.vault.readBinary(this.file);
    return {
      bytes,
      fingerprint: await sha256Hex(bytes),
      path: this.file.path
    };
  }
  async assertSourcePdfSnapshot(snapshot) {
    const sourceIntegrityError = await this.verifySourcePdfAfterConversion(
      snapshot.path,
      snapshot.bytes,
      snapshot.fingerprint
    );
    if (sourceIntegrityError) {
      throw sourceIntegrityError;
    }
  }
  async verifySourcePdfAfterConversion(sourcePath, sourceBytes, sourceFingerprint) {
    try {
      const source = this.plugin.app.vault.getAbstractFileByPath(sourcePath);
      if (!(source instanceof import_obsidian.TFile)) {
        const restored = await this.plugin.app.vault.createBinary(sourcePath, sourceBytes.slice(0));
        this.file = restored;
        return new Error(`The source PDF disappeared during conversion and was restored: ${sourcePath}`);
      }
      const finalBytes = await this.plugin.app.vault.readBinary(source);
      if (await sha256Hex(finalBytes) === sourceFingerprint) {
        this.file = source;
        return null;
      }
      await this.plugin.app.vault.modifyBinary(source, sourceBytes.slice(0));
      this.file = source;
      return new Error(`The source PDF changed during conversion and was restored: ${sourcePath}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return new Error(`Could not verify or restore the source PDF after conversion: ${sourcePath}. ${message}`);
    }
  }
  async exportConvertedMarkdown(options = {}) {
    try {
      const sourceSnapshot = await this.prepareExportSnapshot();
      const noteDraw = getNoteDrawWriteApi();
      const visualPages = await this.captureVisualConversionPages({
        includeCovers: false,
        includeImages: false,
        includeStrokes: false,
        includeText: false
      }, sourceSnapshot);
      const pages = visualPages.map((page) => ({
        height: page.height,
        lines: page.lines,
        pageIndex: page.pageIndex,
        width: page.width
      }));
      const targetPath = await this.getUniqueConvertedPath("pdftion-converted", "md");
      const persistedImages = await this.persistNoteDrawExportImages(
        targetPath,
        collectNoteDrawExportImages(visualPages, this.getEditableElements()).filter(isUsefulMarkdownExportImage)
      );
      const { floating: floatingImages, inline: inlineImages } = partitionMarkdownExportImages(pages, persistedImages);
      const markdown = buildEditableMarkdown(
        this.file,
        pages,
        noteDraw ? inlineImages : [...inlineImages, ...floatingImages],
        targetPath
      );
      const targetFile = await this.plugin.app.vault.create(targetPath, markdown);
      if (noteDraw) {
        await noteDraw.writeDrawings(
          targetFile,
          buildNoteDrawExportData(targetPath, pages, this.getEditableElements(), floatingImages)
        );
      }
      const opened = await this.openConvertedMarkdownFile(targetFile);
      await this.assertSourcePdfSnapshot(sourceSnapshot);
      if (options.notice !== false) {
        new import_obsidian.Notice(noteDraw ? uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} MD\uFF0C\u6587\u5B57\u4E0E\u63D2\u56FE\u53EF\u76F4\u63A5\u7F16\u8F91\uFF0C\u6D82\u9E26\u5DF2\u8F6C\u4E3A NoteDraw\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} editable MD with native images and NoteDraw ink: ${targetPath}`) : uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} MD\uFF0C\u63D2\u56FE\u5DF2\u4F7F\u7528\u539F\u751F Markdown \u5F15\u7528\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} MD with native image references: ${targetPath}`));
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      new import_obsidian.Notice(uiText("\u8F6C\u6362 MD \u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "MD conversion failed. Check the console."));
      return null;
    }
  }
  async exportConvertedDocx(options = {}) {
    try {
      const sourceSnapshot = await this.prepareExportSnapshot();
      const pages = await this.captureVisualConversionPages({}, sourceSnapshot);
      const targetPath = await this.getUniqueConvertedPath("pdftion-converted", "docx");
      const docx = await buildDocxFromPageImages(pages, this.file.basename);
      const buffer = toArrayBufferCopy(docx);
      const targetFile = await this.plugin.app.vault.createBinary(targetPath, buffer);
      const opened = await this.openConvertedFile(targetFile);
      await this.assertSourcePdfSnapshot(sourceSnapshot);
      if (options.notice !== false) {
        new import_obsidian.Notice(uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} DOCX\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} DOCX: ${targetPath}`));
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      new import_obsidian.Notice(uiText("\u8F6C\u6362 DOCX \u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "DOCX conversion failed. Check the console."));
      return null;
    }
  }
  async openConvertedFile(file) {
    if (!this.plugin.settings.openBurnedPdfAfterExport) {
      return false;
    }
    try {
      await this.plugin.app.workspace.getLeaf("tab").openFile(file);
      return true;
    } catch (error) {
      console.warn("pdftion could not open the converted file.", error);
      return false;
    }
  }
  async openConvertedMarkdownFile(file) {
    if (!this.plugin.settings.openBurnedPdfAfterExport) {
      return false;
    }
    try {
      const leaf = this.plugin.app.workspace.getLeaf("tab");
      await leaf.openFile(file);
      await leaf.setViewState({
        active: true,
        state: { file: file.path, mode: "preview", source: false },
        type: "markdown"
      });
      return true;
    } catch (error) {
      console.warn("pdftion could not open converted Markdown in preview mode.", error);
      return false;
    }
  }
  async exportConvertedPng(options = {}) {
    try {
      const sourceSnapshot = await this.prepareExportSnapshot();
      const pages = await this.captureVisualConversionPages({}, sourceSnapshot);
      const targetPath = await this.getUniqueConvertedPath("pdftion-converted", "png");
      const png = await buildCombinedPagePng(pages);
      const targetFile = await this.plugin.app.vault.createBinary(targetPath, toArrayBufferCopy(png));
      const opened = await this.openConvertedFile(targetFile);
      await this.assertSourcePdfSnapshot(sourceSnapshot);
      if (options.notice !== false) {
        new import_obsidian.Notice(uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} PNG\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} PNG: ${targetPath}`));
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      new import_obsidian.Notice(uiText("\u8F6C\u6362 PNG \u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "PNG conversion failed. Check the console."));
      return null;
    }
  }
  async exportConvertedPptx(options = {}) {
    try {
      const sourceSnapshot = await this.prepareExportSnapshot();
      const pages = await this.captureVisualConversionPages({}, sourceSnapshot);
      const targetPath = await this.getUniqueConvertedPath("pdftion-converted", "pptx");
      const pptx = await buildPptxFromPageImages(pages, this.file.basename);
      const targetFile = await this.plugin.app.vault.createBinary(targetPath, toArrayBufferCopy(pptx));
      const opened = await this.openConvertedFile(targetFile);
      await this.assertSourcePdfSnapshot(sourceSnapshot);
      if (options.notice !== false) {
        new import_obsidian.Notice(uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} PPTX\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} PPTX: ${targetPath}`));
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian.Notice(uiText(`\u8F6C\u6362 PPTX \u5931\u8D25\uFF1A${message}`, `PPTX conversion failed: ${message}`), 12e3);
      return null;
    }
  }
  async exportConvertedHtml(options = {}) {
    try {
      const sourceSnapshot = await this.prepareExportSnapshot();
      const pages = await this.captureVisualConversionPages({}, sourceSnapshot);
      const targetPath = await this.getUniqueConvertedPath("pdftion-converted", "html");
      const targetFile = await this.plugin.app.vault.create(targetPath, buildSelfContainedVisualHtml(this.file, pages));
      const opened = await this.openConvertedFile(targetFile);
      await this.assertSourcePdfSnapshot(sourceSnapshot);
      if (options.notice !== false) {
        new import_obsidian.Notice(uiText(`\u5DF2\u8F6C\u6362${opened ? "\u5E76\u6253\u5F00" : ""} HTML\uFF1A${targetPath}`, `Converted${opened ? " and opened" : ""} HTML: ${targetPath}`));
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      new import_obsidian.Notice(uiText("\u8F6C\u6362 HTML \u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u3002", "HTML conversion failed. Check the console."));
      return null;
    }
  }
  async captureVisualConversionPages(options = {}, sourceSnapshot) {
    this.conversionInProgress = true;
    this.clearAutoSaveTimer();
    this.clearEditableInkPrepareTimer();
    this.exportRenderFallbackPages.clear();
    if (this.finishingPdfInkEditing) {
      await Promise.race([this.finishingPdfInkEditing, sleepMs(1e4)]);
    }
    for (let attempt = 0; attempt < 200 && (this.saving || this.preparingPdfInkForEditing); attempt += 1) {
      await sleepMs(50);
    }
    if (this.saving || this.preparingPdfInkForEditing || this.finishingPdfInkEditing) {
      throw new Error("PDF editing state is still being saved; conversion did not start.");
    }
    const pageElements = this.findPageElements();
    const screenOnlySurface = pageElements.length === 1 && !pageElements[0].matches(
      ".pdfViewer .page, .pdf-viewer .page, .pdf-container .page, .page[data-page-number]"
    );
    const pageCount = screenOnlySurface ? 1 : await this.getCurrentPdfPageCount();
    const pages = [];
    const firstPage = this.findPdfPageElementForExport(0) ?? this.rootEl;
    const scrollEl = findScrollableAncestor(firstPage);
    const originalScrollLeft = scrollEl.scrollLeft;
    const originalScrollTop = scrollEl.scrollTop;
    const snapshot = sourceSnapshot ?? await this.captureSourcePdfSnapshot();
    let sourceIntegrityError = null;
    try {
      for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
        const pageEl = this.findPdfPageElementForExport(pageIndex);
        pageEl?.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
        await this.ensurePdfPageRenderedForExport(pageIndex, pageEl);
        let captured = null;
        for (let attempt = 0; attempt < 16 && !captured; attempt += 1) {
          await sleepMs(attempt === 0 ? 140 : 120);
          this.scanPages();
          const overlay = this.findOverlayByPageIndex(pageIndex);
          if (!overlay) {
            continue;
          }
          this.resizeOverlay(overlay);
          await waitForNextFrame();
          const candidate = await this.captureVisualPageImage(overlay, options);
          if (!candidate) {
            continue;
          }
          const canvasStillBlank = candidate.sourceVisualRatio < 35e-5 && candidate.lines.length > 0;
          if (canvasStillBlank && attempt < 15) {
            continue;
          }
          captured = candidate;
        }
        if (captured) {
          pages.push(captured);
        }
      }
    } finally {
      scrollEl.scrollLeft = originalScrollLeft;
      scrollEl.scrollTop = originalScrollTop;
      scrollEl.dispatchEvent(new Event("scroll"));
      this.scanPages();
      this.conversionInProgress = false;
      sourceIntegrityError = await this.verifySourcePdfAfterConversion(
        snapshot.path,
        snapshot.bytes,
        snapshot.fingerprint
      );
    }
    if (sourceIntegrityError) {
      throw sourceIntegrityError;
    }
    if (pages.length !== pageCount) {
      throw new Error(`Only ${pages.length}/${pageCount} PDF pages rendered for conversion.`);
    }
    return pages;
  }
  getNativePdfViewerApp() {
    const view = this.leaf.view;
    return view.viewer?.child?.pdfViewer ?? null;
  }
  requestNativePdfPageRender(pageIndex) {
    const app = this.getNativePdfViewerApp();
    const viewer = app?.pdfViewer;
    if (!viewer) {
      return;
    }
    const pageNumber = pageIndex + 1;
    const pageView = viewer.getPageView?.(pageIndex) ?? viewer._pages?.[pageIndex] ?? null;
    try {
      viewer.scrollPageIntoView?.({ pageNumber });
      viewer.currentPageNumber = pageNumber;
      viewer.update?.();
      if (pageView?.renderingState === 2 && typeof pageView.resume === "function") {
        pageView.resume();
      } else if (pageView && pageView.renderingState !== 3) {
        (app?.pdfRenderingQueue ?? viewer.renderingQueue)?.renderView?.(pageView);
      }
      app?.forceRendering?.();
      viewer.forceRendering?.();
      (app?.pdfRenderingQueue ?? viewer.renderingQueue)?.renderHighestPriority?.();
    } catch (error) {
      console.debug("pdftion could not explicitly request PDF page rendering.", error);
    }
  }
  async ensurePdfPageRenderedForExport(pageIndex, pageEl) {
    const app = this.getNativePdfViewerApp();
    const viewer = app?.pdfViewer;
    const directPageView = viewer?.getPageView?.(pageIndex) ?? viewer?._pages?.[pageIndex] ?? null;
    if (directPageView?.pdfPage?.render && directPageView.viewport?.width && directPageView.viewport.height) {
      return;
    }
    const directCanvas = directPageView?.canvas ?? pageEl?.querySelector(".canvasWrapper canvas, canvas");
    if (directCanvas && directCanvas.width > 1 && directCanvas.height > 1 && measureCanvasVisualRatio(directCanvas) > 35e-5) {
      return;
    }
    for (let attempt = 0; attempt < 180; attempt += 1) {
      this.scanPages();
      const overlay = this.findOverlayByPageIndex(pageIndex);
      const pageView = viewer?.getPageView?.(pageIndex) ?? viewer?._pages?.[pageIndex] ?? null;
      const canvas = (overlay ? this.getPdfCanvas(overlay) : null) ?? pageView?.canvas ?? pageEl?.querySelector(".canvasWrapper canvas, canvas");
      const canvasReady = Boolean(
        canvas && canvas.width > 1 && canvas.height > 1 && measureCanvasVisualRatio(canvas) > 35e-5
      );
      if (canvasReady) {
        return;
      }
      if (attempt === 0 && pageView?.draw) {
        try {
          pageView.cancelRendering?.();
          pageView.reset?.();
          await Promise.race([pageView.draw(), sleepMs(8e3)]);
          continue;
        } catch (error) {
          console.debug("pdftion could not directly render a PDF page for export.", error);
        }
      }
      if (attempt === 0 || attempt % 4 === 0 || pageView?.renderingState === 2) {
        this.requestNativePdfPageRender(pageIndex);
      }
      await sleepMs(250);
    }
  }
  findPdfPageElementForExport(pageIndex) {
    const candidates = Array.from(this.rootEl.querySelectorAll(
      ".pdfViewer .page, .pdf-viewer .page, .pdf-container .page, .page[data-page-number]"
    ));
    return candidates.find((page, index) => getPageIndex(page, index) === pageIndex) ?? candidates[pageIndex] ?? this.findPageElements()[pageIndex] ?? null;
  }
  async captureVisualPageImage(overlay, options = {}) {
    const displayedCanvas = this.getPdfCanvas(overlay);
    const pdfCanvas = displayedCanvas && measureCanvasVisualRatio(displayedCanvas) > 35e-5 ? displayedCanvas : await this.renderPdfPageCanvasForExport(overlay);
    if (!pdfCanvas || pdfCanvas.width <= 1 || pdfCanvas.height <= 1) {
      return null;
    }
    const sourceWidth = Math.max(1, pdfCanvas.width);
    const sourceHeight = Math.max(1, pdfCanvas.height);
    const maxSize = 1200;
    const scale = Math.min(1, maxSize / Math.max(sourceWidth, sourceHeight));
    const outputWidth = Math.max(1, Math.round(sourceWidth * scale));
    const outputHeight = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = activeDocument.createElement("canvas");
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    ctx.drawImage(pdfCanvas, 0, 0, sourceWidth, sourceHeight, 0, 0, outputWidth, outputHeight);
    const pageView = this.getNativePdfViewerApp()?.pdfViewer?.getPageView?.(overlay.pageIndex) ?? this.getNativePdfViewerApp()?.pdfViewer?._pages?.[overlay.pageIndex] ?? null;
    const renderedLines = collectEditableMarkdownLines(overlay);
    const pdfLines = await collectPdfJsEditableLines(pageView, overlay);
    const elements = this.getEditableElements();
    const lines = mergeInkTextExportLines(
      selectCompleteEditableLines(renderedLines, pdfLines),
      collectInkTextExportLines(elements, overlay)
    );
    sampleEditableTextColors(pdfCanvas, lines);
    const nativeVisuals = attachLinksToVisualConversionImages(
      await extractHtmlDerivedVisualLayers(canvas, lines, overlay.pageIndex),
      collectDomExportLinkRects(overlay.pageEl),
      overlay
    );
    const annotationVisuals = await buildInkVisualExportImages(
      elements.filter((element) => element.pageIndex === overlay.pageIndex && (element.kind === "cover" || element.kind === "stroke" && (!element.saved || !this.savedInkIsBurnedIntoPdf || Array.isArray(element.pdfPoints)))),
      overlay,
      outputWidth,
      outputHeight
    );
    ctx.save();
    ctx.scale(outputWidth / Math.max(1, overlay.cssWidth), outputHeight / Math.max(1, overlay.cssHeight));
    const images = [...nativeVisuals, ...annotationVisuals];
    for (const image of elements.filter((element) => element.kind === "image" && element.pageIndex === overlay.pageIndex)) {
      images.push({
        dataUrl: await convertImageDataUrlToPng(image.dataUrl),
        height: image.height,
        id: image.id,
        opacity: image.opacity,
        width: image.width,
        x: image.x,
        y: image.y,
        zIndex: image.zIndex
      });
    }
    for (const element of elements.filter((candidate) => candidate.pageIndex === overlay.pageIndex)) {
      if (element.kind === "cover" && options.includeCovers !== false) {
        drawCoverElement(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      } else if (element.kind === "image" && options.includeImages !== false) {
        await this.drawImageElementForExport(ctx, element, overlay.cssWidth, overlay.cssHeight);
      } else if (element.kind === "stroke" && options.includeStrokes !== false && (!element.saved || !this.savedInkIsBurnedIntoPdf || Array.isArray(element.pdfPoints))) {
        drawStroke(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      } else if (element.kind === "text" && options.includeText !== false && (!element.saved || !this.savedTextIsBurnedIntoPdf || element.presentation === "comment")) {
        drawTextElement(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      }
    }
    ctx.restore();
    const dataUrl = canvas.toDataURL("image/png");
    return {
      bytes: dataUrlToBytes(dataUrl),
      height: outputHeight,
      images,
      lines,
      pageIndex: overlay.pageIndex,
      sourceVisualRatio: measureCanvasVisualRatio(pdfCanvas),
      width: outputWidth
    };
  }
  async persistNoteDrawExportImages(targetPath, images) {
    if (images.length === 0) {
      return [];
    }
    const assetDir = `${targetPath.replace(/\.md$/i, "")}-assets`;
    if (!await this.plugin.app.vault.adapter.exists(assetDir)) {
      await this.plugin.app.vault.adapter.mkdir(assetDir);
    }
    const targetBase = sanitizeNoteDrawAssetName(targetPath.replace(/\.md$/i, ""));
    const persisted = [];
    for (const [index, image] of images.entries()) {
      const extension = dataUrlImageExtension(image.dataUrl);
      const assetName = `${targetBase}-${sanitizeNoteDrawAssetName(image.id || String(index + 1))}.${extension}`;
      const assetPath = `${assetDir}/${assetName}`;
      const bytes = dataUrlToBytes(image.dataUrl);
      await this.plugin.app.vault.adapter.writeBinary(assetPath, toArrayBufferCopy(bytes));
      persisted.push({
        ...image,
        assetMime: dataUrlMimeType(image.dataUrl),
        assetName,
        assetPath,
        assetSize: bytes.byteLength
      });
    }
    return persisted;
  }
  async drawImageElementForExport(ctx, image, cssWidth, cssHeight) {
    const bitmap = await loadDataUrlImage(image.dataUrl);
    ctx.save();
    ctx.globalAlpha = image.opacity;
    ctx.drawImage(bitmap, image.x * cssWidth, image.y * cssHeight, image.width * cssWidth, image.height * cssHeight);
    ctx.restore();
  }
  async writeVisualConversionImages(pages) {
    const targetFile = this.file;
    const base = targetFile.path.replace(/\.pdf$/i, "");
    let folderPath = `${base}-pdftion-pages`;
    let index = 2;
    while (await this.plugin.app.vault.adapter.exists(folderPath)) {
      folderPath = `${base}-pdftion-pages-${index}`;
      index += 1;
    }
    await this.ensureVaultFolder(folderPath);
    for (const page of pages) {
      const pageName = `page-${String(page.pageIndex + 1).padStart(3, "0")}.png`;
      page.path = `${folderPath}/${pageName}`;
      const buffer = toArrayBufferCopy(page.bytes);
      await this.plugin.app.vault.adapter.writeBinary(page.path, buffer);
    }
    return folderPath;
  }
  async getUniqueConvertedPath(suffix, extension) {
    const base = this.file.path.replace(/\.pdf$/i, "");
    let target = `${base}-${suffix}.${extension}`;
    let index = 2;
    while (await this.plugin.app.vault.adapter.exists(target)) {
      target = `${base}-${suffix}-${index}.${extension}`;
      index += 1;
    }
    return target;
  }
  async ensureVaultFolder(path) {
    if (!path) {
      return;
    }
    const parts = path.split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!await this.plugin.app.vault.adapter.exists(current)) {
        await this.plugin.app.vault.adapter.mkdir(current);
      }
    }
  }
  async exportAnnotatedPdf(options = {}) {
    const progressNotice = options.notice !== false ? new import_obsidian.Notice(uiText("\u6B63\u5728\u5BFC\u51FA\u70E7\u5F55 PDF...", "Exporting burned-in PDF..."), 0) : null;
    try {
      if (progressNotice) {
        await waitForUiPaint();
      }
      this.commitNativeTextEditor();
      this.redrawAll();
      const elements = this.getEditableElements().map(cloneElement);
      const targetFile = this.file;
      const targetPath = await this.getUniqueAnnotatedPdfPath(targetFile);
      const binary = await this.plugin.app.vault.readBinary(targetFile);
      let basePdf = await this.plugin.ensureBasePdfBytes(targetFile, binary);
      let pdf;
      try {
        pdf = await import_pdf_lib.PDFDocument.load(basePdf.bytes, { ignoreEncryption: true, updateMetadata: false });
      } catch (error) {
        console.warn("pdftion could not load the stored base PDF for export; retrying with the current PDF.", error);
        basePdf = {
          bytes: binary,
          fingerprint: await this.plugin.replaceBasePdfBytes(targetFile, binary)
        };
        pdf = await import_pdf_lib.PDFDocument.load(binary, { ignoreEncryption: true, updateMetadata: false });
      }
      const fontBytes = elements.some((element) => element.kind === "text" && element.presentation !== "comment") ? await this.plugin.loadAnnotationFontBytes() : null;
      await drawVisibleInkElementsOnPdf(pdf, elements, fontBytes);
      const saved = await pdf.save({ addDefaultPage: false, useObjectStreams: false });
      const buffer = toPdfBytes(saved);
      const exportedFile = await this.plugin.app.vault.createBinary(targetPath, buffer);
      const opened = await this.openConvertedFile(exportedFile);
      const shared = options.share === false ? false : await trySharePdf(targetPath.split("/").pop() ?? targetFile.name, saved);
      if (progressNotice) {
        progressNotice.setMessage(
          opened ? uiText(`\u5DF2\u5BFC\u51FA\u5E76\u6253\u5F00\uFF1A${targetPath}`, `Exported and opened: ${targetPath}`) : shared ? uiText(`\u5DF2\u5BFC\u51FA\u5E76\u5206\u4EAB\uFF1A${targetPath}`, `Exported and shared: ${targetPath}`) : uiText(`\u5DF2\u5BFC\u51FA\uFF1A${targetPath}`, `Exported: ${targetPath}`)
        );
        window.setTimeout(() => progressNotice.hide(), 4500);
      }
      return targetPath;
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : String(error);
      if (progressNotice) {
        progressNotice.setMessage(uiText(`\u5BFC\u51FA PDF \u5931\u8D25\uFF1A${message}`, `PDF export failed: ${message}`));
        window.setTimeout(() => progressNotice.hide(), 7e3);
      } else {
        new import_obsidian.Notice(uiText(`\u5BFC\u51FA PDF \u5931\u8D25\uFF1A${message}`, `PDF export failed: ${message}`));
      }
      return null;
    }
  }
  async redactCoveredPagesIntoCurrentPdf() {
    this.commitNativeTextEditor();
    const elements = this.getEditableElements().map(cloneElement);
    if (!elements.some((element) => element.kind === "cover")) {
      new import_obsidian.Notice(uiText("\u6CA1\u6709\u906E\u6321\u533A\u57DF\u53EF\u56FA\u5316\u3002", "No cover regions to flatten."));
      return;
    }
    if (!await showConfirmModal({
      confirmLabel: uiText("\u56FA\u5316", "Flatten"),
      message: uiText("\u56FA\u5316\u906E\u6321\u4F1A\u4FEE\u6539\u5F53\u524D PDF\uFF1A\u6709\u906E\u6321\u7684\u5DF2\u6E32\u67D3\u9875\u9762\u4F1A\u91CD\u5EFA\u4E3A\u56FE\u7247\u9875\uFF0C\u4ECE\u800C\u5220\u9664\u5E95\u5C42\u88AB\u906E\u6321\u6587\u5B57/\u56FE\u7247\u5BF9\u8C61\u3002\u7EE7\u7EED\uFF1F", "Flattening covers will modify the current PDF by rebuilding rendered covered pages as images. Continue?"),
      title: uiText("\u56FA\u5316\u906E\u6321", "Flatten covers")
    })) {
      return;
    }
    const binary = await this.plugin.app.vault.readBinary(this.file);
    const { flattenedPages, pdf } = await this.buildPdfWithFlattenedCoveredPages(binary, elements, "covers-only");
    if (flattenedPages.size === 0) {
      new import_obsidian.Notice(uiText("\u5F53\u524D\u6CA1\u6709\u53EF\u56FA\u5316\u7684\u5DF2\u6E32\u67D3\u906E\u6321\u9875\u3002\u8BF7\u5148\u6EDA\u5230\u6709\u906E\u6321\u7684\u9875\u9762\u518D\u8BD5\u3002", "No rendered covered pages are available. Scroll to covered pages and try again."));
      return;
    }
    const saved = await pdf.save({ useObjectStreams: true });
    await this.persistPdfRewrite(saved, elements, uiText(`\u5DF2\u56FA\u5316 ${flattenedPages.size} \u9875\u906E\u6321`, `Flattened covers on ${flattenedPages.size} pages`));
  }
  async buildPdfWithFlattenedCoveredPages(sourceBytes, elements, mode) {
    const source = await import_pdf_lib.PDFDocument.load(sourceBytes, { ignoreEncryption: true });
    const output = await import_pdf_lib.PDFDocument.create();
    const flattenedPages = /* @__PURE__ */ new Set();
    const pageCount = source.getPageCount();
    const coverPages = new Set(elements.filter((element) => element.kind === "cover").map((cover) => cover.pageIndex));
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
      const page = source.getPage(pageIndex);
      const overlay = coverPages.has(pageIndex) ? this.findOverlayByPageIndex(pageIndex) : null;
      const pageElements = elements.filter((element) => element.pageIndex === pageIndex);
      const dataUrl = overlay ? await this.renderFlattenedPageDataUrl(overlay, pageElements, mode) : null;
      if (dataUrl) {
        const size = page.getSize();
        const outPage = output.addPage([size.width, size.height]);
        const image = await output.embedPng(dataUrlToBytes(dataUrl));
        outPage.drawImage(image, { height: size.height, width: size.width, x: 0, y: 0 });
        flattenedPages.add(pageIndex);
        continue;
      }
      const [copied] = await output.copyPages(source, [pageIndex]);
      output.addPage(copied);
    }
    return { flattenedPages, pdf: output };
  }
  async renderFlattenedPageDataUrl(overlay, elements, mode) {
    const pdfCanvas = this.getPdfCanvas(overlay);
    if (!pdfCanvas || pdfCanvas.width <= 0 || pdfCanvas.height <= 0) {
      return null;
    }
    const canvas = activeDocument.createElement("canvas");
    canvas.width = pdfCanvas.width;
    canvas.height = pdfCanvas.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    ctx.drawImage(pdfCanvas, 0, 0, canvas.width, canvas.height);
    const scaleX = canvas.width / Math.max(1, overlay.cssWidth);
    const scaleY = canvas.height / Math.max(1, overlay.cssHeight);
    ctx.save();
    ctx.scale(scaleX, scaleY);
    normalizeInkElementLayers(elements);
    for (const element of elements.sort(compareInkElements)) {
      if (element.kind === "cover") {
        drawCoverElement(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      } else if (mode === "all" && element.kind === "image") {
        await drawImageDataUrl(ctx, element, overlay.cssWidth, overlay.cssHeight);
      } else if (mode === "all" && element.kind === "stroke") {
        drawStroke(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      } else if (mode === "all" && element.kind === "text") {
        drawTextElement(ctx, element, overlay.cssWidth, overlay.cssHeight, false);
      }
    }
    ctx.restore();
    return canvas.toDataURL("image/png");
  }
  async getUniqueAnnotatedPdfPath(file) {
    const base = file.path.replace(/\.pdf$/i, "");
    let target = `${base}-annotated.pdf`;
    let index = 2;
    while (await this.plugin.app.vault.adapter.exists(target)) {
      target = `${base}-annotated-${index}.pdf`;
      index += 1;
    }
    return target;
  }
  jumpToPage(pageIndex) {
    const overlay = this.findOverlayByPageIndex(pageIndex);
    if (!overlay) {
      return false;
    }
    overlay.pageEl.scrollIntoView({ block: "start", behavior: "smooth" });
    return true;
  }
  findElementAt(overlay, point) {
    const ordered = this.getEditableElementsForPage(overlay.pageIndex).reverse();
    for (const tolerance of [HIT_TOLERANCE_STRICT_PX, HIT_TOLERANCE_LOOSE_PX]) {
      for (const element of ordered) {
        if (element.kind === "text" && textBoxContainsPoint(element, point, overlay.cssWidth, overlay.cssHeight, tolerance)) {
          return element;
        }
        if (element.kind === "image" && imageBoxContainsPoint(element, point, overlay.cssWidth, overlay.cssHeight, tolerance)) {
          return element;
        }
        if (element.kind === "stroke" && strokeBoxContainsPoint(element, point, overlay.cssWidth, overlay.cssHeight, tolerance)) {
          return element;
        }
        if (element.kind === "cover" && coverBoxContainsPoint(element, point, overlay.cssWidth, overlay.cssHeight, tolerance)) {
          return element;
        }
      }
    }
    return null;
  }
  findCoverElementAt(overlay, point, includeNativeTextCover = true) {
    const covers = this.getEditableElementsForPage(overlay.pageIndex).filter((element) => element.kind === "cover").reverse();
    for (const cover of covers) {
      if (!includeNativeTextCover && cover.source === "native-text") {
        continue;
      }
      if (coverBoxContainsPoint(cover, point, overlay.cssWidth, overlay.cssHeight, 7)) {
        return cover;
      }
    }
    return null;
  }
  findElementsInSelection(overlay, start, end) {
    return this.getEditableElementsForPage(overlay.pageIndex).filter((element) => {
      if (element.kind === "stroke") {
        return strokeIntersectsSelection(element, start, end, overlay.cssWidth, overlay.cssHeight);
      }
      if (element.kind === "text") {
        return textIntersectsSelection(element, start, end, overlay.cssWidth, overlay.cssHeight);
      }
      return coverIntersectsSelection(element, start, end);
    });
  }
  findNativeObjectAt(overlay, point) {
    const overlayRect = this.getOverlayClientRect(overlay);
    const clientX = overlayRect.left + point.x * overlay.cssWidth;
    const clientY = overlayRect.top + point.y * overlay.cssHeight;
    const textSpans = Array.from(
      overlay.pageEl.querySelectorAll(".textLayer span, .textLayer .markedContent, [data-canvas-width]")
    );
    for (let i = textSpans.length - 1; i >= 0; i -= 1) {
      const span = textSpans[i];
      const text = span.textContent?.trim();
      if (!text) {
        continue;
      }
      const rect = span.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) {
        continue;
      }
      if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
        return {
          height: clamp(rect.height / Math.max(1, overlay.cssHeight), 1e-3, 1),
          id: `native-text-${overlay.pageIndex}-${i}`,
          kind: "text",
          pageIndex: overlay.pageIndex,
          text,
          width: clamp(rect.width / Math.max(1, overlay.cssWidth), 1e-3, 1),
          x: clamp((rect.left - overlayRect.left) / Math.max(1, overlay.cssWidth), 0, 1),
          y: clamp((rect.top - overlayRect.top) / Math.max(1, overlay.cssHeight), 0, 1)
        };
      }
    }
    return null;
  }
  createNativeRegionFromSelection(overlay, start, end) {
    const minX = Math.min(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const width = Math.abs(start.x - end.x);
    const height = Math.abs(start.y - end.y);
    if (width * overlay.cssWidth < 5 || height * overlay.cssHeight < 5) {
      return null;
    }
    const text = this.extractNativeTextInRegion(overlay, minX, minY, width, height);
    return {
      height,
      id: `native-region-${overlay.pageIndex}-${Date.now().toString(36)}`,
      kind: text ? "text" : "region",
      pageIndex: overlay.pageIndex,
      text: text || void 0,
      width,
      x: minX,
      y: minY
    };
  }
  createNativeImageRegionFromSelection(overlay, start, end) {
    const minX = Math.min(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const width = Math.abs(start.x - end.x);
    const height = Math.abs(start.y - end.y);
    if (width * overlay.cssWidth < 5 || height * overlay.cssHeight < 5) {
      return null;
    }
    return {
      height,
      id: `native-image-region-${overlay.pageIndex}-${Date.now().toString(36)}`,
      kind: "region",
      pageIndex: overlay.pageIndex,
      width,
      x: minX,
      y: minY
    };
  }
  convertNativeRegionToImage(selection, overlay) {
    const dataUrl = this.captureNativeRegionImage(selection, overlay);
    if (!dataUrl) {
      return false;
    }
    const cover = {
      color: this.sampleOuterBackgroundColor(overlay, selection),
      height: selection.height,
      id: makeStrokeId(),
      kind: "cover",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: selection.pageIndex,
      saved: false,
      source: "native-region",
      width: selection.width,
      x: selection.x,
      y: selection.y
    };
    const image = {
      dataUrl,
      height: selection.height,
      id: makeStrokeId(),
      kind: "image",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: selection.pageIndex,
      saved: false,
      width: selection.width,
      x: selection.x,
      y: selection.y
    };
    this.rememberHistory();
    this.coverHistory.push(cover);
    this.imageHistory.push(image);
    this.setSingleSelectedElement(image.id);
    this.redoStack = [];
    this.markDirty();
    this.scheduleAutoSave();
    return true;
  }
  captureNativeRegionImage(selection, overlay) {
    const pdfCanvas = this.getPdfCanvas(overlay);
    if (!pdfCanvas) {
      return null;
    }
    const sourceX = clamp(Math.round(selection.x * pdfCanvas.width), 0, Math.max(0, pdfCanvas.width - 1));
    const sourceY = clamp(Math.round(selection.y * pdfCanvas.height), 0, Math.max(0, pdfCanvas.height - 1));
    const sourceWidth = clamp(Math.round(selection.width * pdfCanvas.width), 1, Math.max(1, pdfCanvas.width - sourceX));
    const sourceHeight = clamp(Math.round(selection.height * pdfCanvas.height), 1, Math.max(1, pdfCanvas.height - sourceY));
    const maxSize = 1600;
    const scale = Math.min(1, maxSize / Math.max(sourceWidth, sourceHeight));
    const outputWidth = Math.max(1, Math.round(sourceWidth * scale));
    const outputHeight = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = activeDocument.createElement("canvas");
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    ctx.drawImage(pdfCanvas, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, outputWidth, outputHeight);
    return canvas.toDataURL("image/png");
  }
  async pickAndInsertImageFile() {
    const file = await pickImageFile();
    if (!file) {
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    const size = await getImageDataUrlSize(dataUrl);
    const overlay = this.getVisibleOverlay() ?? Array.from(this.overlays.values())[0];
    if (!overlay) {
      new import_obsidian.Notice(uiText("\u6CA1\u6709\u53EF\u63D2\u5165\u56FE\u7247\u7684 PDF \u9875\u9762\u3002", "No PDF page is available for image insertion."));
      return;
    }
    const maxWidth = 0.42;
    const maxHeight = 0.42;
    const ratio = size.width / Math.max(1, size.height);
    let width = maxWidth;
    let height = width / ratio * (overlay.cssWidth / Math.max(1, overlay.cssHeight));
    if (height > maxHeight) {
      height = maxHeight;
      width = height * ratio * (overlay.cssHeight / Math.max(1, overlay.cssWidth));
    }
    const image = {
      dataUrl,
      height: clamp(height, 0.03, 0.9),
      id: makeStrokeId(),
      kind: "image",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: overlay.pageIndex,
      saved: false,
      width: clamp(width, 0.03, 0.9),
      x: 0.5 - clamp(width, 0.03, 0.9) / 2,
      y: 0.5 - clamp(height, 0.03, 0.9) / 2
    };
    this.rememberHistory();
    this.imageHistory.push(image);
    this.setSingleSelectedElement(image.id);
    this.redoStack = [];
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
  }
  async insertObsidianLinkInteractive() {
    const raw = await showPromptModal({
      actionLabel: uiText("\u63D2\u5165", "Insert"),
      message: uiText("\u8F93\u5165\u94FE\u63A5\u6216\u7B14\u8BB0\u540D\uFF0C\u4F8B\u5982 [[\u7B14\u8BB0]] / ![[\u56FE\u7247.png]]", "Enter a link or note name, for example [[Note]] / ![[image.png]]"),
      title: uiText("\u63D2\u5165\u94FE\u63A5", "Insert link")
    });
    if (!raw) {
      return;
    }
    await this.insertObsidianLink({ link: raw });
  }
  async insertObsidianLink(input) {
    const link = normalizeObsidianLink(input.link);
    if (!link) {
      return null;
    }
    if (link.embed) {
      const inserted = await this.insertVaultImage({
        path: link.target,
        pageIndex: input.pageIndex,
        x: input.x,
        y: input.y
      });
      if (inserted) {
        return inserted;
      }
    }
    const overlay = this.resolveTargetOverlay(input.pageIndex);
    if (!overlay) {
      new import_obsidian.Notice(uiText("\u6CA1\u6709\u53EF\u63D2\u5165\u94FE\u63A5\u7684 PDF \u9875\u9762\u3002", "No PDF page is available for link insertion."));
      return null;
    }
    return this.aiAddText({
      color: normalizeHexColor(input.color ?? this.textColor),
      fontFamily: this.textFontFamily,
      fontSize: input.fontSize ?? this.textFontSize,
      opacity: this.textOpacity,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: overlay.pageIndex,
      text: input.label?.trim() || link.wikilink,
      x: input.x ?? 0.08,
      y: input.y ?? 0.08
    });
  }
  async insertVaultImage(input) {
    const file = this.resolveVaultFile(input.path);
    if (!(file instanceof import_obsidian.TFile) || !isImageExtension(file.extension)) {
      new import_obsidian.Notice(uiText("\u672A\u627E\u5230\u53EF\u63D2\u5165\u7684\u56FE\u7247\u3002", "No insertable image was found."));
      return null;
    }
    const binary = await this.plugin.app.vault.readBinary(file);
    const dataUrl = arrayBufferToDataUrl(binary, imageMimeFromExtension(file.extension));
    const size = await getImageDataUrlSize(dataUrl);
    const overlay = this.resolveTargetOverlay(input.pageIndex);
    if (!overlay) {
      new import_obsidian.Notice(uiText("\u6CA1\u6709\u53EF\u63D2\u5165\u56FE\u7247\u7684 PDF \u9875\u9762\u3002", "No PDF page is available for image insertion."));
      return null;
    }
    const dimensions = fitImageToOverlay(size, overlay, input.width, input.height);
    return this.aiAddImage({
      dataUrl,
      height: dimensions.height,
      opacity: input.opacity ?? 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: overlay.pageIndex,
      width: dimensions.width,
      x: input.x ?? 0.5 - dimensions.width / 2,
      y: input.y ?? 0.5 - dimensions.height / 2
    });
  }
  resolveVaultFile(path) {
    const cleaned = stripObsidianLinkSyntax(path);
    const linked = this.plugin.app.metadataCache.getFirstLinkpathDest(cleaned, this.file.path);
    if (linked instanceof import_obsidian.TFile) {
      return linked;
    }
    const direct = this.plugin.app.vault.getAbstractFileByPath(cleaned);
    return direct instanceof import_obsidian.TFile ? direct : null;
  }
  resolveTargetOverlay(pageIndex) {
    if (typeof pageIndex === "number") {
      const overlay = this.findOverlayByPageIndex(Math.max(0, Math.floor(pageIndex)));
      if (overlay) {
        return overlay;
      }
    }
    return this.getVisibleOverlay() ?? Array.from(this.overlays.values())[0] ?? null;
  }
  sampleOuterBackgroundColor(overlay, selection) {
    const pdfCanvas = this.getPdfCanvas(overlay);
    if (!pdfCanvas) {
      return "#ffffff";
    }
    try {
      const ctx = pdfCanvas.getContext("2d");
      if (!ctx) {
        return "#ffffff";
      }
      const padX = Math.max(2 / Math.max(1, overlay.cssWidth), selection.width * 0.08);
      const padY = Math.max(2 / Math.max(1, overlay.cssHeight), selection.height * 0.08);
      const samples = [
        { x: selection.x - padX, y: selection.y + selection.height * 0.5 },
        { x: selection.x + selection.width + padX, y: selection.y + selection.height * 0.5 },
        { x: selection.x + selection.width * 0.5, y: selection.y - padY },
        { x: selection.x + selection.width * 0.5, y: selection.y + selection.height + padY },
        { x: selection.x - padX, y: selection.y - padY },
        { x: selection.x + selection.width + padX, y: selection.y - padY },
        { x: selection.x - padX, y: selection.y + selection.height + padY },
        { x: selection.x + selection.width + padX, y: selection.y + selection.height + padY }
      ];
      const colors = samples.map((sample) => {
        const x = clamp(sample.x * pdfCanvas.width, 0, Math.max(0, pdfCanvas.width - 1));
        const y = clamp(sample.y * pdfCanvas.height, 0, Math.max(0, pdfCanvas.height - 1));
        const data = ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
        return { b: data[2], g: data[1], luminance: 0.299 * data[0] + 0.587 * data[1] + 0.114 * data[2], r: data[0] };
      });
      const candidate = colors.sort((a, b) => b.luminance - a.luminance)[Math.floor(colors.length / 2)] ?? colors[0];
      return candidate ? rgbToHex(candidate.r, candidate.g, candidate.b) : "#ffffff";
    } catch {
      return "#ffffff";
    }
  }
  extractNativeTextInRegion(overlay, x, y, width, height) {
    const overlayRect = this.getOverlayClientRect(overlay);
    const region = {
      bottom: overlayRect.top + (y + height) * overlay.cssHeight,
      left: overlayRect.left + x * overlay.cssWidth,
      right: overlayRect.left + (x + width) * overlay.cssWidth,
      top: overlayRect.top + y * overlay.cssHeight
    };
    const parts = [];
    for (const span of Array.from(overlay.pageEl.querySelectorAll(".textLayer span, .textLayer .markedContent, [data-canvas-width]"))) {
      const text = span.textContent?.trim();
      if (!text) {
        continue;
      }
      const rect = span.getBoundingClientRect();
      if (rect.right >= region.left && rect.left <= region.right && rect.bottom >= region.top && rect.top <= region.bottom) {
        parts.push(text);
      }
    }
    return parts.join(" ").replace(/\s+/g, " ").trim();
  }
  convertNativeSelectionToEditable() {
    const selection = this.nativeSelection;
    if (!selection) {
      return { covers: 0, skipped: 0, texts: 0 };
    }
    const overlay = this.findOverlayByPageIndex(selection.pageIndex);
    if (!overlay) {
      return { covers: 0, skipped: 0, texts: 0 };
    }
    const result = selection.kind === "text" ? this.convertNativeTextBlocksToEditable(overlay, selection) : this.convertNativeRegionToCover(selection, overlay);
    this.nativeSelection = null;
    this.selectedStrokeIds.clear();
    this.redrawAll();
    return result;
  }
  convertCurrentPageToEditable() {
    const overlay = this.getVisibleOverlay() ?? Array.from(this.overlays.values())[0];
    return overlay ? this.convertNativePageToEditable(overlay.pageIndex) : { covers: 0, skipped: 0, texts: 0 };
  }
  convertNativePageToEditable(pageIndex) {
    const overlay = pageIndex === void 0 ? this.getVisibleOverlay() : this.findOverlayByPageIndex(pageIndex);
    if (!overlay) {
      return { covers: 0, skipped: 0, texts: 0 };
    }
    return this.convertNativeTextBlocksToEditable(overlay);
  }
  convertNativeDocumentToEditable() {
    const total = { covers: 0, pages: 0, skipped: 0, texts: 0 };
    for (const overlay of this.overlays.values()) {
      const result = this.convertNativeTextBlocksToEditable(overlay);
      total.covers += result.covers;
      total.skipped = (total.skipped ?? 0) + (result.skipped ?? 0);
      total.texts += result.texts;
      if (result.covers > 0 || result.texts > 0) {
        total.pages = (total.pages ?? 0) + 1;
      }
    }
    return total;
  }
  convertNativeTextBlocksToEditable(overlay, region) {
    const blocks = this.collectNativeTextBlocks(overlay, region);
    let converted = 0;
    let skipped = 0;
    let nextLayer = this.getNextLayerIndex(overlay.pageIndex);
    for (const block of blocks) {
      if (this.hasConvertedNativeBlock(block)) {
        skipped += 1;
        continue;
      }
      const cover = expandCoverToHideNativeText({
        color: this.samplePdfBackgroundColor(overlay, block),
        height: block.height,
        id: makeStrokeId(),
        kind: "cover",
        opacity: 1,
        pageCssHeight: overlay.cssHeight,
        pageCssWidth: overlay.cssWidth,
        pageIndex: overlay.pageIndex,
        saved: false,
        width: block.width,
        x: block.x,
        y: block.y,
        zIndex: nextLayer
      }, overlay);
      const text = {
        color: this.penColor,
        fontSize: clamp(block.fontSize, 4, 200),
        id: makeStrokeId(),
        kind: "text",
        opacity: this.textOpacity,
        pageCssHeight: overlay.cssHeight,
        pageCssWidth: overlay.cssWidth,
        pageIndex: overlay.pageIndex,
        saved: false,
        text: block.text,
        x: block.x,
        y: block.y,
        zIndex: nextLayer + 1
      };
      if (converted === 0) {
        this.rememberHistory();
      }
      this.coverHistory.push(cover);
      this.textHistory.push(text);
      nextLayer += 2;
      converted += 1;
    }
    if (converted > 0) {
      this.redoStack = [];
      this.markDirty();
      this.scheduleAutoSave();
      this.redrawOverlay(overlay);
    }
    return { covers: converted, skipped, texts: converted };
  }
  convertNativeRegionToCover(selection, overlay) {
    if (this.hasConvertedNativeBlock(selection)) {
      return { covers: 0, skipped: 1, texts: 0 };
    }
    const cover = {
      color: this.samplePdfBackgroundColor(overlay, selection),
      height: selection.height,
      id: makeStrokeId(),
      kind: "cover",
      opacity: 1,
      pageCssHeight: overlay.cssHeight,
      pageCssWidth: overlay.cssWidth,
      pageIndex: selection.pageIndex,
      saved: false,
      source: "native-region",
      width: selection.width,
      x: selection.x,
      y: selection.y,
      zIndex: this.getNextLayerIndex(selection.pageIndex)
    };
    this.rememberHistory();
    this.coverHistory.push(cover);
    this.redoStack = [];
    this.markDirty();
    this.scheduleAutoSave();
    this.redrawOverlay(overlay);
    return { covers: 1, skipped: 0, texts: 0 };
  }
  collectNativeTextBlocks(overlay, region) {
    const overlayRect = this.getOverlayClientRect(overlay);
    const regionPx = region ? {
      bottom: overlayRect.top + (region.y + region.height) * overlay.cssHeight,
      left: overlayRect.left + region.x * overlay.cssWidth,
      right: overlayRect.left + (region.x + region.width) * overlay.cssWidth,
      top: overlayRect.top + region.y * overlay.cssHeight
    } : null;
    const fragments = [];
    for (const [index, span] of Array.from(overlay.pageEl.querySelectorAll(".textLayer span, .textLayer .markedContent, [data-canvas-width]")).entries()) {
      const text = span.textContent?.trim();
      if (!text) {
        continue;
      }
      const rect = span.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) {
        continue;
      }
      if (regionPx && !(rect.right >= regionPx.left && rect.left <= regionPx.right && rect.bottom >= regionPx.top && rect.top <= regionPx.bottom)) {
        continue;
      }
      const computedStyle = activeWindow.getComputedStyle(span);
      const fontSize = Number.parseFloat(computedStyle.fontSize || "") || Math.max(4, rect.height * 0.82);
      fragments.push({
        bottom: rect.bottom,
        fontSize,
        index,
        left: rect.left,
        right: rect.right,
        text,
        top: rect.top
      });
    }
    return mergeNativeTextFragmentsIntoLines(fragments, overlay, overlayRect);
  }
  hasConvertedNativeBlock(block) {
    const tolerance = 3e-3;
    return this.coverHistory.some((cover) => cover.pageIndex === block.pageIndex && Math.abs(cover.x - block.x) <= tolerance && Math.abs(cover.y - block.y) <= tolerance && Math.abs(cover.width - block.width) <= tolerance && Math.abs(cover.height - block.height) <= tolerance);
  }
  findOverlayByPageIndex(pageIndex) {
    for (const overlay of this.overlays.values()) {
      if (overlay.pageIndex === pageIndex) {
        return overlay;
      }
    }
    return null;
  }
  getVisibleOverlay() {
    const viewportHeight = activeWindow.innerHeight || activeDocument.documentElement.clientHeight || 1;
    let best = null;
    for (const overlay of this.overlays.values()) {
      const rect = overlay.pageEl.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        continue;
      }
      const distance = Math.abs(rect.top + rect.height / 2 - viewportHeight / 2);
      if (!best || distance < best.distance) {
        best = { distance, overlay };
      }
    }
    return best?.overlay ?? null;
  }
  setSelectedElements(elements) {
    this.selectedStrokeIds.clear();
    this.nativeSelection = null;
    for (const element of elements) {
      this.selectedStrokeIds.add(element.id);
    }
    this.selectionChangedAt = Date.now();
  }
  setSelectedElementForEditing(element) {
    this.setSingleSelectedElement(element.id);
  }
  setSingleSelectedElement(id) {
    this.selectedStrokeIds.clear();
    this.selectedStrokeIds.add(id);
    this.nativeSelection = null;
    this.selectionChangedAt = Date.now();
  }
  clearEditableSelection() {
    const hadSelection = this.selectedStrokeIds.size > 0 || this.nativeSelection !== null;
    this.selectedStrokeIds.clear();
    this.nativeSelection = null;
    if (hadSelection) {
      this.selectionChangedAt = Date.now();
    }
  }
  canDragSelectedElements(pageIndex, selectedElements) {
    if (this.nativeTextEditor !== null) {
      return false;
    }
    return (selectedElements ?? this.getSelectedEditableElements(pageIndex)).every((element) => element.kind !== "text" || element.text.trim().length > 0);
  }
  pruneSelection() {
    for (const id of Array.from(this.selectedStrokeIds)) {
      const element = this.findElementById(id);
      if (!element) {
        this.selectedStrokeIds.delete(id);
      }
    }
  }
  getSelectedEditableElements(pageIndex) {
    return [...this.strokeHistory, ...this.textHistory, ...this.coverHistory, ...this.imageHistory].filter((element) => {
      if (!this.selectedStrokeIds.has(element.id)) {
        return false;
      }
      return pageIndex === void 0 || element.pageIndex === pageIndex;
    }).sort(compareInkElements);
  }
  hasEditableSelection(pageIndex) {
    return this.getSelectedEditableElements(pageIndex).length > 0;
  }
  updateExternalInkLayerState() {
    const activePages = /* @__PURE__ */ new Set();
    for (const overlay of this.overlays.values()) {
      const targets = this.strokeHistory.filter((stroke) => stroke.pageIndex === overlay.pageIndex && Array.isArray(stroke.pdfPoints));
      const shouldHidePage = this.enabled && (targets.length > 0 || this.pendingNativeInkHidePages.has(overlay.pageIndex) || this.detachedInkEditPages.has(overlay.pageIndex));
      if (!shouldHidePage) {
        overlay.pageEl.classList.remove("pdftion-hide-native-ink-layer");
        continue;
      }
      activePages.add(overlay.pageIndex);
      overlay.pageEl.classList.add("pdftion-hide-native-ink-layer");
      for (const layer of this.collectNativeAnnotationElements(overlay.pageEl, false)) {
        this.hideNativeAnnotationElement(layer);
      }
      const canvasRect = overlay.canvas.getBoundingClientRect();
      const targetRects = targets.map((stroke) => normalizedStrokeBounds({ ...stroke, points: stroke.pdfPoints ?? stroke.points })).filter((bounds) => bounds !== null).map((bounds) => {
        const pad = 24;
        return {
          bottom: canvasRect.top + bounds.maxY * canvasRect.height + pad,
          left: canvasRect.left + bounds.minX * canvasRect.width - pad,
          right: canvasRect.left + bounds.maxX * canvasRect.width + pad,
          top: canvasRect.top + bounds.minY * canvasRect.height - pad
        };
      });
      if (targetRects.length === 0) {
        continue;
      }
      for (const candidate of this.collectNativeAnnotationElements(overlay.pageEl, true)) {
        const rect = candidate.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) {
          continue;
        }
        if (targetRects.some((target) => rectsOverlap(target, rect))) {
          this.hideNativeAnnotationElement(candidate);
        }
      }
    }
    this.restoreHiddenNativeInkAnnotations(activePages);
  }
  scheduleExternalInkLayerUpdate() {
    if (this.externalInkLayerFrame !== null) {
      return;
    }
    this.externalInkLayerFrame = window.requestAnimationFrame(() => {
      this.externalInkLayerFrame = null;
      if (!this.destroyed) {
        this.updateExternalInkLayerState();
      }
    });
  }
  rememberNativeInkHidePagesForCurrentPages(force = false) {
    const pageIndexes = this.getCurrentInkPreparePages(force);
    if (pageIndexes.size === 0) {
      return false;
    }
    for (const pageIndex of pageIndexes) {
      this.pendingNativeInkHidePages.add(pageIndex);
    }
    return true;
  }
  primeNativeInkHidingForCurrentPages(force = false) {
    if (!this.rememberNativeInkHidePagesForCurrentPages(force)) {
      return;
    }
    this.updateExternalInkLayerState();
    window.requestAnimationFrame(() => this.updateExternalInkLayerState());
    window.setTimeout(() => this.updateExternalInkLayerState(), 80);
  }
  collectNativeAnnotationElements(root, includeChildren) {
    const selector = includeChildren ? ".annotationLayer *, .annotationEditorLayer *, [data-annotation-id], [data-pdf-annotation-id], .popupAnnotation, .pdf-annotation-popup, .pdfAnnotationPopup" : ".annotationLayer, .annotationEditorLayer, [data-annotation-id], [data-pdf-annotation-id], .popupAnnotation, .pdf-annotation-popup, .pdfAnnotationPopup";
    return Array.from(root.querySelectorAll(selector));
  }
  hideNativeAnnotationElement(element) {
    if (!this.hiddenNativeAnnotationStyles.has(element)) {
      this.hiddenNativeAnnotationStyles.set(element, {
        display: element.style.display,
        opacity: element.style.opacity,
        pointerEvents: element.style.pointerEvents,
        visibility: element.style.visibility
      });
    }
    element.classList.add("pdftion-hide-native-annotation-element");
  }
  restoreHiddenNativeAnnotationElement(element, snapshot) {
    element.classList.remove("pdftion-hide-native-annotation-element");
    element.setCssStyles({
      display: snapshot.display || "",
      opacity: snapshot.opacity || "",
      pointerEvents: snapshot.pointerEvents || "",
      visibility: snapshot.visibility || ""
    });
  }
  restoreHiddenNativeInkAnnotations(keepPageIndexes = /* @__PURE__ */ new Set()) {
    for (const overlay of this.overlays.values()) {
      if (!keepPageIndexes.has(overlay.pageIndex)) {
        overlay.pageEl.classList.remove("pdftion-hide-native-ink-layer");
      }
    }
    for (const [element, snapshot] of Array.from(this.hiddenNativeAnnotationStyles)) {
      const overlay = Array.from(this.overlays.values()).find((candidate) => candidate.pageEl.contains(element));
      if (overlay && keepPageIndexes.has(overlay.pageIndex)) {
        continue;
      }
      if (element.isConnected) {
        this.restoreHiddenNativeAnnotationElement(element, snapshot);
      } else {
        this.hiddenNativeAnnotationStyles.delete(element);
        continue;
      }
      this.hiddenNativeAnnotationStyles.delete(element);
    }
  }
  selectionBoxContainsPoint(overlay, point, selectionBounds) {
    const bounds = selectionBounds ?? normalizedElementsBounds(this.getSelectedEditableElements(overlay.pageIndex));
    if (!bounds) {
      return false;
    }
    const padX = 9 / Math.max(1, overlay.cssWidth);
    const padY = 9 / Math.max(1, overlay.cssHeight);
    return point.x >= bounds.minX - padX && point.x <= bounds.maxX + padX && point.y >= bounds.minY - padY && point.y <= bounds.maxY + padY;
  }
  findSelectionHandleAt(overlay, point, selectionBounds) {
    const bounds = selectionBounds ?? normalizedElementsBounds(this.getSelectedEditableElements(overlay.pageIndex));
    if (!bounds) {
      return null;
    }
    return findResizeHandleAt(bounds, point, overlay.cssWidth, overlay.cssHeight, 8, 0);
  }
  resizeSelectedElements(drag, point) {
    if (!drag.handle || !drag.originalBounds || !drag.originalElements) {
      return;
    }
    this.applyResizedElements(resizeElementsFromHandle(drag.originalElements, drag.originalBounds, drag.handle, point));
  }
  resizeSelectedElementsFromPinch(touch, distance) {
    if (!touch.initialBounds || !touch.initialElements || touch.initialDistance <= 0) {
      return;
    }
    const factor = clamp(distance / touch.initialDistance, 0.18, 6);
    this.applyResizedElements(scaleElementsAroundBoundsCenter(touch.initialElements, touch.initialBounds, factor));
  }
  applyResizedElements(elements) {
    for (const element of elements) {
      const live = this.findElementById(element.id);
      if (!live) {
        continue;
      }
      this.markElementChanged(live);
      if (live.kind === "stroke" && element.kind === "stroke") {
        live.points = element.points;
        live.width = element.width;
      } else if (live.kind === "text" && element.kind === "text") {
        live.x = element.x;
        live.y = element.y;
        live.fontSize = element.fontSize;
      } else if (live.kind === "cover" && element.kind === "cover") {
        live.x = element.x;
        live.y = element.y;
        live.width = element.width;
        live.height = element.height;
      } else if (live.kind === "image" && element.kind === "image") {
        live.x = element.x;
        live.y = element.y;
        live.width = element.width;
        live.height = element.height;
      }
    }
  }
  getEditableElements() {
    const elements = [...this.strokeHistory, ...this.textHistory, ...this.coverHistory, ...this.imageHistory];
    normalizeInkElementLayers(elements);
    return elements.sort(compareInkElements);
  }
  getEditableElementsForPage(pageIndex) {
    const elements = [
      ...this.strokeHistory.filter((element) => element.pageIndex === pageIndex),
      ...this.textHistory.filter((element) => element.pageIndex === pageIndex),
      ...this.coverHistory.filter((element) => element.pageIndex === pageIndex),
      ...this.imageHistory.filter((element) => element.pageIndex === pageIndex)
    ];
    normalizeInkElementLayers(elements);
    return elements.sort(compareInkElements);
  }
  getNextLayerIndex(pageIndex) {
    const layers = this.getEditableElements().filter((element) => element.pageIndex === pageIndex).map((element) => element.zIndex ?? 0);
    return (layers.length > 0 ? Math.max(...layers) : 0) + 1;
  }
  reorderSelectedLayers(mode) {
    const selected = this.getSelectedEditableElements();
    if (selected.length === 0) {
      return;
    }
    this.rememberHistory();
    const selectedIds = new Set(selected.map((element) => element.id));
    const pages = new Set(selected.map((element) => element.pageIndex));
    for (const pageIndex of pages) {
      const ordered = this.getEditableElements().filter((element) => element.pageIndex === pageIndex);
      let next = [...ordered];
      if (mode === "top") {
        next = [
          ...ordered.filter((element) => !selectedIds.has(element.id)),
          ...ordered.filter((element) => selectedIds.has(element.id))
        ];
      } else if (mode === "bottom") {
        next = [
          ...ordered.filter((element) => selectedIds.has(element.id)),
          ...ordered.filter((element) => !selectedIds.has(element.id))
        ];
      } else if (mode === "up") {
        for (let index = next.length - 2; index >= 0; index -= 1) {
          if (selectedIds.has(next[index].id) && !selectedIds.has(next[index + 1].id)) {
            [next[index], next[index + 1]] = [next[index + 1], next[index]];
          }
        }
      } else {
        for (let index = 1; index < next.length; index += 1) {
          if (selectedIds.has(next[index].id) && !selectedIds.has(next[index - 1].id)) {
            [next[index], next[index - 1]] = [next[index - 1], next[index]];
          }
        }
      }
      next.forEach((element, index) => {
        if (element.zIndex !== index + 1) {
          this.markElementChanged(element);
          element.zIndex = index + 1;
          element.saved = false;
        }
      });
    }
    this.markDirty();
    this.updateExternalInkLayerState();
    for (const pageIndex of pages) {
      const overlay = this.findOverlayByPageIndex(pageIndex);
      if (overlay) {
        this.redrawOverlay(overlay);
      }
    }
    this.refreshCommentManager();
    this.scheduleAutoSave();
  }
  createHistorySnapshot() {
    return {
      elements: this.getEditableElements().map(cloneElement),
      nativeSelection: this.nativeSelection ? { ...this.nativeSelection } : null,
      selectedIds: Array.from(this.selectedStrokeIds)
    };
  }
  restoreHistorySnapshot(snapshot) {
    const elements = snapshot.elements.map((element) => markElementUnsaved(cloneElement(element)));
    this.markInkChangesBetween(this.getEditableElements(), elements);
    this.strokeHistory = elements.filter((element) => element.kind === "stroke");
    this.textHistory = elements.filter((element) => element.kind === "text");
    this.coverHistory = elements.filter((element) => element.kind === "cover");
    this.imageHistory = elements.filter((element) => element.kind === "image");
    this.selectedStrokeIds = new Set(snapshot.selectedIds.filter((id) => elements.some((element) => element.id === id)));
    this.nativeSelection = snapshot.nativeSelection ? { ...snapshot.nativeSelection } : null;
    this.clearCurrentStroke();
    this.currentCover = null;
    this.selectionDrag = null;
    this.dirty = true;
    this.redrawAll();
    this.refreshCommentManager();
    this.scheduleAutoSave();
  }
  rememberHistory() {
    const snapshot = this.createHistorySnapshot();
    this.undoStack.push(snapshot);
    if (this.undoStack.length > 80) {
      this.undoStack.shift();
    }
    this.redoHistoryStack = [];
  }
  findElementById(id) {
    return this.strokeHistory.find((stroke) => stroke.id === id) ?? this.textHistory.find((text) => text.id === id) ?? this.coverHistory.find((cover) => cover.id === id) ?? this.imageHistory.find((image) => image.id === id) ?? null;
  }
  addElement(element) {
    if (element.kind === "stroke") {
      this.strokeHistory.push(element);
    } else if (element.kind === "text") {
      this.textHistory.push(element);
    } else if (element.kind === "image") {
      this.imageHistory.push(element);
    } else {
      this.coverHistory.push(element);
    }
  }
  removeElementById(id) {
    const removed = this.findElementById(id);
    if (!removed) {
      return null;
    }
    this.markElementsDeleted([removed]);
    this.strokeHistory = this.strokeHistory.filter((stroke) => stroke.id !== id);
    this.textHistory = this.textHistory.filter((text) => text.id !== id);
    this.coverHistory = this.coverHistory.filter((cover) => cover.id !== id);
    this.imageHistory = this.imageHistory.filter((image) => image.id !== id);
    return removed;
  }
  hasUnsavedStrokes() {
    return this.getEditableElements().some((element) => !element.saved);
  }
  hasPendingPdfWrite() {
    return this.dirty || this.dirtyInkPages.size > 0 || this.deletedExternalInkIds.size > 0 || this.deletedPdftionInkIds.size > 0 || this.getEditableElements().some((element) => !element.saved || element.kind === "stroke" && element.pdfSaved !== true);
  }
  markDirty() {
    this.dirty = true;
  }
  markInkPageDirty(pageIndex) {
    if (Number.isFinite(pageIndex) && pageIndex >= 0) {
      this.dirtyInkPages.add(pageIndex);
    }
  }
  markElementChanged(element) {
    element.saved = false;
    if (element.kind === "stroke") {
      this.markInkPageDirty(element.pageIndex);
      if (element.pdfSaved === true) {
        if (!element.pdfPoints) {
          element.pdfPoints = element.points.map((point) => ({ ...point }));
        }
        this.pendingNativeInkHidePages.add(element.pageIndex);
        this.updateExternalInkLayerState();
      }
      if (element.source === "external-ink") {
        element.externalDirty = true;
      }
      element.pdfSaved = false;
    }
  }
  markStrokeDeleted(stroke) {
    this.markInkPageDirty(stroke.pageIndex);
    if (stroke.source === "external-ink") {
      this.deletedExternalInkIds.add(stroke.id);
      return;
    }
    if (stroke.source === "pdftion" || stroke.pdfSaved === true) {
      this.deletedPdftionInkIds.add(stroke.id);
    }
  }
  markElementsDeleted(elements) {
    for (const element of elements) {
      if (element.kind === "stroke") {
        this.markStrokeDeleted(element);
      }
    }
  }
  markInkChangesBetween(before, after) {
    const beforeStrokes = new Map(before.filter((element) => element.kind === "stroke").map((stroke) => [stroke.id, stroke]));
    const afterStrokes = after.filter((element) => element.kind === "stroke");
    const afterIds = new Set(afterStrokes.map((stroke) => stroke.id));
    for (const stroke of beforeStrokes.values()) {
      if (!afterIds.has(stroke.id)) {
        this.markStrokeDeleted(stroke);
      }
    }
    for (const stroke of afterStrokes) {
      const previous = beforeStrokes.get(stroke.id);
      if (!previous || !inkStrokesEquivalentForPdf(previous, stroke)) {
        this.markElementChanged(stroke);
      }
    }
  }
  async saveEditableStateWhileSaving() {
    const elements = this.getEditableElements();
    const targetFile = this.file;
    const targetPath = targetFile.path;
    try {
      const binary = await this.plugin.app.vault.readBinary(targetFile);
      await this.plugin.saveEditableAnnotationState(targetFile, elements.map(markElementSaved), binary);
      if (this.file.path !== targetPath) {
        return;
      }
      for (const element of elements) {
        element.saved = true;
      }
      this.dirty = false;
    } catch (error) {
      console.error(error);
    }
  }
  getFilePath() {
    return this.file.path;
  }
  aiGetElements() {
    return this.getEditableElements().map(cloneElement);
  }
  aiGetSelectedElements() {
    return this.getSelectedEditableElements().map(cloneElement);
  }
  aiGetStats() {
    const pages = /* @__PURE__ */ new Set();
    for (const element of this.getEditableElements()) {
      pages.add(element.pageIndex);
    }
    return {
      covers: this.coverHistory.length,
      images: this.imageHistory.length,
      pages: pages.size,
      strokes: this.strokeHistory.length,
      texts: this.textHistory.length,
      total: this.getEditableElements().length
    };
  }
  aiGroupElementsByPage() {
    const grouped = {};
    for (const element of this.getEditableElements()) {
      const key = String(element.pageIndex);
      grouped[key] = grouped[key] ?? [];
      grouped[key].push(cloneElement(element));
    }
    return grouped;
  }
  aiFindElements(query = {}) {
    const ids = new Set(query.ids ?? []);
    const color = query.color ? normalizeHexColor(query.color) : null;
    const text = query.text?.trim().toLowerCase() ?? "";
    return this.getEditableElements().filter((element) => {
      if (ids.size > 0 && !ids.has(element.id)) {
        return false;
      }
      if (query.kind && element.kind !== query.kind) {
        return false;
      }
      if (typeof query.pageIndex === "number" && element.pageIndex !== Math.max(0, Math.floor(query.pageIndex))) {
        return false;
      }
      if (color && "color" in element && normalizeHexColor(element.color) !== color) {
        return false;
      }
      if (text && (element.kind !== "text" || !element.text.toLowerCase().includes(text))) {
        return false;
      }
      return true;
    }).map(cloneElement);
  }
  getAnnotationsMarkdown() {
    const elements = this.getEditableElements().map(cloneElement).sort((a, b) => a.pageIndex - b.pageIndex || a.id.localeCompare(b.id));
    const lines = [
      `# ${this.file.basename} pdftion annotations`,
      "",
      `PDF: [[${this.file.path}]]`,
      `Exported: ${(/* @__PURE__ */ new Date()).toISOString()}`,
      "",
      "## Summary",
      "",
      `- Total: ${elements.length}`,
      `- Text: ${elements.filter((element) => element.kind === "text").length}`,
      `- Stroke: ${elements.filter((element) => element.kind === "stroke").length}`,
      `- Image: ${elements.filter((element) => element.kind === "image").length}`,
      `- Cover: ${elements.filter((element) => element.kind === "cover").length}`,
      ""
    ];
    let currentPage = -1;
    for (const element of elements) {
      if (element.pageIndex !== currentPage) {
        currentPage = element.pageIndex;
        lines.push("", `## Page ${currentPage + 1}`, "");
      }
      lines.push(`- ${formatElementForMarkdown(element)}`);
    }
    return lines.join("\n");
  }
  aiSelectElements(ids) {
    this.selectedStrokeIds.clear();
    for (const id of ids) {
      if (this.findElementById(id)) {
        this.selectedStrokeIds.add(id);
      }
    }
    this.nativeSelection = null;
    this.selectionChangedAt = Date.now();
    this.redrawAll();
    return this.selectedStrokeIds.size;
  }
  aiGetNativeSelection() {
    return this.nativeSelection ? { ...this.nativeSelection } : null;
  }
  aiReplaceElements(elements) {
    if (!Array.isArray(elements) || !elements.every(isInkElement)) {
      return false;
    }
    const cloned = elements.map((element) => markElementUnsaved(cloneElement(element)));
    this.rememberHistory();
    this.strokeHistory = cloned.filter((element) => element.kind === "stroke");
    this.textHistory = cloned.filter((element) => element.kind === "text");
    this.coverHistory = cloned.filter((element) => element.kind === "cover");
    this.imageHistory = cloned.filter((element) => element.kind === "image");
    this.clearEditableSelection();
    this.redoStack = [];
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
    return true;
  }
  aiUpdateElements(elements) {
    let count = 0;
    let recorded = false;
    for (const element of elements) {
      if (!isInkElement(element)) {
        continue;
      }
      const live = this.findElementById(element.id);
      if (!live || live.kind !== element.kind) {
        continue;
      }
      if (!recorded) {
        this.rememberHistory();
        recorded = true;
      }
      this.removeElementById(live.id);
      this.addElement(markElementUnsaved(cloneElement(element)));
      count += 1;
    }
    if (count > 0) {
      this.markDirty();
      this.redrawAll();
      this.refreshCommentManager();
      this.scheduleAutoSave();
    }
    return count;
  }
  aiDeleteElements(ids) {
    const before = this.getEditableElements().length;
    const existingIds = ids.filter((id) => this.findElementById(id));
    if (existingIds.length > 0) {
      this.rememberHistory();
    }
    for (const id of ids) {
      this.removeElementById(id);
      this.selectedStrokeIds.delete(id);
    }
    const count = before - this.getEditableElements().length;
    if (count > 0) {
      this.markDirty();
      this.redrawAll();
      this.refreshCommentManager();
      this.scheduleAutoSave();
    }
    return count;
  }
  async aiApplyPlan(operations) {
    const result = { added: [], deleted: 0, errors: [], exported: [], ok: true, selected: 0, updated: 0 };
    if (!Array.isArray(operations)) {
      return { ...result, errors: ["Plan must be an array."], ok: false };
    }
    for (const operation of operations) {
      try {
        if (operation.action === "addCover") {
          const id = this.aiAddCover(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "addImage") {
          const id = this.aiAddImage(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "addStroke") {
          const id = this.aiAddStroke(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "addText") {
          const id = this.aiAddText(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "deleteElements") {
          result.deleted += this.aiDeleteElements(operation.ids);
        } else if (operation.action === "exportAnnotatedPdf") {
          const path = await this.exportAnnotatedPdf();
          if (path) {
            result.exported.push(path);
          }
        } else if (operation.action === "exportAnnotationsDocx") {
          const path = await this.exportAnnotationsDocx();
          if (path) {
            result.exported.push(path);
          }
        } else if (operation.action === "exportAnnotationsMarkdown") {
          const path = await this.exportAnnotationsMarkdown();
          if (path) {
            result.exported.push(path);
          }
        } else if (operation.action === "exportMarkdownDocxBridge") {
          const path = await this.exportMarkdownDocxBridge();
          if (path) {
            result.exported.push(path);
          }
        } else if (operation.action === "insertObsidianLink") {
          const id = await this.insertObsidianLink(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "insertVaultImage") {
          const id = await this.insertVaultImage(operation.input);
          if (id) {
            result.added.push(id);
          }
        } else if (operation.action === "replaceElements") {
          if (!this.aiReplaceElements(operation.elements)) {
            result.errors.push("replaceElements failed.");
          }
        } else if (operation.action === "selectElements") {
          result.selected = this.aiSelectElements(operation.ids);
        } else if (operation.action === "updateElements") {
          result.updated += this.aiUpdateElements(operation.elements);
        } else {
          result.errors.push("Unknown operation.");
        }
      } catch (error) {
        result.errors.push(error instanceof Error ? error.message : String(error));
      }
    }
    result.ok = result.errors.length === 0;
    return result;
  }
  setPageCrop(pageIndex, crop) {
    this.cropByPage.set(pageIndex, {
      bottom: clamp(Number(crop.bottom ?? 0), 0, 0.45),
      left: clamp(Number(crop.left ?? 0), 0, 0.45),
      right: clamp(Number(crop.right ?? 0), 0, 0.45),
      top: clamp(Number(crop.top ?? 0), 0, 0.45)
    });
    new import_obsidian.Notice(uiText("\u9875\u9762\u88C1\u526A\u53C2\u6570\u5DF2\u8BB0\u5F55\u3002", "Page crop values recorded."));
    return true;
  }
  getPageCrops() {
    const result = {};
    for (const [pageIndex, crop] of this.cropByPage.entries()) {
      result[String(pageIndex)] = { ...crop };
    }
    return result;
  }
  aiCoverNativeSelection() {
    const selection = this.nativeSelection;
    if (!selection) {
      return null;
    }
    return this.aiAddCover({
      color: this.sampleNativeSelectionBackground(),
      height: selection.height,
      opacity: 1,
      pageIndex: selection.pageIndex,
      source: selection.kind === "text" ? "native-text" : "native-region",
      width: selection.width,
      x: selection.x,
      y: selection.y
    });
  }
  aiReplaceNativeText(text) {
    const selection = this.nativeSelection;
    const trimmed = text.trim();
    if (!selection || !trimmed) {
      return null;
    }
    const coverId = this.aiCoverNativeSelection();
    const textId = this.aiAddText({
      color: readableTextColor(this.sampleNativeSelectionBackground()),
      fontSize: Math.max(6, selection.height * Math.max(1, this.findOverlayCssHeight(selection.pageIndex)) * 0.82),
      pageIndex: selection.pageIndex,
      text: trimmed,
      x: selection.x,
      y: selection.y
    });
    return { coverId, textId };
  }
  sampleNativeSelectionBackground() {
    const selection = this.nativeSelection;
    if (!selection) {
      return "#ffffff";
    }
    const overlay = this.findOverlayByPageIndex(selection.pageIndex);
    return overlay ? this.samplePdfBackgroundColor(overlay, selection) : "#ffffff";
  }
  aiAddText(input) {
    const text = String(input.text ?? "").trim();
    if (!text) {
      return null;
    }
    const element = {
      color: normalizeHexColor(input.color ?? this.penColor),
      fontFamily: input.fontFamily ?? this.textFontFamily,
      fontSize: clamp(Number(input.fontSize ?? this.textFontSize), 4, 200),
      id: input.id ?? makeStrokeId(),
      kind: "text",
      opacity: clamp(Number(input.opacity ?? this.textOpacity), 0.01, 1),
      pageCssHeight: Number(input.pageCssHeight ?? 1),
      pageCssWidth: Number(input.pageCssWidth ?? 1),
      pageIndex: Math.max(0, Math.floor(Number(input.pageIndex))),
      saved: false,
      text,
      x: clamp(Number(input.x), 0, 1),
      y: clamp(Number(input.y), 0, 1)
    };
    return this.aiAddElement(element);
  }
  aiAddImage(input) {
    if (!input.dataUrl?.startsWith("data:image/")) {
      return null;
    }
    const element = {
      dataUrl: input.dataUrl,
      height: clamp(Number(input.height ?? 0.18), 1e-3, 1),
      id: input.id ?? makeStrokeId(),
      kind: "image",
      opacity: clamp(Number(input.opacity ?? 1), 0.01, 1),
      pageCssHeight: Number(input.pageCssHeight ?? 1),
      pageCssWidth: Number(input.pageCssWidth ?? 1),
      pageIndex: Math.max(0, Math.floor(Number(input.pageIndex))),
      saved: false,
      width: clamp(Number(input.width ?? 0.24), 1e-3, 1),
      x: clamp(Number(input.x), 0, 1),
      y: clamp(Number(input.y), 0, 1)
    };
    return this.aiAddElement(element);
  }
  aiAddCover(input) {
    const element = {
      color: normalizeHexColor(input.color ?? "#ffffff"),
      height: clamp(Number(input.height), 1e-3, 1),
      id: input.id ?? makeStrokeId(),
      kind: "cover",
      opacity: clamp(Number(input.opacity ?? 1), 0.01, 1),
      pageCssHeight: Number(input.pageCssHeight ?? 1),
      pageCssWidth: Number(input.pageCssWidth ?? 1),
      pageIndex: Math.max(0, Math.floor(Number(input.pageIndex))),
      saved: false,
      source: input.source,
      width: clamp(Number(input.width), 1e-3, 1),
      x: clamp(Number(input.x), 0, 1),
      y: clamp(Number(input.y), 0, 1)
    };
    return this.aiAddElement(element);
  }
  aiAddStroke(input) {
    if (!Array.isArray(input.points) || input.points.length < 1) {
      return null;
    }
    const points = input.points.filter((point) => typeof point?.x === "number" && typeof point?.y === "number").map((point) => ({ x: clamp(point.x, 0, 1), y: clamp(point.y, 0, 1) }));
    if (points.length < 1) {
      return null;
    }
    if (points.length === 1) {
      points.push({ x: clamp(points[0].x + 1e-3, 0, 1), y: clamp(points[0].y + 1e-3, 0, 1) });
    }
    const tool = input.tool === "highlight" ? "highlight" : "pen";
    const element = {
      color: normalizeHexColor(input.color ?? this.getToolColor(tool)),
      createdAt: typeof input.createdAt === "number" ? input.createdAt : Date.now(),
      groupId: typeof input.groupId === "string" && input.groupId.trim() ? input.groupId.trim() : void 0,
      id: input.id ?? makeStrokeId(),
      kind: "stroke",
      opacity: clamp(Number(input.opacity ?? this.getToolOpacity(tool)), 0.01, 1),
      pageCssHeight: Number(input.pageCssHeight ?? 1),
      pageCssWidth: Number(input.pageCssWidth ?? 1),
      pageIndex: Math.max(0, Math.floor(Number(input.pageIndex))),
      points,
      saved: false,
      tool,
      width: clamp(Number(input.width ?? this.getToolWidth(tool)), 0.2, 200)
    };
    return this.aiAddElement(element);
  }
  aiAddElement(element) {
    this.rememberHistory();
    this.addElement(element);
    this.redoStack = [];
    this.markDirty();
    this.redrawAll();
    this.scheduleAutoSave();
    return element.id;
  }
  findOverlayCssHeight(pageIndex) {
    for (const overlay of this.overlays.values()) {
      if (overlay.pageIndex === pageIndex) {
        return overlay.cssHeight;
      }
    }
    return 1;
  }
  scheduleAutoSave(delay = AUTO_SAVE_IDLE_DELAY_MS) {
    if (this.destroyed || this.conversionInProgress || !this.hasPendingPdfWrite()) {
      return;
    }
    this.clearAutoSaveTimer();
    if (this.enabled) {
      const checkpointDelay = clamp(delay, 250, 700);
      this.saveTimer = window.setTimeout(() => {
        this.saveTimer = null;
        void this.checkpointEditableState();
      }, checkpointDelay);
      return;
    }
    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = null;
      void this.saveIntoPdf(true);
    }, delay);
  }
  flushSoon() {
    if (this.destroyed || this.detachedInkEditPages.size === 0 && !this.hasPendingPdfWrite()) {
      return;
    }
    this.clearAutoSaveTimer();
    void this.finishPdfInkEditing();
  }
  checkpointSoon() {
    if (this.destroyed || !this.hasPendingPdfWrite()) {
      return;
    }
    this.clearAutoSaveTimer();
    void this.checkpointEditableState();
  }
  async checkpointEditableState() {
    if (this.checkpointing) {
      this.checkpointPending = true;
      return;
    }
    const targetFile = this.file;
    const targetPath = targetFile.path;
    this.checkpointing = true;
    try {
      await this.plugin.saveEditableAnnotationState(targetFile, this.getEditableElements());
    } catch (error) {
      console.warn("pdftion could not checkpoint editable annotations.", error);
    } finally {
      this.checkpointing = false;
      if (this.checkpointPending) {
        this.checkpointPending = false;
        if (!this.destroyed && this.file.path === targetPath) {
          this.scheduleAutoSave(250);
        }
      }
    }
  }
  clearAutoSaveTimer() {
    if (this.saveTimer !== null) {
      window.clearTimeout(this.saveTimer);
      this.saveTimer = null;
    }
  }
  scheduleToolSettingsSave(delay = 220) {
    this.plugin.settings.penColor = normalizeHexColor(this.penColor);
    this.plugin.settings.penOpacity = clamp(this.penOpacity, 0.05, 1);
    this.plugin.settings.penWidth = clamp(this.penWidth, 0.5, 72);
    this.plugin.settings.highlightColor = normalizeHexColor(this.highlightColor);
    this.plugin.settings.highlightOpacity = clamp(this.highlightOpacity, 0.05, 1);
    this.plugin.settings.highlightWidth = clamp(this.highlightWidth, 2, 96);
    this.plugin.settings.eraserWidth = clamp(this.eraserWidth, 2, 120);
    this.plugin.settings.textColor = normalizeHexColor(this.textColor);
    this.plugin.settings.textFontFamily = this.textFontFamily;
    this.plugin.settings.textFontSize = clamp(this.textFontSize, 6, 120);
    this.plugin.settings.textOpacity = clamp(this.textOpacity, 0.05, 1);
    this.plugin.settings.nativeTextHighlightColor = normalizeHexColor(this.nativeTextHighlightColor);
    this.plugin.settings.nativeTextSelectionAction = this.nativeTextSelectionAction;
    this.clearToolSettingsSaveTimer();
    this.settingsSaveTimer = window.setTimeout(() => {
      this.settingsSaveTimer = null;
      void this.plugin.saveSettings();
    }, delay);
  }
  clearToolSettingsSaveTimer() {
    if (this.settingsSaveTimer !== null) {
      window.clearTimeout(this.settingsSaveTimer);
      this.settingsSaveTimer = null;
    }
  }
  clearScanTimer() {
    if (this.scanTimer !== null) {
      window.clearTimeout(this.scanTimer);
      this.scanTimer = null;
    }
  }
  cleanupDetachedOverlays() {
    for (const [pageEl, overlay] of this.overlays.entries()) {
      if (this.rootEl.contains(pageEl)) {
        continue;
      }
      this.releaseOverlay(pageEl, overlay);
    }
  }
  cleanupUnretainedOverlays(retained) {
    for (const [pageEl, overlay] of this.overlays.entries()) {
      if (!retained.has(pageEl)) {
        this.releaseOverlay(pageEl, overlay);
      }
    }
  }
  releaseOverlay(pageEl, overlay) {
    for (const [element, snapshot] of Array.from(this.hiddenNativeAnnotationStyles)) {
      if (pageEl.contains(element)) {
        if (element.isConnected) {
          this.restoreHiddenNativeAnnotationElement(element, snapshot);
        }
        this.hiddenNativeAnnotationStyles.delete(element);
      }
    }
    overlay.abort.abort();
    overlay.resizeObserver?.disconnect();
    if (overlay.redrawFrame !== null && overlay.redrawFrame !== void 0) {
      window.cancelAnimationFrame(overlay.redrawFrame);
    }
    if (overlay.geometryFrame !== null && overlay.geometryFrame !== void 0) {
      window.cancelAnimationFrame(overlay.geometryFrame);
    }
    if (overlay.resizeTimer !== null && overlay.resizeTimer !== void 0) {
      window.clearTimeout(overlay.resizeTimer);
    }
    overlay.canvas.remove();
    overlay.staticCanvas.remove();
    pageEl.classList.remove("pdftion-page", "pdftion-hide-native-ink-layer");
    this.overlays.delete(pageEl);
  }
};
function createIconButton(icon, title) {
  const button = activeDocument.createElement("button");
  button.className = "clickable-icon";
  button.title = title;
  button.type = "button";
  button.setAttribute("aria-label", title);
  (0, import_obsidian.setIcon)(button, icon);
  return button;
}
async function embedAnnotationFont(pdf, fontBytes) {
  const fontkitModule = await loadPdfFontkitModule();
  pdf.registerFontkit(resolvePdfFontkit(fontkitModule));
  return pdf.embedFont(fontBytes, { subset: true });
}
function loadPdfFontkitModule() {
  if (!pdfFontkitModulePromise) {
    pdfFontkitModulePromise = import("@pdf-lib/fontkit");
  }
  return pdfFontkitModulePromise;
}
async function syncEditableInkAnnotationsOnPdf(pdf, elements, options = {}) {
  const dirtyStrokes = elements.filter((element) => element.kind === "stroke" && element.pdfSaved !== true);
  const pagesToRewrite = /* @__PURE__ */ new Set([
    ...options.dirtyPages ? Array.from(options.dirtyPages) : [],
    ...dirtyStrokes.map((stroke) => stroke.pageIndex)
  ]);
  const currentStrokes = dedupeInkElements(elements.filter((element) => element.kind === "stroke" && pagesToRewrite.has(element.pageIndex) && element.points.length >= 2)).filter((element) => element.kind === "stroke");
  const untrackedPdfStrokes = extractPdfInkAnnotations(pdf, pagesToRewrite).filter((candidate) => !options.deletedExternalInkIds?.has(candidate.id) && !options.deletedPdftionInkIds?.has(candidate.id) && !currentStrokes.some((stroke) => stroke.id === candidate.id || isSamePdfInkStrokeCandidate(stroke, candidate)));
  const strokesToWrite = dedupeInkElements([...currentStrokes, ...untrackedPdfStrokes]).filter((element) => element.kind === "stroke");
  removeAllInkAnnotationsOnPages(pdf, pagesToRewrite);
  const pages = pdf.getPages();
  for (const stroke of strokesToWrite) {
    const page = pages[stroke.pageIndex];
    if (!page || stroke.points.length < 2) {
      continue;
    }
    if (!addStandardInkAnnotation(pdf, page, stroke)) {
      drawStrokeAsPdfLines(page, stroke, getPageDisplayMapping(page));
    }
  }
}
function removeAllInkAnnotationsOnPages(pdf, pageIndexes) {
  if (pageIndexes.size === 0) {
    return;
  }
  const pages = pdf.getPages();
  for (const pageIndex of pageIndexes) {
    const annots = pages[pageIndex]?.node.Annots?.();
    if (!annots) {
      continue;
    }
    for (let index = annots.size() - 1; index >= 0; index -= 1) {
      const annot = annots.lookupMaybe(index, import_pdf_lib.PDFDict);
      const subtype = annot?.lookupMaybe(import_pdf_lib.PDFName.of("Subtype"), import_pdf_lib.PDFName);
      if (subtype?.decodeText() === "Ink") {
        annots.remove(index);
      }
    }
  }
}
function isPdftionInkAnnotation(annot) {
  const subtype = annot.lookupMaybe(import_pdf_lib.PDFName.of("Subtype"), import_pdf_lib.PDFName);
  if (subtype?.decodeText() !== "Ink") {
    return false;
  }
  const nm = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("NM"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  const contents = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("Contents"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  const title = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("T"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  return nm.startsWith("Pdftion:") || contents.startsWith("Pdftion ") || title === "Pdftion";
}
function getPageDisplayMapping(page) {
  const size = page.getSize();
  let cropX = 0;
  let cropY = 0;
  let cropW = size.width;
  let cropH = size.height;
  try {
    const cropBox = page.getCropBox();
    if (cropBox.width > 0 && cropBox.height > 0) {
      cropX = cropBox.x;
      cropY = cropBox.y;
      cropW = cropBox.width;
      cropH = cropBox.height;
    }
  } catch {
  }
  let rotation = 0;
  try {
    rotation = (page.getRotation().angle % 360 + 360) % 360;
  } catch {
  }
  return { cropH, cropW, cropX, cropY, rotation };
}
function userPointToDisplayPoint(mapping, x, y) {
  const fu = mapping.cropW > 0 ? (x - mapping.cropX) / mapping.cropW : 0;
  const fv = mapping.cropH > 0 ? (y - mapping.cropY) / mapping.cropH : 0;
  switch (mapping.rotation) {
    case 90:
      return { x: clamp(fv, 0, 1), y: clamp(fu, 0, 1) };
    case 180:
      return { x: clamp(1 - fu, 0, 1), y: clamp(fv, 0, 1) };
    case 270:
      return { x: clamp(1 - fv, 0, 1), y: clamp(1 - fu, 0, 1) };
    default:
      return { x: clamp(fu, 0, 1), y: clamp(1 - fv, 0, 1) };
  }
}
function displayPointToUserPoint(mapping, u, v) {
  let fu;
  let fv;
  switch (mapping.rotation) {
    case 90:
      fu = v;
      fv = u;
      break;
    case 180:
      fu = 1 - u;
      fv = v;
      break;
    case 270:
      fu = 1 - v;
      fv = 1 - u;
      break;
    default:
      fu = u;
      fv = 1 - v;
      break;
  }
  return { x: mapping.cropX + fu * mapping.cropW, y: mapping.cropY + fv * mapping.cropH };
}
function pageDisplayUserWidth(mapping) {
  return mapping.rotation % 180 === 0 ? mapping.cropW : mapping.cropH;
}
function pageDisplayUserHeight(mapping) {
  return mapping.rotation % 180 === 0 ? mapping.cropH : mapping.cropW;
}
function displayRectToUserRect(mapping, ex, ey, ew, eh) {
  const topLeft = displayPointToUserPoint(mapping, ex, ey);
  const bottomRight = displayPointToUserPoint(mapping, ex + ew, ey + eh);
  return {
    height: Math.abs(bottomRight.y - topLeft.y),
    width: Math.abs(bottomRight.x - topLeft.x),
    x: Math.min(topLeft.x, bottomRight.x),
    y: Math.min(topLeft.y, bottomRight.y)
  };
}
function extractPdfInkAnnotations(pdf, pageIndexes) {
  const strokes = [];
  const pages = pdf.getPages();
  for (let pageIndex = 0; pageIndex < pages.length; pageIndex += 1) {
    if (pageIndexes && !pageIndexes.has(pageIndex)) {
      continue;
    }
    const page = pages[pageIndex];
    const mapping = getPageDisplayMapping(page);
    const annots = page.node.Annots?.();
    if (!annots) {
      continue;
    }
    for (let annotIndex = 0; annotIndex < annots.size(); annotIndex += 1) {
      const annot = annots.lookupMaybe(annotIndex, import_pdf_lib.PDFDict);
      if (!annot) {
        continue;
      }
      const stroke = externalInkAnnotationToStroke(annot, pageIndex, annotIndex, mapping);
      if (stroke) {
        strokes.push(stroke);
      }
    }
  }
  return strokes;
}
function externalInkAnnotationToStroke(annot, pageIndex, annotIndex, mapping) {
  const subtype = annot.lookupMaybe(import_pdf_lib.PDFName.of("Subtype"), import_pdf_lib.PDFName);
  if (subtype?.decodeText() !== "Ink") {
    return null;
  }
  const inkList = annot.lookupMaybe(import_pdf_lib.PDFName.of("InkList"), import_pdf_lib.PDFArray);
  if (!inkList || inkList.size() === 0) {
    return null;
  }
  const points = [];
  for (let pathIndex = 0; pathIndex < inkList.size(); pathIndex += 1) {
    const path = inkList.lookupMaybe(pathIndex, import_pdf_lib.PDFArray);
    if (!path) {
      continue;
    }
    for (let pointIndex = 0; pointIndex + 1 < path.size(); pointIndex += 2) {
      const x = path.lookupMaybe(pointIndex, import_pdf_lib.PDFNumber)?.asNumber();
      const y = path.lookupMaybe(pointIndex + 1, import_pdf_lib.PDFNumber)?.asNumber();
      if (typeof x !== "number" || typeof y !== "number") {
        continue;
      }
      points.push(userPointToDisplayPoint(mapping, x, y));
    }
  }
  if (points.length < 2) {
    return null;
  }
  const color = readPdfColor(annot.lookupMaybe(import_pdf_lib.PDFName.of("C"), import_pdf_lib.PDFArray));
  const opacity = annot.lookupMaybe(import_pdf_lib.PDFName.of("CA"), import_pdf_lib.PDFNumber)?.asNumber() ?? 1;
  const border = annot.lookupMaybe(import_pdf_lib.PDFName.of("Border"), import_pdf_lib.PDFArray);
  const borderWidth = border?.lookupMaybe(2, import_pdf_lib.PDFNumber)?.asNumber() ?? 2;
  const pdftionId = pdftionInkStrokeId(annot);
  const groupId = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("PdftionGroup"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString)).trim() || void 0;
  const simplifiedPoints = simplifyInkPoints(points, 900);
  return {
    color,
    groupId,
    id: pdftionId ?? externalInkStrokeId(pageIndex, annotIndex, annot),
    kind: "stroke",
    opacity: clamp(opacity, 0.01, 1),
    pageCssHeight: pageDisplayUserHeight(mapping),
    pageCssWidth: pageDisplayUserWidth(mapping),
    pageIndex,
    pdfPoints: simplifiedPoints.map((point) => ({ ...point })),
    pdfSaved: true,
    points: simplifiedPoints,
    saved: true,
    source: pdftionId ? "pdftion" : "external-ink",
    tool: "pen",
    width: clamp(borderWidth, 0.5, 96)
  };
}
function pdftionInkStrokeId(annot) {
  if (!isPdftionInkAnnotation(annot)) {
    return null;
  }
  const nm = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("NM"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  if (nm.startsWith("Pdftion:")) {
    return nm.slice("Pdftion:".length) || null;
  }
  const contents = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("Contents"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  const match = contents.match(/^Pdftion\s+(.+)$/);
  return match?.[1]?.trim() || null;
}
function externalInkStrokeId(pageIndex, annotIndex, annot) {
  const nm = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("NM"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  if (nm) {
    return `external-ink-${pageIndex}-${safeAnnotationKey(nm)}`;
  }
  const contents = decodePdfText(annot.lookupMaybe(import_pdf_lib.PDFName.of("Contents"), import_pdf_lib.PDFString, import_pdf_lib.PDFHexString));
  if (contents) {
    return `external-ink-${pageIndex}-${annotIndex}-${fallbackBufferHash(new TextEncoder().encode(contents).buffer)}`;
  }
  return `external-ink-${pageIndex}-${annotIndex}`;
}
function simplifyInkPoints(points, maxPoints) {
  if (points.length <= maxPoints) {
    return points;
  }
  const step = Math.ceil(points.length / maxPoints);
  const simplified = [];
  for (let index = 0; index < points.length; index += step) {
    simplified.push(points[index]);
  }
  const last = points[points.length - 1];
  if (simplified[simplified.length - 1] !== last) {
    simplified.push(last);
  }
  return simplified;
}
function smoothInkPointsForPdf(points, maxPoints) {
  if (points.length <= 2) {
    return points.map((point) => ({ ...point }));
  }
  const result = [{ ...points[0] }];
  let current = points[0];
  for (let i = 1; i < points.length - 1; i += 1) {
    const control = points[i];
    const next = points[i + 1];
    const end = {
      x: (control.x + next.x) / 2,
      y: (control.y + next.y) / 2
    };
    const distance = Math.hypot(end.x - current.x, end.y - current.y);
    const steps = clamp(Math.ceil(distance * 1600), 2, 10);
    for (let step = 1; step <= steps; step += 1) {
      const t = step / steps;
      const oneMinusT = 1 - t;
      result.push({
        x: oneMinusT * oneMinusT * current.x + 2 * oneMinusT * t * control.x + t * t * end.x,
        y: oneMinusT * oneMinusT * current.y + 2 * oneMinusT * t * control.y + t * t * end.y
      });
    }
    current = end;
    if (result.length > maxPoints * 1.4) {
      return simplifyInkPoints(result, maxPoints);
    }
  }
  result.push({ ...points[points.length - 1] });
  return simplifyInkPoints(result, maxPoints);
}
function readPdfColor(colorArray) {
  if (!colorArray || colorArray.size() < 3) {
    return "#000000";
  }
  const r = colorArray.lookupMaybe(0, import_pdf_lib.PDFNumber)?.asNumber() ?? 0;
  const g = colorArray.lookupMaybe(1, import_pdf_lib.PDFNumber)?.asNumber() ?? 0;
  const b = colorArray.lookupMaybe(2, import_pdf_lib.PDFNumber)?.asNumber() ?? 0;
  return rgbToHex(r * 255, g * 255, b * 255);
}
function decodePdfText(value) {
  try {
    return value?.decodeText() ?? "";
  } catch {
    return value?.asString() ?? "";
  }
}
function addStandardInkAnnotation(pdf, page, stroke) {
  if (stroke.points.length < 2) {
    return true;
  }
  try {
    const mapping = getPageDisplayMapping(page);
    const size = page.getSize();
    const inkPoints = smoothInkPointsForPdf(stroke.points, 1600);
    const scaledPoints = inkPoints.map((point) => displayPointToUserPoint(
      mapping,
      clamp(point.x, 0, 1),
      clamp(point.y, 0, 1)
    ));
    const xs = scaledPoints.map((point) => point.x);
    const ys = scaledPoints.map((point) => point.y);
    const thickness = Math.max(0.5, stroke.width * (pageDisplayUserWidth(mapping) / Math.max(1, stroke.pageCssWidth)));
    const padding = Math.max(4, thickness * 2);
    const color = hexToRgb(stroke.color);
    const rectLeft = Math.max(0, Math.min(...xs) - padding);
    const rectBottom = Math.max(0, Math.min(...ys) - padding);
    const rectRight = Math.min(size.width, Math.max(...xs) + padding);
    const rectTop = Math.min(size.height, Math.max(...ys) + padding);
    const opacity = clamp(stroke.opacity, 0.01, 1);
    const appearancePoints = scaledPoints.map((point) => ({
      x: point.x - rectLeft,
      y: point.y - rectBottom
    }));
    const graphicsStateRef = pdf.context.register(pdf.context.obj({
      CA: import_pdf_lib.PDFNumber.of(opacity),
      Type: import_pdf_lib.PDFName.of("ExtGState"),
      ca: import_pdf_lib.PDFNumber.of(opacity)
    }));
    const appearance = pdf.context.formXObject([
      (0, import_pdf_lib.pushGraphicsState)(),
      (0, import_pdf_lib.setGraphicsState)(import_pdf_lib.PDFName.of("GS0")),
      (0, import_pdf_lib.setStrokingColor)((0, import_pdf_lib.rgb)(color.r, color.g, color.b)),
      (0, import_pdf_lib.setLineWidth)(thickness),
      (0, import_pdf_lib.setLineCap)(import_pdf_lib.LineCapStyle.Round),
      (0, import_pdf_lib.setLineJoin)(import_pdf_lib.LineJoinStyle.Round),
      (0, import_pdf_lib.moveTo)(appearancePoints[0].x, appearancePoints[0].y),
      ...appearancePoints.slice(1).map((point) => (0, import_pdf_lib.lineTo)(point.x, point.y)),
      (0, import_pdf_lib.stroke)(),
      (0, import_pdf_lib.popGraphicsState)()
    ], {
      BBox: pdf.context.obj([0, 0, rectRight - rectLeft, rectTop - rectBottom]),
      Matrix: pdf.context.obj([1, 0, 0, 1, 0, 0]),
      Resources: pdf.context.obj({
        ExtGState: pdf.context.obj({ GS0: graphicsStateRef })
      })
    });
    const appearanceRef = pdf.context.register(appearance);
    const rect = pdf.context.obj([rectLeft, rectBottom, rectRight, rectTop]);
    const inkPath = pdf.context.obj(scaledPoints.flatMap((point) => [point.x, point.y]));
    const inkList = pdf.context.obj([inkPath]);
    const border = pdf.context.obj([0, 0, thickness]);
    const annotation = pdf.context.obj({
      AP: pdf.context.obj({ N: appearanceRef }),
      Border: border,
      C: pdf.context.obj([color.r, color.g, color.b]),
      CA: import_pdf_lib.PDFNumber.of(opacity),
      Contents: import_pdf_lib.PDFHexString.fromText(`Pdftion ${stroke.id}`),
      F: import_pdf_lib.PDFNumber.of(4),
      InkList: inkList,
      M: import_pdf_lib.PDFHexString.fromText((/* @__PURE__ */ new Date()).toISOString()),
      NM: import_pdf_lib.PDFHexString.fromText(`Pdftion:${stroke.id}`),
      Rect: rect,
      Subtype: import_pdf_lib.PDFName.of("Ink"),
      T: import_pdf_lib.PDFHexString.fromText("Pdftion"),
      Type: import_pdf_lib.PDFName.of("Annot")
    });
    if (stroke.groupId) {
      annotation.set(import_pdf_lib.PDFName.of("PdftionGroup"), import_pdf_lib.PDFHexString.fromText(stroke.groupId));
    }
    const annotationRef = pdf.context.register(annotation);
    const pageNode = page.node;
    if (typeof pageNode.addAnnot === "function") {
      pageNode.addAnnot(annotationRef);
      return true;
    }
    let annots = pageNode.Annots?.();
    if (!annots) {
      annots = pdf.context.obj([]);
      pageNode.set(import_pdf_lib.PDFName.of("Annots"), annots);
    }
    annots.push(annotationRef);
    return true;
  } catch (error) {
    console.warn("pdftion could not write a standard ink annotation; falling back to visible lines.", error);
    return false;
  }
}
function drawStrokeAsPdfLines(page, stroke, mapping) {
  if (stroke.points.length < 2) {
    return;
  }
  drawRoundedPdfStroke(page, stroke.points, stroke.color, stroke.opacity, stroke.width, stroke.pageCssWidth, mapping);
}
function drawRoundedPdfStroke(page, sourcePoints, colorHex, opacity, sourceWidth, sourcePageWidth, mapping) {
  if (sourcePoints.length < 2) {
    return;
  }
  const color = hexToRgb(colorHex);
  const thickness = Math.max(0.5, sourceWidth * (pageDisplayUserWidth(mapping) / Math.max(1, sourcePageWidth)));
  const points = smoothInkPointsForPdf(sourcePoints, 1600);
  const userPoints = points.map((point) => displayPointToUserPoint(mapping, point.x, point.y));
  for (let i = 1; i < userPoints.length; i += 1) {
    const start = userPoints[i - 1];
    const end = userPoints[i];
    page.drawLine({
      color: (0, import_pdf_lib.rgb)(color.r, color.g, color.b),
      end: { x: end.x, y: end.y },
      opacity,
      start: { x: start.x, y: start.y },
      thickness
    });
  }
  for (const point of userPoints) {
    page.drawCircle({
      color: (0, import_pdf_lib.rgb)(color.r, color.g, color.b),
      opacity,
      size: thickness / 2,
      x: point.x,
      y: point.y
    });
  }
}
async function drawVisibleInkElementsOnPdf(pdf, elements, fontBytes) {
  const pages = pdf.getPages();
  const font = fontBytes ? await embedAnnotationFont(pdf, fontBytes) : null;
  normalizeInkElementLayers(elements);
  const orderedElements = elements.sort(compareInkElements);
  for (const element of orderedElements) {
    const page = pages[element.pageIndex];
    if (!page) {
      continue;
    }
    const mapping = getPageDisplayMapping(page);
    if (element.kind === "cover") {
      const color2 = hexToRgb(element.color);
      const rect = displayRectToUserRect(mapping, element.x, element.y, element.width, element.height);
      page.drawRectangle({
        color: (0, import_pdf_lib.rgb)(color2.r, color2.g, color2.b),
        height: rect.height,
        opacity: element.opacity,
        width: rect.width,
        x: rect.x,
        y: rect.y
      });
      continue;
    }
    if (element.kind === "stroke") {
      if (element.points.length < 2) {
        continue;
      }
      drawRoundedPdfStroke(
        page,
        element.points,
        element.color,
        element.opacity,
        element.width,
        element.pageCssWidth,
        mapping
      );
      continue;
    }
    if (element.kind === "image") {
      const bytes = dataUrlToBytes(element.dataUrl);
      const embedded = element.dataUrl.startsWith("data:image/jpeg") || element.dataUrl.startsWith("data:image/jpg") ? await pdf.embedJpg(bytes) : await pdf.embedPng(bytes);
      const rect = displayRectToUserRect(mapping, element.x, element.y, element.width, element.height);
      page.drawImage(embedded, {
        height: rect.height,
        opacity: element.opacity,
        width: rect.width,
        x: rect.x,
        y: rect.y
      });
      continue;
    }
    if (element.presentation === "comment") {
      addStandardTextCommentAnnotation(pdf, page, element, mapping);
      continue;
    }
    if (!font) {
      continue;
    }
    const color = hexToRgb(element.color);
    const scale = pageDisplayUserWidth(mapping) / Math.max(1, element.pageCssWidth);
    const fontSize = Math.max(1, element.fontSize * scale);
    const fontSizeNorm = fontSize / Math.max(1e-6, pageDisplayUserHeight(mapping));
    const lineHeightUser = fontSize * 1.2;
    let lineV = element.y;
    for (const line of element.text.split(/\r?\n/)) {
      const baseline = displayPointToUserPoint(mapping, element.x, lineV + fontSizeNorm);
      page.drawText(line || " ", {
        color: (0, import_pdf_lib.rgb)(color.r, color.g, color.b),
        font,
        opacity: element.opacity,
        rotate: (0, import_pdf_lib.degrees)(mapping.rotation),
        size: fontSize,
        x: baseline.x,
        y: baseline.y
      });
      lineV += lineHeightUser / Math.max(1e-6, pageDisplayUserHeight(mapping));
    }
  }
}
async function trySharePdf(fileName, bytes) {
  if (typeof File === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const fileBuffer = toArrayBufferCopy(bytes);
  const file = new File([fileBuffer], fileName, { type: "application/pdf" });
  const shareData = {
    files: [file],
    title: fileName
  };
  const shareNavigator = navigator;
  if (typeof shareNavigator.share !== "function") {
    return false;
  }
  if (typeof shareNavigator.canShare === "function" && !shareNavigator.canShare(shareData)) {
    return false;
  }
  try {
    await shareNavigator.share(shareData);
    return true;
  } catch {
    return false;
  }
}
function formatElementForMarkdown(element) {
  if (element.kind === "text") {
    const type = element.presentation === "comment" ? "Comment" : "Text";
    return `${type} (${element.id}): ${element.text.replace(/\s+/g, " ")}; x=${element.x.toFixed(3)}, y=${element.y.toFixed(3)}, size=${element.fontSize}, layer=${element.zIndex ?? 0}`;
  }
  if (element.kind === "stroke") {
    return `Stroke (${element.id}): ${element.points.length} points, color ${element.color}, width ${element.width}`;
  }
  if (element.kind === "image") {
    return `Image (${element.id}): x=${element.x.toFixed(3)}, y=${element.y.toFixed(3)}, w=${element.width.toFixed(3)}, h=${element.height.toFixed(3)}`;
  }
  return `Cover (${element.id}): x=${element.x.toFixed(3)}, y=${element.y.toFixed(3)}, w=${element.width.toFixed(3)}, h=${element.height.toFixed(3)}`;
}
function rectIntersectionArea(a, b) {
  const left = Math.max(a.left, b.left);
  const right = Math.min(a.right, b.right);
  const top = Math.max(a.top, b.top);
  const bottom = Math.min(a.bottom, b.bottom);
  return Math.max(0, right - left) * Math.max(0, bottom - top);
}
function clipRectToBounds(rect, bounds) {
  return {
    bottom: clamp(rect.bottom, bounds.top, bounds.bottom),
    left: clamp(rect.left, bounds.left, bounds.right),
    right: clamp(rect.right, bounds.left, bounds.right),
    top: clamp(rect.top, bounds.top, bounds.bottom)
  };
}
function unionRects(rects) {
  return rects.reduce((union, rect) => ({
    bottom: Math.max(union.bottom, rect.bottom),
    left: Math.min(union.left, rect.left),
    right: Math.max(union.right, rect.right),
    top: Math.min(union.top, rect.top)
  }), rects[0]);
}
function normalizeObsidianLink(raw) {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }
  const embed = trimmed.startsWith("![[");
  const match = trimmed.match(/^!?\[\[([^\]]+)]]$/);
  const target = (match?.[1] ?? trimmed).trim();
  if (!target) {
    return null;
  }
  return {
    embed,
    target,
    wikilink: match ? trimmed : `[[${target}]]`
  };
}
function buildPdfSelectionWikilink(file, pageIndex, text) {
  const target = sanitizeWikilinkTarget(`${file.path}#page=${pageIndex + 1}`);
  const alias = sanitizeWikilinkAlias(`${truncateForLinkAlias(text)} - ${getPdfDisplayName(file)}`);
  return `[[${target}|${alias}]]`;
}
function getPdfDisplayName(file) {
  const name = file.name.trim() || file.basename;
  return /\.pdf$/i.test(name) ? name : `${file.basename || name}.pdf`;
}
function sanitizeWikilinkTarget(value) {
  return value.replace(/\|/g, "\\|").replace(/]/g, "");
}
function sanitizeWikilinkAlias(value) {
  return value.replace(/\s+/g, " ").replaceAll("|", " ").replaceAll("[", " ").replaceAll("]", " ").trim();
}
function truncateForLinkAlias(value) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned.length > 96 ? `${cleaned.slice(0, 95)}\u2026` : cleaned;
}
function stripObsidianLinkSyntax(value) {
  const normalized = normalizeObsidianLink(value);
  return normalized?.target.split("#", 1)[0].split("|", 1)[0].trim() ?? value.trim();
}
function isImageExtension(extension) {
  return ["apng", "avif", "gif", "jpeg", "jpg", "png", "svg", "webp"].includes(extension.toLowerCase());
}
function imageMimeFromExtension(extension) {
  const ext = extension.toLowerCase();
  if (ext === "jpg" || ext === "jpeg") {
    return "image/jpeg";
  }
  if (ext === "svg") {
    return "image/svg+xml";
  }
  if (ext === "gif") {
    return "image/gif";
  }
  if (ext === "webp") {
    return "image/webp";
  }
  if (ext === "avif") {
    return "image/avif";
  }
  if (ext === "apng") {
    return "image/apng";
  }
  return "image/png";
}
function arrayBufferToDataUrl(buffer, mime) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 32768;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return `data:${mime};base64,${btoa(binary)}`;
}
function uint8ArrayToDataUrl(bytes, mime) {
  return arrayBufferToDataUrl(toArrayBufferCopy(bytes), mime);
}
function dataUrlMimeType(dataUrl) {
  return dataUrl.match(/^data:([^;,]+)/i)?.[1]?.toLowerCase() ?? "image/png";
}
function dataUrlImageExtension(dataUrl) {
  const mime = dataUrlMimeType(dataUrl);
  if (mime === "image/jpeg") return "jpg";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";
  if (mime === "image/svg+xml") return "svg";
  return "png";
}
function sleepMs(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
function waitForNextFrame() {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timeout);
      resolve();
    };
    const timeout = window.setTimeout(finish, 120);
    window.requestAnimationFrame(finish);
  });
}
function loadDataUrlImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image data."));
    image.src = dataUrl;
  });
}
function fitImageToOverlay(size, overlay, requestedWidth, requestedHeight) {
  if (typeof requestedWidth === "number" && typeof requestedHeight === "number") {
    return { height: clamp(requestedHeight, 1e-3, 1), width: clamp(requestedWidth, 1e-3, 1) };
  }
  const maxWidth = clamp(Number(requestedWidth ?? 0.42), 0.03, 0.95);
  const maxHeight = clamp(Number(requestedHeight ?? 0.42), 0.03, 0.95);
  const ratio = size.width / Math.max(1, size.height);
  let width = maxWidth;
  let height = width / ratio * (overlay.cssWidth / Math.max(1, overlay.cssHeight));
  if (height > maxHeight) {
    height = maxHeight;
    width = height * ratio * (overlay.cssHeight / Math.max(1, overlay.cssWidth));
  }
  return {
    height: clamp(height, 0.03, 0.95),
    width: clamp(width, 0.03, 0.95)
  };
}
function matchEditableTaskMarker(text) {
  const markdown = text.match(/^(?:[-*+]\s*)?\[([ xX✓✔])\]\s*/u);
  if (markdown) {
    const checked = !/^\s*$/u.test(markdown[1]);
    return { checked, length: markdown[0].length, marker: checked ? "\u2611" : "\u2610" };
  }
  const unicode = text.match(/^(☐|□|◻|⬜|🔲|☑|☒|✅|✓️?|✔️?)\s*/u);
  if (!unicode) {
    return null;
  }
  return {
    checked: /^(?:☑|☒|✅|✓|✔)/u.test(unicode[1]),
    length: unicode[0].length,
    marker: unicode[1]
  };
}
function matchEditableUnorderedListMarker(text) {
  const match = text.match(/^([*+\-•‣⁃◦●○▪▫■◆◇▶▸])\s+/u);
  return match ? { length: match[0].length, marker: match[1] } : null;
}
function matchEditableOrderedListMarker(text) {
  const match = text.match(/^(?:\(\s*)?(\d{1,4})(?:\s*\)|[.、．）])\s+/u);
  if (!match) {
    return null;
  }
  const ordinal = Number.parseInt(match[1], 10);
  return Number.isFinite(ordinal) ? { length: match[0].length, ordinal } : null;
}
function buildEditableListLefts(lines) {
  const lefts = [];
  for (const line of lines) {
    const text = line.runs.map((run) => run.text).join("").trim();
    if (!matchEditableTaskMarker(text) && !matchEditableUnorderedListMarker(text) && !matchEditableOrderedListMarker(text)) {
      continue;
    }
    const existing = lefts.findIndex((left) => Math.abs(left - line.left) <= 0.022);
    if (existing >= 0) {
      lefts[existing] = (lefts[existing] + line.left) / 2;
    } else {
      lefts.push(line.left);
    }
  }
  return lefts.sort((a, b) => a - b).slice(0, 7);
}
function getEditableListLevel(line, lefts) {
  return lefts.map((left, index) => ({ distance: Math.abs(left - line.left), index })).sort((a, b) => a.distance - b.distance)[0]?.index ?? 0;
}
function isEditableCodeLine(line, text) {
  if (/^`{3,}|`{3,}$/u.test(text)) {
    return true;
  }
  const visibleLength = Math.max(1, text.replace(/\s+/gu, "").length);
  const monospaceLength = line.runs.reduce((total, run) => /(?:mono|consolas|courier|code)/iu.test(run.fontFamily) ? total + run.text.replace(/\s+/gu, "").length : total, 0);
  return visibleLength >= 3 && monospaceLength / visibleLength >= 0.78;
}
function isEditableCalloutTitle(text) {
  return /^(?:ℹ️?|💡|⚠️?|❓)?\s*(?:note|tip|info|important|warning|caution|danger|注意|提示|信息|重要|警告|危险)(?:\s*[:：]|$)/iu.test(text);
}
function buildNativeExportDocument(pages, images = []) {
  const headingProfile = buildEditableMarkdownHeadingProfile(pages);
  const baseFontSize = headingProfile.baseFontSize;
  const nativePages = pages.map((page) => {
    const tables = detectEditableMarkdownTables(page.lines);
    const tableLines = new Set(tables.flatMap((table) => table.lines));
    const contentLines = page.lines.filter((line) => !tableLines.has(line));
    const listLefts = buildEditableListLefts(contentLines);
    const inlineGlyphsByLine = /* @__PURE__ */ new Map();
    const pageImages = [];
    for (const image of images.filter((image2) => image2.pageIndex === page.pageIndex).sort((a, b) => a.y - b.y || (a.zIndex ?? 0) - (b.zIndex ?? 0) || a.id.localeCompare(b.id))) {
      if (image.id.startsWith("pdf-inline-")) {
        const line = contentLines.map((candidate) => ({
          candidate,
          gap: candidate.left - (image.x + image.width),
          verticalDistance: Math.abs(
            image.y + image.height / 2 - (candidate.top + candidate.height / 2)
          )
        })).filter(({ candidate, gap, verticalDistance }) => gap >= -0.01 && gap <= 0.09 && verticalDistance <= Math.max(0.012, candidate.height * 1.15)).sort((a, b) => a.verticalDistance - b.verticalDistance || a.gap - b.gap)[0]?.candidate;
        if (line) {
          const glyphs = inlineGlyphsByLine.get(line) ?? [];
          glyphs.push(image);
          inlineGlyphsByLine.set(line, glyphs);
          if (!image.id.startsWith("pdf-inline-checkbox-")) {
            pageImages.push(image);
          }
          continue;
        }
      }
      pageImages.push(image);
    }
    const items = [
      ...contentLines.map((line) => ({ kind: "line", position: line.top, value: line })),
      ...tables.map((table) => ({ kind: "table", position: table.top, value: table })),
      ...pageImages.map((image) => ({ kind: "image", position: image.y + image.height / 2, value: image }))
    ].sort((a, b) => a.position - b.position || (a.kind === "image" ? -1 : 1));
    const blocks = [];
    for (const item of items) {
      if (item.kind === "image") {
        blocks.push({
          height: item.value.height,
          image: item.value,
          kind: "image",
          left: item.value.x,
          runs: [],
          top: item.value.y,
          width: item.value.width
        });
        continue;
      }
      if (item.kind === "table") {
        blocks.push({
          height: item.value.bottom - item.value.top,
          kind: "table",
          left: item.value.left,
          runs: [],
          table: item.value,
          top: item.value.top,
          width: item.value.right - item.value.left
        });
        continue;
      }
      const line = item.value;
      const leadingImages = inlineGlyphsByLine.get(line);
      const text = line.runs.map((run) => run.text).join("").trim();
      if (!text) {
        continue;
      }
      const explicitHeading = text.match(/^(#{1,6})\s+/u);
      const detectedHeadingLevel = getEditableMarkdownHeadingLevel(line, baseFontSize, text, headingProfile);
      if (detectedHeadingLevel !== null) {
        blocks.push({
          height: line.height,
          headingLevel: detectedHeadingLevel,
          kind: "heading",
          leadingImages,
          left: line.left,
          runs: explicitHeading ? removeEditableRunPrefix(line.runs, explicitHeading[0].length) : line.runs,
          top: line.top,
          width: line.width
        });
        if (/^(?:分割线|水平线|horizontal\s+rule|separator)$/iu.test(text.replace(/\s+/g, " ").trim())) {
          blocks.push({ height: 2e-3, kind: "separator", left: line.left, runs: [], top: line.top + line.height, width: line.width });
        }
        continue;
      }
      const taskMarker = matchEditableTaskMarker(text);
      const bullet = matchEditableUnorderedListMarker(text);
      const ordered = matchEditableOrderedListMarker(text);
      const quote = text.match(/^>\s*/u);
      const removePrefix = (prefix) => removeEditableRunPrefix(line.runs, prefix.length);
      const listLevel = getEditableListLevel(line, listLefts);
      const visualTaskImage = leadingImages?.find((image) => image.id.startsWith("pdf-inline-checkbox-"));
      const remainingLeadingImages = leadingImages?.filter((image) => image !== visualTaskImage);
      if (taskMarker || visualTaskImage) {
        blocks.push({
          checked: taskMarker?.checked ?? visualTaskImage?.id.startsWith("pdf-inline-checkbox-checked-") ?? false,
          height: line.height,
          kind: "task",
          leadingImages: remainingLeadingImages,
          left: line.left,
          listLevel,
          marker: taskMarker?.marker,
          runs: taskMarker ? removeEditableRunPrefix(line.runs, taskMarker.length) : line.runs,
          top: line.top,
          width: line.width
        });
      } else if (bullet) {
        blocks.push({
          height: line.height,
          kind: "unordered-list",
          leadingImages,
          left: line.left,
          listLevel,
          marker: bullet.marker,
          runs: removeEditableRunPrefix(line.runs, bullet.length),
          top: line.top,
          width: line.width
        });
      } else if (ordered) {
        blocks.push({
          height: line.height,
          kind: "ordered-list",
          leadingImages,
          left: line.left,
          listLevel,
          ordinal: ordered.ordinal,
          runs: removeEditableRunPrefix(line.runs, ordered.length),
          top: line.top,
          width: line.width
        });
      } else if (quote) {
        blocks.push({
          height: line.height,
          kind: "quote",
          leadingImages,
          left: line.left,
          runs: quote ? removePrefix(quote[0]) : line.runs,
          top: line.top,
          width: line.width
        });
      } else if (isEditableCodeLine(line, text)) {
        blocks.push({
          height: line.height,
          kind: "code",
          leadingImages,
          left: line.left,
          runs: line.runs.map((run) => ({ ...run, code: true })),
          top: line.top,
          width: line.width
        });
      } else if (isEditableCalloutTitle(text)) {
        blocks.push({
          height: line.height,
          kind: "callout-title",
          leadingImages,
          left: line.left,
          runs: line.runs,
          top: line.top,
          width: line.width
        });
      } else {
        const styledRuns = line.runs.map((run) => ({
          ...run,
          code: run.code || /(?:mono|consolas|courier|code)/i.test(run.fontFamily)
        }));
        blocks.push({ height: line.height, kind: "paragraph", leadingImages, left: line.left, runs: styledRuns, top: line.top, width: line.width });
      }
    }
    return { blocks, height: page.height, pageIndex: page.pageIndex, width: page.width };
  });
  return { baseFontSize, headingProfile, pages: nativePages };
}
function buildNativeExportDocumentFromVisualPages(pages) {
  const editablePages = pages.map((page) => ({
    height: page.height,
    lines: page.lines,
    pageIndex: page.pageIndex,
    width: page.width
  }));
  const images = pages.flatMap((page) => page.images.filter(isUsefulNativeExportImage).map((image) => ({
    ...image,
    assetMime: dataUrlMimeType(image.dataUrl),
    assetName: `pdftion-image-${image.id}.${dataUrlImageExtension(image.dataUrl)}`,
    pageIndex: page.pageIndex
  })));
  return buildNativeExportDocument(editablePages, images);
}
function buildHtmlExportDocumentFromVisualPages(pages) {
  const editablePages = pages.map((page) => ({
    height: page.height,
    lines: page.lines,
    pageIndex: page.pageIndex,
    width: page.width
  }));
  const images = pages.flatMap((page) => page.images.filter(isUsefulHtmlExportImage).map((image) => ({
    ...image,
    assetMime: dataUrlMimeType(image.dataUrl),
    assetName: `pdftion-image-${image.id}.${dataUrlImageExtension(image.dataUrl)}`,
    pageIndex: page.pageIndex
  })));
  return buildNativeExportDocument(editablePages, images);
}
function removeEditableRunPrefix(runs, prefixLength) {
  let remaining = prefixLength;
  return runs.map((run) => {
    if (remaining <= 0) {
      return { ...run };
    }
    const removed = Math.min(remaining, run.text.length);
    remaining -= removed;
    return { ...run, text: run.text.slice(removed) };
  }).filter((run) => run.text.length > 0);
}
function buildEditableMarkdown(file, pages, images = [], targetPath = "") {
  const document2 = buildNativeExportDocument(pages, images);
  const output = [];
  for (const page of document2.pages) {
    for (const block of page.blocks) {
      const text = block.runs.map((run) => renderEditableMarkdownRun(run, document2.baseFontSize, false, file)).join("").trim();
      const leadingVisuals = (block.leadingImages ?? []).map((image) => renderMarkdownExportImage(file, image, targetPath)).filter(Boolean).join(" ");
      const content = [leadingVisuals, text].filter(Boolean).join(" ");
      if (block.kind === "heading") {
        output.push(`${"#".repeat(block.headingLevel ?? 1)} ${content}`, "");
      } else if (block.kind === "paragraph") {
        output.push(content, "");
      } else if (block.kind === "unordered-list") {
        output.push(`${"    ".repeat(block.listLevel ?? 0)}- ${content}`, "");
      } else if (block.kind === "ordered-list") {
        output.push(`${"    ".repeat(block.listLevel ?? 0)}${block.ordinal ?? 1}. ${content}`, "");
      } else if (block.kind === "task") {
        output.push(`${"    ".repeat(block.listLevel ?? 0)}- [${block.checked ? "x" : " "}] ${content}`, "");
      } else if (block.kind === "quote") {
        output.push(`> ${content}`, "");
      } else if (block.kind === "callout-title") {
        output.push(`> ${getCommonCalloutIcon(block.runs.map((run) => run.text).join(""))} **${content}**`, "");
      } else if (block.kind === "callout-body") {
        output.push(`> ${text}`, "");
      } else if (block.kind === "code") {
        const raw = block.runs.map((run) => run.text).join("");
        const fence = raw.includes("```") ? "````" : "```";
        if (leadingVisuals) {
          output.push(leadingVisuals, "");
        }
        output.push(fence, raw, fence, "");
      } else if (block.kind === "separator") {
        output.push("---", "");
      } else if (block.kind === "table" && block.table) {
        output.push(...renderEditableMarkdownTable(block.table, document2.baseFontSize, file), "");
      } else if (block.kind === "image" && block.image?.assetPath && !block.image.id.startsWith("pdf-inline-")) {
        output.push(renderMarkdownExportImage(file, block.image, targetPath), "");
      }
    }
  }
  return `${output.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}
`;
}
function getCommonCalloutIcon(title) {
  const normalized = title.toLowerCase();
  if (/warn|caution|danger|警告|危险/u.test(normalized)) return "\u26A0\uFE0F";
  if (/tip|success|技巧|提示/u.test(normalized)) return "\u{1F4A1}";
  if (/question|help|问题|帮助/u.test(normalized)) return "\u2753";
  return "\u2139\uFE0F";
}
function getRelativeMarkdownPath(fromFile, target) {
  const fromParts = fromFile.replace(/\\/g, "/").split("/").filter(Boolean);
  const targetParts = target.replace(/\\/g, "/").split("/").filter(Boolean);
  fromParts.pop();
  while (fromParts.length > 0 && targetParts.length > 0 && fromParts[0] === targetParts[0]) {
    fromParts.shift();
    targetParts.shift();
  }
  return `${"../".repeat(fromParts.length)}${targetParts.join("/")}` || "./";
}
function escapeMarkdownImageAlt(value) {
  return value.replace(/[\[\]\\]/g, "\\$&").replace(/\r?\n/g, " ");
}
function renderMarkdownExportImage(file, image, targetPath) {
  if (!image.assetPath) {
    return "";
  }
  const relativePath = getRelativeMarkdownPath(targetPath, image.assetPath);
  const alt = escapeMarkdownImageAlt(image.assetName || file.basename);
  const commonImage = `![${alt}](${escapeMarkdownLinkDestination(relativePath)})`;
  if (image.link) {
    const destination = normalizeMarkdownExportLinkDestination(image.link, file, targetPath);
    return destination ? `[${commonImage}](${escapeMarkdownLinkDestination(destination)})` : commonImage;
  }
  return `![[${escapeObsidianWikilink(image.assetPath)}]]`;
}
function detectEditableMarkdownTables(lines) {
  const sorted = [...lines].sort((a, b) => a.top - b.top || a.left - b.left);
  const tables = [];
  let group = [];
  const flush = () => {
    if (group.length < 2) {
      group = [];
      return;
    }
    const columnCount = group[0].cells.length;
    const columnStarts = Array.from({ length: columnCount }, (_, columnIndex) => group.reduce((sum, row) => sum + row.cells[columnIndex].left, 0) / group.length);
    const measuredRight = Math.max(...group.flatMap((row) => row.cells.flatMap((cell) => cell.runs.map((run) => (run.left ?? cell.left) + (run.width ?? 0)))));
    const estimatedLastWidth = columnStarts.length > 1 ? columnStarts[columnStarts.length - 1] - columnStarts[columnStarts.length - 2] : measuredRight - columnStarts[0];
    tables.push({
      bottom: Math.max(...group.map((row) => row.line.top + row.line.height)),
      columnStarts,
      left: Math.min(...group.flatMap((row) => row.cells.map((cell) => cell.left))),
      lines: group.map((row) => row.line),
      right: clamp(Math.max(measuredRight, columnStarts[columnStarts.length - 1] + estimatedLastWidth), 0, 0.98),
      rows: group.map((row) => row.cells),
      top: Math.min(...group.map((row) => row.line.top))
    });
    group = [];
  };
  for (const line of sorted) {
    const cells = splitEditableMarkdownTableRow(line);
    if (!cells) {
      flush();
      continue;
    }
    const previous = group[group.length - 1];
    const sameColumns = !previous || previous.cells.length === cells.length;
    const closeVertically = !previous || line.top - (previous.line.top + previous.line.height) <= 0.045;
    const aligned = !previous || cells.every((cell, index) => Math.abs(cell.left - previous.cells[index].left) <= 0.055);
    if (!sameColumns || !closeVertically || !aligned) {
      flush();
    }
    group.push({ cells, line });
  }
  flush();
  return tables;
}
function splitEditableMarkdownTableRow(line) {
  const runs = line.runs.filter((run) => run.text.trim().length > 0 && typeof run.left === "number" && typeof run.width === "number").sort((a, b) => (a.left ?? 0) - (b.left ?? 0));
  if (runs.length < 2) {
    return null;
  }
  const boundaries = [];
  for (let index = 1; index < runs.length; index += 1) {
    const previousRight = (runs[index - 1].left ?? line.left) + (runs[index - 1].width ?? 0);
    const nextLeft = runs[index].left ?? previousRight;
    if (nextLeft - previousRight >= 0.08) {
      boundaries.push((previousRight + nextLeft) / 2);
    }
  }
  if (boundaries.length === 0) {
    return null;
  }
  const cells = Array.from({ length: boundaries.length + 1 }, () => ({ left: 1, runs: [] }));
  for (const run of runs) {
    const left = run.left ?? line.left;
    const cellIndex = boundaries.findIndex((boundary) => left < boundary);
    const targetIndex = cellIndex === -1 ? cells.length - 1 : cellIndex;
    cells[targetIndex].left = Math.min(cells[targetIndex].left, left);
    cells[targetIndex].runs.push(run);
  }
  return cells.every((cell) => cell.runs.length > 0) ? cells : null;
}
function renderEditableMarkdownTable(table, baseFontSize, file) {
  const rows = table.rows.map((row) => row.map((cell) => cell.runs.map((run) => renderEditableMarkdownRun(run, baseFontSize, true, file)).join("").replace(/\s*\n\s*/g, " ").trim() || " "));
  if (rows.length === 0) {
    return [];
  }
  return [
    `| ${rows[0].join(" | ")} |`,
    `| ${rows[0].map(() => "---").join(" | ")} |`,
    ...rows.slice(1).map((row) => `| ${row.join(" | ")} |`)
  ];
}
function getEditableTableColumnWidths(table, totalWidth) {
  const starts = table.columnStarts;
  if (starts.length === 0) {
    return [];
  }
  const rawWidths = starts.map((start, index) => Math.max(0.01, (starts[index + 1] ?? table.right) - start));
  const rawTotal = rawWidths.reduce((sum, width) => sum + width, 0);
  return rawWidths.map((width) => totalWidth * width / Math.max(0.01, rawTotal));
}
function partitionMarkdownExportImages(pages, images) {
  const pageByIndex = new Map(pages.map((page) => [page.pageIndex, page]));
  const floating = [];
  const inline = [];
  for (const image of images) {
    const page = pageByIndex.get(image.pageIndex);
    if (image.link || image.placement === "flow" || !page || page.lines.length === 0 || image.id.startsWith("native-page-")) {
      inline.push(image);
      continue;
    }
    if (image.placement === "floating" || isClearlyFloatingMarkdownRaster(page, image)) {
      floating.push(image);
      continue;
    }
    inline.push(image);
  }
  return { floating, inline };
}
function isClearlyFloatingMarkdownRaster(page, image) {
  if (!image.id.startsWith("pdf-raster-page-") || image.width * image.height > 0.035) {
    return false;
  }
  const imageArea = Math.max(1e-4, image.width * image.height);
  const overlapArea = page.lines.reduce((total, line) => {
    const overlapWidth = Math.max(0, Math.min(image.x + image.width, line.left + line.width) - Math.max(image.x, line.left));
    const overlapHeight = Math.max(0, Math.min(image.y + image.height, line.top + line.height) - Math.max(image.y, line.top));
    return total + overlapWidth * overlapHeight;
  }, 0);
  if (overlapArea / imageArea >= 0.12) {
    return true;
  }
  const textLeft = Math.min(...page.lines.map((line) => line.left));
  const textRight = Math.max(...page.lines.map((line) => line.left + line.width));
  const outsideTextColumn = image.x + image.width < textLeft - 0.01 || image.x > textRight + 0.01;
  const besideText = page.lines.some((line) => {
    const verticalOverlap = normalizedRangesOverlap(image.y, image.y + image.height, line.top, line.top + line.height, 6e-3);
    const horizontalGap = Math.max(line.left - (image.x + image.width), image.x - (line.left + line.width), 0);
    return verticalOverlap && horizontalGap <= 0.03;
  });
  return outsideTextColumn && besideText;
}
function normalizedRangesOverlap(startA, endA, startB, endB, padding = 0) {
  return startA < endB + padding && endA > startB - padding;
}
function normalizedRectsOverlap(xA, yA, widthA, heightA, xB, yB, widthB, heightB, padding = 0) {
  return normalizedRangesOverlap(xA, xA + widthA, xB, xB + widthB, padding) && normalizedRangesOverlap(yA, yA + heightA, yB, yB + heightB, padding);
}
function collectEditableMarkdownLines(overlay) {
  const overlayRect = overlay.pageEl.getBoundingClientRect();
  const textSpans = Array.from(overlay.pageEl.querySelectorAll(".textLayer span"));
  const candidates = textSpans.length > 0 ? textSpans : Array.from(overlay.pageEl.querySelectorAll("[data-canvas-width]"));
  const linkRects = collectDomExportLinkRects(overlay.pageEl);
  const fragments = [];
  for (const span of candidates) {
    const text = (span.textContent ?? "").replace(/\u00a0/g, " ").replace(/[\t\r\n ]+/g, " ");
    if (!text.trim()) {
      continue;
    }
    const rect = span.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) {
      continue;
    }
    const style = activeWindow.getComputedStyle(span);
    const fontSize = Number.parseFloat(style.fontSize || "") || Math.max(4, rect.height * 0.82);
    const fontWeight = Number.parseInt(style.fontWeight || "400", 10);
    const decoration = style.textDecorationLine || style.textDecoration || "";
    const directLink = getDomExportLinkTarget(span.closest(
      "a[href], [data-href], [data-linkpath], [data-dest], [data-url]"
    ));
    fragments.push({
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right,
      run: {
        bold: fontWeight >= 600 || /bold/i.test(style.fontWeight),
        color: cssColorToHex(style.color) ?? "#000000",
        fontFamily: style.fontFamily || "",
        fontSize,
        italic: /italic|oblique/i.test(style.fontStyle),
        link: directLink ?? findOverlappingExportLink(rect, linkRects),
        opacity: Number.parseFloat(style.opacity || "1") || 1,
        strike: /line-through/i.test(decoration),
        text,
        underline: /underline/i.test(decoration)
      },
      top: rect.top
    });
  }
  return buildEditableLinesFromFragments(fragments, {
    height: overlay.cssHeight,
    left: overlayRect.left,
    top: overlayRect.top,
    width: overlay.cssWidth
  });
}
function collectDomExportLinkRects(pageEl) {
  const links = Array.from(pageEl.querySelectorAll(
    ".annotationLayer a, .linkAnnotation a, a[data-annotation-id], [data-href], [data-linkpath], [data-dest], [data-url]"
  ));
  return links.flatMap((link) => {
    const href = getDomExportLinkTarget(link);
    const rect = link.getBoundingClientRect();
    return href && rect.width > 0 && rect.height > 0 ? [{ bottom: rect.bottom, href, left: rect.left, right: rect.right, top: rect.top }] : [];
  });
}
function getDomExportLinkTarget(element) {
  if (!element) {
    return void 0;
  }
  for (const attribute of ["href", "data-href", "data-linkpath", "data-url"]) {
    const value = element.getAttribute(attribute)?.trim();
    if (value && value !== "#") {
      return value;
    }
  }
  const destination = element.getAttribute("data-dest")?.trim();
  return destination ? `#nameddest=${encodeURIComponent(destination)}` : void 0;
}
function findOverlappingExportLink(rect, links) {
  const width = Math.max(1, rect.right - rect.left);
  const height = Math.max(1, rect.bottom - rect.top);
  return links.map((link) => {
    const overlapWidth = Math.max(0, Math.min(rect.right, link.right) - Math.max(rect.left, link.left));
    const overlapHeight = Math.max(0, Math.min(rect.bottom, link.bottom) - Math.max(rect.top, link.top));
    return { href: link.href, ratio: overlapWidth * overlapHeight / (width * height) };
  }).filter((candidate) => candidate.ratio >= 0.18).sort((a, b) => b.ratio - a.ratio)[0]?.href;
}
async function collectPdfJsEditableLines(pageView, overlay) {
  const pdfPage = pageView?.pdfPage;
  const viewport = pageView?.viewport;
  if (!pdfPage?.getTextContent || !viewport?.transform || viewport.transform.length < 6) {
    return [];
  }
  try {
    const content = await pdfPage.getTextContent();
    const viewportWidth = Math.max(1, viewport.width ?? overlay.cssWidth);
    const viewportHeight = Math.max(1, viewport.height ?? overlay.cssHeight);
    const scaleX = overlay.cssWidth / viewportWidth;
    const scaleY = overlay.cssHeight / viewportHeight;
    const annotations = pdfPage.getAnnotations ? await pdfPage.getAnnotations({ intent: "display" }).catch(() => []) : [];
    const links = annotations.flatMap((annotation) => {
      const href = getPdfAnnotationExportLink(annotation);
      const rect = annotation.rect;
      if (!href || !rect || rect.length < 4) {
        return [];
      }
      const first = applyPdfMatrix(viewport.transform ?? [], rect[0], rect[1]);
      const second = applyPdfMatrix(viewport.transform ?? [], rect[2], rect[3]);
      return [{
        bottom: Math.max(first.y, second.y) * scaleY,
        href,
        left: Math.min(first.x, second.x) * scaleX,
        right: Math.max(first.x, second.x) * scaleX,
        top: Math.min(first.y, second.y) * scaleY
      }];
    });
    const fragments = [];
    for (const item of content.items ?? []) {
      const text = (item.str ?? "").replace(/\u00a0/g, " ").replace(/[\t\r\n ]+/g, " ");
      if (!text.trim() || !item.transform || item.transform.length < 6) {
        continue;
      }
      const transform = multiplyPdfMatrices(viewport.transform, item.transform);
      const fontHeight = Math.max(
        4,
        Math.hypot(transform[2] ?? 0, transform[3] ?? 0),
        (item.height ?? 0) * (viewport.scale ?? 1)
      );
      const left = (transform[4] ?? 0) * scaleX;
      const top = ((transform[5] ?? 0) - fontHeight) * scaleY;
      const width = Math.max(1, (item.width ?? text.length * fontHeight * 0.52) * (viewport.scale ?? 1) * scaleX);
      const height = Math.max(1, fontHeight * scaleY);
      const fontName = item.fontName ?? "";
      const fontFamily = content.styles?.[fontName]?.fontFamily ?? fontName;
      const rect = { bottom: top + height, left, right: left + width, top };
      fragments.push({
        ...rect,
        run: {
          bold: /bold|black|semibold|demi/i.test(fontName),
          color: "#000000",
          fontFamily,
          fontSize: fontHeight * Math.min(scaleX, scaleY),
          italic: /italic|oblique/i.test(fontName),
          link: findOverlappingExportLink(rect, links),
          opacity: 1,
          strike: false,
          text,
          underline: false
        }
      });
    }
    return buildEditableLinesFromFragments(fragments, {
      height: overlay.cssHeight,
      left: 0,
      top: 0,
      width: overlay.cssWidth
    });
  } catch (error) {
    console.debug("pdftion could not read the native PDF text model for conversion.", error);
    return [];
  }
}
function getPdfAnnotationExportLink(annotation) {
  const url = (annotation.url ?? annotation.unsafeUrl)?.trim();
  if (url) {
    return url;
  }
  const destination = typeof annotation.dest === "string" ? annotation.dest.trim() : Array.isArray(annotation.dest) && typeof annotation.dest[0] === "string" ? annotation.dest[0].trim() : "";
  return destination ? `#nameddest=${encodeURIComponent(destination)}` : void 0;
}
function multiplyPdfMatrices(left, right) {
  return [
    left[0] * right[0] + left[2] * right[1],
    left[1] * right[0] + left[3] * right[1],
    left[0] * right[2] + left[2] * right[3],
    left[1] * right[2] + left[3] * right[3],
    left[0] * right[4] + left[2] * right[5] + left[4],
    left[1] * right[4] + left[3] * right[5] + left[5]
  ];
}
function applyPdfMatrix(matrix, x, y) {
  return {
    x: matrix[0] * x + matrix[2] * y + matrix[4],
    y: matrix[1] * x + matrix[3] * y + matrix[5]
  };
}
function buildEditableLinesFromFragments(fragments, bounds) {
  const sorted = fragments.sort((a, b) => a.top - b.top || a.left - b.left);
  const lines = [];
  for (const fragment of sorted) {
    const fragmentHeight = Math.max(1, fragment.bottom - fragment.top);
    const existing = lines.map((line) => {
      const overlap = Math.max(0, Math.min(line.bottom, fragment.bottom) - Math.max(line.top, fragment.top));
      const lineHeight = Math.max(1, line.bottom - line.top);
      const overlapRatio = overlap / Math.min(lineHeight, fragmentHeight);
      const baselineDistance = Math.abs(line.bottom - fragment.bottom);
      return { baselineDistance, line, overlapRatio };
    }).filter(({ baselineDistance, overlapRatio }) => overlapRatio >= 0.24 || baselineDistance <= Math.max(4, fragment.run.fontSize * 0.72)).sort((a, b) => b.overlapRatio - a.overlapRatio || a.baselineDistance - b.baselineDistance)[0]?.line;
    if (existing) {
      existing.fragments.push(fragment);
      existing.bottom = Math.max(existing.bottom, fragment.bottom);
      existing.left = Math.min(existing.left, fragment.left);
      existing.right = Math.max(existing.right, fragment.right);
      existing.top = Math.min(existing.top, fragment.top);
    } else {
      lines.push({ bottom: fragment.bottom, fragments: [fragment], left: fragment.left, right: fragment.right, top: fragment.top });
    }
  }
  return lines.sort((a, b) => a.top - b.top || a.left - b.left).map((line) => {
    const fragments2 = line.fragments.sort((a, b) => a.left - b.left);
    let previous = null;
    const runs = fragments2.map((fragment) => {
      const run = { ...fragment.run };
      const gap = previous ? fragment.left - previous.right : 0;
      const previousText = previous?.run.text ?? "";
      const startsLatin = /^[A-Za-z0-9]/u.test(run.text);
      const endsLatin = /[A-Za-z0-9]$/u.test(previousText);
      const visibleWordGap = gap > Math.max(0.18, run.fontSize * 0.035);
      const joinsPunctuation = /^[,.;:!?，。；：！？、)\]}]/u.test(run.text) || /[(\[{]$/u.test(previousText);
      if (previous && visibleWordGap && !joinsPunctuation && (startsLatin || endsLatin || gap > run.fontSize * 0.22)) {
        run.text = ` ${run.text}`;
      }
      run.left = clamp((fragment.left - bounds.left) / Math.max(1, bounds.width), 0, 1);
      run.width = clamp(fragment.right - fragment.left, 0, bounds.width) / Math.max(1, bounds.width);
      previous = fragment;
      return run;
    });
    return {
      height: clamp((line.bottom - line.top) / Math.max(1, bounds.height), 1e-3, 1),
      left: clamp((line.left - bounds.left) / Math.max(1, bounds.width), 0, 1),
      runs,
      top: clamp((line.top - bounds.top) / Math.max(1, bounds.height), 0, 1),
      width: clamp((line.right - line.left) / Math.max(1, bounds.width), 1e-3, 1)
    };
  }).filter((line) => line.runs.some((run) => run.text.length > 0));
}
function selectCompleteEditableLines(renderedLines, pdfLines) {
  const textLength = (lines) => lines.reduce(
    (total, line) => total + line.runs.reduce((lineTotal, run) => lineTotal + run.text.replace(/\s+/g, "").length, 0),
    0
  );
  const hasLinks = (lines) => lines.some((line) => line.runs.some((run) => Boolean(run.link)));
  if (hasLinks(pdfLines) && !hasLinks(renderedLines)) {
    return enrichEditableLineMetadata(pdfLines, renderedLines);
  }
  if (textLength(pdfLines) <= textLength(renderedLines) * 1.04) {
    return enrichEditableLineMetadata(renderedLines, pdfLines);
  }
  return enrichEditableLineMetadata(pdfLines, renderedLines);
}
function enrichEditableLineMetadata(primaryLines, supplementalLines) {
  const supplementalRuns = supplementalLines.flatMap((line) => line.runs.map((run) => ({ line, run })));
  return primaryLines.map((line) => ({
    ...line,
    runs: line.runs.map((run) => {
      const runLeft = run.left ?? line.left;
      const runRight = runLeft + (run.width ?? line.width);
      const runWidth = Math.max(1e-4, runRight - runLeft);
      const runHeight = Math.max(1e-4, line.height);
      const normalizedText = run.text.replace(/\s+/gu, "").trim();
      const matching = supplementalRuns.map((candidate) => {
        const candidateLeft = candidate.run.left ?? candidate.line.left;
        const candidateRight = candidateLeft + (candidate.run.width ?? candidate.line.width);
        const horizontal = Math.max(0, Math.min(runRight, candidateRight) - Math.max(runLeft, candidateLeft));
        const vertical = Math.max(
          0,
          Math.min(line.top + line.height, candidate.line.top + candidate.line.height) - Math.max(line.top, candidate.line.top)
        );
        const candidateWidth = Math.max(1e-4, candidateRight - candidateLeft);
        const candidateHeight = Math.max(1e-4, candidate.line.height);
        const horizontalRatio = Math.max(horizontal / runWidth, horizontal / candidateWidth);
        const verticalRatio = Math.max(vertical / runHeight, vertical / candidateHeight);
        const candidateText = candidate.run.text.replace(/\s+/gu, "").trim();
        const textMatches = normalizedText.length > 0 && normalizedText === candidateText;
        const geometricOverlap = horizontalRatio * verticalRatio;
        const score = geometricOverlap + (textMatches ? 2 : 0) + (candidate.run.link ? 0.05 : 0);
        return { candidate, geometricOverlap, score, textMatches };
      }).sort((a, b) => b.score - a.score)[0];
      const supplemental = matching && matching.score >= 0.12 ? matching.candidate.run : null;
      const supplementalLink = matching && (matching.textMatches || matching.geometricOverlap >= 0.35) ? supplemental?.link : void 0;
      const link = run.link ?? supplementalLink;
      return supplemental ? {
        ...run,
        bold: run.bold || supplemental.bold,
        color: isNearDefaultTextColor(run.color) && !isNearDefaultTextColor(supplemental.color) ? supplemental.color : run.color,
        fontFamily: run.fontFamily || supplemental.fontFamily,
        italic: run.italic || supplemental.italic,
        link,
        opacity: run.opacity ?? supplemental.opacity,
        strike: run.strike || supplemental.strike,
        underline: run.underline || supplemental.underline || Boolean(link)
      } : run;
    })
  }));
}
function collectInkTextExportLines(elements, overlay) {
  const lines = [];
  for (const element of elements) {
    if (element.kind !== "text" || element.pageIndex !== overlay.pageIndex || !element.text.trim()) {
      continue;
    }
    const fontSize = Math.max(4, element.fontSize);
    const sourceLines = element.text.split(/\r?\n/);
    for (const [lineIndex, sourceLine] of sourceLines.entries()) {
      const text = `${element.presentation === "comment" ? "\u{1F4AC} " : ""}${sourceLine}`.trimEnd();
      if (!text.trim()) {
        continue;
      }
      const width = clamp(Math.max(fontSize, text.length * fontSize * 0.58) / Math.max(1, overlay.cssWidth), 0.01, 1 - element.x);
      const height = clamp(fontSize * 1.2 / Math.max(1, overlay.cssHeight), 2e-3, 1);
      const top = clamp(element.y + lineIndex * height, 0, 1 - height);
      lines.push({
        height,
        left: element.x,
        runs: [{
          bold: false,
          color: element.color,
          fontFamily: element.fontFamily ?? "sans-serif",
          fontSize,
          italic: false,
          left: element.x,
          opacity: element.opacity,
          strike: false,
          text,
          underline: false,
          width
        }],
        top,
        width
      });
    }
  }
  return lines;
}
function mergeInkTextExportLines(lines, inkLines) {
  const merged = [...lines];
  for (const inkLine of inkLines) {
    const text = inkLine.runs.map((run) => run.text).join("").trim();
    const duplicate = merged.some((line) => {
      const existingText = line.runs.map((run) => run.text).join("").trim();
      return text === existingText && normalizedRectsOverlap(
        inkLine.left,
        inkLine.top,
        inkLine.width,
        inkLine.height,
        line.left,
        line.top,
        line.width,
        line.height,
        0.012
      );
    });
    if (!duplicate) {
      merged.push(inkLine);
    }
  }
  return merged.sort((a, b) => a.top - b.top || a.left - b.left);
}
function getEditableMarkdownHeadingLevel(line, baseFontSize, text, headingProfile) {
  const explicit = text.match(/^(#{1,6})\s+/u);
  if (explicit) {
    return explicit[1].length;
  }
  if (!text || text.length > 120 || baseFontSize <= 0) {
    return null;
  }
  const effectiveBaseFontSize = headingProfile?.baseFontSize ?? baseFontSize;
  const largestFontSize = Math.max(...line.runs.map((run) => run.fontSize), effectiveBaseFontSize);
  const ratio = largestFontSize / effectiveBaseFontSize;
  const visibleLength = Math.max(1, text.replace(/\s+/gu, "").length);
  const boldLength = line.runs.reduce((total, run) => run.bold ? total + run.text.replace(/\s+/gu, "").length : total, 0);
  const compactBoldHeading = boldLength / visibleLength >= 0.72 && text.length <= 72 && line.width <= 0.82;
  const hasListMarker = Boolean(
    matchEditableTaskMarker(text) || matchEditableUnorderedListMarker(text) || matchEditableOrderedListMarker(text) || /^>\s*/u.test(text)
  );
  if (ratio < 1.12 && !compactBoldHeading) {
    return null;
  }
  if (hasListMarker && ratio < 1.34) {
    return null;
  }
  const absoluteLevel = ratio >= 1.85 ? 1 : ratio >= 1.58 ? 2 : ratio >= 1.36 ? 3 : ratio >= 1.22 ? 4 : ratio >= 1.12 ? 5 : 6;
  if (headingProfile && headingProfile.ratios.length > 0) {
    const nearest = headingProfile.ratios.map((profileRatio, index) => ({ distance: Math.abs(profileRatio - ratio), index, profileRatio })).sort((a, b) => a.distance - b.distance)[0];
    if (nearest && nearest.distance <= Math.max(0.03, nearest.profileRatio * 0.025)) {
      return Math.min(6, nearest.index + 1);
    }
  }
  return absoluteLevel;
}
function buildEditableMarkdownHeadingProfile(pages) {
  const baseFontSize = getEditableMarkdownDocumentBaseFontSize(pages);
  const ratios = pages.flatMap((page) => {
    return page.lines.flatMap((line) => {
      const text = line.runs.map((run) => run.text).join("").trim();
      if (!text || text.length > 120) {
        return [];
      }
      const ratio = Math.max(...line.runs.map((run) => run.fontSize), baseFontSize) / baseFontSize;
      const visibleLength = Math.max(1, text.replace(/\s+/gu, "").length);
      const boldLength = line.runs.reduce((total, run) => run.bold ? total + run.text.replace(/\s+/gu, "").length : total, 0);
      const plausibleShape = line.width <= 0.92 && (ratio >= 1.12 || boldLength / visibleLength >= 0.72 && text.length <= 72);
      const listLike = Boolean(
        matchEditableTaskMarker(text) || matchEditableUnorderedListMarker(text) || matchEditableOrderedListMarker(text) || /^>\s*/u.test(text)
      );
      return plausibleShape && (!listLike || ratio >= 1.34) ? [ratio] : [];
    });
  }).sort((a, b) => b - a);
  const clusters = [];
  for (const ratio of ratios) {
    const cluster = clusters.find((candidate) => Math.abs(candidate.ratio - ratio) <= Math.max(0.025, candidate.ratio * 0.018));
    if (cluster) {
      cluster.ratio = (cluster.ratio * cluster.count + ratio) / (cluster.count + 1);
      cluster.count += 1;
    } else {
      clusters.push({ count: 1, ratio });
    }
  }
  return {
    baseFontSize,
    ratios: clusters.sort((a, b) => b.ratio - a.ratio).slice(0, 6).map((cluster) => cluster.ratio)
  };
}
function getEditableMarkdownDocumentBaseFontSize(pages) {
  const clusters = [];
  for (const run of pages.flatMap((page) => page.lines.flatMap((line) => line.runs))) {
    if (!Number.isFinite(run.fontSize) || run.fontSize <= 0) {
      continue;
    }
    const weight = Math.max(1, run.text.replace(/\s+/gu, "").length);
    const cluster = clusters.find((candidate) => Math.abs(candidate.size - run.fontSize) <= Math.max(0.18, candidate.size * 0.015));
    if (cluster) {
      cluster.size = (cluster.size * cluster.weight + run.fontSize * weight) / (cluster.weight + weight);
      cluster.weight += weight;
    } else {
      clusters.push({ size: run.fontSize, weight });
    }
  }
  return clusters.sort((a, b) => b.weight - a.weight || a.size - b.size)[0]?.size ?? 16;
}
function renderEditableMarkdownRun(run, baseFontSize = 16, suppressFontSize = false, sourceFile) {
  const validLink = normalizeSafeMarkdownExportLink(run.link);
  const leadingSpace = run.text.match(/^\s*/u)?.[0] ?? "";
  const trailingSpace = run.text.match(/\s*$/u)?.[0] ?? "";
  const coreText = run.text.slice(leadingSpace.length, run.text.length - trailingSpace.length);
  if (!coreText) {
    return run.text;
  }
  const codeDelimiter = coreText.includes("``") ? "```" : coreText.includes("`") ? "``" : "`";
  let content = run.code ? `${codeDelimiter}${coreText}${codeDelimiter}` : escapeMarkdownInline(coreText);
  if (!run.code && run.bold && run.italic) {
    content = `***${content}***`;
  } else if (!run.code && run.bold) {
    content = `**${content}**`;
  } else if (!run.code && run.italic) {
    content = `*${content}*`;
  }
  if (!run.code && run.strike) {
    content = `~~${content}~~`;
  }
  if (validLink) {
    const obsidianTarget = getObsidianOpenFileTarget(validLink);
    const pdfTarget = sourceFile && /^#(?:page=\d+|nameddest=)/i.test(validLink) ? `${sourceFile.path}${validLink}` : null;
    if (obsidianTarget || pdfTarget) {
      content = `[[${escapeObsidianWikilink(obsidianTarget ?? pdfTarget ?? "")}|${escapeObsidianWikilink(coreText)}]]`;
    } else {
      content = `[${content}](${escapeMarkdownLinkDestination(validLink)})`;
    }
  }
  return `${leadingSpace}${content}${trailingSpace}`;
}
function normalizeSafeMarkdownExportLink(raw) {
  const value = raw?.trim() ?? "";
  if (!value || /[\u0000-\u001f\u007f]/u.test(value) || /^(?:data|javascript|vbscript):/i.test(value)) {
    return null;
  }
  return value;
}
function normalizeMarkdownExportLinkDestination(raw, sourceFile, targetPath) {
  const value = normalizeSafeMarkdownExportLink(raw);
  if (!value) {
    return null;
  }
  return /^#(?:page=\d+|nameddest=)/i.test(value) ? `${getRelativeMarkdownPath(targetPath, sourceFile.path)}${value}` : value;
}
function getObsidianOpenFileTarget(value) {
  if (!/^obsidian:\/\/open\?/i.test(value)) {
    return null;
  }
  try {
    const query = value.slice(value.indexOf("?") + 1);
    return new URLSearchParams(query).get("file")?.trim().replace(/\\/g, "/") || null;
  } catch {
    return null;
  }
}
function isNearDefaultTextColor(value) {
  const match = value.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) {
    return value.toLowerCase() === "black";
  }
  return Math.max(Number.parseInt(match[1], 16), Number.parseInt(match[2], 16), Number.parseInt(match[3], 16)) <= 72;
}
function escapeMarkdownInline(value) {
  return value.replace(/\\/g, "\\\\").replace(/([`*_[\]{}<>#+!|~])/g, "\\$1");
}
function escapeMarkdownLinkDestination(value) {
  return value.trim().replace(/\\/g, "%5C").replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
function escapeObsidianWikilink(value) {
  return value.replace(/\\/g, "/").replace(/\|/g, "\\|").replace(/\]/g, "\\]");
}
function getNoteDrawWriteApi() {
  const runtime = activeWindow.NoteDraw;
  if (runtime?.v1 && typeof runtime.v1.writeDrawings === "function") {
    return runtime.v1;
  }
  return runtime && typeof runtime.writeDrawings === "function" ? runtime : null;
}
function buildNoteDrawExportData(sourcePath, pages, elements, images = []) {
  const sortedPages = [...pages].sort((a, b) => a.pageIndex - b.pageIndex);
  const logicalWidth = 1e3;
  const logicalGap = logicalWidth * VISUAL_EXPORT_PAGE_GAP_RATIO;
  const layouts = /* @__PURE__ */ new Map();
  let top = 0;
  for (const page of sortedPages) {
    const height = logicalWidth * page.height / Math.max(1, page.width);
    layouts.set(page.pageIndex, { height, top });
    top += height + logicalGap;
  }
  const totalHeight = Math.max(1, top - (sortedPages.length > 0 ? logicalGap : 0));
  const exported = [];
  const orderedItems = [
    ...elements.filter((element) => element.kind === "stroke" && element.points.length > 0).map((element) => ({ element, kind: "stroke", pageIndex: element.pageIndex, zIndex: element.zIndex ?? 0 })),
    ...images.map((image) => ({ image, kind: "image", pageIndex: image.pageIndex, zIndex: image.zIndex ?? 0 }))
  ].sort((a, b) => a.pageIndex - b.pageIndex || a.zIndex - b.zIndex);
  for (const item of orderedItems) {
    const layout = layouts.get(item.pageIndex);
    if (!layout) {
      continue;
    }
    const mapPoint = (point, timestamp) => ({
      t: timestamp,
      x: clamp(point.x, 0, 1),
      y: clamp((layout.top + point.y * layout.height) / totalHeight, 0, 1)
    });
    if (item.kind === "stroke") {
      const element = item.element;
      const createdAt = element.createdAt ?? Date.now();
      exported.push({
        brush: element.tool === "highlight" ? "watercolor" : "pen",
        color: element.color,
        count: 1,
        opacity: element.opacity,
        points: element.points.map((point, index) => mapPoint(point, createdAt + index)),
        width: clamp(element.width, 0.5, 80)
      });
      continue;
    }
    const image = item.image;
    exported.push({
      assetMime: image.assetMime,
      assetName: image.assetName,
      assetPath: image.assetPath,
      assetSize: image.assetSize,
      brush: "pen",
      color: "#1971c2",
      count: 1,
      embedType: "image",
      exportImageDataUrl: image.dataUrl,
      kind: "embed",
      opacity: image.opacity,
      points: [{
        t: Date.now(),
        x: clamp(image.x, 0, 1),
        y: clamp((layout.top + image.y * layout.height) / totalHeight, 0, 1)
      }],
      previewHeight: Math.max(40, image.height * layout.height),
      previewWidth: Math.max(80, image.width * logicalWidth),
      text: image.assetName,
      width: 3
    });
  }
  return {
    sourcePath,
    strokes: exported,
    version: 3,
    visible: true,
    webEdits: []
  };
}
function collectNoteDrawExportImages(pages, elements) {
  const imagesById = /* @__PURE__ */ new Map();
  for (const page of pages) {
    const usesFullPageImage = page.lines.length === 0 && page.sourceVisualRatio >= 0.045;
    for (const image of page.images) {
      if (usesFullPageImage && image.id.startsWith("pdf-raster-page-")) {
        continue;
      }
      imagesById.set(image.id, {
        ...image,
        assetMime: dataUrlMimeType(image.dataUrl),
        assetName: `pdftion-image-${image.id}.${dataUrlImageExtension(image.dataUrl)}`,
        placement: image.id.startsWith("pdftion-stroke-") ? "ink-preview" : image.id.startsWith("pdftion-cover-") ? "floating" : image.id.startsWith("native-page-") ? "flow" : void 0,
        pageIndex: page.pageIndex
      });
    }
  }
  for (const image of elements.filter((element) => element.kind === "image").map((image2) => ({
    assetMime: dataUrlMimeType(image2.dataUrl),
    assetName: `pdftion-image-${image2.id}.${dataUrlImageExtension(image2.dataUrl)}`,
    dataUrl: image2.dataUrl,
    height: image2.height,
    id: image2.id,
    opacity: image2.opacity,
    pageIndex: image2.pageIndex,
    placement: "floating",
    width: image2.width,
    x: image2.x,
    y: image2.y,
    zIndex: image2.zIndex
  }))) {
    imagesById.set(image.id, image);
  }
  const images = Array.from(imagesById.values());
  for (const page of pages) {
    const usesFullPageImage = page.lines.length === 0 && page.sourceVisualRatio >= 0.045;
    if (!usesFullPageImage) {
      continue;
    }
    images.push({
      assetMime: "image/png",
      assetName: `pdf-page-${page.pageIndex + 1}.png`,
      dataUrl: uint8ArrayToDataUrl(page.bytes, "image/png"),
      height: 1,
      id: `native-page-${page.pageIndex + 1}`,
      opacity: 1,
      pageIndex: page.pageIndex,
      placement: "flow",
      width: 1,
      x: 0,
      y: 0,
      zIndex: 0
    });
  }
  return images;
}
function isUsefulMarkdownExportImage(image) {
  return !image.id.startsWith("html-visual-page-") && image.placement !== "ink-preview" && (image.id.startsWith("pdf-inline-") || (image.id.startsWith("pdf-raster-page-") ? estimatedDataUrlBytes(image.dataUrl) >= 2500 || image.width * image.height >= 4e-3 : true));
}
function isUsefulNativeExportImage(image) {
  if (image.id.startsWith("pdf-inline-")) {
    return false;
  }
  if (!image.id.startsWith("pdf-raster-page-")) {
    return true;
  }
  const estimatedBytes = estimatedDataUrlBytes(image.dataUrl);
  return estimatedBytes >= 16e3 || image.width * image.height >= 0.12;
}
function isUsefulHtmlExportImage(image) {
  if (image.id.startsWith("pdf-inline-")) {
    return false;
  }
  if (!image.id.startsWith("pdf-raster-page-")) {
    return true;
  }
  const estimatedBytes = estimatedDataUrlBytes(image.dataUrl);
  return estimatedBytes >= 2500 || image.width * image.height >= 4e-3;
}
function estimatedDataUrlBytes(dataUrl) {
  const separator = dataUrl.indexOf(",");
  return separator >= 0 ? Math.floor((dataUrl.length - separator - 1) * 0.75) : 0;
}
function sampleEditableTextColors(canvas, lines) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return;
  }
  let pixels;
  try {
    pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  } catch {
    return;
  }
  const readColor = (line, run) => {
    const left = Math.max(0, Math.floor((run.left ?? line.left) * canvas.width));
    const right = Math.min(canvas.width, Math.ceil(((run.left ?? line.left) + (run.width ?? line.width)) * canvas.width));
    const top = Math.max(0, Math.floor(line.top * canvas.height));
    const bottom = Math.min(canvas.height, Math.ceil((line.top + line.height) * canvas.height));
    if (right - left < 2 || bottom - top < 2) {
      return null;
    }
    const stride = Math.max(1, Math.floor(Math.sqrt((right - left) * (bottom - top) / 12e3)));
    const buckets = /* @__PURE__ */ new Map();
    for (let y = top; y < bottom; y += stride) {
      for (let x = left; x < right; x += stride) {
        const offset = (y * canvas.width + x) * 4;
        if (pixels.data[offset + 3] < 96) {
          continue;
        }
        const red = pixels.data[offset];
        const green = pixels.data[offset + 1];
        const blue = pixels.data[offset + 2];
        const key = red >> 4 << 8 | green >> 4 << 4 | blue >> 4;
        const bucket = buckets.get(key) ?? { blue: 0, count: 0, green: 0, red: 0 };
        bucket.count += 1;
        bucket.red += red;
        bucket.green += green;
        bucket.blue += blue;
        buckets.set(key, bucket);
      }
    }
    const sorted = Array.from(buckets.values()).sort((a, b) => b.count - a.count);
    const background = sorted[0];
    if (!background || sorted.length < 2) {
      return null;
    }
    const backgroundColor = {
      b: background.blue / background.count,
      g: background.green / background.count,
      r: background.red / background.count
    };
    const candidate = sorted.slice(1).map((bucket) => {
      const color = {
        b: bucket.blue / bucket.count,
        g: bucket.green / bucket.count,
        r: bucket.red / bucket.count
      };
      const distance = Math.hypot(
        color.r - backgroundColor.r,
        color.g - backgroundColor.g,
        color.b - backgroundColor.b
      );
      return { bucket, color, score: distance * Math.sqrt(bucket.count) };
    }).filter((entry) => entry.bucket.count >= 2 && entry.score >= 60).sort((a, b) => b.score - a.score)[0];
    if (!candidate) {
      return null;
    }
    return rgbToHex(candidate.color.r, candidate.color.g, candidate.color.b);
  };
  for (const line of lines) {
    for (const run of line.runs) {
      if (!isNearDefaultTextColor(run.color)) {
        continue;
      }
      const sampled = readColor(line, run);
      if (sampled) {
        run.color = sampled;
      }
    }
  }
}
function attachLinksToVisualConversionImages(images, links, overlay) {
  const overlayRect = overlay.pageEl.getBoundingClientRect();
  const normalizedLinks = links.map((link) => ({
    bottom: clamp((link.bottom - overlayRect.top) / Math.max(1, overlay.cssHeight), 0, 1),
    href: link.href,
    left: clamp((link.left - overlayRect.left) / Math.max(1, overlay.cssWidth), 0, 1),
    right: clamp((link.right - overlayRect.left) / Math.max(1, overlay.cssWidth), 0, 1),
    top: clamp((link.top - overlayRect.top) / Math.max(1, overlay.cssHeight), 0, 1)
  }));
  return images.map((image) => {
    const match = normalizedLinks.map((link) => {
      const overlapWidth = Math.max(0, Math.min(image.x + image.width, link.right) - Math.max(image.x, link.left));
      const overlapHeight = Math.max(0, Math.min(image.y + image.height, link.bottom) - Math.max(image.y, link.top));
      return { href: link.href, ratio: overlapWidth * overlapHeight / Math.max(1e-4, image.width * image.height) };
    }).filter((candidate) => candidate.ratio >= 0.08).sort((a, b) => b.ratio - a.ratio)[0];
    return match ? { ...image, link: match.href } : image;
  });
}
async function buildInkVisualExportImages(elements, overlay, outputWidth, outputHeight) {
  const images = [];
  for (const element of elements) {
    if (element.kind !== "stroke" && element.kind !== "cover") {
      continue;
    }
    const bounds = normalizedElementBounds(element);
    if (!bounds) {
      continue;
    }
    const strokePadX = element.kind === "stroke" ? Math.max(3, strokeDisplayWidth(element, overlay.cssWidth) * 2) / Math.max(1, overlay.cssWidth) : 2 / Math.max(1, overlay.cssWidth);
    const strokePadY = element.kind === "stroke" ? Math.max(3, strokeDisplayWidth(element, overlay.cssWidth) * 2) / Math.max(1, overlay.cssHeight) : 2 / Math.max(1, overlay.cssHeight);
    const left = clamp(bounds.minX - strokePadX, 0, 1);
    const top = clamp(bounds.minY - strokePadY, 0, 1);
    const right = clamp(bounds.maxX + strokePadX, 0, 1);
    const bottom = clamp(bounds.maxY + strokePadY, 0, 1);
    const width = Math.max(1e-3, right - left);
    const height = Math.max(1e-3, bottom - top);
    const canvas = activeDocument.createElement("canvas");
    canvas.width = Math.max(1, Math.ceil(width * outputWidth));
    canvas.height = Math.max(1, Math.ceil(height * outputHeight));
    const context = canvas.getContext("2d");
    if (!context) {
      continue;
    }
    context.setTransform(
      outputWidth / Math.max(1, overlay.cssWidth),
      0,
      0,
      outputHeight / Math.max(1, overlay.cssHeight),
      -left * outputWidth,
      -top * outputHeight
    );
    if (element.kind === "stroke") {
      drawStroke(context, element, overlay.cssWidth, overlay.cssHeight, false);
    } else {
      drawCoverElement(context, element, overlay.cssWidth, overlay.cssHeight, false);
    }
    images.push({
      dataUrl: canvas.toDataURL("image/png"),
      height,
      id: `pdftion-${element.kind}-${element.id}`,
      opacity: 1,
      width,
      x: left,
      y: top,
      zIndex: element.zIndex
    });
  }
  return images;
}
async function extractHtmlDerivedVisualLayers(pageCanvas, lines, pageIndex) {
  if (pageCanvas.width <= 1 || pageCanvas.height <= 1) {
    return [];
  }
  const layer = activeDocument.createElement("canvas");
  layer.width = pageCanvas.width;
  layer.height = pageCanvas.height;
  const ctx = layer.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    return [];
  }
  const bodyFontSize = getEditableMarkdownDocumentBaseFontSize([{ lines }]);
  ctx.drawImage(pageCanvas, 0, 0);
  for (const line of lines) {
    const fallbackLeft = line.left;
    const fallbackWidth = line.width;
    for (const run of line.runs) {
      const left = run.left ?? fallbackLeft;
      const width = run.width ?? fallbackWidth;
      const x = left * layer.width;
      const y = line.top * layer.height;
      const w = width * layer.width;
      const h = line.height * layer.height;
      const padX = Math.max(2, layer.width * 15e-4);
      const padY = Math.max(2, h * 0.35);
      ctx.clearRect(
        Math.max(0, x - padX),
        Math.max(0, y - padY),
        Math.min(layer.width, w + padX * 2),
        Math.min(layer.height, h + padY * 2)
      );
    }
  }
  let pixels;
  try {
    pixels = ctx.getImageData(0, 0, layer.width, layer.height);
  } catch {
    return [];
  }
  const cellSize = Math.max(4, Math.round(Math.max(layer.width, layer.height) / 180));
  const columns = Math.ceil(layer.width / cellSize);
  const rows = Math.ceil(layer.height / cellSize);
  const cellCounts = new Uint32Array(columns * rows);
  for (let y = 0; y < layer.height; y += 1) {
    if (y > 0 && y % 160 === 0) {
      await sleepMs(0);
    }
    for (let x = 0; x < layer.width; x += 1) {
      const offset = (y * layer.width + x) * 4;
      const alpha = pixels.data[offset + 3];
      const nearWhite = pixels.data[offset] >= 247 && pixels.data[offset + 1] >= 247 && pixels.data[offset + 2] >= 247;
      if (alpha <= 12 || nearWhite) {
        pixels.data[offset + 3] = 0;
        continue;
      }
      const cellX = Math.floor(x / cellSize);
      const cellY = Math.floor(y / cellSize);
      cellCounts[cellY * columns + cellX] += 1;
    }
  }
  ctx.putImageData(pixels, 0, 0);
  const occupied = new Uint8Array(columns * rows);
  for (let cellY = 0; cellY < rows; cellY += 1) {
    for (let cellX = 0; cellX < columns; cellX += 1) {
      const cellWidth = Math.min(cellSize, layer.width - cellX * cellSize);
      const cellHeight = Math.min(cellSize, layer.height - cellY * cellSize);
      const threshold = Math.max(2, Math.round(cellWidth * cellHeight * 0.018));
      const index = cellY * columns + cellX;
      occupied[index] = cellCounts[index] >= threshold ? 1 : 0;
    }
  }
  const visited = new Uint8Array(columns * rows);
  const componentBoxes = [];
  for (let start = 0; start < occupied.length; start += 1) {
    if (!occupied[start] || visited[start]) {
      continue;
    }
    const queue = [start];
    visited[start] = 1;
    let minCellX = start % columns;
    let maxCellX = minCellX;
    let minCellY = Math.floor(start / columns);
    let maxCellY = minCellY;
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const current = queue[cursor];
      const currentX = current % columns;
      const currentY = Math.floor(current / columns);
      minCellX = Math.min(minCellX, currentX);
      maxCellX = Math.max(maxCellX, currentX);
      minCellY = Math.min(minCellY, currentY);
      maxCellY = Math.max(maxCellY, currentY);
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -2; dx <= 2; dx += 1) {
          const nextX = currentX + dx;
          const nextY = currentY + dy;
          if (nextX < 0 || nextY < 0 || nextX >= columns || nextY >= rows) {
            continue;
          }
          const next = nextY * columns + nextX;
          if (occupied[next] && !visited[next]) {
            visited[next] = 1;
            queue.push(next);
          }
        }
      }
    }
    componentBoxes.push({ maxCellX, maxCellY, minCellX, minCellY });
  }
  const visuals = [];
  for (const box of componentBoxes) {
    const scanLeft = box.minCellX * cellSize;
    const scanTop = box.minCellY * cellSize;
    const scanRight = Math.min(layer.width - 1, (box.maxCellX + 1) * cellSize - 1);
    const scanBottom = Math.min(layer.height - 1, (box.maxCellY + 1) * cellSize - 1);
    let minX = scanRight;
    let minY = scanBottom;
    let maxX = -1;
    let maxY = -1;
    let visible = 0;
    const colors = /* @__PURE__ */ new Set();
    for (let y = scanTop; y <= scanBottom; y += 1) {
      if (y > scanTop && (y - scanTop) % 160 === 0) {
        await sleepMs(0);
      }
      for (let x = scanLeft; x <= scanRight; x += 1) {
        const offset = (y * layer.width + x) * 4;
        if (pixels.data[offset + 3] <= 12) {
          continue;
        }
        visible += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        if (colors.size < 64) {
          colors.add(pixels.data[offset] >> 4 << 8 | pixels.data[offset + 1] >> 4 << 4 | pixels.data[offset + 2] >> 4);
        }
      }
    }
    if (maxX < minX || maxY < minY) {
      continue;
    }
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const normalizedWidth = width / layer.width;
    const normalizedHeight = height / layer.height;
    const normalizedArea = normalizedWidth * normalizedHeight;
    const density = visible / Math.max(1, width * height);
    const normalizedLeft = minX / layer.width;
    const normalizedTop = minY / layer.height;
    const inlineLine = lines.map((line) => ({
      gap: line.left - (normalizedLeft + normalizedWidth),
      line,
      verticalDistance: Math.abs(
        normalizedTop + normalizedHeight / 2 - (line.top + line.height / 2)
      )
    })).filter(({ gap, line, verticalDistance }) => Math.max(...line.runs.map((run) => run.fontSize), bodyFontSize) <= bodyFontSize * 1.1 && gap >= -0.01 && gap <= 0.09 && verticalDistance <= Math.max(0.012, line.height * 1.15)).sort((a, b) => a.verticalDistance - b.verticalDistance || a.gap - b.gap)[0]?.line;
    const likelyInlineGlyph = Boolean(inlineLine) && visible >= 3 && density >= 5e-3 && normalizedWidth >= 1e-3 && normalizedWidth <= 0.09 && normalizedHeight >= 2e-3 && normalizedHeight <= 0.05 && normalizedArea <= 5e-3;
    const likelyCheckboxGlyph = Boolean(inlineLine) && likelyInlineGlyph && normalizedWidth >= Math.max(0.018, (inlineLine?.height ?? 0) * 1.8) && normalizedHeight >= (inlineLine?.height ?? 0) * 0.85;
    const likelyRasterImage = normalizedWidth >= 0.08 && normalizedHeight >= 0.04 && normalizedArea >= 4e-3 && colors.size >= 8 && density >= 0.055;
    if (!likelyRasterImage && !likelyInlineGlyph) {
      continue;
    }
    const padding = 2;
    const cropLeft = Math.max(0, minX - padding);
    const cropTop = Math.max(0, minY - padding);
    const cropRight = Math.min(layer.width - 1, maxX + padding);
    const cropBottom = Math.min(layer.height - 1, maxY + padding);
    const cropWidth = cropRight - cropLeft + 1;
    const cropHeight = cropBottom - cropTop + 1;
    const cropped = activeDocument.createElement("canvas");
    cropped.width = cropWidth;
    cropped.height = cropHeight;
    const croppedCtx = cropped.getContext("2d");
    if (!croppedCtx) {
      continue;
    }
    croppedCtx.drawImage(layer, cropLeft, cropTop, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    visuals.push({
      dataUrl: cropped.toDataURL("image/png"),
      height: cropHeight / layer.height,
      id: `${likelyCheckboxGlyph ? `pdf-inline-checkbox-${density >= 0.45 ? "checked" : "unchecked"}` : likelyInlineGlyph ? "pdf-inline-glyph" : "pdf-raster"}-page-${pageIndex + 1}-${visuals.length + 1}`,
      opacity: 1,
      width: cropWidth / layer.width,
      x: cropLeft / layer.width,
      y: cropTop / layer.height,
      zIndex: -1
    });
  }
  return visuals;
}
function sanitizeNoteDrawAssetName(value) {
  const normalized = value.replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_").replace(/\s+/g, "-").replace(/_+/g, "_").replace(/-+/g, "-").replace(/^[-_.]+|[-_.]+$/g, "");
  return (normalized || "pdftion-image").slice(-120);
}
function measureCanvasVisualRatio(canvas) {
  const sample = activeDocument.createElement("canvas");
  sample.width = 48;
  sample.height = 48;
  const ctx = sample.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    return 0;
  }
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, sample.width, sample.height);
  ctx.drawImage(canvas, 0, 0, sample.width, sample.height);
  const pixels = ctx.getImageData(0, 0, sample.width, sample.height).data;
  let visual = 0;
  for (let offset = 0; offset < pixels.length; offset += 4) {
    if (pixels[offset + 3] > 16 && (pixels[offset] < 245 || pixels[offset + 1] < 245 || pixels[offset + 2] < 245)) {
      visual += 1;
    }
  }
  return visual / Math.max(1, pixels.length / 4);
}
async function buildCombinedPagePng(pages) {
  const sortedPages = [...pages].sort((a, b) => a.pageIndex - b.pageIndex);
  const margin = 24;
  const gap = 24;
  const rawWidth = Math.max(1, ...sortedPages.map((page) => page.width)) + margin * 2;
  const rawHeight = sortedPages.reduce((sum, page) => sum + page.height, margin * 2 + gap * Math.max(0, sortedPages.length - 1));
  const maxPixels = 16e6;
  const scale = Math.min(1, 3e4 / Math.max(rawWidth, rawHeight), Math.sqrt(maxPixels / Math.max(1, rawWidth * rawHeight)));
  const canvas = activeDocument.createElement("canvas");
  canvas.width = Math.max(1, Math.round(rawWidth * scale));
  canvas.height = Math.max(1, Math.round(rawHeight * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not create PNG export canvas.");
  }
  ctx.fillStyle = "#dfe3e8";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let y = margin;
  for (const page of sortedPages) {
    const image = await loadDataUrlImage(uint8ArrayToDataUrl(page.bytes, "image/png"));
    const x = margin + (rawWidth - margin * 2 - page.width) / 2;
    ctx.drawImage(image, Math.round(x * scale), Math.round(y * scale), Math.round(page.width * scale), Math.round(page.height * scale));
    y += page.height + gap;
  }
  return dataUrlToBytes(canvas.toDataURL("image/png"));
}
function getNativeExportBlockPrefix(block) {
  if (block.kind === "unordered-list") return `${block.marker ?? "\u2022"} `;
  if (block.kind === "ordered-list") return `${block.ordinal ?? 1}. `;
  if (block.kind === "task") return `${block.marker ?? (block.checked ? "\u2611" : "\u2610")} `;
  if (block.kind === "callout-title") return `${getCommonCalloutIcon(block.runs.map((run) => run.text).join(""))} `;
  return "";
}
function containsEmojiPresentation(value) {
  return /[\p{Extended_Pictographic}\u2600-\u27bf]/u.test(value);
}
function containsCjkPresentation(value) {
  return /[\u2e80-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/u.test(value);
}
function exportFontFaceForRun(run, code = false) {
  if (code || run.code) {
    return "Consolas";
  }
  if (containsEmojiPresentation(run.text)) {
    return "Segoe UI Emoji";
  }
  return exportFontFace(run.fontFamily, run.text);
}
function getPortableExportFontSizePt(run, block, baseFontSize) {
  if (block.kind === "heading") {
    return [24, 20, 17, 15, 13, 12][clamp((block.headingLevel ?? 1) - 1, 0, 5)];
  }
  const baseSize = block.kind === "code" ? 10 : block.kind === "callout-title" ? 12 : block.kind === "table" ? 10 : 11;
  const ratio = clamp(run.fontSize / Math.max(1, baseFontSize), 0.85, 1.35);
  return Math.round(clamp(baseSize * ratio, 8.5, 18) * 2) / 2;
}
function getPortableExportCssFontStack(run, code = false) {
  const primary = exportFontFaceForRun(run, code);
  if (primary === "Consolas") {
    return 'Consolas,"Liberation Mono","Noto Sans Mono",monospace';
  }
  if (primary === "Segoe UI Emoji") {
    return '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
  }
  if (containsCjkPresentation(run.text)) {
    return primary === "SimSun" ? 'SimSun,"Noto Serif CJK SC","Source Han Serif SC",serif' : '"Microsoft YaHei","Noto Sans CJK SC","Source Han Sans SC",Arial,sans-serif';
  }
  return primary === "Times New Roman" ? '"Times New Roman","Liberation Serif",serif' : 'Arial,"Liberation Sans",sans-serif';
}
function isHtmlAnnotationExportImage(image) {
  return /^pdftion-(?:cover|stroke)-/.test(image.id);
}
function getHtmlVisualAlignment(image) {
  const center = image.x + image.width / 2;
  if (center < 0.38) return "left";
  if (center > 0.62) return "right";
  return "center";
}
function renderNativeExportHtmlBlock(block, document2) {
  if (block.kind === "image" && block.image) {
    const image = block.image;
    const annotation = isHtmlAnnotationExportImage(image);
    const visualKind = annotation ? "annotation" : image.id.startsWith("pdf-raster-page-") ? "native" : "embedded";
    const width = clamp(image.width * 100, visualKind === "native" ? 24 : 10, 100);
    const align = getHtmlVisualAlignment(image);
    const imageMarkup = `<img class="block-image" src="${htmlAttributeEscape(image.dataUrl)}" alt="${htmlAttributeEscape(image.assetName)}">`;
    const linkedImage = image.link ? `<a class="block-image-link" href="${htmlAttributeEscape(image.link)}">${imageMarkup}</a>` : imageMarkup;
    const visualStyle = annotation ? `--visual-left:${clamp(image.x * 100, 0, 100).toFixed(3)}%;--visual-top:${clamp(image.y * 100, 0, 100).toFixed(3)}%;--visual-width:${clamp(image.width * 100, 0.05, 100).toFixed(3)}%;--visual-height:${clamp(image.height * 100, 0.05, 100).toFixed(3)}%;--visual-opacity:${clamp(image.opacity, 0, 1).toFixed(3)}` : `--visual-width:${width.toFixed(2)}%;--visual-opacity:${clamp(image.opacity, 0, 1).toFixed(3)}`;
    return `<figure class="block block-visual block-visual-${visualKind} align-${align}" style="${visualStyle}">${linkedImage}</figure>`;
  }
  if (block.kind === "separator") {
    return `<hr class="block block-separator">`;
  }
  if (block.kind === "table" && block.table) {
    const rows = block.table.rows.map((row) => `<tr>${row.map((cell) => `<td>${renderNativeHtmlRuns(cell.runs, block, document2)}</td>`).join("")}</tr>`).join("");
    return `<div class="block-table-wrap"><table class="block block-table"><tbody>${rows}</tbody></table></div>`;
  }
  const prefix = getNativeExportBlockPrefix(block);
  const content = `${prefix ? `<span>${htmlEscape(prefix)}</span>` : ""}${renderNativeHtmlRuns(block.runs, block, document2)}`;
  const style = block.listLevel ? ` style="--list-indent:${(1.5 + block.listLevel * 1.25).toFixed(2)}rem"` : "";
  if (block.kind === "heading") {
    const level = clamp(block.headingLevel ?? 1, 1, 6);
    return `<h${level} class="block">${content}</h${level}>`;
  }
  if (block.kind === "code") {
    return `<pre class="block block-code"><code>${renderNativeHtmlRuns(block.runs, block, document2)}</code></pre>`;
  }
  if (block.kind === "quote") {
    return `<blockquote class="block block-quote"${style}>${content}</blockquote>`;
  }
  if (block.kind === "callout-title" || block.kind === "callout-body") {
    return `<aside class="block block-callout"${style}>${content}</aside>`;
  }
  if (block.kind === "unordered-list") {
    return `<ul class="block block-list"${style}><li>${renderNativeHtmlRuns(block.runs, block, document2)}</li></ul>`;
  }
  if (block.kind === "ordered-list") {
    return `<ol class="block block-list" start="${block.ordinal ?? 1}"${style}><li>${renderNativeHtmlRuns(block.runs, block, document2)}</li></ol>`;
  }
  if (block.kind === "task") {
    return `<p class="block block-list" role="checkbox" aria-checked="${block.checked ? "true" : "false"}"${style}>${content}</p>`;
  }
  return `<p class="block"${style}>${content}</p>`;
}
function renderNativeHtmlRuns(runs, block, document2) {
  const baseFontSize = Math.max(1, document2.baseFontSize);
  return runs.map((run) => {
    const decorations = [run.underline ? "underline" : "", run.strike ? "line-through" : ""].filter(Boolean).join(" ");
    const style = [
      `color:#${exportHexColor(run.color)}`,
      `font-family:${htmlAttributeEscape(getPortableExportCssFontStack(run, block.kind === "code"))}`,
      `font-size:${(getPortableExportFontSizePt(run, block, baseFontSize) * 4 / 3).toFixed(1)}px`,
      `font-style:${run.italic ? "italic" : "normal"}`,
      `font-weight:${run.bold || block.kind === "callout-title" ? "700" : "400"}`,
      `opacity:${clamp(run.opacity ?? 1, 0, 1).toFixed(3)}`,
      decorations ? `text-decoration:${decorations}` : ""
    ].filter(Boolean).join(";");
    const span = `<span style="${style}">${htmlEscape(run.text)}</span>`;
    return run.link ? `<a href="${htmlAttributeEscape(run.link)}">${span}</a>` : span;
  }).join("");
}
async function buildPptxFromPageImages(pages, title) {
  const module2 = await import("pptxgenjs");
  const PptxGenJS = module2.default;
  const pptx = new PptxGenJS();
  const first = pages[0];
  if (!first) {
    throw new Error("No pages are available for PPTX export.");
  }
  const slideWidth = 10;
  const slideHeight = clamp(slideWidth * first.height / Math.max(1, first.width), 5.625, 14.2);
  pptx.defineLayout({ name: "PDFTION_EXPORT", width: slideWidth, height: slideHeight });
  pptx.layout = "PDFTION_EXPORT";
  pptx.author = "Murat";
  pptx.subject = title;
  pptx.theme = { bodyFontFace: "Arial", headFontFace: "Arial" };
  pptx.title = title;
  const document2 = buildNativeExportDocumentFromVisualPages(pages);
  for (const page of document2.pages) {
    const slide = pptx.addSlide();
    slide.background = { color: "FFFFFF" };
    const pageRatio = page.width / Math.max(1, page.height);
    const slideRatio = slideWidth / slideHeight;
    const width = pageRatio >= slideRatio ? slideWidth : slideHeight * pageRatio;
    const height = pageRatio >= slideRatio ? slideWidth / pageRatio : slideHeight;
    const imageX = (slideWidth - width) / 2;
    const imageY = (slideHeight - height) / 2;
    const imageBlocks = page.blocks.filter((block) => block.kind === "image" && block.image);
    const foregroundImages = imageBlocks.filter((block) => block.image?.id.startsWith("pdftion-") === true);
    const backgroundImages = imageBlocks.filter((block) => !foregroundImages.includes(block));
    const addImage = (block) => {
      const image = block.image;
      if (!image) return;
      slide.addImage({
        data: image.dataUrl,
        h: Math.max(0.01, image.height * height),
        hyperlink: image.link ? { url: image.link } : void 0,
        transparency: Math.round((1 - clamp(image.opacity, 0, 1)) * 100),
        w: Math.max(0.01, image.width * width),
        x: imageX + image.x * width,
        y: imageY + image.y * height
      });
    };
    backgroundImages.forEach(addImage);
    for (const block of page.blocks) {
      if (block.kind === "image") {
        continue;
      }
      const x = imageX + block.left * width;
      const y = imageY + block.top * height;
      const blockWidth = Math.max(0.02, Math.min(imageX + width - x, block.width * width + 0.18));
      const portableSizes = block.runs.map((run) => getPortableExportFontSizePt(run, block, document2.baseFontSize));
      const targetMaxSize = Math.max(9, ...portableSizes);
      const blockHeight = Math.max(targetMaxSize * 1.35 / 72, (block.height ?? 0.02) * height * 1.35);
      if (block.kind === "separator") {
        slide.addShape(pptx.ShapeType.line, {
          h: 0,
          line: { color: "8A8A8A", width: 1 },
          w: blockWidth,
          x,
          y
        });
        continue;
      }
      if (block.kind === "table" && block.table) {
        const rows = block.table.rows.map((row, rowIndex) => row.map((cell) => ({
          options: {
            bold: rowIndex === 0,
            color: exportHexColor(cell.runs[0]?.color ?? "#000000"),
            fontFace: cell.runs[0] ? exportFontFaceForRun(cell.runs[0]) : "Arial",
            fontSize: cell.runs[0] ? getPortableExportFontSizePt(cell.runs[0], block, document2.baseFontSize) : 10,
            margin: 0.04
          },
          text: cell.runs.map((run) => run.text).join("")
        })));
        slide.addTable(rows, {
          border: { color: "B7BCC4", pt: 0.75 },
          fill: { color: "FFFFFF" },
          h: Math.max(0.25, (block.height ?? 0.06) * height),
          margin: 0.04,
          rowH: Math.max(0.18, (block.height ?? 0.06) * height / Math.max(1, rows.length)),
          w: blockWidth,
          x,
          y
        });
        continue;
      }
      const prefix = getNativeExportBlockPrefix(block);
      const textRuns = [
        ...prefix ? [{
          options: {
            bold: block.kind === "callout-title",
            breakLine: false,
            color: "333333",
            fontFace: "Segoe UI Symbol",
            fontSize: targetMaxSize
          },
          text: prefix
        }] : [],
        ...block.runs.map((run) => ({
          text: run.text,
          options: {
            bold: run.bold || block.kind === "callout-title",
            breakLine: false,
            color: exportHexColor(run.color),
            fontFace: exportFontFaceForRun(run, block.kind === "code"),
            fontSize: getPortableExportFontSizePt(run, block, document2.baseFontSize),
            hyperlink: run.link ? { url: run.link } : void 0,
            italic: run.italic,
            strike: run.strike ? "sngStrike" : void 0,
            transparency: Math.round((1 - clamp(run.opacity ?? 1, 0, 1)) * 100),
            underline: run.underline ? { style: "sng" } : void 0
          }
        }))
      ];
      if (textRuns.length === 0) {
        continue;
      }
      slide.addText(textRuns, {
        breakLine: false,
        fill: block.kind === "code" ? { color: "F3F4F6" } : block.kind === "callout-title" || block.kind === "callout-body" ? { color: "EEF5FF", transparency: 10 } : void 0,
        fit: "none",
        h: blockHeight,
        isTextBox: true,
        margin: 0,
        paraSpaceAfter: 0,
        paraSpaceBefore: 0,
        valign: "top",
        w: blockWidth,
        wrap: false,
        x,
        y
      });
    }
    foregroundImages.forEach(addImage);
  }
  const output = await pptx.write({ outputType: "arraybuffer" });
  let bytes;
  if (output instanceof ArrayBuffer) {
    bytes = new Uint8Array(output);
  } else if (output instanceof Uint8Array) {
    bytes = output;
  } else if (output instanceof Blob) {
    bytes = new Uint8Array(await output.arrayBuffer());
  } else {
    throw new Error("PPTX generation returned an unsupported output type.");
  }
  return injectOfficePreviewPages(bytes, pages, slideWidth * 72, slideHeight * 72);
}
function buildSelfContainedVisualHtml(file, pages) {
  const document2 = buildHtmlExportDocumentFromVisualPages(pages);
  const pageMarkup = document2.pages.filter((page) => page.blocks.length > 0).map((page) => {
    const contentBlocks = page.blocks.filter((block) => !block.image || !isHtmlAnnotationExportImage(block.image));
    const annotationBlocks = page.blocks.filter((block) => block.image && isHtmlAnnotationExportImage(block.image));
    const content = contentBlocks.map((block) => renderNativeExportHtmlBlock(block, document2)).join("");
    const annotations = annotationBlocks.length > 0 ? `<aside class="page-annotations" aria-label="Page ${page.pageIndex + 1} annotations">${annotationBlocks.map((block) => renderNativeExportHtmlBlock(block, document2)).join("")}</aside>` : "";
    const pageClass = annotations ? "page page-has-annotations" : "page";
    return `<section class="${pageClass}" style="--page-aspect:${Math.max(1, page.width).toFixed(2)} / ${Math.max(1, page.height).toFixed(2)}" aria-label="Page ${page.pageIndex + 1}"><div class="page-content">${content}</div>${annotations}</section>`;
  }).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${htmlEscape(file.basename)}</title><style>
*{box-sizing:border-box}html{background:#e7e9ed;color:#202124;font-family:Arial,"Microsoft YaHei","Noto Sans CJK SC",sans-serif}body{margin:0;padding:18px}main{margin:0 auto;max-width:900px}
.page{background:#fff;box-shadow:0 2px 10px #0002;isolation:isolate;margin:0 auto 18px;overflow:hidden;padding:32px 42px;position:relative;width:100%}.page-has-annotations{display:grid}.page-has-annotations::before,.page-has-annotations>.page-content{grid-area:1/1}.page-has-annotations::before{aspect-ratio:var(--page-aspect);content:"";display:block;width:100%}.page-content{position:relative;z-index:1}
.block{letter-spacing:0;line-height:1.55;margin:.55rem 0;overflow-wrap:anywhere;white-space:pre-wrap}.block a,a.block-image-link{color:#0b57d0;text-decoration:underline;text-underline-offset:2px}
.page h1,.page h2,.page h3,.page h4,.page h5,.page h6{line-height:1.25;margin:1.15rem 0 .5rem}.page h1:first-child,.page h2:first-child,.page h3:first-child,.page p:first-child{margin-top:0}
.block-code{background:#f3f4f6;border-radius:4px;font-family:Consolas,"Liberation Mono","Noto Sans Mono",monospace;overflow-x:auto;padding:.75rem;white-space:pre-wrap}.block-callout{background:#eef5ff;border-left:4px solid #4b8fd8;padding:.55rem .75rem}.block-callout+.block-callout{margin-top:-.55rem}.block-quote{border-left:3px solid #9aa0a6;margin-left:0;padding-left:.8rem}
.block-list{margin:.3rem 0;padding-left:var(--list-indent,1.5rem)}.block-list+.block-list{margin-top:-.12rem}.block-separator{border:0;border-top:1px solid #888;margin:1rem 0}.block-table-wrap{margin:.8rem 0;overflow-x:auto}.block-table{border-collapse:collapse;table-layout:fixed;width:100%}.block-table td{border:1px solid #b7bcc4;padding:.45rem .55rem;vertical-align:top}.block-table tr:first-child td{background:#f4f5f7;font-weight:700}
.block-visual{display:block;margin:.8rem 0;max-width:100%;opacity:var(--visual-opacity);width:min(100%,var(--visual-width))}.block-visual.align-left{margin-right:auto}.block-visual.align-center{margin-left:auto;margin-right:auto}.block-visual.align-right{margin-left:auto}.block-image,.block-image-link{display:block;max-width:100%}.block-image{height:auto;max-height:760px;object-fit:contain;width:100%}.block-visual.align-center .block-image{margin-left:auto;margin-right:auto}.block-visual.align-right .block-image{margin-left:auto}.block-visual-native .block-image{max-height:720px}
.page-annotations{aspect-ratio:var(--page-aspect);left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:3}.page-annotations .block-visual{height:var(--visual-height);left:var(--visual-left);margin:0;max-width:none;position:absolute;top:var(--visual-top);width:var(--visual-width)}.page-annotations .block-image,.page-annotations .block-image-link{height:100%;max-height:none;width:100%}.page-annotations .block-image{object-fit:contain}
@media(max-width:640px){body{padding:0}.page{box-shadow:none;margin-bottom:8px;padding:18px 16px}.block{line-height:1.5}.block-visual{width:100%}}
@media print{html,body{background:#fff;padding:0}.page{box-shadow:none;margin:0;padding:18mm;break-after:page}.page:last-child{break-after:auto}}
</style></head><body><main>${pageMarkup}</main></body></html>`;
}
async function buildDocxFromPageImages(pages, title) {
  const docx = await import("docx");
  const {
    AlignmentType,
    BorderStyle,
    Document,
    ExternalHyperlink,
    HeadingLevel,
    ImageRun,
    LineRuleType,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableLayoutType,
    TableRow,
    TextRun,
    UnderlineType,
    WidthType
  } = docx;
  const nativeDocument = buildNativeExportDocumentFromVisualPages(pages);
  const pageWidthTwips = 11906;
  const pageMarginTwips = 540;
  const contentWidthTwips = pageWidthTwips - pageMarginTwips * 2;
  const headingLevels = [
    HeadingLevel.HEADING_1,
    HeadingLevel.HEADING_2,
    HeadingLevel.HEADING_3,
    HeadingLevel.HEADING_4,
    HeadingLevel.HEADING_5,
    HeadingLevel.HEADING_6
  ];
  const makeTextRun = (run, block) => {
    const fontSizePt = getPortableExportFontSizePt(run, block, nativeDocument.baseFontSize);
    return new TextRun({
      bold: run.bold || block.kind === "callout-title",
      color: exportHexColor(run.color),
      font: exportFontFaceForRun(run, block.kind === "code"),
      italics: run.italic,
      size: Math.round(fontSizePt * 2),
      strike: run.strike,
      text: run.text,
      underline: run.underline ? { type: UnderlineType.SINGLE } : void 0
    });
  };
  const makeRuns = (block) => {
    const prefix = getNativeExportBlockPrefix(block);
    const children = prefix ? [new TextRun({ bold: block.kind === "callout-title", font: "Segoe UI Symbol", text: prefix })] : [];
    for (const run of block.runs) {
      const textRun = makeTextRun(run, block);
      children.push(run.link ? new ExternalHyperlink({ children: [textRun], link: run.link }) : textRun);
    }
    return children;
  };
  const sections = nativeDocument.pages.map((page) => {
    const pageHeightTwips = Math.round(pageWidthTwips * page.height / Math.max(1, page.width));
    const children = [];
    let previousBottom = 0;
    for (const block of page.blocks) {
      const sourceGap = Math.max(0, block.top - previousBottom);
      const gapBefore = Math.round(clamp(sourceGap * pageHeightTwips, 0, 240));
      previousBottom = Math.max(previousBottom, block.top + (block.height ?? 0));
      if (block.kind === "image" && block.image) {
        const image = block.image;
        const contentWidthPx = contentWidthTwips / 1440 * 96;
        const contentHeightPx = Math.max(1, (pageHeightTwips - pageMarginTwips * 2) / 1440 * 96);
        const requestedWidthPx = Math.max(1, image.width * contentWidthPx);
        const requestedHeightPx = Math.max(1, image.height * contentHeightPx);
        const scale = Math.min(1, contentWidthPx / requestedWidthPx, contentHeightPx * 0.9 / requestedHeightPx);
        const imageRun = new ImageRun({
          data: dataUrlToBytes(image.dataUrl),
          transformation: {
            height: Math.max(1, Math.round(requestedHeightPx * scale)),
            width: Math.max(1, Math.round(requestedWidthPx * scale))
          },
          type: "png"
        });
        const imageChild = image.link ? new ExternalHyperlink({ children: [imageRun], link: image.link }) : imageRun;
        const center = image.x + image.width / 2;
        children.push(new Paragraph({
          alignment: center < 0.38 ? AlignmentType.LEFT : center > 0.62 ? AlignmentType.RIGHT : AlignmentType.CENTER,
          children: [imageChild],
          keepLines: true,
          spacing: { after: 40, before: gapBefore },
          widowControl: false
        }));
        continue;
      }
      if (block.kind === "table" && block.table) {
        const tableWidthTwips = Math.round(clamp(block.width * pageWidthTwips, 720, contentWidthTwips));
        const columnWidths = getEditableTableColumnWidths(block.table, tableWidthTwips).map((width) => Math.round(width));
        children.push(new Table({
          columnWidths,
          indent: { size: Math.round(clamp(block.left * pageWidthTwips - pageMarginTwips, 0, contentWidthTwips - tableWidthTwips)), type: WidthType.DXA },
          layout: TableLayoutType.FIXED,
          rows: block.table.rows.map((row, rowIndex) => new TableRow({
            cantSplit: true,
            children: row.map((cell, columnIndex) => new TableCell({
              children: [new Paragraph({
                children: cell.runs.map((run) => makeTextRun(run, block)),
                keepLines: true,
                spacing: { after: 20, before: 20 }
              })],
              shading: rowIndex === 0 ? { fill: "F2F3F5" } : void 0,
              width: { size: columnWidths[columnIndex] ?? Math.round(tableWidthTwips / Math.max(1, row.length)), type: WidthType.DXA }
            }))
          })),
          width: { size: tableWidthTwips, type: WidthType.DXA }
        }));
        continue;
      }
      if (block.kind === "separator") {
        children.push(new Paragraph({
          border: { bottom: { color: "888888", size: 6, space: 1, style: BorderStyle.SINGLE } },
          children: [],
          spacing: { after: 80, before: Math.max(40, gapBefore) }
        }));
        continue;
      }
      const isCallout = block.kind === "callout-title" || block.kind === "callout-body";
      const maxFontSizePt = Math.max(9, ...block.runs.map((run) => getPortableExportFontSizePt(run, block, nativeDocument.baseFontSize)));
      children.push(new Paragraph({
        border: block.kind === "quote" || isCallout ? { left: { color: isCallout ? "4B8FD8" : "9AA0A6", size: 12, space: 8, style: BorderStyle.SINGLE } } : void 0,
        children: makeRuns(block),
        heading: block.kind === "heading" ? headingLevels[clamp((block.headingLevel ?? 1) - 1, 0, 5)] : void 0,
        indent: block.kind === "quote" || isCallout ? { left: 360 } : block.kind === "task" || block.kind === "unordered-list" || block.kind === "ordered-list" ? { hanging: 180, left: 360 + (block.listLevel ?? 0) * 360 } : void 0,
        keepLines: true,
        keepNext: block.kind === "heading",
        shading: block.kind === "code" ? { fill: "F3F4F6" } : isCallout ? { fill: "EEF5FF" } : void 0,
        spacing: {
          after: block.kind === "heading" ? 60 : 20,
          before: Math.max(gapBefore, block.kind === "heading" ? 80 : 0),
          line: Math.round(maxFontSizePt * 1.28 * 20),
          lineRule: LineRuleType.EXACT
        },
        widowControl: false
      }));
    }
    if (children.length === 0) {
      children.push(new Paragraph({ children: [] }));
    }
    return {
      children,
      properties: {
        page: {
          margin: { bottom: pageMarginTwips, left: pageMarginTwips, right: pageMarginTwips, top: pageMarginTwips },
          size: { height: pageHeightTwips, width: pageWidthTwips }
        }
      }
    };
  });
  const document2 = new Document({
    compatabilityModeVersion: 15,
    creator: "Murat",
    description: "Pdftion native editable conversion with text, tables, links, images, and drawings.",
    sections,
    styles: {
      default: {
        document: {
          paragraph: { spacing: { after: 0, before: 0 } },
          run: { font: "Arial", size: 22 }
        }
      }
    },
    title
  });
  const blob = await Packer.toBlob(document2);
  const previewPageHeightTwips = Math.round(
    pageWidthTwips * (nativeDocument.pages[0]?.height ?? 1) / Math.max(1, nativeDocument.pages[0]?.width ?? 1)
  );
  return injectOfficePreviewPages(
    new Uint8Array(await blob.arrayBuffer()),
    pages,
    pageWidthTwips / 20,
    previewPageHeightTwips / 20
  );
}
async function injectOfficePreviewPages(officeBytes, pages, pageWidthPt, pageHeightPt) {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(officeBytes);
  const sortedPages = [...pages].sort((a, b) => a.pageIndex - b.pageIndex);
  zip.file("mpe/preview/manifest.json", JSON.stringify({
    generator: "Obsidian Mobile PDF Exporter",
    pageCount: sortedPages.length,
    pageHeightPt,
    pageWidthPt,
    producer: "Pdftion",
    schemaVersion: 1
  }));
  sortedPages.forEach((page, pageIndex) => {
    zip.file(`mpe/preview/page-${String(pageIndex + 1).padStart(4, "0")}.png`, page.bytes);
  });
  return zip.generateAsync({ type: "uint8array", compression: "DEFLATE" });
}
function exportHexColor(value) {
  const match = value.match(/#?([0-9a-f]{6})/i);
  return (match?.[1] ?? "000000").toUpperCase();
}
function exportFontFace(value, text = "") {
  const normalized = value.toLowerCase();
  if (/(?:mono|consolas|courier|code)/u.test(normalized)) {
    return "Consolas";
  }
  if (containsCjkPresentation(text)) {
    return /(?:serif|simsun|song|宋体)/u.test(normalized) ? "SimSun" : "Microsoft YaHei";
  }
  if (/(?:serif|times|georgia)/u.test(normalized) && !/(?:sans-serif|sans serif)/u.test(normalized)) {
    return "Times New Roman";
  }
  return "Arial";
}
function xmlEscape(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function htmlEscape(value) {
  return xmlEscape(value).replace(/'/g, "&#39;");
}
function htmlAttributeEscape(value) {
  return htmlEscape(value);
}
function dataUrlToBytes(dataUrl) {
  const [, payload = ""] = dataUrl.split(",", 2);
  const binary = atob(payload);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
function pickImageFile() {
  return new Promise((resolve) => {
    const input = activeDocument.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", () => {
      resolve(input.files?.[0] ?? null);
    }, { once: true });
    input.click();
  });
}
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}
function pickPdfFile() {
  return new Promise((resolve) => {
    const input = activeDocument.createElement("input");
    input.type = "file";
    input.accept = "application/pdf,.pdf";
    input.addEventListener("change", () => {
      resolve(input.files?.[0] ?? null);
    }, { once: true });
    input.click();
  });
}
function parsePageOrder(raw, pageCount) {
  const result = [];
  for (const token of raw.split(/[,\s]+/).map((part) => part.trim()).filter(Boolean)) {
    const range = token.match(/^(\d+)-(\d+)$/);
    if (range) {
      const start = Number(range[1]);
      const end = Number(range[2]);
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < 1 || start > pageCount || end > pageCount) {
        return null;
      }
      const step = start <= end ? 1 : -1;
      for (let value = start; step > 0 ? value <= end : value >= end; value += step) {
        result.push(value - 1);
      }
      continue;
    }
    const page = Number(token);
    if (!Number.isInteger(page) || page < 1 || page > pageCount) {
      return null;
    }
    result.push(page - 1);
  }
  if (result.length !== pageCount || new Set(result).size !== pageCount) {
    return null;
  }
  return result;
}
function parseCropValue(raw) {
  const value = raw.endsWith("%") ? Number(raw.slice(0, -1)) / 100 : Number(raw);
  if (!Number.isFinite(value)) {
    return null;
  }
  return clamp(value, 0, 0.45);
}
function rotateElementClockwise(element) {
  const clone = cloneElement(element);
  if (clone.kind === "stroke") {
    clone.points = clone.points.map((point) => ({ x: 1 - point.y, y: point.x }));
  } else if (clone.kind === "text") {
    const box = normalizedTextBounds(clone);
    clone.x = clamp(1 - box.maxY, 0, 1);
    clone.y = clamp(box.minX, 0, 1);
  } else if (clone.kind === "cover" || clone.kind === "image") {
    const oldX = clone.x;
    const oldHeight = clone.height;
    const oldWidth = clone.width;
    const oldY = clone.y;
    const right = clone.x + clone.width;
    clone.x = clamp(1 - (oldY + oldHeight), 0, 1);
    clone.y = clamp(oldX, 0, 1);
    clone.width = clamp(oldHeight, 1e-3, 1);
    clone.height = clamp(right - oldX || oldWidth, 1e-3, 1);
  }
  clone.saved = false;
  return clone;
}
function cropElement(element, crop) {
  const clone = cloneElement(element);
  const width = Math.max(0.01, 1 - crop.left - crop.right);
  const height = Math.max(0.01, 1 - crop.top - crop.bottom);
  const mapPoint = (point) => ({
    x: clamp((point.x - crop.left) / width, 0, 1),
    y: clamp((point.y - crop.top) / height, 0, 1)
  });
  if (clone.kind === "stroke") {
    clone.points = clone.points.map(mapPoint);
  } else if (clone.kind === "text") {
    const point = mapPoint({ x: clone.x, y: clone.y });
    clone.x = point.x;
    clone.y = point.y;
  } else if (clone.kind === "cover" || clone.kind === "image") {
    const topLeft = mapPoint({ x: clone.x, y: clone.y });
    clone.x = topLeft.x;
    clone.y = topLeft.y;
    clone.width = clamp(clone.width / width, 1e-3, 1);
    clone.height = clamp(clone.height / height, 1e-3, 1);
  }
  clone.saved = false;
  return clone;
}
function drawImageDataUrl(ctx, image, cssWidth, cssHeight) {
  return new Promise((resolve) => {
    const bitmap = new Image();
    bitmap.onload = () => {
      ctx.save();
      ctx.globalAlpha = image.opacity;
      ctx.drawImage(bitmap, image.x * cssWidth, image.y * cssHeight, image.width * cssWidth, image.height * cssHeight);
      ctx.restore();
      resolve();
    };
    bitmap.onerror = () => resolve();
    bitmap.src = image.dataUrl;
  });
}
function getImageDataUrlSize(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({ height: Math.max(1, image.naturalHeight), width: Math.max(1, image.naturalWidth) });
    image.onerror = () => reject(new Error("Could not load image file."));
    image.src = dataUrl;
  });
}
function resolvePdfFontkit(moduleValue) {
  const moduleShape = moduleValue;
  const candidate = typeof moduleShape.create === "function" ? moduleShape : moduleShape.default;
  if (!candidate || typeof candidate.create !== "function") {
    throw new Error("PDF fontkit is unavailable.");
  }
  return candidate;
}
function getPageIndex(pageEl, fallbackIndex) {
  const raw = pageEl.dataset.pageNumber ?? pageEl.getAttribute("data-page-number");
  const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN;
  return Number.isFinite(parsed) && parsed > 0 ? parsed - 1 : fallbackIndex;
}
function getTouchCenter(touches) {
  let sumX = 0;
  let sumY = 0;
  for (let i = 0; i < touches.length; i += 1) {
    sumX += touches[i].clientX;
    sumY += touches[i].clientY;
  }
  const count = Math.max(1, touches.length);
  return { x: sumX / count, y: sumY / count };
}
function getTouchDistance(touches) {
  if (touches.length < 2) {
    return 0;
  }
  const first = touches[0];
  const second = touches[1];
  return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
}
function dispatchPdfZoomGesture(rootEl, delta) {
  const button = findPdfZoomButton(rootEl, delta > 0 ? "in" : "out");
  if (button) {
    button.click();
    return;
  }
  const target = rootEl.querySelector(".pdfViewer, .pdf-viewer, .pdf-container, .workspace-leaf-content") ?? rootEl;
  target.dispatchEvent(
    new WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      ctrlKey: true,
      deltaMode: WheelEvent.DOM_DELTA_PIXEL,
      deltaY: clamp(-delta * 1.5, -80, 80)
    })
  );
}
function findPdfZoomButton(rootEl, direction) {
  const tokens = direction === "in" ? ["zoom in", "\u653E\u5927", "zoom-in"] : ["zoom out", "\u7F29\u5C0F", "\u653E\u5C0F", "zoom-out"];
  for (const button of Array.from(rootEl.querySelectorAll("button, .clickable-icon"))) {
    if (button.classList.contains("pdftion-button") || button.disabled) {
      continue;
    }
    const label = `${button.getAttribute("aria-label") ?? ""} ${button.getAttribute("title") ?? ""} ${button.textContent ?? ""}`.toLowerCase();
    if (tokens.some((token) => label.includes(token))) {
      return button;
    }
  }
  return null;
}
function findTouch(touches, identifier) {
  for (let i = 0; i < touches.length; i += 1) {
    if (touches[i].identifier === identifier) {
      return touches[i];
    }
  }
  return null;
}
function findScrollableAncestor(start) {
  let element = start;
  while (element) {
    const computedStyle = activeWindow.getComputedStyle(element);
    const canScrollY = element.scrollHeight > element.clientHeight + 2;
    const canScrollX = element.scrollWidth > element.clientWidth + 2;
    const allowsScrollY = /auto|scroll|overlay/i.test(computedStyle.overflowY);
    const allowsScrollX = /auto|scroll|overlay/i.test(computedStyle.overflowX);
    if (canScrollY && allowsScrollY || canScrollX && allowsScrollX) {
      return element;
    }
    element = element.parentElement;
  }
  return activeDocument.scrollingElement ?? activeDocument.documentElement;
}
function drawStroke(ctx, stroke, cssWidth, cssHeight, selected = false) {
  if (stroke.points.length < 2) {
    return;
  }
  ctx.save();
  ctx.globalAlpha = selected ? Math.max(0.14, stroke.opacity * 0.38) : stroke.opacity;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = strokeDisplayWidth(stroke, cssWidth);
  ctx.strokeStyle = stroke.color;
  ctx.beginPath();
  traceInkStrokePath(ctx, stroke.points, cssWidth, cssHeight);
  ctx.stroke();
  ctx.restore();
}
function traceInkStrokePath(ctx, points, cssWidth, cssHeight) {
  const first = points[0];
  if (!first) {
    return;
  }
  ctx.moveTo(first.x * cssWidth, first.y * cssHeight);
  if (points.length === 2) {
    const end = points[1];
    ctx.lineTo(end.x * cssWidth, end.y * cssHeight);
    return;
  }
  for (let i = 1; i < points.length - 1; i += 1) {
    const point = points[i];
    const next = points[i + 1];
    const midX = (point.x + next.x) / 2 * cssWidth;
    const midY = (point.y + next.y) / 2 * cssHeight;
    ctx.quadraticCurveTo(point.x * cssWidth, point.y * cssHeight, midX, midY);
  }
  const last = points[points.length - 1];
  ctx.lineTo(last.x * cssWidth, last.y * cssHeight);
}
function strokeDisplayWidth(stroke, cssWidth) {
  return Math.max(0.5, stroke.width * (cssWidth / Math.max(1, stroke.pageCssWidth)));
}
function drawTextElement(ctx, text, cssWidth, cssHeight, selected = false) {
  ctx.save();
  ctx.globalAlpha = selected ? Math.max(0.14, text.opacity * 0.38) : text.opacity;
  const x = text.x * cssWidth;
  const y = text.y * cssHeight;
  if (text.presentation === "comment") {
    const size = clamp(text.fontSize * 1.65, 22, 32);
    const radius = size * 0.42;
    const centerX = x + radius;
    const centerY = y + radius;
    ctx.fillStyle = text.color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + size * 0.28, y + size * 0.72);
    ctx.lineTo(x + size * 0.18, y + size);
    ctx.lineTo(x + size * 0.52, y + size * 0.78);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = selected ? 0.7 : 0.94;
    ctx.fillStyle = readableTextColor(text.color);
    for (let index = 0; index < 3; index += 1) {
      ctx.fillRect(x + size * 0.28, y + size * (0.29 + index * 0.16), size * (index === 2 ? 0.3 : 0.46), Math.max(1.5, size * 0.055));
    }
    ctx.restore();
    return;
  }
  const lines = text.text.split(/\r?\n/);
  ctx.fillStyle = text.color;
  ctx.font = `${text.fontSize}px ${text.fontFamily ?? "sans-serif"}`;
  ctx.textBaseline = "top";
  let lineY = y;
  for (const line of lines) {
    ctx.fillText(line, x, lineY);
    lineY += text.fontSize * 1.2;
  }
  ctx.restore();
}
async function convertImageDataUrlToPng(dataUrl) {
  if (/^data:image\/png;base64,/i.test(dataUrl)) {
    return dataUrl;
  }
  const image = await loadDataUrlImage(dataUrl);
  const canvas = activeDocument.createElement("canvas");
  canvas.width = Math.max(1, image.naturalWidth || image.width);
  canvas.height = Math.max(1, image.naturalHeight || image.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return dataUrl;
  }
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/png");
}
function drawCoverElement(ctx, cover, cssWidth, cssHeight, selected = false) {
  ctx.save();
  ctx.globalAlpha = selected ? Math.max(0.18, cover.opacity * 0.5) : cover.opacity;
  ctx.fillStyle = cover.color;
  ctx.fillRect(cover.x * cssWidth, cover.y * cssHeight, cover.width * cssWidth, cover.height * cssHeight);
  ctx.restore();
}
function drawSelectionGroup(ctx, elements, cssWidth, cssHeight) {
  const box = normalizedElementsBounds(elements);
  if (!box) {
    return;
  }
  const x = box.minX * cssWidth;
  const y = box.minY * cssHeight;
  const width = (box.maxX - box.minX) * cssWidth;
  const height = (box.maxY - box.minY) * cssHeight;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(28, 126, 214, 0.58)";
  ctx.lineWidth = 1;
  ctx.setLineDash([6, 4]);
  ctx.strokeRect(x, y, width, height);
  ctx.setLineDash([]);
  for (const handle of getSelectionHandlePoints(box)) {
    const size = 8;
    const hx = handle.point.x * cssWidth;
    const hy = handle.point.y * cssHeight;
    ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
    ctx.strokeStyle = "rgba(28, 126, 214, 0.72)";
    ctx.lineWidth = 1.2;
    ctx.fillRect(hx - size / 2, hy - size / 2, size, size);
    ctx.strokeRect(hx - size / 2, hy - size / 2, size, size);
  }
  ctx.restore();
}
function drawNativeSelection(ctx, selection, cssWidth, cssHeight) {
  const x = selection.x * cssWidth;
  const y = selection.y * cssHeight;
  const width = selection.width * cssWidth;
  const height = selection.height * cssHeight;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(12, 166, 120, 0.6)";
  ctx.fillStyle = selection.kind === "text" ? "rgba(12, 166, 120, 0.07)" : "rgba(12, 166, 120, 0.04)";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 4]);
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
  ctx.restore();
}
function drawCropPreview(ctx, crop, cssWidth, cssHeight) {
  const left = crop.left * cssWidth;
  const right = (1 - crop.right) * cssWidth;
  const top = crop.top * cssHeight;
  const bottom = (1 - crop.bottom) * cssHeight;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(255, 193, 7, 0.13)";
  if (left > 0) {
    ctx.fillRect(0, 0, left, cssHeight);
  }
  if (right < cssWidth) {
    ctx.fillRect(right, 0, cssWidth - right, cssHeight);
  }
  if (top > 0) {
    ctx.fillRect(left, 0, Math.max(0, right - left), top);
  }
  if (bottom < cssHeight) {
    ctx.fillRect(left, bottom, Math.max(0, right - left), cssHeight - bottom);
  }
  ctx.strokeStyle = "#f08c00";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.moveTo(left, 0);
  ctx.lineTo(left, cssHeight);
  ctx.moveTo(right, 0);
  ctx.lineTo(right, cssHeight);
  ctx.moveTo(0, top);
  ctx.lineTo(cssWidth, top);
  ctx.moveTo(0, bottom);
  ctx.lineTo(cssWidth, bottom);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = "#e67700";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(left, top, Math.max(0, right - left), Math.max(0, bottom - top));
  ctx.restore();
}
function mergeNativeTextFragmentsIntoLines(fragments, overlay, pageRect) {
  const sorted = [...fragments].sort((a, b) => a.top - b.top || a.left - b.left);
  const lines = [];
  for (const fragment of sorted) {
    const centerY = (fragment.top + fragment.bottom) / 2;
    const line = lines.find((candidate) => {
      const candidateCenterY = (candidate.top + candidate.bottom) / 2;
      const tolerance = Math.max(3, Math.max(...candidate.fontSizes, fragment.fontSize) * 0.42);
      return Math.abs(candidateCenterY - centerY) <= tolerance;
    });
    if (line) {
      line.bottom = Math.max(line.bottom, fragment.bottom);
      line.fontSizes.push(fragment.fontSize);
      line.fragments.push({ index: fragment.index, left: fragment.left, text: fragment.text });
      line.left = Math.min(line.left, fragment.left);
      line.right = Math.max(line.right, fragment.right);
      line.top = Math.min(line.top, fragment.top);
    } else {
      lines.push({
        bottom: fragment.bottom,
        fontSizes: [fragment.fontSize],
        fragments: [{ index: fragment.index, left: fragment.left, text: fragment.text }],
        left: fragment.left,
        right: fragment.right,
        top: fragment.top
      });
    }
  }
  return lines.sort((a, b) => a.top - b.top || a.left - b.left).map((line, index) => {
    const ordered = line.fragments.sort((a, b) => a.left - b.left);
    const text = ordered.map((fragment) => fragment.text).join(" ").replace(/\s+/g, " ").trim();
    const fontSize = median(line.fontSizes);
    return {
      fontSize,
      height: clamp((line.bottom - line.top) / Math.max(1, overlay.cssHeight), 1e-3, 1),
      id: `native-line-${overlay.pageIndex}-${index}`,
      kind: "text",
      pageIndex: overlay.pageIndex,
      text,
      width: clamp((line.right - line.left) / Math.max(1, overlay.cssWidth), 1e-3, 1),
      x: clamp((line.left - pageRect.left) / Math.max(1, overlay.cssWidth), 0, 1),
      y: clamp((line.top - pageRect.top) / Math.max(1, overlay.cssHeight), 0, 1)
    };
  }).filter((line) => line.text.length > 0);
}
function median(values) {
  if (values.length === 0) {
    return 12;
  }
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
function drawMarqueeBox(ctx, start, end, cssWidth, cssHeight) {
  const minX = Math.min(start.x, end.x) * cssWidth;
  const minY = Math.min(start.y, end.y) * cssHeight;
  const width = Math.abs(end.x - start.x) * cssWidth;
  const height = Math.abs(end.y - start.y) * cssHeight;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(34, 139, 230, 0.55)";
  ctx.fillStyle = "rgba(34, 139, 230, 0.06)";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 4]);
  ctx.fillRect(minX, minY, width, height);
  ctx.strokeRect(minX, minY, width, height);
  ctx.restore();
}
function strokeBounds(stroke, cssWidth, cssHeight) {
  if (stroke.points.length === 0) {
    return null;
  }
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  for (const point of stroke.points) {
    const x = point.x * cssWidth;
    const y = point.y * cssHeight;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  return { maxX, maxY, minX, minY };
}
function textBounds(text, cssWidth, cssHeight) {
  if (text.presentation === "comment") {
    const size = clamp(text.fontSize * 1.65, 22, 32);
    const minX2 = text.x * cssWidth;
    const minY2 = text.y * cssHeight;
    return { maxX: minX2 + size, maxY: minY2 + size, minX: minX2, minY: minY2 };
  }
  const lines = text.text.split(/\r?\n/);
  const width = Math.max(
    text.fontSize,
    ...lines.map((line) => measureTextLineWidth(line, text.fontSize, text.fontFamily))
  );
  const height = Math.max(text.fontSize, lines.length * text.fontSize * 1.2);
  const minX = text.x * cssWidth;
  const minY = text.y * cssHeight;
  return {
    maxX: minX + width,
    maxY: minY + height,
    minX,
    minY
  };
}
function strokeBoxContainsPoint(stroke, point, cssWidth, cssHeight, tolerancePx = HIT_TOLERANCE_LOOSE_PX) {
  if (stroke.points.length === 0) {
    return false;
  }
  const displayWidth = strokeDisplayWidth(stroke, cssWidth);
  const tolerance = stroke.source === "external-ink" ? tolerancePx + 4 : tolerancePx;
  const hitRadius = displayWidth / 2 + tolerance;
  if (stroke.points.length === 1) {
    return normalizedDistance(stroke.points[0], point, cssWidth, cssHeight) <= hitRadius + 2;
  }
  return strokeContainsPoint(stroke, point, cssWidth, cssHeight, hitRadius);
}
function textBoxContainsPoint(text, point, cssWidth, cssHeight, tolerancePx = HIT_TOLERANCE_LOOSE_PX) {
  const box = textBounds(text, cssWidth, cssHeight);
  const pad = tolerancePx + Math.max(2, text.fontSize * 0.35);
  const px = point.x * cssWidth;
  const py = point.y * cssHeight;
  return px >= box.minX - pad && px <= box.maxX + pad && py >= box.minY - pad && py <= box.maxY + pad;
}
function strokeIntersectsSelection(stroke, start, end, cssWidth, cssHeight) {
  const box = strokeBounds(stroke, cssWidth, cssHeight);
  if (!box) {
    return false;
  }
  const minX = Math.min(start.x, end.x) * cssWidth;
  const maxX = Math.max(start.x, end.x) * cssWidth;
  const minY = Math.min(start.y, end.y) * cssHeight;
  const maxY = Math.max(start.y, end.y) * cssHeight;
  const pad = Math.max(8, strokeDisplayWidth(stroke, cssWidth) * 1.8);
  return box.maxX + pad >= minX && box.minX - pad <= maxX && box.maxY + pad >= minY && box.minY - pad <= maxY;
}
function textIntersectsSelection(text, start, end, cssWidth, cssHeight) {
  const box = textBounds(text, cssWidth, cssHeight);
  const minX = Math.min(start.x, end.x) * cssWidth;
  const maxX = Math.max(start.x, end.x) * cssWidth;
  const minY = Math.min(start.y, end.y) * cssHeight;
  const maxY = Math.max(start.y, end.y) * cssHeight;
  return box.maxX >= minX && box.minX <= maxX && box.maxY >= minY && box.minY <= maxY;
}
function coverBoxContainsPoint(cover, point, cssWidth = 1, cssHeight = 1, paddingPx = 0) {
  const padX = paddingPx / Math.max(1, cssWidth);
  const padY = paddingPx / Math.max(1, cssHeight);
  return point.x >= cover.x - padX && point.x <= cover.x + cover.width + padX && point.y >= cover.y - padY && point.y <= cover.y + cover.height + padY;
}
function coverIntersectsSelection(cover, start, end) {
  const minX = Math.min(start.x, end.x);
  const maxX = Math.max(start.x, end.x);
  const minY = Math.min(start.y, end.y);
  const maxY = Math.max(start.y, end.y);
  return cover.x + cover.width >= minX && cover.x <= maxX && cover.y + cover.height >= minY && cover.y <= maxY;
}
function imageBoxContainsPoint(image, point, cssWidth = 1, cssHeight = 1, paddingPx = 0) {
  return coverBoxContainsPoint(image, point, cssWidth, cssHeight, paddingPx);
}
function rectsOverlap(a, b) {
  return a.right >= b.left && a.left <= b.right && a.bottom >= b.top && a.top <= b.bottom;
}
function nativeRegionContainsPoint(region, point) {
  return point.x >= region.x && point.x <= region.x + region.width && point.y >= region.y && point.y <= region.y + region.height;
}
function translateStroke(stroke, dx, dy) {
  for (const point of stroke.points) {
    point.x += dx;
    point.y += dy;
  }
}
function translateElement(element, dx, dy) {
  if (element.kind === "stroke") {
    translateStroke(element, dx, dy);
  } else {
    element.x += dx;
    element.y += dy;
  }
}
function cloneStroke(stroke) {
  return {
    ...stroke,
    pdfPoints: stroke.pdfPoints?.map((point) => ({ ...point })),
    points: stroke.points.map((point) => ({ ...point }))
  };
}
function cloneElement(element) {
  return element.kind === "stroke" ? cloneStroke(element) : { ...element };
}
function inkStrokeSetsEquivalent(a, b, pageIndexes) {
  const signature = (elements) => elements.filter((element) => element.kind === "stroke" && pageIndexes.has(element.pageIndex)).map((stroke) => JSON.stringify({
    color: stroke.color,
    id: stroke.id,
    opacity: Number(stroke.opacity.toFixed(4)),
    pageIndex: stroke.pageIndex,
    points: stroke.points.map((point) => [Number(point.x.toFixed(6)), Number(point.y.toFixed(6))]),
    tool: stroke.tool,
    width: Number(stroke.width.toFixed(4))
  })).sort();
  const left = signature(a);
  const right = signature(b);
  return left.length === right.length && left.every((value, index) => value === right[index]);
}
function legacyInkLayerRank(element) {
  if (element.kind === "cover") {
    return 0;
  }
  if (element.kind === "image") {
    return 1;
  }
  if (element.kind === "stroke") {
    return 2;
  }
  return 3;
}
function compareInkElements(a, b) {
  return a.pageIndex - b.pageIndex || (a.zIndex ?? Number.MAX_SAFE_INTEGER) - (b.zIndex ?? Number.MAX_SAFE_INTEGER) || legacyInkLayerRank(a) - legacyInkLayerRank(b) || a.id.localeCompare(b.id);
}
function normalizeInkElementLayers(elements) {
  const pages = /* @__PURE__ */ new Map();
  elements.forEach((element, index) => {
    const page = pages.get(element.pageIndex) ?? [];
    page.push({ element, index });
    pages.set(element.pageIndex, page);
  });
  for (const page of pages.values()) {
    const hasStoredLayers = page.some(({ element }) => Number.isFinite(element.zIndex));
    if (hasStoredLayers) {
      let nextLayer = page.reduce((max, { element }) => Math.max(max, Number.isFinite(element.zIndex) ? element.zIndex ?? 0 : 0), 0) + 1;
      for (const item of page) {
        if (!Number.isFinite(item.element.zIndex)) {
          item.element.zIndex = nextLayer;
          nextLayer += 1;
        }
      }
      page.sort((a, b) => (a.element.zIndex ?? 0) - (b.element.zIndex ?? 0) || a.index - b.index);
    } else {
      page.sort((a, b) => legacyInkLayerRank(a.element) - legacyInkLayerRank(b.element) || a.index - b.index);
    }
    page.forEach(({ element }, index) => {
      element.zIndex = index + 1;
    });
  }
}
function addStandardTextCommentAnnotation(pdf, page, comment, mapping) {
  const iconSize = Math.max(16, Math.min(28, comment.fontSize * 1.65)) * (pageDisplayUserWidth(mapping) / Math.max(1, comment.pageCssWidth));
  const anchor = displayPointToUserPoint(mapping, comment.x, comment.y);
  const end = displayPointToUserPoint(mapping, comment.x + iconSize / Math.max(1e-6, pageDisplayUserWidth(mapping)), comment.y + iconSize / Math.max(1e-6, pageDisplayUserHeight(mapping)));
  const rectLeft = Math.min(anchor.x, end.x);
  const rectRight = Math.max(anchor.x, end.x);
  const rectBottom = Math.min(anchor.y, end.y);
  const rectTop = Math.max(anchor.y, end.y);
  const annotation = pdf.context.obj({
    C: pdf.context.obj([hexToRgb(comment.color).r, hexToRgb(comment.color).g, hexToRgb(comment.color).b]),
    Contents: import_pdf_lib.PDFHexString.fromText(comment.text),
    F: import_pdf_lib.PDFNumber.of(4),
    M: import_pdf_lib.PDFHexString.fromText(new Date(comment.createdAt ?? Date.now()).toISOString()),
    Name: import_pdf_lib.PDFName.of("Comment"),
    NM: import_pdf_lib.PDFHexString.fromText(`PdftionComment:${comment.id}`),
    Open: false,
    Rect: pdf.context.obj([rectLeft, rectBottom, rectRight, rectTop]),
    Subtype: import_pdf_lib.PDFName.of("Text"),
    T: import_pdf_lib.PDFHexString.fromText("Pdftion"),
    Type: import_pdf_lib.PDFName.of("Annot")
  });
  const annotationRef = pdf.context.register(annotation);
  const pageNode = page.node;
  if (typeof pageNode.addAnnot === "function") {
    pageNode.addAnnot(annotationRef);
    return;
  }
  let annots = pageNode.Annots?.();
  if (!annots) {
    annots = pdf.context.obj([]);
    pageNode.set(import_pdf_lib.PDFName.of("Annots"), annots);
  }
  annots.push(annotationRef);
}
function inkStrokesEquivalentForPdf(a, b) {
  return a.pageIndex === b.pageIndex && a.color === b.color && a.groupId === b.groupId && Math.abs(a.opacity - b.opacity) <= 1e-3 && Math.abs(a.width - b.width) <= 1e-3 && a.tool === b.tool && inkPointsApproximatelyEqual(a.points, b.points);
}
function normalizedStrokeBounds(stroke) {
  if (stroke.points.length === 0) {
    return null;
  }
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  for (const point of stroke.points) {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  const halfWidth = Number.isFinite(stroke.width) ? Math.max(0, stroke.width) / 2 : 0;
  const padX = halfWidth / Math.max(1, stroke.pageCssWidth);
  const padY = halfWidth / Math.max(1, stroke.pageCssHeight);
  return { maxX: maxX + padX, maxY: maxY + padY, minX: minX - padX, minY: minY - padY };
}
function pdfIdentityPoints(stroke) {
  return stroke.pdfPoints ?? stroke.points;
}
function unionNormalizedBounds(a, b) {
  return {
    maxX: Math.max(a.maxX, b.maxX),
    maxY: Math.max(a.maxY, b.maxY),
    minX: Math.min(a.minX, b.minX),
    minY: Math.min(a.minY, b.minY)
  };
}
function normalizedBoundsAreNear(a, b, cssWidth, cssHeight, gapPx) {
  const gapX = Math.max(0, Math.max(a.minX, b.minX) - Math.min(a.maxX, b.maxX)) * Math.max(1, cssWidth);
  const gapY = Math.max(0, Math.max(a.minY, b.minY) - Math.min(a.maxY, b.maxY)) * Math.max(1, cssHeight);
  return Math.hypot(gapX, gapY) <= gapPx;
}
var textMeasureContext;
function getTextMeasureContext() {
  if (textMeasureContext !== void 0) {
    return textMeasureContext;
  }
  try {
    const canvas = activeDocument.createElement("canvas");
    textMeasureContext = canvas.getContext("2d");
  } catch {
    textMeasureContext = null;
  }
  return textMeasureContext;
}
function isFullWidthGlyph(char) {
  const code = char.codePointAt(0) ?? 0;
  return code >= 4352 && code <= 4447 || code >= 11904 && code <= 42191 || code >= 44032 && code <= 55203 || code >= 63744 && code <= 64255 || code >= 65072 && code <= 65135 || code >= 65280 && code <= 65376 || code >= 65504 && code <= 65510;
}
function measureTextLineWidth(line, fontSize, fontFamily) {
  if (!line) {
    return 0;
  }
  const size = Number.isFinite(fontSize) && fontSize > 0 ? fontSize : 12;
  const context = getTextMeasureContext();
  if (context) {
    context.font = `${size}px ${fontFamily ?? "sans-serif"}`;
    const measured = context.measureText(line).width;
    if (Number.isFinite(measured) && measured > 0) {
      return measured;
    }
  }
  let width = 0;
  for (const char of Array.from(line)) {
    width += isFullWidthGlyph(char) ? size : size * 0.58;
  }
  return width;
}
function normalizedTextBounds(text) {
  if (text.presentation === "comment") {
    const size = clamp(text.fontSize * 1.65, 22, 32);
    return {
      maxX: text.x + size / Math.max(1, text.pageCssWidth),
      maxY: text.y + size / Math.max(1, text.pageCssHeight),
      minX: text.x,
      minY: text.y
    };
  }
  const lines = text.text.split(/\r?\n/);
  const width = Math.max(
    text.fontSize,
    ...lines.map((line) => measureTextLineWidth(line, text.fontSize, text.fontFamily))
  ) / Math.max(1, text.pageCssWidth);
  const height = Math.max(text.fontSize, lines.length * text.fontSize * 1.2) / Math.max(1, text.pageCssHeight);
  return {
    maxX: text.x + width,
    maxY: text.y + height,
    minX: text.x,
    minY: text.y
  };
}
function normalizedCoverBounds(cover) {
  return {
    maxX: cover.x + cover.width,
    maxY: cover.y + cover.height,
    minX: cover.x,
    minY: cover.y
  };
}
function expandCoverToHideNativeText(cover, overlay) {
  const padLeft = Math.min(0.026, Math.max(3 / Math.max(1, overlay.cssWidth), cover.width * 0.12));
  const padRight = Math.min(0.065, Math.max(10 / Math.max(1, overlay.cssWidth), cover.width * 0.28));
  const padTop = Math.min(0.028, Math.max(3 / Math.max(1, overlay.cssHeight), cover.height * 0.24));
  const padBottom = Math.min(0.055, Math.max(8 / Math.max(1, overlay.cssHeight), cover.height * 0.55));
  const x = clamp(cover.x - padLeft, 0, 1);
  const y = clamp(cover.y - padTop * 0.7, 0, 1);
  const maxX = clamp(cover.x + cover.width + padRight, 0, 1);
  const maxY = clamp(cover.y + cover.height + padBottom, 0, 1);
  return {
    ...cover,
    height: Math.max(1e-3, maxY - y),
    width: Math.max(1e-3, maxX - x),
    x,
    y
  };
}
function normalizedElementBounds(element) {
  if (element.kind === "stroke") {
    return normalizedStrokeBounds(element);
  }
  if (element.kind === "text") {
    return normalizedTextBounds(element);
  }
  return normalizedCoverBounds(element);
}
function normalizedElementsBounds(elements) {
  let bounds = null;
  for (const element of elements) {
    const box = normalizedElementBounds(element);
    if (!box) {
      continue;
    }
    bounds = bounds ? {
      maxX: Math.max(bounds.maxX, box.maxX),
      maxY: Math.max(bounds.maxY, box.maxY),
      minX: Math.min(bounds.minX, box.minX),
      minY: Math.min(bounds.minY, box.minY)
    } : box;
  }
  return bounds;
}
function getSelectionHandlePoints(bounds) {
  return [
    { handle: "nw", point: { x: bounds.minX, y: bounds.minY } },
    { handle: "ne", point: { x: bounds.maxX, y: bounds.minY } },
    { handle: "sw", point: { x: bounds.minX, y: bounds.maxY } },
    { handle: "se", point: { x: bounds.maxX, y: bounds.maxY } }
  ];
}
function findResizeHandleAt(bounds, point, cssWidth, cssHeight, radius = 8, edgeBand = 0) {
  const px = point.x * cssWidth;
  const py = point.y * cssHeight;
  for (const item of getSelectionHandlePoints(bounds)) {
    const hx = item.point.x * cssWidth;
    const hy = item.point.y * cssHeight;
    if (Math.abs(px - hx) <= radius && Math.abs(py - hy) <= radius) {
      return item.handle;
    }
  }
  if (edgeBand > 0) {
    const minX = bounds.minX * cssWidth;
    const maxX = bounds.maxX * cssWidth;
    const minY = bounds.minY * cssHeight;
    const maxY = bounds.maxY * cssHeight;
    const inside = px >= minX - edgeBand && px <= maxX + edgeBand && py >= minY - edgeBand && py <= maxY + edgeBand;
    if (inside) {
      const nearLeft = Math.abs(px - minX) <= edgeBand;
      const nearRight = Math.abs(px - maxX) <= edgeBand;
      const nearTop = Math.abs(py - minY) <= edgeBand;
      const nearBottom = Math.abs(py - maxY) <= edgeBand;
      if ((nearLeft || nearRight) && (nearTop || nearBottom)) {
        if (nearLeft && nearTop) return "nw";
        if (nearRight && nearTop) return "ne";
        if (nearLeft && nearBottom) return "sw";
        return "se";
      }
      if (nearLeft) return py < (minY + maxY) / 2 ? "nw" : "sw";
      if (nearRight) return py < (minY + maxY) / 2 ? "ne" : "se";
      if (nearTop) return px < (minX + maxX) / 2 ? "nw" : "ne";
      if (nearBottom) return px < (minX + maxX) / 2 ? "sw" : "se";
    }
  }
  return null;
}
function resizeElementsFromHandle(elements, bounds, handle, point) {
  const anchor = getResizeAnchor(bounds, handle);
  const originalCorner = getResizeCorner(bounds, handle);
  const originalDx = originalCorner.x - anchor.x;
  const originalDy = originalCorner.y - anchor.y;
  let scaleX = originalDx === 0 ? 1 : (point.x - anchor.x) / originalDx;
  let scaleY = originalDy === 0 ? 1 : (point.y - anchor.y) / originalDy;
  scaleX = Math.max(0.12, scaleX);
  scaleY = Math.max(0.12, scaleY);
  const scaleSize = clamp((Math.abs(scaleX) + Math.abs(scaleY)) / 2, 0.2, 8);
  const resized = elements.map((element) => {
    const next = cloneElement(element);
    if (next.kind === "stroke") {
      next.points = element.kind === "stroke" ? element.points.map((strokePoint) => ({
        x: anchor.x + (strokePoint.x - anchor.x) * scaleX,
        y: anchor.y + (strokePoint.y - anchor.y) * scaleY
      })) : next.points;
      next.width = clamp(next.width * scaleSize, 0.5, 80);
    } else if (next.kind === "text") {
      next.x = anchor.x + (next.x - anchor.x) * scaleX;
      next.y = anchor.y + (next.y - anchor.y) * scaleY;
      next.fontSize = clamp(next.fontSize * scaleSize, 4, 96);
    } else {
      next.x = anchor.x + (next.x - anchor.x) * scaleX;
      next.y = anchor.y + (next.y - anchor.y) * scaleY;
      next.width = clamp(next.width * Math.abs(scaleX), 1e-3, 1);
      next.height = clamp(next.height * Math.abs(scaleY), 1e-3, 1);
    }
    return next;
  });
  shiftElementsInsidePage(resized);
  return resized;
}
function scaleElementsAroundBoundsCenter(elements, bounds, factor) {
  const center = {
    x: (bounds.minX + bounds.maxX) / 2,
    y: (bounds.minY + bounds.maxY) / 2
  };
  const resized = elements.map((element) => {
    const next = cloneElement(element);
    if (next.kind === "stroke") {
      next.points = next.points.map((strokePoint) => ({
        x: center.x + (strokePoint.x - center.x) * factor,
        y: center.y + (strokePoint.y - center.y) * factor
      }));
      next.width = clamp(next.width * factor, 0.5, 80);
    } else if (next.kind === "text") {
      next.x = center.x + (next.x - center.x) * factor;
      next.y = center.y + (next.y - center.y) * factor;
      next.fontSize = clamp(next.fontSize * factor, 4, 96);
    } else {
      next.x = center.x + (next.x - center.x) * factor;
      next.y = center.y + (next.y - center.y) * factor;
      next.width = clamp(next.width * factor, 1e-3, 1);
      next.height = clamp(next.height * factor, 1e-3, 1);
    }
    return next;
  });
  shiftElementsInsidePage(resized);
  return resized;
}
function getResizeAnchor(bounds, handle) {
  if (handle === "nw") {
    return { x: bounds.maxX, y: bounds.maxY };
  }
  if (handle === "ne") {
    return { x: bounds.minX, y: bounds.maxY };
  }
  if (handle === "sw") {
    return { x: bounds.maxX, y: bounds.minY };
  }
  return { x: bounds.minX, y: bounds.minY };
}
function getResizeCorner(bounds, handle) {
  if (handle === "nw") {
    return { x: bounds.minX, y: bounds.minY };
  }
  if (handle === "ne") {
    return { x: bounds.maxX, y: bounds.minY };
  }
  if (handle === "sw") {
    return { x: bounds.minX, y: bounds.maxY };
  }
  return { x: bounds.maxX, y: bounds.maxY };
}
function shiftElementsInsidePage(elements) {
  let box = normalizedElementsBounds(elements);
  if (!box) {
    return;
  }
  const width = box.maxX - box.minX;
  const height = box.maxY - box.minY;
  if (width > 0.98 || height > 0.98) {
    const factor = Math.min(
      width > 0 ? 0.98 / width : 1,
      height > 0 ? 0.98 / height : 1
    );
    const center = {
      x: (box.minX + box.maxX) / 2,
      y: (box.minY + box.maxY) / 2
    };
    for (const element of elements) {
      scaleElementAroundPointInPlace(element, center, factor);
    }
    box = normalizedElementsBounds(elements);
    if (!box) {
      return;
    }
  }
  let dx = 0;
  let dy = 0;
  if (box.minX < 0) {
    dx = -box.minX;
  } else if (box.maxX > 1) {
    dx = 1 - box.maxX;
  }
  if (box.minY < 0) {
    dy = -box.minY;
  } else if (box.maxY > 1) {
    dy = 1 - box.maxY;
  }
  if (dx === 0 && dy === 0) {
    return;
  }
  for (const element of elements) {
    translateElement(element, dx, dy);
  }
}
function scaleElementAroundPointInPlace(element, center, factor) {
  if (element.kind === "stroke") {
    element.points = element.points.map((point) => ({
      x: center.x + (point.x - center.x) * factor,
      y: center.y + (point.y - center.y) * factor
    }));
    element.width = clamp(element.width * factor, 0.5, 80);
    return;
  }
  element.x = center.x + (element.x - center.x) * factor;
  element.y = center.y + (element.y - center.y) * factor;
  if (element.kind === "text") {
    element.fontSize = clamp(element.fontSize * factor, 4, 96);
    return;
  }
  element.width = clamp(element.width * factor, 1e-3, 1);
  element.height = clamp(element.height * factor, 1e-3, 1);
}
function strokeContainsPoint(stroke, point, cssWidth, cssHeight, hitRadius = 10) {
  if (stroke.points.length < 2) {
    return false;
  }
  const px = point.x * cssWidth;
  const py = point.y * cssHeight;
  const radius = Math.max(1, hitRadius);
  const box = strokeBounds(stroke, cssWidth, cssHeight);
  if (!box || px < box.minX - radius || px > box.maxX + radius || py < box.minY - radius || py > box.maxY + radius) {
    return false;
  }
  for (let i = 1; i < stroke.points.length; i += 1) {
    const start = stroke.points[i - 1];
    const end = stroke.points[i];
    const distance = pointToSegmentDistance(
      px,
      py,
      start.x * cssWidth,
      start.y * cssHeight,
      end.x * cssWidth,
      end.y * cssHeight
    );
    if (distance <= radius) {
      return true;
    }
  }
  return false;
}
function pointToSegmentDistance(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  if (dx === 0 && dy === 0) {
    return Math.hypot(px - ax, py - ay);
  }
  const t = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy), 0, 1);
  const closestX = ax + t * dx;
  const closestY = ay + t * dy;
  return Math.hypot(px - closestX, py - closestY);
}
function normalizedDistance(a, b, cssWidth, cssHeight) {
  return Math.hypot((a.x - b.x) * cssWidth, (a.y - b.y) * cssHeight);
}
function inkPointsApproximatelyEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let index = 0; index < a.length; index += 1) {
    if (Math.abs(a[index].x - b[index].x) > 8e-4 || Math.abs(a[index].y - b[index].y) > 8e-4) {
      return false;
    }
  }
  return true;
}
function dedupeInkElements(elements) {
  const deduped = [];
  for (const element of elements) {
    if (element.kind !== "stroke") {
      deduped.push(element);
      continue;
    }
    const duplicateIndex = deduped.findIndex((candidate) => candidate.kind === "stroke" && (candidate.id === element.id || isSamePdfInkStrokeCandidate(candidate, element)));
    if (duplicateIndex === -1) {
      deduped.push(element);
      continue;
    }
    const existing = deduped[duplicateIndex];
    deduped[duplicateIndex] = existing.kind === "stroke" ? chooseInkStrokeToKeep(existing, element) : element;
  }
  return deduped;
}
function chooseInkStrokeToKeep(existing, candidate) {
  if (existing.pdfSaved === true && candidate.pdfSaved !== true) {
    return candidate;
  }
  if (existing.saved && !candidate.saved) {
    return candidate;
  }
  if (candidate.externalDirty === true && existing.externalDirty !== true) {
    return candidate;
  }
  if (candidate.points.length > existing.points.length * 1.2) {
    return candidate;
  }
  return existing;
}
function isSamePdfInkStrokeCandidate(a, b) {
  if (a.pageIndex !== b.pageIndex) {
    return false;
  }
  if (normalizeHexColor(a.color) !== normalizeHexColor(b.color)) {
    return false;
  }
  if (Math.abs(a.opacity - b.opacity) > 0.06 || Math.abs(a.width - b.width) > Math.max(2, Math.min(a.width, b.width) * 0.35)) {
    return false;
  }
  const aPdfPoints = pdfIdentityPoints(a);
  const bPdfPoints = pdfIdentityPoints(b);
  if (inkPointsApproximatelyEqual(aPdfPoints, bPdfPoints)) {
    return true;
  }
  const aBounds = normalizedStrokeBounds({ ...a, points: aPdfPoints });
  const bBounds = normalizedStrokeBounds({ ...b, points: bPdfPoints });
  if (!aBounds || !bBounds) {
    return false;
  }
  const boundsClose = Math.abs(aBounds.minX - bBounds.minX) <= 6e-3 && Math.abs(aBounds.minY - bBounds.minY) <= 6e-3 && Math.abs(aBounds.maxX - bBounds.maxX) <= 6e-3 && Math.abs(aBounds.maxY - bBounds.maxY) <= 6e-3;
  if (!boundsClose) {
    return false;
  }
  const aFirst = aPdfPoints[0];
  const aLast = aPdfPoints[aPdfPoints.length - 1];
  const bFirst = bPdfPoints[0];
  const bLast = bPdfPoints[bPdfPoints.length - 1];
  if (!aFirst || !aLast || !bFirst || !bLast) {
    return false;
  }
  return Math.hypot(aFirst.x - bFirst.x, aFirst.y - bFirst.y) <= 0.012 && Math.hypot(aLast.x - bLast.x, aLast.y - bLast.y) <= 0.012;
}
function collectPdfPathHints(rootEl) {
  const hints = /* @__PURE__ */ new Set();
  const add = (value) => {
    if (!value) {
      return;
    }
    if (value.toLowerCase().includes(".pdf")) {
      hints.add(value);
    }
  };
  const attrs = [
    "alt",
    "aria-label",
    "data-file",
    "data-href",
    "data-linkpath",
    "data-path",
    "data-src",
    "href",
    "src",
    "title"
  ];
  for (const attr of attrs) {
    add(rootEl.getAttribute(attr));
  }
  const hintElements = Array.from(rootEl.querySelectorAll("a, embed, iframe, object, .internal-embed, .media-embed")).filter(isHTMLElement);
  for (const el of hintElements) {
    for (const attr of attrs) {
      add(el.getAttribute(attr));
    }
  }
  return Array.from(hints);
}
function cleanPdfPathHint(rawPath) {
  let value = rawPath.trim();
  if (!value) {
    return null;
  }
  try {
    value = decodeURIComponent(value);
  } catch {
  }
  const obsidianFileMatch = value.match(/[?&]file=([^&]+)/i);
  if (obsidianFileMatch?.[1]) {
    try {
      value = decodeURIComponent(obsidianFileMatch[1]);
    } catch {
      value = obsidianFileMatch[1];
    }
  }
  value = value.replace(/^app:\/\/local\//i, "").replace(/^obsidian:\/\/open\?/i, "").replace(/^file:\/+/i, "").replace(/^vault:\/+/i, "").replace(/^\/+/, "").split("#")[0].split("?")[0].trim();
  const pdfIndex = value.toLowerCase().indexOf(".pdf");
  if (pdfIndex === -1) {
    return null;
  }
  return value.slice(0, pdfIndex + 4).replace(/\\/g, "/");
}
function makeStrokeId() {
  return `stroke-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function makeInkGroupId() {
  return `ink-group-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function safeAnnotationKey(path) {
  return encodeURIComponent(path).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}
function focusTextEditor(editor) {
  editor.focus({ preventScroll: true });
  editor.select();
  window.setTimeout(() => {
    if (activeDocument.activeElement !== editor) {
      editor.focus({ preventScroll: true });
    }
    editor.select();
  }, 0);
}
async function validatePdfWriteCandidate(buffer, expectedPageCount) {
  const bytes = new Uint8Array(buffer);
  const headerLimit = Math.min(bytes.length - 4, 1024);
  let hasPdfHeader = false;
  for (let index = 0; index <= headerLimit; index += 1) {
    if (bytes[index] === 37 && bytes[index + 1] === 80 && bytes[index + 2] === 68 && bytes[index + 3] === 70 && bytes[index + 4] === 45) {
      hasPdfHeader = true;
      break;
    }
  }
  if (!hasPdfHeader) {
    throw new Error("PDF write validation failed: missing PDF header.");
  }
  const pdf = await import_pdf_lib.PDFDocument.load(buffer, { ignoreEncryption: true, updateMetadata: false });
  if (expectedPageCount <= 0 || pdf.getPageCount() !== expectedPageCount) {
    throw new Error(`PDF write validation failed: page count ${pdf.getPageCount()}/${expectedPageCount}.`);
  }
  for (const page of pdf.getPages()) {
    const { height, width } = page.getSize();
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      throw new Error("PDF write validation failed: invalid page dimensions.");
    }
  }
}
async function fingerprintPdfBytes(buffer, mtime) {
  return {
    mtime,
    sha256: await sha256Hex(buffer),
    size: buffer.byteLength
  };
}
function arrayBuffersEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  if (a.byteLength === 0) {
    return true;
  }
  if (a.byteLength % 4 === 0) {
    const viewA2 = new Uint32Array(a);
    const viewB2 = new Uint32Array(b);
    for (let index = 0; index < viewA2.length; index += 1) {
      if (viewA2[index] !== viewB2[index]) {
        return false;
      }
    }
    return true;
  }
  const viewA = new Uint8Array(a);
  const viewB = new Uint8Array(b);
  for (let index = 0; index < viewA.length; index += 1) {
    if (viewA[index] !== viewB[index]) {
      return false;
    }
  }
  return true;
}
function toPdfBytes(view) {
  if (view.byteOffset === 0 && view.byteLength === view.buffer.byteLength) {
    return view.buffer;
  }
  const copy = new ArrayBuffer(view.byteLength);
  new Uint8Array(copy).set(view);
  return copy;
}
function yieldForCollector(delayMs = 260) {
  return new Promise((resolve) => {
    window.setTimeout(() => window.setTimeout(resolve, delayMs), 0);
  });
}
async function sha256Hex(buffer) {
  if (!activeWindow.crypto?.subtle) {
    return fallbackBufferHash(buffer);
  }
  const digest = await activeWindow.crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
function fallbackBufferHash(buffer) {
  const bytes = new Uint8Array(buffer);
  let h1 = 2166136261;
  let h2 = 16777619;
  let h3 = 2654435769;
  let h4 = 2246822507;
  for (const byte of bytes) {
    h1 = Math.imul(h1 ^ byte, 16777619);
    h2 = Math.imul(h2 + byte, 2246822507);
    h3 = Math.imul(h3 ^ byte + h1, 3266489909);
    h4 = Math.imul(h4 + (byte ^ h2), 668265263);
  }
  return [h1, h2, h3, h4, bytes.byteLength, h1 ^ h3, h2 ^ h4, h1 ^ h2 ^ h3 ^ h4].map((part) => (part >>> 0).toString(16).padStart(8, "0")).join("");
}
function isPdfFingerprint(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const candidate = value;
  return typeof candidate.sha256 === "string" && /^[0-9a-f]{64}$/i.test(candidate.sha256) && typeof candidate.size === "number" && Number.isFinite(candidate.size) && (candidate.mtime === void 0 || typeof candidate.mtime === "number");
}
function normalizeHexColor(value) {
  const trimmed = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(trimmed)) {
    return trimmed;
  }
  if (/^#[0-9a-f]{3}$/i.test(trimmed)) {
    return `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`;
  }
  return "#000000";
}
function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((part) => clamp(Math.round(part), 0, 255).toString(16).padStart(2, "0")).join("")}`;
}
function cssColorToHex(value) {
  const normalized = normalizeHexColor(value);
  if (normalized !== "#000000" || /^#0{3,6}$/i.test(value.trim())) {
    return normalized;
  }
  const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) {
    return null;
  }
  return rgbToHex(Number(match[1]), Number(match[2]), Number(match[3]));
}
function readableTextColor(backgroundColor) {
  const hex = cssColorToHex(backgroundColor) ?? "#ffffff";
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5 ? "#ffffff" : "#000000";
}
function estimateTextEditorWidth(text, fontSize, fallbackWidth) {
  const longestLine = text.split(/\r?\n/).reduce((max, line) => Math.max(max, line.length), 0);
  const estimated = longestLine * Math.max(6, fontSize) * 0.62;
  return Math.max(fallbackWidth, estimated);
}
function isInkElement(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const item = value;
  if (typeof item.id !== "string" || typeof item.pageIndex !== "number" || typeof item.saved !== "boolean") {
    return false;
  }
  if (item.kind === "stroke") {
    const stroke = item;
    return typeof stroke.color === "string" && typeof stroke.opacity === "number" && typeof stroke.width === "number" && Array.isArray(stroke.points) && stroke.points.every((point) => typeof point?.x === "number" && typeof point?.y === "number");
  }
  if (item.kind === "text") {
    const text = item;
    return typeof text.text === "string" && typeof text.x === "number" && typeof text.y === "number" && typeof text.fontSize === "number";
  }
  if (item.kind === "cover") {
    const cover = item;
    return typeof cover.x === "number" && typeof cover.y === "number" && typeof cover.width === "number" && typeof cover.height === "number";
  }
  if (item.kind === "image") {
    const image = item;
    return typeof image.dataUrl === "string" && image.dataUrl.startsWith("data:image/") && typeof image.x === "number" && typeof image.y === "number" && typeof image.width === "number" && typeof image.height === "number" && typeof image.opacity === "number";
  }
  return false;
}
function markElementSaved(element) {
  return { ...element, saved: true };
}
function markElementUnsaved(element) {
  if (element.kind === "stroke") {
    return { ...element, pdfSaved: element.pdfSaved, saved: false };
  }
  const next = { ...element, saved: false };
  return next;
}
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean, 16);
  return {
    b: (value >> 0 & 255) / 255,
    g: (value >> 8 & 255) / 255,
    r: (value >> 16 & 255) / 255
  };
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  __PdftionPlugin
});
