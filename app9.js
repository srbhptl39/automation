let dbloc = 0;

function init() {
    document.siteName = $("title").html();
    var e = `<header>\n   <div id="nav">\n   </div>\n</header>\n<div>\n<div id="content" style="padding-top: ${UI.header_padding}px;${UI.fixed_footer?" padding-bottom: clamp(170px, 100%, 300px);":""}">\n</div>\n<div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="SearchModelLabel"></h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true"></span>\n        </button>\n      </div>\n      <div class="modal-body" id="modal-body-space">\n      </div>\n      <div class="modal-footer" id="modal-body-space-buttons">\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<footer class="footer mt-auto py-3 text-muted ${UI.footer_style_class}" style="${UI.fixed_footer?"position: fixed; ":""}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-sm-end"> <a href="#">Back to top</a> </p> ${UI.credit?'<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="" target="_blank"></a>, based on Open Source Softwares.</p>':""} <p>Ã‚Â© ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>, All Rights Reserved.</p> </div> </footer>\n `;
    $("body").html(e)
}
const Os = {
    isWindows: navigator.platform.toUpperCase().indexOf("WIN") > -1,
    isMac: navigator.platform.toUpperCase().indexOf("MAC") > -1,
    isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
    isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

function getDocumentHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}

function gdidecode(e) {
    var t = ["join", "toString", "114773LJlqPi", "charCodeAt", "1evaKJu", "128429mQiVMM", "179727icrnig", "1276161MsgKkV", "map", "111987FmCZVm", "6IEPbgT", "1924817UdCjIN", "328673bHHLnC", "14sGLkvR"],
        n = a;

    function a(e, n) {
        return t[e -= 350]
    }
    return function (e, t) {
        for (var n = a;;) try {
            if (999629 === parseInt(n(359)) * -parseInt(n(357)) + parseInt(n(352)) + parseInt(n(350)) + -parseInt(n(353)) * -parseInt(n(351)) + parseInt(n(354)) * -parseInt(n(360)) + -parseInt(n(362)) + parseInt(n(361))) break;
            e.push(e.shift())
        } catch (t) {
            e.push(e.shift())
        }
    }(t), decodeURIComponent(atob(e).split("")[n(363)]((function (e) {
        var t = n;
        return "%" + ("00" + e[t(358)](0)[t(356)](16)).slice(-2)
    }))[n(355)](""))
}

function render(u) {
    // console.log(u);
    let url = u.toString();
    url = url.replace(/\[/g, '%5B');
    url = url.replace(/\]/g, '%5D');
    let e = url;
    // location.replace(e);
    // console.log(e);
    e.indexOf("?") > 0 && (e = e.substr(0, e.indexOf("?"))), title(e), nav(e);
    window.MODEL.is_search_page ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    }, render_search_result_list()) : e.match(/\/\d+:$/g) || "/" == e.substr(-1) ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    },  (dbloc? adlist(e):list(e)) ) : file(e)
}

function title(e) {
    e = decodeURI(e);
    var t = window.current_drive_order || 0,
        n = window.drive_names[t];
    e = e.replace(`/${t}:`, "");
    var a = window.MODEL;
    a.is_search_page ? $("title").html(`${n} - Search results for ${a.q} `) : $("title").html(`${n} - ${e}`)
}

function nav(e) {
    var t = window.MODEL,
        a = "",
        o = window.current_drive_order || 0;
    a += `<nav class="navbar navbar-expand-lg${UI.fixed_header?" fixed-top":""} ${UI.header_style_class}">\n    <div class="container-fluid">\n  <a class="navbar-brand" href="/">${UI.logo_image?'<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="'+UI.height+'" width="'+UI.logo_width+'">':UI.logo_link_name}</a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span ><i class="fa fa-search"></i></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n      <li class="nav-item">\n        <a class="nav-link" href="/${o}:/">Home</a>\n      </li>`;
    var i = window.drive_names,
        l = window.drive_names[o];
    if (a += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${l}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`, i.forEach(((e, t) => {
            a += `<a class="dropdown-item"  href="/${t}:/">${e}</a>`
        })), a += "</div></li>", a += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Current Path</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item"  href="/">> Home</a>', !t.is_search_page) {
        var s = e.trim("").split("/"),
            r = "/";
        if (s.length > 1)
            for (var d in s.shift(), s) {
                var c = s[d];
                n1 = decodeURIComponent(c), n2 = n1.replace(/\?.+/g, "$'"), n2.length > 15 ? n = n2.slice(0, 5) + "..." : n = n2.slice(0, 15);
                var p = (r += c + "/").split(".").pop().toLowerCase();
                if ("|mp3/|aac/|wma/|wpl/|aif/|cda/|mpa/|wav/|ogg/|mp4/|mkv/|mov/|flac/|m4a/|pdf/|jpg/|png/|jpeg/|gif/|md/|zip/|rar/|exe/|tar/|txt/|html/|7z/|arj/|deb/|pkg/|rpm/|tar.gz/|z/|bin/|dmg/|iso/|toast/|vcd/|csv/|dat/|db/|dbf/|log/|mdv/|sav/|sql/|xml/|email/|vcf/|apk/|bat/|bin/|cgi/|jar/|py/|msi/|wsf/|fnt/|fon/|otf/|ttf/|ai/|bmp/|ico/|ps/|psd/|svg/|tif/|tiff/|asp/|aspx/|cer/|cfm/|cgi/|pl/|css/|htm/|html/|js/|jsp/|part/|php/|rss/|xhtml/|key/|odp/|pps/|ppt/|pptx/|pem/|ppk/|java/|sh/|vb/|ods/|xls/|xlsm/|xlsx/|3gp/|flv/|m4v/|mpg/|mpeg/|avi/|doc/|docx/|rtf/|".indexOf(`|${p}|`) >= 0 && (r = r.slice(0, -1)), "" === n) break;
                a += `<a class="dropdown-item"  href="${r}">> ${n}</a>`
            }
    }
    a += `</div></li><li class="nav-item">\n    <a class="nav-link" href="${UI.contact_link}" target="_blank">Join Telegram</a>\n  </li>`;
    var m = t.is_search_page && t.q || "";
    var g = `\n</ul>\n<form class="d-flex" method="get" action="/${o}:search">\n<input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="${m}" required>\n<button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>\n</form>\n</div>\n</div>\n</nav>\n`;
    t.root_type < 2 && (a += g), $("#nav").html(a)
}

function requestListPath(e, t, n, a) {
    var o = {
        password: t.password || null,
        page_token: t.page_token || null,
        page_index: t.page_index || 0
    };
    $.post(e, o, (function (t, i) {
        var l = jQuery.parseJSON(gdidecode(read(t)));
        l && l.error && "401" == l.error.code ? a && a(e) : l && l.data && n && n(l, e, o)
    }))
}

function requestSearch(e, t) {
    var n = {
        q: e.q || null,
        page_token: e.page_token || null,
        page_index: e.page_index || 0
    };
    $.post(`/${window.current_drive_order}:search`, n, (function (e, a) {
        var o = jQuery.parseJSON(gdidecode(read(e)));
        o && o.data && t && t(o, n)
    }))
}

function list(e) {
    var t = `<div class="container">${UI.fixed_header?"<br>":""}\n\t<div id="update"></div>\n    <div id="head_md" style="display:none; padding: 20px 20px;"></div>\n    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">\n  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">\n    <ol class="breadcrumb" id="folderne"><li class="breadcrumb-item"><a href="/">Home</a></li>`,
        a = window.location.pathname,
        o = (decodeURIComponent(a).split("/"), a.trim("").split("/")),
        i = "/";
    if (o.length > 1)
        for (var l in o.shift(), o) {
            var s = o[l];
            n1 = decodeURIComponent(s), n2 = n1.replace(/\?.+/g, "$'"), n2.length > 15 ? n = n2.slice(0, 5) + "..." : n = n2.slice(0, 15);
            (i += s + "/").split(".").pop().toLowerCase();
            if ("" === n) break;
            t += `<li class="breadcrumb-item"><a href="${i}">${n}</a></li>`
        }
    t += `</ol>\n  </nav>\n  </div>\n    <div id="list" class="list-group text-break">\n    </div>\n  \t<div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count">Total <span class="number text-center"></span> items</div>\n    <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n    </div>\n    `, $("#content").html(t);
    var r = localStorage.getItem("password" + e);
    $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div></div>`), $("#readme_md").hide().html(""), $("#head_md").hide().html(""), requestListPath(e, {
        password: r
    }, (function e(t, n, a) {
        $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex), $("#spinner").remove(), null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_files_to_list(n, t.data.files)) : (append_files_to_list(n, t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
            var t = $(this).scrollTop(),
                o = getDocumentHeight();
            if (t + $(this).height() > o - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock) return;
                window.scroll_status.loading_lock = !0, $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let t = $("#list");
                requestListPath(n, {
                    password: a.password,
                    page_token: t.data("nextPageToken"),
                    page_index: t.data("curPageIndex") + 1
                }, e, null)
            }
        })), window.scroll_status.event_bound = !0)), !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }), (function (e) {
        $("#spinner").remove();
        var t = prompt("Directory encryption, please enter the password", "");
        localStorage.setItem("password" + e, t), null != t && "" != t ? list(e) : history.go(-1)
    }))


}

function adlist(e) {
    var t = `<div class="container">${UI.fixed_header?"<br>":""}\n\t<div id="update"></div>\n    <div id="head_md" style="display:none; padding: 20px 20px;"></div>\n    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">\n  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">\n    <ol class="breadcrumb" id="folderne"><li class="breadcrumb-item"><a href="/">Home</a></li>`,
        a = window.location.pathname,
        o = (decodeURIComponent(a).split("/"), a.trim("").split("/")),
        i = "/";
    if (o.length > 1)
        for (var l in o.shift(), o) {
            var s = o[l];
            n1 = decodeURIComponent(s), n2 = n1.replace(/\?.+/g, "$'"), n2.length > 15 ? n = n2.slice(0, 5) + "..." : n = n2.slice(0, 15);
            (i += s + "/").split(".").pop().toLowerCase();
            if ("" === n) break;
            t += `<li class="breadcrumb-item"><a href="${i}">${n}</a></li>`
        }
    t += `</ol>\n  </nav>\n  </div>\n    <div id="list" class="list-group text-break">\n    </div>\n  \t<div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count">Total <span class="number text-center"></span> items</div>\n   <img src="https://cdn.nulls.in/src/admeme.jpeg" alt="Disable Adblock" width="300">  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  <h5>We Will not show you Ads, We Promise!!</h5>  </div>\n    `, $("#content").html(t);
    var r = localStorage.getItem("password" + e);
    $("#list").html(`<div class="d-flex justify-content-center"></div>`), $("#readme_md").hide().html(""), $("#head_md").hide().html(""), requestListPath(e, {
        password: r
    }, (function e(t, n, a) {}), (function (e) {
        $("#spinner").remove();
        var t = prompt("Directory encryption, please enter the password", "");
        localStorage.setItem("password" + e, t), null != t && "" != t ? list(e) : history.go(-1)
    }))
}

function append_files_to_list(e, t) {
    // console.log(e);
    t = filter(t);
    // console.log(t.filter(i=>!i.name.toLowerCase().includes('loki')));
    // t = t.filter(i => !i.name.toLowerCase().includes(' xxx '));
    // t = t.filter(i => !i.name.toLowerCase().includes('.xxx.'));
    // t = t.filter(i => !i.name.toLowerCase().includes('-xxx'));
    // t = t.filter(i => !i.name.toLowerCase().includes(' sex '));
    // t = t.filter(i => !i.name.toLowerCase().includes('.sex.'));
    // t = t.filter(i => !i.name.toLowerCase().includes('sexify'));
    // t = t.filter(i => !i.name.toLowerCase().includes('hentai'));
    // t = t.filter(i => !i.name.toLowerCase().includes('porn'));
    // t = t.filter(i => !i.name.toLowerCase().includes('nsfw'));
    // t = t.filter(i => !i.name.toLowerCase().includes('brazzer'));
    // t = t.filter(i => !i.name.toLowerCase().includes('nubile'));
    var n = $("#list"),
        a = null === n.data("nextPageToken"),
        o = "0" == n.data("curPageIndex");
    html = "";
    let l = [];
    for (i in t) {
        var s = t[i],
            r = e + (s.name + "/").replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F");
        if (null == s.size && (s.size = ""), s.modifiedTime = utc2delhi(s.modifiedTime), s.size = formatFileSize(s.size), "application/vnd.google-apps.folder" == s.mimeType) html += `<a href="${r}" style="color: ${UI.folder_text_color};" class="list-group-item list-group-item-action"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30\tc0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26\tc0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${s.name} ${UI.display_time?'<span class="badge bg-info float-sm-end"> '+s.modifiedTime+" </span>":""}</a>`;
        else {
            var d = s.name,
                c = (r = UI.second_domain_for_dl ? UI.downloaddomain + e + d.replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F") : window.location.origin + e + d.replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F"), e + d.replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F"));
            s.name;
            a && "README.md" == s.name && UI.render_readme_md && get_file(r, s, (function (e) {
                markdown("#readme_md", e), $("img").addClass("img-fluid")
            })), "HEAD.md" == s.name && UI.render_head_md && get_file(r, s, (function (e) {
                markdown("#head_md", e), $("img").addClass("img-fluid")
            }));
            var p = r.split(".").pop().toLowerCase();
            c += "?a=view", " view", html += '<div class="list-group-item list-group-item-action">', "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g transform="translate(0 -1028.362)"><path d="m 12,1028.3622 c -6.62589,0 -12.00002,5.3741 -12.00002,12 0,6.6259 5.37413,12 12.00002,12 6.62589,0 12.00002,-5.3741 12.00002,-12 0,-6.6259 -5.37413,-12 -12.00002,-12 z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#50b748" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/><path d="m 13,1035.162 a 2.5,2.5 0 0 0 -2.5,2.5 2.5,2.5 0 0 0 0.87695,1.9004 l -2.45117,0 A 2,2 0 0 0 9.5,1038.162 a 2,2 0 0 0 -2,-2 2,2 0 0 0 -2,2 2,2 0 0 0 0.64843,1.4707 C 5.77,1039.775 5.5,1040.133 5.5,1040.5624 l 0,4 c 0,0.554 0.44599,1 1,1 l 8,0 c 0.55401,0 1,-0.446 1,-1 l 0,-0.8008 3,1.8008 0,-6 -3,1.8008 0,-0.8008 c 0,-0.5194 -0.39686,-0.9294 -0.90235,-0.9805 a 2.5,2.5 0 0 0 0.90235,-1.9199 2.5,2.5 0 0 0 -2.5,-2.5 z m 0,1 a 1.5,1.5 0 0 1 1.5,1.5 1.5,1.5 0 0 1 -1.5,1.5 1.5,1.5 0 0 1 -1.5,-1.5 1.5,1.5 0 0 1 1.5,-1.5 z m -5.5,1 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z m 2,6.4004 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" style="isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#fff" color="#000" enable-background="accumulate" overflow="visible"/></g></svg>' : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#F47920" d="M21 5l-5-5H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5z"/><g fill="#FFF"><path d="M18 5a2 2 0 0 1-2-2V0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5h-3zm-9 6.749L7 13.5l2 1.755V17l-4-3.5L9 10v1.749zM11 18H9.5L13 9h1.5L11 18zm4-1v-1.745l2-1.755-2-1.751V10l4 3.5-4 3.5z" opacity=".1"/><path d="M7 13.5l2-1.751V10l-4 3.5L9 17v-1.745zM17 13.5l-2-1.751V10l4 3.5-4 3.5v-1.745zM14.5 9H13l-3.5 9H11z" opacity=".8"/></g></svg>' : "|zip|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49822,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#4bbfeb" d="m 4.99822,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49466,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#4bbfeb" fill-rule="evenodd" d="M 15.498047 7 L 15.498047 8 L 14.498047 8 L 14.498047 9 L 15.498047 9 L 15.498047 10 L 14.498047 10 L 14.498047 11 L 15.498047 11 L 15.498047 12 L 14.498047 12 L 14.498047 13 L 15.498047 13 L 15.498047 14 L 14.498047 14 L 14.498047 15 L 15.498047 15 L 15.498047 16 L 14.498047 16 L 14.498047 17 L 15.498047 17 L 15.498047 18 L 14.998047 18 A 0.50004997 0.50004997 0 0 0 14.498047 18.5 L 14.498047 19.464844 A 0.50004997 0.50004997 0 0 0 14.498047 19.5 L 14.498047 20 L 14.498047 20.5 C 14.498047 21.3224 15.175696 22 15.998047 22 C 16.820398 22 17.498047 21.3224 17.498047 20.5 L 17.498047 20.033203 A 0.50004997 0.50004997 0 0 0 17.498047 20 L 17.498047 19.5 L 17.498047 18.5 A 0.50004997 0.50004997 0 0 0 16.998047 18 L 16.498047 18 L 16.498047 17 L 17.498047 17 L 17.498047 16 L 16.498047 16 L 16.498047 15 L 17.498047 15 L 17.498047 14 L 16.498047 14 L 16.498047 13 L 17.498047 13 L 17.498047 12 L 16.498047 12 L 16.498047 11 L 17.498047 11 L 17.498047 10 L 16.498047 10 L 16.498047 9 L 17.498047 9 L 17.498047 8 L 16.498047 8 L 16.498047 7 L 15.498047 7 z M 15.498047 19 L 16.498047 19 L 16.498047 19.5 L 16.498047 20.5 C 16.498047 20.7857 16.283696 21 15.998047 21 C 15.712398 21 15.498047 20.7857 15.498047 20.5 L 15.498047 20.033203 A 0.50004997 0.50004997 0 0 0 15.498047 20 L 15.498047 19.5 L 15.498047 19 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 13.490234 24.990234 A 0.50005 0.50005 0 0 0 12.998047 25.496094 L 12.998047 29.498047 A 0.50005 0.50005 0 1 0 13.998047 29.498047 L 13.998047 25.496094 A 0.50005 0.50005 0 0 0 13.490234 24.990234 z M 11.511719 24.998047 A 0.50005 0.50005 0 0 0 11.460938 25 L 8.5058594 25 A 0.50005 0.50005 0 1 0 8.5058594 26 L 10.498047 26 L 8.1347656 29.154297 A 0.50005 0.50005 0 0 0 8.4375 29.992188 A 0.50019268 0.50019268 0 0 0 8.4472656 29.994141 A 0.50005 0.50005 0 0 0 8.5058594 29.998047 L 11.494141 29.998047 A 0.50005 0.50005 0 1 0 11.494141 28.998047 L 9.5019531 28.998047 L 11.865234 25.841797 A 0.50005 0.50005 0 0 0 11.75 25.066406 A 0.50005 0.50005 0 0 0 11.720703 25.050781 A 0.50005 0.50005 0 0 0 11.705078 25.042969 A 0.50005 0.50005 0 0 0 11.675781 25.03125 A 0.50005 0.50005 0 0 0 11.658203 25.025391 A 0.50005 0.50005 0 0 0 11.511719 24.998047 z M 16.498047 25.003906 C 15.723646 25.003906 15.086569 25.606569 15.013672 26.363281 C 15.013355 26.366575 15.012014 26.369747 15.011719 26.373047 A 0.50005 0.50005 0 0 0 14.998047 26.498047 C 14.998039 26.500027 14.998047 26.501925 14.998047 26.503906 L 14.998047 29.498047 A 0.50005 0.50005 0 1 0 15.998047 29.498047 L 15.998047 27.910156 C 16.155295 27.966775 16.322382 28.003906 16.498047 28.003906 C 17.320552 28.003906 17.998047 27.326406 17.998047 26.503906 C 17.998047 25.681406 17.320552 25.003906 16.498047 25.003906 z M 16.498047 26.003906 C 16.780112 26.003906 16.998047 26.221906 16.998047 26.503906 C 16.998047 26.786006 16.780112 27.003906 16.498047 27.003906 C 16.215982 27.003906 15.998047 26.786006 15.998047 26.503906 L 15.998047 26.498047 C 16.001131 26.218978 16.217997 26.003906 16.498047 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>' : "|rar|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"><g transform="translate(81.429 -934.505)"><path fill="#fc987a" d="m -31.428571,936.50503 c -26.50967,0 -48,21.49033 -48,48.00002 0,26.50955 21.49033,47.99995 48,47.99995 26.5096696,0 48,-21.4904 48,-47.99995 l -48,-48.00002 z"/><path fill="#f8f6de" d="m -31.428571,936.50503 0,48.00002 48,0 -48,-48.00002 z" opacity=".4"/><path style="line-height:125%;-inkscape-font-specification:Ubuntu Medium" fill="#f8f6de" d="M 54.78125 56.5 C 54.09791 56.500018 53.304161 56.527101 52.4375 56.59375 C 51.57083 56.643767 50.766664 56.739601 50 56.90625 L 50 74 L 53.15625 74 L 53.15625 67.4375 L 54.6875 67.4375 L 55.15625 67.4375 C 55.322909 67.437507 55.516659 67.422923 55.75 67.40625 C 56.066659 67.806256 56.414575 68.264589 56.78125 68.78125 C 57.147907 69.281255 57.508324 69.822921 57.875 70.40625 C 58.258323 70.97292 58.633323 71.570836 59 72.1875 C 59.366655 72.787501 59.714572 73.400001 60.03125 74 L 63.5625 74 C 63.262485 73.350001 62.914568 72.666668 62.53125 72 C 62.147902 71.316669 61.729153 70.664587 61.3125 70.03125 C 60.89582 69.381255 60.493737 68.800005 60.09375 68.25 C 59.693738 67.700006 59.347905 67.22709 59.03125 66.84375 C 61.347903 66.010425 62.499985 64.41251 62.5 62.0625 C 62.499985 60.17918 61.833319 58.791682 60.5 57.875 C 59.183322 56.95835 57.281241 56.500018 54.78125 56.5 z M 55 59.21875 C 55.616659 59.218765 56.170825 59.275015 56.6875 59.375 C 57.204157 59.458348 57.664574 59.595848 58.03125 59.8125 C 58.414573 60.029181 58.706239 60.320847 58.90625 60.6875 C 59.106239 61.05418 59.187489 61.497929 59.1875 62.03125 C 59.187489 62.597928 59.106239 63.070844 58.90625 63.4375 C 58.706239 63.804177 58.39999 64.095843 58 64.3125 C 57.616657 64.529176 57.145824 64.666676 56.5625 64.75 C 55.979159 64.833342 55.297909 64.875009 54.53125 64.875 L 53.15625 64.875 L 53.15625 59.28125 C 53.722911 59.231265 54.333327 59.218765 55 59.21875 z M 70.21875 60.59375 C 69.385411 60.593763 68.608329 60.64793 67.875 60.78125 C 67.141663 60.914596 66.570831 61.05418 66.1875 61.1875 L 66.5625 63.625 C 66.929164 63.491677 67.416663 63.381261 68 63.28125 C 68.583329 63.181261 69.206245 63.125011 69.90625 63.125 C 70.42291 63.125011 70.85416 63.210427 71.1875 63.34375 C 71.537492 63.477094 71.831242 63.65626 72.03125 63.90625 C 72.247908 64.139593 72.385408 64.433343 72.46875 64.75 C 72.552075 65.066676 72.593741 65.400009 72.59375 65.75 L 72.59375 66.25 C 72.177075 66.150008 71.772909 66.064591 71.40625 66.03125 C 71.039576 65.981258 70.708327 65.968758 70.375 65.96875 C 69.658328 65.968758 68.947912 66.037508 68.28125 66.1875 C 67.631246 66.320841 67.062497 66.541674 66.5625 66.875 C 66.062498 67.191673 65.674998 67.60834 65.375 68.125 C 65.091666 68.641672 64.937499 69.281255 64.9375 70.03125 C 64.937499 70.814587 65.062499 71.466669 65.3125 72 C 65.579165 72.533335 65.956248 72.979168 66.40625 73.3125 C 66.872914 73.645834 67.412497 73.88125 68.0625 74.03125 C 68.712495 74.18125 69.435411 74.25 70.21875 74.25 C 71.402076 74.25 72.472908 74.18125 73.40625 74.03125 C 74.35624 73.897917 75.064572 73.7875 75.53125 73.6875 L 75.53125 65.75 C 75.531238 64.983342 75.433322 64.289593 75.25 63.65625 C 75.083322 63.006261 74.791656 62.450012 74.375 62 C 73.97499 61.550012 73.433324 61.218763 72.75 60.96875 C 72.066659 60.718763 71.218743 60.593763 70.21875 60.59375 z M 84.28125 60.625 C 83.214577 60.625013 82.258328 60.737513 81.375 60.9375 C 80.50833 61.120846 79.770831 61.314596 79.1875 61.53125 L 79.1875 74 L 82.21875 74 L 82.21875 63.5 C 82.368745 63.450011 82.633328 63.410427 83 63.34375 C 83.383327 63.277094 83.72916 63.250011 84.0625 63.25 C 84.645826 63.250011 85.160409 63.275011 85.59375 63.375 C 86.043741 63.458344 86.406241 63.541677 86.65625 63.625 L 87.15625 61.09375 C 87.00624 61.043763 86.81249 60.987513 86.5625 60.9375 C 86.312491 60.870846 86.047908 60.814596 85.78125 60.78125 C 85.514575 60.731263 85.266659 60.70418 85 60.6875 C 84.733326 60.65418 84.481243 60.625013 84.28125 60.625 z M 70.8125 68.125 C 71.195826 68.125006 71.558326 68.168756 71.875 68.21875 C 72.191658 68.268756 72.427075 68.325006 72.59375 68.375 L 72.59375 71.71875 C 72.110408 71.818752 71.402076 71.875002 70.46875 71.875 C 69.702078 71.875002 69.106245 71.735419 68.65625 71.46875 C 68.206246 71.185419 67.968746 70.68542 67.96875 69.96875 C 67.968746 69.602088 68.052079 69.295838 68.21875 69.0625 C 68.385412 68.812505 68.608329 68.633339 68.875 68.5 C 69.158328 68.366672 69.447911 68.268756 69.78125 68.21875 C 70.131244 68.168756 70.47916 68.125006 70.8125 68.125 z " font-family="Ubuntu" font-size="25" font-weight="500" letter-spacing="0" transform="translate(-81.429 934.505)" word-spacing="0"/></g></svg>' : "|tar|.7z|.gz|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><rect width="10" height="6" x="47" y="112" fill="#00b8df"/><rect width="10" height="6" x="37" y="118" fill="#00b8df"/><rect width="10" height="6" x="47" y="100" fill="#00b8df"/><rect width="10" height="6" x="37" y="106" fill="#00b8df"/><rect width="10" height="6" x="47" y="88" fill="#00b8df"/><rect width="10" height="6" x="37" y="94" fill="#00b8df"/><rect width="10" height="6" x="47" y="76" fill="#00b8df"/><rect width="10" height="6" x="37" y="82" fill="#00b8df"/><rect width="10" height="6" x="47" y="64" fill="#00b8df"/><rect width="10" height="6" x="37" y="70" fill="#00b8df"/><path fill="#00b8df" d="M56,29H40c-1.1,0-2,0.9-2,2v25c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V31C58,29.9,57.1,29,56,29z     M53,45H43V34h10V45z"/><g><path fill="#00b8df" d="M104,80c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S117.255,80,104,80z     M114.882,96.988l-0.113,0.176l-8.232,11.438C105.989,109.468,105.029,110,104,110s-1.989-0.532-2.536-1.397l-8.346-11.614    c-0.529-0.926-0.524-2.073,0.01-2.994c0.535-0.922,1.53-1.494,2.596-1.494H100V86c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v6.5    h4.276c1.065,0,2.061,0.572,2.596,1.494C115.406,94.915,115.411,96.063,114.882,96.988z"/><polygon fill="#ff9a30" points="84 125.95 83.95 126 84 126"/><polygon fill="#ff9a30" points="114 77 114 76.95 113.95 77"/><path fill="#00b8df" d="M111.071,44.243L71.757,4.929C69.869,3.041,67.357,2,64.687,2H24c-5.514,0-10,4.486-10,10v104     c0,5.514,4.486,10,10,10h59.95l-4-4H24c-3.309,0-6-2.691-6-6V12c0-3.309,2.691-6,6-6h40.687c1.603,0,3.109,0.624,4.242,1.757     l39.314,39.314c1.116,1.117,1.757,2.663,1.757,4.242V72.95l4,4V51.313C114,48.643,112.96,46.132,111.071,44.243z"/><polyline fill="#fff" points="113.95 77 114 76.95 110 72.95"/></g></svg>' : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#2D98D4" d="M22 21H2c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2z"/><path fill="#FFF" d="M22 3H2C.897 3 0 3.897 0 5v.25c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2V5c0-1.103-.897-2-2-2z" opacity=".2"/><circle cx="7.5" cy="8.5" r="2.5" fill="#FFCF51"/><path fill="#FFF" d="M7.5 6.25a2.62 2.62 0 0 1 2.394 1.53C9.588 6.744 8.632 6 7.5 6s-2.087.744-2.394 1.778A2.62 2.62 0 0 1 7.5 6.25z" opacity=".2"/><path fill="#010101" d="M7.5 10.75a2.62 2.62 0 0 1-2.394-1.53C5.412 10.256 6.368 11 7.5 11s2.087-.744 2.394-1.778A2.62 2.62 0 0 1 7.5 10.75z" opacity=".1"/><path fill="#E6E6E5" d="M15 10L4 21h18c1.103 0 2-.897 2-2l-9-9z"/><linearGradient id="a" x1="7.738" x2="11.3" y1="8.738" y2="12.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3E2823" stop-opacity=".2"/><stop offset="1" stop-color="#3E2823" stop-opacity="0"/></linearGradient><path fill="url(#a)" d="M13.768 11.232l-4.5-4.5-.001.001C9.72 7.186 10 7.811 10 8.5 10 9.879 8.879 11 7.5 11c-.69 0-1.314-.28-1.767-.733l4.5 4.5 3.535-3.535z"/><path fill="#F3F3F3" d="M2 21h11l-7-7-5.82 5.82A2 2 0 0 0 2 21z"/><path fill="#010101" d="M22 20.75H2c-1.103 0-2-.897-2-2V19c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-.25c0 1.103-.897 2-2 2z" opacity=".1"/><linearGradient id="b" x1="-.708" x2="24.708" y1="6.074" y2="17.926" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFF" stop-opacity=".2"/><stop offset="1" stop-color="#FFF" stop-opacity="0"/></linearGradient><path fill="url(#b)" d="M22 21H2c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2z"/></svg>' : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${p}|`) >= 0 ? html += '<svg version="1.1" width="1.5em" height="1.5em" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <circle style="fill:#FFD400;" cx="256" cy="256" r="256"/> <path style="fill:#FF9F00;" d="M511.686,268.679L406.033,163.026l-6.712,4.529L308.32,75L75,330.097l181.891,181.891 C393.617,511.521,505.091,403.879,511.686,268.679z"/> <polygon style="fill:#444444;" points="203.114,229.628 201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,181.904 166.773,181.904 166.985,181.691 "/> <polygon style="fill:#292929;" points="201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,256.142 "/> <g> <path style="fill:#00ABE9;" d="M352.156,256.142c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 c5.515-8.271,8.273-17.816,8.273-27.149c0-9.333-2.758-18.878-8.273-27.151l17.816-11.666 C348.126,228.991,352.156,242.567,352.156,256.142z"/> <path style="fill:#00ABE9;" d="M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238c0-25.878-7.636-51.755-22.696-74.238l-4.666-7l17.605-11.878l4.666,7.212 C428.092,196.327,437,226.234,437,256.142z"/> <path style="fill:#00ABE9;" d="M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694c0-17.605-5.092-35.211-15.273-50.694l-4.878-7l17.816-11.878l4.667,7.212 C388.215,212.871,394.367,234.506,394.367,256.142z"/> </g> <polygon style="fill:#5A5A5A;" points="308.32,75 308.32,437 166.985,330.097 166.985,181.691 "/> <polygon style="fill:#444444;" points="166.985,256.142 308.32,256.142 308.32,437 166.985,330.097 "/> <g> <path style="fill:#0095FF;" d="M330.734,256.142h21.422c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 C327.977,275.02,330.734,265.475,330.734,256.142z"/> <path style="fill:#0095FF;" d="M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694L394.367,256.142L394.367,256.142z"/> <path style="fill:#0095FF;" d="M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238H437z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>' : "|md|".indexOf(`|${p}|`) >= 0 ? html += '<svg width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M265.61429932 63.6656706h493.57455644c111.51629209 0 201.91670068 90.40220771 201.91670068 201.91580157v493.57545556c0 111.51449297-90.40040859 201.91670068-201.91670068 201.91670069H265.61429932c-111.51539297 0-201.91580068-90.40220771-201.91580069-201.91670069V265.58147217c0-111.51359385 90.40040859-201.91580068 201.91580069-201.91580157z" fill="#707070"></path><path d="M763.60576133 722.16141084L670.49099316 599.42972305h48.19382491V302.57788818h89.84188652v296.85183487h48.19382491L763.60576133 722.16141084zM519.02738545 472.82885791c0-13.71570117 0.30399346-28.21926709 0.91827773-43.48821445l-13.67612753 19.09855107c-0.1726831 0.54323174-0.34626533 1.10265205-0.52074757 1.62609698l-7.15195107 10.50577734-109.52234384 166.63092451-40.52562364-62.91054668h-0.25092949l-28.34248359-44.38850449-41.19926749-63.95563828h0.36425304l-8.60086846-13.47016729-0.46318536-1.8752291-14.42082305-21.30475518c1.05318633 33.22347451 1.60451191 57.42426622 1.60451192 72.50254365v229.53787296h-89.15835059V303.99532753h140.37862325l77.89348828 115.26944679h1.3346956l80.12037832-115.26944678H610.08255019v417.34224141H519.02828457V472.82885791z" fill="#ffffff"></path></svg>' : "|pdf|".indexOf(`|${p}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#f05542" d="m 5,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#f05542" fill-rule="evenodd" d="M 7.5 3 A 0.50005 0.50005 0 0 0 7 3.5 L 7 7.5 A 0.50005 0.50005 0 0 0 7.5 8 L 12.5 8 A 0.50005 0.50005 0 0 0 13 7.5 L 13 3.5 A 0.50005 0.50005 0 0 0 12.5 3 L 7.5 3 z M 14.457031 3 A 0.50005 0.50005 0 0 0 14.507812 4 L 18.5 4 A 0.50005 0.50005 0 1 0 18.5 3 L 14.507812 3 A 0.50005 0.50005 0 0 0 14.457031 3 z M 8 4 L 12 4 L 12 7 L 8 7 L 8 4 z M 14.457031 5 A 0.50005 0.50005 0 0 0 14.507812 6 L 18.5 6 A 0.50005 0.50005 0 1 0 18.5 5 L 14.507812 5 A 0.50005 0.50005 0 0 0 14.457031 5 z M 14.457031 7 A 0.50005 0.50005 0 0 0 14.507812 8 L 18.5 8 A 0.50005 0.50005 0 1 0 18.5 7 L 14.507812 7 A 0.50005 0.50005 0 0 0 14.457031 7 z M 7.4570312 9 A 0.50005 0.50005 0 0 0 7.5078125 10 L 11.507812 10 A 0.50005 0.50005 0 1 0 11.507812 9 L 7.5078125 9 A 0.50005 0.50005 0 0 0 7.4570312 9 z M 13.457031 9 A 0.50005 0.50005 0 0 0 13.507812 10 L 14.507812 10 A 0.50005 0.50005 0 1 0 14.507812 9 L 13.507812 9 A 0.50005 0.50005 0 0 0 13.457031 9 z M 16.457031 9 A 0.50005 0.50005 0 0 0 16.507812 10 L 24.5 10 A 0.50005 0.50005 0 1 0 24.5 9 L 16.507812 9 A 0.50005 0.50005 0 0 0 16.457031 9 z M 7.4570312 11 A 0.50005 0.50005 0 0 0 7.5078125 12 L 13.507812 12 A 0.50005 0.50005 0 1 0 13.507812 11 L 7.5078125 11 A 0.50005 0.50005 0 0 0 7.4570312 11 z M 15.457031 11 A 0.50005 0.50005 0 0 0 15.507812 12 L 16.507812 12 A 0.50005 0.50005 0 1 0 16.507812 11 L 15.507812 11 A 0.50005 0.50005 0 0 0 15.457031 11 z M 18.457031 11 A 0.50005 0.50005 0 0 0 18.507812 12 L 24.5 12 A 0.50005 0.50005 0 1 0 24.5 11 L 18.507812 11 A 0.50005 0.50005 0 0 0 18.457031 11 z M 7.4570312 13 A 0.50005 0.50005 0 0 0 7.5078125 14 L 15.507812 14 A 0.50005 0.50005 0 1 0 15.507812 13 L 7.5078125 13 A 0.50005 0.50005 0 0 0 7.4570312 13 z M 17.457031 13 A 0.50005 0.50005 0 0 0 17.507812 14 L 18.507812 14 A 0.50005 0.50005 0 1 0 18.507812 13 L 17.507812 13 A 0.50005 0.50005 0 0 0 17.457031 13 z M 20.457031 13 A 0.50005 0.50005 0 0 0 20.507812 14 L 24.5 14 A 0.50005 0.50005 0 1 0 24.5 13 L 20.507812 13 A 0.50005 0.50005 0 0 0 20.457031 13 z M 7.4570312 15 A 0.50005 0.50005 0 0 0 7.5078125 16 L 11.507812 16 A 0.50005 0.50005 0 1 0 11.507812 15 L 7.5078125 15 A 0.50005 0.50005 0 0 0 7.4570312 15 z M 13.457031 15 A 0.50005 0.50005 0 0 0 13.507812 16 L 14.507812 16 A 0.50005 0.50005 0 1 0 14.507812 15 L 13.507812 15 A 0.50005 0.50005 0 0 0 13.457031 15 z M 16.457031 15 A 0.50005 0.50005 0 0 0 16.507812 16 L 21.039062 16 L 24.5 16 A 0.50005 0.50005 0 0 0 24.5 15 L 21.074219 15 L 16.507812 15 A 0.50005 0.50005 0 0 0 16.457031 15 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path fill="#f05542" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 12.474609 24.990234 A 0.50005 0.50005 0 0 0 11.982422 25.498047 L 11.982422 29.460938 A 0.50005 0.50005 0 0 0 12.001953 29.642578 A 0.50005 0.50005 0 0 0 12.001953 29.644531 A 0.50005 0.50005 0 0 0 12.005859 29.658203 A 0.50005 0.50005 0 0 0 12.019531 29.693359 A 0.50005 0.50005 0 0 0 12.046875 29.75 A 0.50005 0.50005 0 0 0 12.066406 29.78125 A 0.50005 0.50005 0 0 0 12.072266 29.791016 A 0.50005 0.50005 0 0 0 12.095703 29.820312 A 0.50005 0.50005 0 0 0 12.121094 29.847656 A 0.50005 0.50005 0 0 0 12.132812 29.861328 A 0.50005 0.50005 0 0 0 12.158203 29.882812 A 0.50005 0.50005 0 0 0 12.171875 29.894531 A 0.50005 0.50005 0 0 0 12.183594 29.904297 A 0.50005 0.50005 0 0 0 12.21875 29.927734 A 0.50005 0.50005 0 0 0 12.294922 29.966797 A 0.50005 0.50005 0 0 0 12.322266 29.976562 A 0.50005 0.50005 0 0 0 12.490234 30.003906 L 13.488281 30.003906 A 0.50005 0.50005 0 0 0 13.636719 29.982422 C 14.945213 29.873741 15.996094 28.817721 15.996094 27.503906 C 15.996094 26.193182 14.950387 25.138556 13.646484 25.025391 A 0.50005 0.50005 0 0 0 13.496094 25.003906 L 13.419922 25.003906 L 13.369141 25.003906 L 12.597656 25.003906 A 0.50005 0.50005 0 0 0 12.474609 24.990234 z M 9.4960938 25 C 8.7183219 25 8.0779613 25.607777 8.0097656 26.369141 A 0.50005 0.50005 0 0 0 7.9960938 26.494141 C 7.9960859 26.49612 7.9960937 26.498019 7.9960938 26.5 L 7.9960938 29.494141 A 0.50005 0.50005 0 1 0 8.9960938 29.494141 L 8.9960938 27.90625 C 9.1533422 27.962868 9.3204293 28 9.4960938 28 C 10.318599 28 10.996094 27.3225 10.996094 26.5 C 10.996094 25.6775 10.318599 25 9.4960938 25 z M 18.5625 25 C 17.699259 25 16.990234 25.711019 16.990234 26.574219 L 16.990234 27.457031 A 0.50005 0.50005 0 0 0 16.990234 27.53125 L 16.990234 29.5 A 0.50005 0.50005 0 1 0 17.990234 29.5 L 17.990234 28 L 18.990234 28 A 0.50005 0.50005 0 1 0 18.990234 27 L 17.990234 27 L 17.990234 26.574219 C 17.990234 26.247719 18.235925 26 18.5625 26 L 19.490234 26 A 0.50005 0.50005 0 1 0 19.490234 25 L 18.5625 25 z M 9.4960938 26 C 9.7781584 26 9.9960938 26.218 9.9960938 26.5 C 9.9960938 26.7821 9.7781584 27 9.4960938 27 C 9.2140291 27 8.9960937 26.7821 8.9960938 26.5 L 8.9960938 26.494141 C 8.9991782 26.215072 9.2160446 26 9.4960938 26 z M 12.982422 26.003906 L 13.419922 26.003906 C 14.312157 26.003906 14.996094 26.674206 14.996094 27.503906 C 14.996094 28.333306 14.312128 29.003906 13.419922 29.003906 L 12.982422 29.003906 L 12.982422 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>' : html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><g transform="translate(-.5)"><g transform="translate(.5)"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4989b8" d="M 4,2 4,31 27,31 27,7.9941406 21.007812,2 20.800781,2 4,2 Z M 5,3 6,3 6,4 5,4 5,3 Z M 7,3 8,3 8,4 7,4 7,3 Z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z M 5,5 6,5 6,6 5,6 5,5 Z M 5,7 6,7 6,8 5,8 5,7 Z m 0,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" fill-rule="evenodd" d="m 27.000003,1028.3562 -5.992006,-5.9941 -0.0019,5.9941 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" d="m 9.5000015,1023.3622 0,20 2.4999985,-4 2.499999,4 0,-20 0,-1 -4.9999975,0 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g></g></svg>', html += ` <a class="list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${c}">${s.name}</a>${UI.display_download?`<a href="${r}"><svg class="float-sm-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>`:""}${UI.display_size?'<span class="badge bg-primary float-sm-end"> '+s.size+" </span>":""}${UI.display_time?' <span class="badge bg-info float-sm-end"> '+s.modifiedTime+" </span>":""}</div>`
        }
    }
    if (l.length > 0) {
        let t = localStorage.getItem(e),
            n = l;
        if (!o && t) {
            let e;
            try {
                e = JSON.parse(t), Array.isArray(e) || (e = [])
            } catch (t) {
                e = []
            }
            n = e.concat(l)
        }
        localStorage.setItem(e, JSON.stringify(n))
    }
    n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html), a && $("#count").removeClass("d-none").find(".number").text(n.find("a.list-group-item-action").length)
}

function render_search_result_list() {
    var e = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Search Results</div>\n  <div id="list" class="list-group text-break">\n  </div>\n  </div>\n  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count">Total <span class="number text-center"></span> items</div>\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  </div>\n  `;
    $("#content").html(e), $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div></div>`), $("#readme_md").hide().html(""), $("#head_md").hide().html(""), requestSearch({
        q: window.MODEL.q
    }, (function e(t, n) {
        $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex), $("#spinner").remove(), null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_search_result_to_list(t.data.files)) : (append_search_result_to_list(t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
            var t = $(this).scrollTop(),
                n = getDocumentHeight();
            if (t + $(this).height() > n - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock) return;
                window.scroll_status.loading_lock = !0, $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let t = $("#list");
                requestSearch({
                    q: window.MODEL.q,
                    page_token: t.data("nextPageToken"),
                    page_index: t.data("curPageIndex") + 1
                }, e)
            }
        })), window.scroll_status.event_bound = !0)), !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }))
}
function filter(t) {
    if (UI.block === 1) {
        t = t.filter(i => !i.name.toLowerCase().includes(' xxx '));
        t = t.filter(i => !i.name.toLowerCase().includes('.xxx.'));
        t = t.filter(i => !i.name.toLowerCase().includes('-xxx'));
        t = t.filter(i => !i.name.toLowerCase().includes(' sex '));
        t = t.filter(i => !i.name.toLowerCase().includes('.sex.'));
        t = t.filter(i => !i.name.toLowerCase().includes('sexify'));
        t = t.filter(i => !i.name.toLowerCase().includes('hentai'));
        t = t.filter(i => !i.name.toLowerCase().includes('porn'));
        t = t.filter(i => !i.name.toLowerCase().includes('nsfw'));
        t = t.filter(i => !i.name.toLowerCase().includes('brazzer'));
        t = t.filter(i => !i.name.toLowerCase().includes('nubile'));
    }
    return t;
}

function append_search_result_to_list(e) {
    // console.log(e);
    e = filter(e);
    // e = e.filter(i => !i.name.toLowerCase().includes(' xxx '));
    // e = e.filter(i => !i.name.toLowerCase().includes('.xxx.'));
    // e = e.filter(i => !i.name.toLowerCase().includes('-xxx'));
    // e = e.filter(i => !i.name.toLowerCase().includes(' sex '));
    // e = e.filter(i => !i.name.toLowerCase().includes('.sex.'));
    // e = e.filter(i => !i.name.toLowerCase().includes('sexify'));
    // e = e.filter(i => !i.name.toLowerCase().includes('hentai'));
    // e = e.filter(i => !i.name.toLowerCase().includes('porn'));
    // e = e.filter(i => !i.name.toLowerCase().includes('nsfw'));
    // e = e.filter(i => !i.name.toLowerCase().includes('brazzer'));
    // e = e.filter(i => !i.name.toLowerCase().includes('nubile'));
    var t = window.current_drive_order || 0,
        n = $("#list"),
        a = null === n.data("nextPageToken");
    for (i in html = "", e) {
        var o = e[i];
        o.name;
        if (null == o.size && (o.size = ""), o.modifiedTime = utc2delhi(o.modifiedTime), o.size = formatFileSize(o.size), "application/vnd.google-apps.folder" == o.mimeType) html += `<a style="color: ${UI.folder_text_color};" onclick="onSearchResultItemClick(this)" data-bs-toggle="modal" data-bs-target="#SearchModel" id="${o.id}" class="list-group-item list-group-item-action"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30\tc0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26\tc0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${o.name} ${UI.display_time?'<span class="badge bg-info float-sm-end"> '+o.modifiedTime+" </span>":""}</a>`;
        else {
            o.name;
            var l = o.name.split(".").pop().toLowerCase();
            "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${l}|`) >= 0 && ("?a=view", " view"), html += `<a style="color: ${UI.css_a_tag_color};" onclick="onSearchResultItemClick(this)" data-bs-toggle="modal" data-bs-target="#SearchModel" id="${o.id}" gd-type="${o.mimeType}" class="list-group-item list-group-item-action">`, "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g transform="translate(0 -1028.362)"><path d="m 12,1028.3622 c -6.62589,0 -12.00002,5.3741 -12.00002,12 0,6.6259 5.37413,12 12.00002,12 6.62589,0 12.00002,-5.3741 12.00002,-12 0,-6.6259 -5.37413,-12 -12.00002,-12 z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#50b748" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/><path d="m 13,1035.162 a 2.5,2.5 0 0 0 -2.5,2.5 2.5,2.5 0 0 0 0.87695,1.9004 l -2.45117,0 A 2,2 0 0 0 9.5,1038.162 a 2,2 0 0 0 -2,-2 2,2 0 0 0 -2,2 2,2 0 0 0 0.64843,1.4707 C 5.77,1039.775 5.5,1040.133 5.5,1040.5624 l 0,4 c 0,0.554 0.44599,1 1,1 l 8,0 c 0.55401,0 1,-0.446 1,-1 l 0,-0.8008 3,1.8008 0,-6 -3,1.8008 0,-0.8008 c 0,-0.5194 -0.39686,-0.9294 -0.90235,-0.9805 a 2.5,2.5 0 0 0 0.90235,-1.9199 2.5,2.5 0 0 0 -2.5,-2.5 z m 0,1 a 1.5,1.5 0 0 1 1.5,1.5 1.5,1.5 0 0 1 -1.5,1.5 1.5,1.5 0 0 1 -1.5,-1.5 1.5,1.5 0 0 1 1.5,-1.5 z m -5.5,1 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z m 2,6.4004 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" style="isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#fff" color="#000" enable-background="accumulate" overflow="visible"/></g></svg>' : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#F47920" d="M21 5l-5-5H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5z"/><g fill="#FFF"><path d="M18 5a2 2 0 0 1-2-2V0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5h-3zm-9 6.749L7 13.5l2 1.755V17l-4-3.5L9 10v1.749zM11 18H9.5L13 9h1.5L11 18zm4-1v-1.745l2-1.755-2-1.751V10l4 3.5-4 3.5z" opacity=".1"/><path d="M7 13.5l2-1.751V10l-4 3.5L9 17v-1.745zM17 13.5l-2-1.751V10l4 3.5-4 3.5v-1.745zM14.5 9H13l-3.5 9H11z" opacity=".8"/></g></svg>' : "|zip|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49822,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#4bbfeb" d="m 4.99822,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49466,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#4bbfeb" fill-rule="evenodd" d="M 15.498047 7 L 15.498047 8 L 14.498047 8 L 14.498047 9 L 15.498047 9 L 15.498047 10 L 14.498047 10 L 14.498047 11 L 15.498047 11 L 15.498047 12 L 14.498047 12 L 14.498047 13 L 15.498047 13 L 15.498047 14 L 14.498047 14 L 14.498047 15 L 15.498047 15 L 15.498047 16 L 14.498047 16 L 14.498047 17 L 15.498047 17 L 15.498047 18 L 14.998047 18 A 0.50004997 0.50004997 0 0 0 14.498047 18.5 L 14.498047 19.464844 A 0.50004997 0.50004997 0 0 0 14.498047 19.5 L 14.498047 20 L 14.498047 20.5 C 14.498047 21.3224 15.175696 22 15.998047 22 C 16.820398 22 17.498047 21.3224 17.498047 20.5 L 17.498047 20.033203 A 0.50004997 0.50004997 0 0 0 17.498047 20 L 17.498047 19.5 L 17.498047 18.5 A 0.50004997 0.50004997 0 0 0 16.998047 18 L 16.498047 18 L 16.498047 17 L 17.498047 17 L 17.498047 16 L 16.498047 16 L 16.498047 15 L 17.498047 15 L 17.498047 14 L 16.498047 14 L 16.498047 13 L 17.498047 13 L 17.498047 12 L 16.498047 12 L 16.498047 11 L 17.498047 11 L 17.498047 10 L 16.498047 10 L 16.498047 9 L 17.498047 9 L 17.498047 8 L 16.498047 8 L 16.498047 7 L 15.498047 7 z M 15.498047 19 L 16.498047 19 L 16.498047 19.5 L 16.498047 20.5 C 16.498047 20.7857 16.283696 21 15.998047 21 C 15.712398 21 15.498047 20.7857 15.498047 20.5 L 15.498047 20.033203 A 0.50004997 0.50004997 0 0 0 15.498047 20 L 15.498047 19.5 L 15.498047 19 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 13.490234 24.990234 A 0.50005 0.50005 0 0 0 12.998047 25.496094 L 12.998047 29.498047 A 0.50005 0.50005 0 1 0 13.998047 29.498047 L 13.998047 25.496094 A 0.50005 0.50005 0 0 0 13.490234 24.990234 z M 11.511719 24.998047 A 0.50005 0.50005 0 0 0 11.460938 25 L 8.5058594 25 A 0.50005 0.50005 0 1 0 8.5058594 26 L 10.498047 26 L 8.1347656 29.154297 A 0.50005 0.50005 0 0 0 8.4375 29.992188 A 0.50019268 0.50019268 0 0 0 8.4472656 29.994141 A 0.50005 0.50005 0 0 0 8.5058594 29.998047 L 11.494141 29.998047 A 0.50005 0.50005 0 1 0 11.494141 28.998047 L 9.5019531 28.998047 L 11.865234 25.841797 A 0.50005 0.50005 0 0 0 11.75 25.066406 A 0.50005 0.50005 0 0 0 11.720703 25.050781 A 0.50005 0.50005 0 0 0 11.705078 25.042969 A 0.50005 0.50005 0 0 0 11.675781 25.03125 A 0.50005 0.50005 0 0 0 11.658203 25.025391 A 0.50005 0.50005 0 0 0 11.511719 24.998047 z M 16.498047 25.003906 C 15.723646 25.003906 15.086569 25.606569 15.013672 26.363281 C 15.013355 26.366575 15.012014 26.369747 15.011719 26.373047 A 0.50005 0.50005 0 0 0 14.998047 26.498047 C 14.998039 26.500027 14.998047 26.501925 14.998047 26.503906 L 14.998047 29.498047 A 0.50005 0.50005 0 1 0 15.998047 29.498047 L 15.998047 27.910156 C 16.155295 27.966775 16.322382 28.003906 16.498047 28.003906 C 17.320552 28.003906 17.998047 27.326406 17.998047 26.503906 C 17.998047 25.681406 17.320552 25.003906 16.498047 25.003906 z M 16.498047 26.003906 C 16.780112 26.003906 16.998047 26.221906 16.998047 26.503906 C 16.998047 26.786006 16.780112 27.003906 16.498047 27.003906 C 16.215982 27.003906 15.998047 26.786006 15.998047 26.503906 L 15.998047 26.498047 C 16.001131 26.218978 16.217997 26.003906 16.498047 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>' : "|rar|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"><g transform="translate(81.429 -934.505)"><path fill="#fc987a" d="m -31.428571,936.50503 c -26.50967,0 -48,21.49033 -48,48.00002 0,26.50955 21.49033,47.99995 48,47.99995 26.5096696,0 48,-21.4904 48,-47.99995 l -48,-48.00002 z"/><path fill="#f8f6de" d="m -31.428571,936.50503 0,48.00002 48,0 -48,-48.00002 z" opacity=".4"/><path style="line-height:125%;-inkscape-font-specification:Ubuntu Medium" fill="#f8f6de" d="M 54.78125 56.5 C 54.09791 56.500018 53.304161 56.527101 52.4375 56.59375 C 51.57083 56.643767 50.766664 56.739601 50 56.90625 L 50 74 L 53.15625 74 L 53.15625 67.4375 L 54.6875 67.4375 L 55.15625 67.4375 C 55.322909 67.437507 55.516659 67.422923 55.75 67.40625 C 56.066659 67.806256 56.414575 68.264589 56.78125 68.78125 C 57.147907 69.281255 57.508324 69.822921 57.875 70.40625 C 58.258323 70.97292 58.633323 71.570836 59 72.1875 C 59.366655 72.787501 59.714572 73.400001 60.03125 74 L 63.5625 74 C 63.262485 73.350001 62.914568 72.666668 62.53125 72 C 62.147902 71.316669 61.729153 70.664587 61.3125 70.03125 C 60.89582 69.381255 60.493737 68.800005 60.09375 68.25 C 59.693738 67.700006 59.347905 67.22709 59.03125 66.84375 C 61.347903 66.010425 62.499985 64.41251 62.5 62.0625 C 62.499985 60.17918 61.833319 58.791682 60.5 57.875 C 59.183322 56.95835 57.281241 56.500018 54.78125 56.5 z M 55 59.21875 C 55.616659 59.218765 56.170825 59.275015 56.6875 59.375 C 57.204157 59.458348 57.664574 59.595848 58.03125 59.8125 C 58.414573 60.029181 58.706239 60.320847 58.90625 60.6875 C 59.106239 61.05418 59.187489 61.497929 59.1875 62.03125 C 59.187489 62.597928 59.106239 63.070844 58.90625 63.4375 C 58.706239 63.804177 58.39999 64.095843 58 64.3125 C 57.616657 64.529176 57.145824 64.666676 56.5625 64.75 C 55.979159 64.833342 55.297909 64.875009 54.53125 64.875 L 53.15625 64.875 L 53.15625 59.28125 C 53.722911 59.231265 54.333327 59.218765 55 59.21875 z M 70.21875 60.59375 C 69.385411 60.593763 68.608329 60.64793 67.875 60.78125 C 67.141663 60.914596 66.570831 61.05418 66.1875 61.1875 L 66.5625 63.625 C 66.929164 63.491677 67.416663 63.381261 68 63.28125 C 68.583329 63.181261 69.206245 63.125011 69.90625 63.125 C 70.42291 63.125011 70.85416 63.210427 71.1875 63.34375 C 71.537492 63.477094 71.831242 63.65626 72.03125 63.90625 C 72.247908 64.139593 72.385408 64.433343 72.46875 64.75 C 72.552075 65.066676 72.593741 65.400009 72.59375 65.75 L 72.59375 66.25 C 72.177075 66.150008 71.772909 66.064591 71.40625 66.03125 C 71.039576 65.981258 70.708327 65.968758 70.375 65.96875 C 69.658328 65.968758 68.947912 66.037508 68.28125 66.1875 C 67.631246 66.320841 67.062497 66.541674 66.5625 66.875 C 66.062498 67.191673 65.674998 67.60834 65.375 68.125 C 65.091666 68.641672 64.937499 69.281255 64.9375 70.03125 C 64.937499 70.814587 65.062499 71.466669 65.3125 72 C 65.579165 72.533335 65.956248 72.979168 66.40625 73.3125 C 66.872914 73.645834 67.412497 73.88125 68.0625 74.03125 C 68.712495 74.18125 69.435411 74.25 70.21875 74.25 C 71.402076 74.25 72.472908 74.18125 73.40625 74.03125 C 74.35624 73.897917 75.064572 73.7875 75.53125 73.6875 L 75.53125 65.75 C 75.531238 64.983342 75.433322 64.289593 75.25 63.65625 C 75.083322 63.006261 74.791656 62.450012 74.375 62 C 73.97499 61.550012 73.433324 61.218763 72.75 60.96875 C 72.066659 60.718763 71.218743 60.593763 70.21875 60.59375 z M 84.28125 60.625 C 83.214577 60.625013 82.258328 60.737513 81.375 60.9375 C 80.50833 61.120846 79.770831 61.314596 79.1875 61.53125 L 79.1875 74 L 82.21875 74 L 82.21875 63.5 C 82.368745 63.450011 82.633328 63.410427 83 63.34375 C 83.383327 63.277094 83.72916 63.250011 84.0625 63.25 C 84.645826 63.250011 85.160409 63.275011 85.59375 63.375 C 86.043741 63.458344 86.406241 63.541677 86.65625 63.625 L 87.15625 61.09375 C 87.00624 61.043763 86.81249 60.987513 86.5625 60.9375 C 86.312491 60.870846 86.047908 60.814596 85.78125 60.78125 C 85.514575 60.731263 85.266659 60.70418 85 60.6875 C 84.733326 60.65418 84.481243 60.625013 84.28125 60.625 z M 70.8125 68.125 C 71.195826 68.125006 71.558326 68.168756 71.875 68.21875 C 72.191658 68.268756 72.427075 68.325006 72.59375 68.375 L 72.59375 71.71875 C 72.110408 71.818752 71.402076 71.875002 70.46875 71.875 C 69.702078 71.875002 69.106245 71.735419 68.65625 71.46875 C 68.206246 71.185419 67.968746 70.68542 67.96875 69.96875 C 67.968746 69.602088 68.052079 69.295838 68.21875 69.0625 C 68.385412 68.812505 68.608329 68.633339 68.875 68.5 C 69.158328 68.366672 69.447911 68.268756 69.78125 68.21875 C 70.131244 68.168756 70.47916 68.125006 70.8125 68.125 z " font-family="Ubuntu" font-size="25" font-weight="500" letter-spacing="0" transform="translate(-81.429 934.505)" word-spacing="0"/></g></svg>' : "|tar|.7z|.gz|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><rect width="10" height="6" x="47" y="112" fill="#00b8df"/><rect width="10" height="6" x="37" y="118" fill="#00b8df"/><rect width="10" height="6" x="47" y="100" fill="#00b8df"/><rect width="10" height="6" x="37" y="106" fill="#00b8df"/><rect width="10" height="6" x="47" y="88" fill="#00b8df"/><rect width="10" height="6" x="37" y="94" fill="#00b8df"/><rect width="10" height="6" x="47" y="76" fill="#00b8df"/><rect width="10" height="6" x="37" y="82" fill="#00b8df"/><rect width="10" height="6" x="47" y="64" fill="#00b8df"/><rect width="10" height="6" x="37" y="70" fill="#00b8df"/><path fill="#00b8df" d="M56,29H40c-1.1,0-2,0.9-2,2v25c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V31C58,29.9,57.1,29,56,29z     M53,45H43V34h10V45z"/><g><path fill="#00b8df" d="M104,80c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S117.255,80,104,80z     M114.882,96.988l-0.113,0.176l-8.232,11.438C105.989,109.468,105.029,110,104,110s-1.989-0.532-2.536-1.397l-8.346-11.614    c-0.529-0.926-0.524-2.073,0.01-2.994c0.535-0.922,1.53-1.494,2.596-1.494H100V86c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v6.5    h4.276c1.065,0,2.061,0.572,2.596,1.494C115.406,94.915,115.411,96.063,114.882,96.988z"/><polygon fill="#ff9a30" points="84 125.95 83.95 126 84 126"/><polygon fill="#ff9a30" points="114 77 114 76.95 113.95 77"/><path fill="#00b8df" d="M111.071,44.243L71.757,4.929C69.869,3.041,67.357,2,64.687,2H24c-5.514,0-10,4.486-10,10v104     c0,5.514,4.486,10,10,10h59.95l-4-4H24c-3.309,0-6-2.691-6-6V12c0-3.309,2.691-6,6-6h40.687c1.603,0,3.109,0.624,4.242,1.757     l39.314,39.314c1.116,1.117,1.757,2.663,1.757,4.242V72.95l4,4V51.313C114,48.643,112.96,46.132,111.071,44.243z"/><polyline fill="#fff" points="113.95 77 114 76.95 110 72.95"/></g></svg>' : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#2D98D4" d="M22 21H2c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2z"/><path fill="#FFF" d="M22 3H2C.897 3 0 3.897 0 5v.25c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2V5c0-1.103-.897-2-2-2z" opacity=".2"/><circle cx="7.5" cy="8.5" r="2.5" fill="#FFCF51"/><path fill="#FFF" d="M7.5 6.25a2.62 2.62 0 0 1 2.394 1.53C9.588 6.744 8.632 6 7.5 6s-2.087.744-2.394 1.778A2.62 2.62 0 0 1 7.5 6.25z" opacity=".2"/><path fill="#010101" d="M7.5 10.75a2.62 2.62 0 0 1-2.394-1.53C5.412 10.256 6.368 11 7.5 11s2.087-.744 2.394-1.778A2.62 2.62 0 0 1 7.5 10.75z" opacity=".1"/><path fill="#E6E6E5" d="M15 10L4 21h18c1.103 0 2-.897 2-2l-9-9z"/><linearGradient id="a" x1="7.738" x2="11.3" y1="8.738" y2="12.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3E2823" stop-opacity=".2"/><stop offset="1" stop-color="#3E2823" stop-opacity="0"/></linearGradient><path fill="url(#a)" d="M13.768 11.232l-4.5-4.5-.001.001C9.72 7.186 10 7.811 10 8.5 10 9.879 8.879 11 7.5 11c-.69 0-1.314-.28-1.767-.733l4.5 4.5 3.535-3.535z"/><path fill="#F3F3F3" d="M2 21h11l-7-7-5.82 5.82A2 2 0 0 0 2 21z"/><path fill="#010101" d="M22 20.75H2c-1.103 0-2-.897-2-2V19c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-.25c0 1.103-.897 2-2 2z" opacity=".1"/><linearGradient id="b" x1="-.708" x2="24.708" y1="6.074" y2="17.926" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFF" stop-opacity=".2"/><stop offset="1" stop-color="#FFF" stop-opacity="0"/></linearGradient><path fill="url(#b)" d="M22 21H2c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2z"/></svg>' : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${l}|`) >= 0 ? html += '<svg version="1.1" width="1.5em" height="1.5em" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <circle style="fill:#FFD400;" cx="256" cy="256" r="256"/> <path style="fill:#FF9F00;" d="M511.686,268.679L406.033,163.026l-6.712,4.529L308.32,75L75,330.097l181.891,181.891 C393.617,511.521,505.091,403.879,511.686,268.679z"/> <polygon style="fill:#444444;" points="203.114,229.628 201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,181.904 166.773,181.904 166.985,181.691 "/> <polygon style="fill:#292929;" points="201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,256.142 "/> <g> <path style="fill:#00ABE9;" d="M352.156,256.142c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 c5.515-8.271,8.273-17.816,8.273-27.149c0-9.333-2.758-18.878-8.273-27.151l17.816-11.666 C348.126,228.991,352.156,242.567,352.156,256.142z"/> <path style="fill:#00ABE9;" d="M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238c0-25.878-7.636-51.755-22.696-74.238l-4.666-7l17.605-11.878l4.666,7.212 C428.092,196.327,437,226.234,437,256.142z"/> <path style="fill:#00ABE9;" d="M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694c0-17.605-5.092-35.211-15.273-50.694l-4.878-7l17.816-11.878l4.667,7.212 C388.215,212.871,394.367,234.506,394.367,256.142z"/> </g> <polygon style="fill:#5A5A5A;" points="308.32,75 308.32,437 166.985,330.097 166.985,181.691 "/> <polygon style="fill:#444444;" points="166.985,256.142 308.32,256.142 308.32,437 166.985,330.097 "/> <g> <path style="fill:#0095FF;" d="M330.734,256.142h21.422c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 C327.977,275.02,330.734,265.475,330.734,256.142z"/> <path style="fill:#0095FF;" d="M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694L394.367,256.142L394.367,256.142z"/> <path style="fill:#0095FF;" d="M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238H437z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>' : "|md|".indexOf(`|${l}|`) >= 0 ? html += '<svg width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M265.61429932 63.6656706h493.57455644c111.51629209 0 201.91670068 90.40220771 201.91670068 201.91580157v493.57545556c0 111.51449297-90.40040859 201.91670068-201.91670068 201.91670069H265.61429932c-111.51539297 0-201.91580068-90.40220771-201.91580069-201.91670069V265.58147217c0-111.51359385 90.40040859-201.91580068 201.91580069-201.91580157z" fill="#707070"></path><path d="M763.60576133 722.16141084L670.49099316 599.42972305h48.19382491V302.57788818h89.84188652v296.85183487h48.19382491L763.60576133 722.16141084zM519.02738545 472.82885791c0-13.71570117 0.30399346-28.21926709 0.91827773-43.48821445l-13.67612753 19.09855107c-0.1726831 0.54323174-0.34626533 1.10265205-0.52074757 1.62609698l-7.15195107 10.50577734-109.52234384 166.63092451-40.52562364-62.91054668h-0.25092949l-28.34248359-44.38850449-41.19926749-63.95563828h0.36425304l-8.60086846-13.47016729-0.46318536-1.8752291-14.42082305-21.30475518c1.05318633 33.22347451 1.60451191 57.42426622 1.60451192 72.50254365v229.53787296h-89.15835059V303.99532753h140.37862325l77.89348828 115.26944679h1.3346956l80.12037832-115.26944678H610.08255019v417.34224141H519.02828457V472.82885791z" fill="#ffffff"></path></svg>' : "|pdf|".indexOf(`|${l}|`) >= 0 ? html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#f05542" d="m 5,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#f05542" fill-rule="evenodd" d="M 7.5 3 A 0.50005 0.50005 0 0 0 7 3.5 L 7 7.5 A 0.50005 0.50005 0 0 0 7.5 8 L 12.5 8 A 0.50005 0.50005 0 0 0 13 7.5 L 13 3.5 A 0.50005 0.50005 0 0 0 12.5 3 L 7.5 3 z M 14.457031 3 A 0.50005 0.50005 0 0 0 14.507812 4 L 18.5 4 A 0.50005 0.50005 0 1 0 18.5 3 L 14.507812 3 A 0.50005 0.50005 0 0 0 14.457031 3 z M 8 4 L 12 4 L 12 7 L 8 7 L 8 4 z M 14.457031 5 A 0.50005 0.50005 0 0 0 14.507812 6 L 18.5 6 A 0.50005 0.50005 0 1 0 18.5 5 L 14.507812 5 A 0.50005 0.50005 0 0 0 14.457031 5 z M 14.457031 7 A 0.50005 0.50005 0 0 0 14.507812 8 L 18.5 8 A 0.50005 0.50005 0 1 0 18.5 7 L 14.507812 7 A 0.50005 0.50005 0 0 0 14.457031 7 z M 7.4570312 9 A 0.50005 0.50005 0 0 0 7.5078125 10 L 11.507812 10 A 0.50005 0.50005 0 1 0 11.507812 9 L 7.5078125 9 A 0.50005 0.50005 0 0 0 7.4570312 9 z M 13.457031 9 A 0.50005 0.50005 0 0 0 13.507812 10 L 14.507812 10 A 0.50005 0.50005 0 1 0 14.507812 9 L 13.507812 9 A 0.50005 0.50005 0 0 0 13.457031 9 z M 16.457031 9 A 0.50005 0.50005 0 0 0 16.507812 10 L 24.5 10 A 0.50005 0.50005 0 1 0 24.5 9 L 16.507812 9 A 0.50005 0.50005 0 0 0 16.457031 9 z M 7.4570312 11 A 0.50005 0.50005 0 0 0 7.5078125 12 L 13.507812 12 A 0.50005 0.50005 0 1 0 13.507812 11 L 7.5078125 11 A 0.50005 0.50005 0 0 0 7.4570312 11 z M 15.457031 11 A 0.50005 0.50005 0 0 0 15.507812 12 L 16.507812 12 A 0.50005 0.50005 0 1 0 16.507812 11 L 15.507812 11 A 0.50005 0.50005 0 0 0 15.457031 11 z M 18.457031 11 A 0.50005 0.50005 0 0 0 18.507812 12 L 24.5 12 A 0.50005 0.50005 0 1 0 24.5 11 L 18.507812 11 A 0.50005 0.50005 0 0 0 18.457031 11 z M 7.4570312 13 A 0.50005 0.50005 0 0 0 7.5078125 14 L 15.507812 14 A 0.50005 0.50005 0 1 0 15.507812 13 L 7.5078125 13 A 0.50005 0.50005 0 0 0 7.4570312 13 z M 17.457031 13 A 0.50005 0.50005 0 0 0 17.507812 14 L 18.507812 14 A 0.50005 0.50005 0 1 0 18.507812 13 L 17.507812 13 A 0.50005 0.50005 0 0 0 17.457031 13 z M 20.457031 13 A 0.50005 0.50005 0 0 0 20.507812 14 L 24.5 14 A 0.50005 0.50005 0 1 0 24.5 13 L 20.507812 13 A 0.50005 0.50005 0 0 0 20.457031 13 z M 7.4570312 15 A 0.50005 0.50005 0 0 0 7.5078125 16 L 11.507812 16 A 0.50005 0.50005 0 1 0 11.507812 15 L 7.5078125 15 A 0.50005 0.50005 0 0 0 7.4570312 15 z M 13.457031 15 A 0.50005 0.50005 0 0 0 13.507812 16 L 14.507812 16 A 0.50005 0.50005 0 1 0 14.507812 15 L 13.507812 15 A 0.50005 0.50005 0 0 0 13.457031 15 z M 16.457031 15 A 0.50005 0.50005 0 0 0 16.507812 16 L 21.039062 16 L 24.5 16 A 0.50005 0.50005 0 0 0 24.5 15 L 21.074219 15 L 16.507812 15 A 0.50005 0.50005 0 0 0 16.457031 15 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path fill="#f05542" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 12.474609 24.990234 A 0.50005 0.50005 0 0 0 11.982422 25.498047 L 11.982422 29.460938 A 0.50005 0.50005 0 0 0 12.001953 29.642578 A 0.50005 0.50005 0 0 0 12.001953 29.644531 A 0.50005 0.50005 0 0 0 12.005859 29.658203 A 0.50005 0.50005 0 0 0 12.019531 29.693359 A 0.50005 0.50005 0 0 0 12.046875 29.75 A 0.50005 0.50005 0 0 0 12.066406 29.78125 A 0.50005 0.50005 0 0 0 12.072266 29.791016 A 0.50005 0.50005 0 0 0 12.095703 29.820312 A 0.50005 0.50005 0 0 0 12.121094 29.847656 A 0.50005 0.50005 0 0 0 12.132812 29.861328 A 0.50005 0.50005 0 0 0 12.158203 29.882812 A 0.50005 0.50005 0 0 0 12.171875 29.894531 A 0.50005 0.50005 0 0 0 12.183594 29.904297 A 0.50005 0.50005 0 0 0 12.21875 29.927734 A 0.50005 0.50005 0 0 0 12.294922 29.966797 A 0.50005 0.50005 0 0 0 12.322266 29.976562 A 0.50005 0.50005 0 0 0 12.490234 30.003906 L 13.488281 30.003906 A 0.50005 0.50005 0 0 0 13.636719 29.982422 C 14.945213 29.873741 15.996094 28.817721 15.996094 27.503906 C 15.996094 26.193182 14.950387 25.138556 13.646484 25.025391 A 0.50005 0.50005 0 0 0 13.496094 25.003906 L 13.419922 25.003906 L 13.369141 25.003906 L 12.597656 25.003906 A 0.50005 0.50005 0 0 0 12.474609 24.990234 z M 9.4960938 25 C 8.7183219 25 8.0779613 25.607777 8.0097656 26.369141 A 0.50005 0.50005 0 0 0 7.9960938 26.494141 C 7.9960859 26.49612 7.9960937 26.498019 7.9960938 26.5 L 7.9960938 29.494141 A 0.50005 0.50005 0 1 0 8.9960938 29.494141 L 8.9960938 27.90625 C 9.1533422 27.962868 9.3204293 28 9.4960938 28 C 10.318599 28 10.996094 27.3225 10.996094 26.5 C 10.996094 25.6775 10.318599 25 9.4960938 25 z M 18.5625 25 C 17.699259 25 16.990234 25.711019 16.990234 26.574219 L 16.990234 27.457031 A 0.50005 0.50005 0 0 0 16.990234 27.53125 L 16.990234 29.5 A 0.50005 0.50005 0 1 0 17.990234 29.5 L 17.990234 28 L 18.990234 28 A 0.50005 0.50005 0 1 0 18.990234 27 L 17.990234 27 L 17.990234 26.574219 C 17.990234 26.247719 18.235925 26 18.5625 26 L 19.490234 26 A 0.50005 0.50005 0 1 0 19.490234 25 L 18.5625 25 z M 9.4960938 26 C 9.7781584 26 9.9960938 26.218 9.9960938 26.5 C 9.9960938 26.7821 9.7781584 27 9.4960938 27 C 9.2140291 27 8.9960937 26.7821 8.9960938 26.5 L 8.9960938 26.494141 C 8.9991782 26.215072 9.2160446 26 9.4960938 26 z M 12.982422 26.003906 L 13.419922 26.003906 C 14.312157 26.003906 14.996094 26.674206 14.996094 27.503906 C 14.996094 28.333306 14.312128 29.003906 13.419922 29.003906 L 12.982422 29.003906 L 12.982422 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>' : html += '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><g transform="translate(-.5)"><g transform="translate(.5)"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4989b8" d="M 4,2 4,31 27,31 27,7.9941406 21.007812,2 20.800781,2 4,2 Z M 5,3 6,3 6,4 5,4 5,3 Z M 7,3 8,3 8,4 7,4 7,3 Z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z M 5,5 6,5 6,6 5,6 5,5 Z M 5,7 6,7 6,8 5,8 5,7 Z m 0,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" fill-rule="evenodd" d="m 27.000003,1028.3562 -5.992006,-5.9941 -0.0019,5.9941 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" d="m 9.5000015,1023.3622 0,20 2.4999985,-4 2.499999,4 0,-20 0,-1 -4.9999975,0 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g></g></svg>', html += ` ${o.name}<span class="badge float-sm-end csize"> ${UI.display_size?'<span class="badge bg-primary float-sm-end"> '+o.size+" </span>":""}${UI.display_time?' <span class="badge bg-info float-sm-end"> '+o.modifiedTime+" </span>":""}</a>`
        }
    }
    n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html), a && $("#count").removeClass("d-none").find(".number").text(n.find("a.list-group-item").length)
}

function onSearchResultItemClick(e) {
    var t = $(e).hasClass("view"),
        n = window.current_drive_order,
        a = "Loading...";
    $("#SearchModelLabel").html(a);
    var o = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div>`;
    $("#modal-body-space").html(o), $.post(`/${n}:id2path`, {
        id: e.id
    }, (function (e) {
        if (e) {
            var i = `${e}${t?"?a=view":""}`;
            if (i.endsWith("/")) var l = i.replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F");
            else l = i.replace(new RegExp("#", "g"), "%23").replace(new RegExp("\\?", "g"), "%3F") + "?a=view";
            return a = "Result", $("#SearchModelLabel").html(a), o = `<a class="btn btn-info" href="${l}">Open</a> <a class="btn btn-secondary" href="${l}" target="_blank">Open in New Tab</a>`, void $("#modal-body-space").html(o)
        }
        a = "Failed", $("#SearchModelLabel").html(a), o = "System Failed to Fetch the File/Folder Link, Please close and try agin.", $("#modal-body-space").html(o)
    }))
}

function get_file(e, t, n) {
    var a = "file_path_" + e + t.modifiedTime,
        o = localStorage.getItem(a);
    if (null != o) return n(o);
    $.get(e, (function (e) {
        localStorage.setItem(a, e), n(e)
    }))
}

function get_file(e, t, n) {
    var a = "file_path_" + e + t.modifiedTime,
        o = localStorage.getItem(a);
    if (null != o) return n(o);
    $.get(e, (function (e) {
        localStorage.setItem(a, e), n(e)
    }))
}

function file(e) {
    var t = e.split("/").pop().split(".").pop().toLowerCase().replace("?a=view", "").toLowerCase();
    return $("#content").html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status"><span class="sr-only"></span></div></div>`), "|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${t}|`) >= 0 ? file_code(e) : "|mp4|webm|avi|".indexOf(`|${t}|`) >= 0 || "|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|m4v|".indexOf(`|${t}|`) >= 0 ? file_video(e) : "|mp3|flac|wav|ogg|m4a|aac|".indexOf(`|${t}|`) >= 0 ? file_audio(e) : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${t}|`) >= 0 ? file_image(e) : "pdf" === t ? file_pdf(e) : file_others(e)
}

function file_others(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = (t.split(".").pop().toLowerCase(), e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e);
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            o = formatFileSize(t.size),
            i = `\n<div class="container"><br>\n<div class="card text-center">\n<div class="card-body text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${o}</div>\n</div>\n<div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${a}">\n</div>\n\t<div class="card-text text-center">\n  ${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n  <div class="btn-group text-center">\n      <a href="${a}" type="button" class="btn btn-primary">Download</a>\n      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        <span class="sr-only"></span>\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n      </div>\n  </div>\n  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>\n  </div>\n  <br></div>`;
        $("#content").html(i)
    }))
}

function file_code(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = (t.split(".").pop().toLowerCase(), e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e);
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            o = formatFileSize(t.size),
            i = `\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-twilight.css" integrity="sha256-Rl83wx+fN2p2ioYpdvpWxuhAbxj+/7IwaZrKQBu/KQE=" crossorigin="anonymous">\n<div class="container"><br>\n<div class="card text-center">\n<div class="card-body text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${o}</div>\n<div>\n<pre class="line-numbers language-markup" data-src="plugins/line-numbers/index.html" data-start="-5" style="white-space: pre-wrap; counter-reset: linenumber -6;" data-src-status="loaded" tabindex="0"><code id="editor"></code></pre>\n</div>\n</div>\n<div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${a}">\n</div>\n\t<div class="card-text text-center">\n  ${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n  <div class="btn-group text-center">\n      <a href="${a}" type="button" class="btn btn-primary">Download</a>\n      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        <span class="sr-only"></span>\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n      </div>\n  </div>\n  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br></div>\n<script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/prism.js" integrity="sha256-fZOd7N/oofoKcO92RzxvC0wMm+EvsKyRT4nmcmQbgzU=" crossorigin="anonymous"><\/script>\n`;
        $("#content").html(i)
    })), $.get(e, (function (e) {
        $("#editor").html($("<div/><div/><div/>").text(e).html())
    }))
}

function file_video(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = t.slice(0, t.lastIndexOf(".")),
        o = (e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e),
        i = o.replace(/^(https?:|)\/\//, ""),
        l = btoa(o);
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            s = formatFileSize(t.size);
        if (null != t.thumbnailLink) var r = t.thumbnailLink.slice(0, -5);
        else r = UI.poster;
        var d = `\n  <div class="container text-center"><br>\n  <div class="card text-center">\n  <div class="text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${s}</div>\n\t<video id="vplayer" width="100%" height="100%" playsinline controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']; data-plyr-config="{ "title": "${n}"}" data-poster="${r}" style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">\n\t  <source src="${o}" type="video/mp4" />\n\t  <source src="${o}" type="video/webm" />\n\t  <track kind="captions" label="Default" src="${a}.vtt" srclang="en" />\n    <track kind="captions" label="English" src="${a}.en.vtt" srclang="en" default />\n    <track kind="captions" label="Hindi" src="${a}.hi.vtt" srclang="hi" />\n    <track kind="captions" label="Russian" src="${a}.ru.vtt" srclang="ru" />\n    <track kind="captions" label="Malayalam" src="${a}.ml.vtt" srclang="ml" />\n    <track kind="captions" label="Korean" src="${a}.ko.vtt" srclang="ko" />\n    <track kind="captions" label="Japanese" src="${a}.ja.vtt" srclang="ja" />\n    <track kind="captions" label="Indonesian" src="${a}.id.vtt" srclang="id" />\n    <track kind="captions" label="German" src="${a}.de.vtt" srclang="de" />\n    <track kind="captions" label="French" src="${a}.fr.vtt" srclang="fr" />\n    <track kind="captions" label="Chinese" src="${a}.zh.vtt" srclang="zh" />\n    <track kind="captions" label="Arabic" src="${a}.ar.vtt" srclang="ar" />\n\t<track kind="captions" label="${UI.custom_srt_lang}" src="${a}.${UI.custom_srt_lang}.vtt" srclang="${UI.custom_srt_lang}" />\n\t</video>\n  </div>\n\t${UI.disable_player?"<style>.plyr{display:none;}</style>":""}\n  <script>\n   const player = new Plyr('#vplayer',{ratio: "${UI.plyr_io_video_resolution}"});\n  <\/script></br>\n${UI.disable_video_download?"":`\n<div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${o}">\n</div>\n${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n<div class="btn-group text-center">\n    <a href="${o}" type="button" class="btn btn-primary">Download</a>\n    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      <span class="sr-only"></span>\n    </button>\n    <div class="dropdown-menu">\n      <a class="dropdown-item" href="iina://weblink?url=${o}">IINA</a>\n      <a class="dropdown-item" href="potplayer://${o}">PotPlayer</a>\n      <a class="dropdown-item" href="vlc://${o}">VLC</a>\n      <a class="dropdown-item" href="nplayer-${o}">nPlayer</a>\n      <a class="dropdown-item" href="intent://${i}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>\n      <a class="dropdown-item" href="mpv://${l}">mpv x64</a>\n      <a class="dropdown-item" href="intent:${o}#Intent;package=com.mxtech.videoplayer.ad;S.title=${n};end">MX Player (Free)</a>\n      <a class="dropdown-item" href="intent:${o}#Intent;package=com.mxtech.videoplayer.pro;S.title=${n};end">MX Player (Pro)</a>\n      <a class="dropdown-item" href="intent:${o}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n      <a class="dropdown-item" href="intent:${o}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n      <a class="dropdown-item" href="intent:${o}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n    </div>\n</div>\n<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>\n<br>\n  </div>\n  </div>\n  `}\n  </div>\n  `;
        $("#content").html(d)
    }))
}

function file_audio(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = (e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e);
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            o = formatFileSize(t.size),
            i = `\n  <div class="container"><br>\n  <div class="card" style="background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);">\n  <div class="card-body text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${o}</div>\n  <br><img draggable="false" src="${UI.audioposter}" width="100%" /><br>\n  <audio id="vplayer" width="100%" playsinline controls>\n    <source src="${a}" type="audio/ogg">\n    <source src="${a}" type="audio/mpeg">\n  Your browser does not support the audio element.\n  </audio>\n  </div>\n\t${UI.disable_player?"<style>.plyr{display:none;}</style>":""}\n  <script>\n   const player = new Plyr('#vplayer');\n  <\/script></br>\n  <div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${a}">\n</div>\n\t<div class="card-text text-center">\n  ${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n  <div class="btn-group text-center">\n      <a href="${a}" type="button" class="btn btn-primary">Download</a>\n      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        <span class="sr-only"></span>\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n      </div>\n  </div>\n  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>\n  </div>\n  </div>\n  </div>\n  `;
        $("#content").html(i)
    }))
}

function file_pdf(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = (e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e);
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            o = formatFileSize(t.size),
            i = `\n  <script>\n  var url = "https://" + window.location.hostname + window.location.pathname;\n  var pdfjsLib = window['pdfjs-dist/build/pdf'];\n  pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/gh/mozilla/pdf.js@gh-pages/build/pdf.worker.js';\n  var pdfDoc = null,\n      pageNum = 1,\n      pageRendering = false,\n      pageNumPending = null,\n      scale = 0.8,\n      canvas = document.getElementById('the-canvas'),\n      ctx = canvas.getContext('2d');\n  function renderPage(num) {\n    pageRendering = true;\n    pdfDoc.getPage(num).then(function(page) {\n      var viewport = page.getViewport({scale: scale});\n      canvas.height = viewport.height;\n      canvas.width = viewport.width;\n      var renderContext = {\n        canvasContext: ctx,\n        viewport: viewport\n      };\n      var renderTask = page.render(renderContext);\n      renderTask.promise.then(function() {\n        pageRendering = false;\n        if (pageNumPending !== null) {\n          renderPage(pageNumPending);\n          pageNumPending = null;\n        }\n      });\n    });\n    document.getElementById('page_num').textContent = num;\n  }\n  function queueRenderPage(num) {\n    if (pageRendering) {\n      pageNumPending = num;\n    } else {\n      renderPage(num);\n    }\n  }\n  function onPrevPage() {\n    if (pageNum <= 1) {\n      return;\n    }\n    pageNum--;\n    queueRenderPage(pageNum);\n  }\n  document.getElementById('prev').addEventListener('click', onPrevPage);\n  function onNextPage() {\n    if (pageNum >= pdfDoc.numPages) {\n      return;\n    }\n    pageNum++;\n    queueRenderPage(pageNum);\n  }\n  document.getElementById('next').addEventListener('click', onNextPage);\n  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {\n    pdfDoc = pdfDoc_;\n    document.getElementById('page_count').textContent = pdfDoc.numPages;\n    renderPage(pageNum);\n  });\n  <\/script>\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${o}</div>\n  <div>\n  <button id="prev" class="btn btn-info">Previous</button>\n  <button id="next" class="btn btn-info">Next</button>\n  &nbsp; &nbsp;\n  <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>\n  </div><br>\n  <canvas id="the-canvas" style="max-width: 100%;"></canvas>\n  </div>\n  <div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${a}">\n</div>\n\t<div class="card-text text-center">\n  ${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n  <div class="btn-group text-center">\n      <a href="${a}" type="button" class="btn btn-primary">Download</a>\n      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        <span class="sr-only"></span>\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n      </div>\n  </div>\n  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>\n  </div>\n  </div>\n  </div>\n  `;
        $("#content").html(i)
    }))
}

function file_image(e) {
    var t = e.split("/").pop(),
        n = unescape(t),
        a = (e = e, UI.second_domain_for_dl ? UI.downloaddomain + e : window.location.origin + e);
    const o = window.location.pathname,
        i = o.lastIndexOf("/"),
        l = o.slice(0, i + 1);
    let s = localStorage.getItem(l),
        r = "";
    if (s) {
        try {
            s = JSON.parse(s), Array.isArray(s) || (s = [])
        } catch (e) {
            console.error(e), s = []
        }
        if (s.length > 0 && s.includes(e)) {
            let t = s.length,
                n = s.indexOf(e),
                a = n - 1 > -1 ? s[n - 1] : null,
                o = n + 1 < t ? s[n + 1] : null;
            if (null == a) var d = !1;
            else if (1 == a.endsWith(".jpg") || a.endsWith(".png") || a.endsWith(".jpeg") || a.endsWith(".gif")) d = !0;
            if (null == o) var c = !1;
            else if (1 == o.endsWith(".jpg") || o.endsWith(".png") || o.endsWith(".jpeg") || o.endsWith(".gif")) c = !0;
            r = `\n\n                              ${d?`<a class="btn btn-primary" href="${a}?a=view" role="button">Previous</a>`:""}\n\n                              ${c?`<a class="btn btn-primary" href="${o}?a=view" role="button">Next</a>`:""}\n\n                  `
        }
    }
    $.post("", (function (e) {
        var t = jQuery.parseJSON(gdidecode(read(e))),
            o = formatFileSize(t.size),
            i = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${t.name}<br>${o}</div>\n  <div>${r}</div><br>\n  <img src="${a}" width="50%">\n  </div>\n  <div class="card-body">\n<div class="input-group mb-4">\n  <div class="input-group-prepend">\n    <span class="input-group-text" id="">Full URL</span>\n  </div>\n  <input type="text" class="form-control" id="dlurl" value="${a}">\n</div>\n\t<div class="card-text text-center">\n  ${UI.display_drive_link?'<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+t.id+'/view" id ="file_drive_link" target="_blank">GD Link</a>':""}\n  <div class="btn-group text-center">\n      <a href="${a}" type="button" class="btn btn-primary">Download</a>\n      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        <span class="sr-only"></span>\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Free)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${n};end">1DM (Lite)</a>\n        <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${n};end">1DM+ (Plus)</a>\n      </div>\n  </div>\n  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>\n  </div>\n  </div>\n  </div>\n    `;
        $("#content").html(i)
    })), $("#leftBtn, #rightBtn").click((e => {
        let t = $(e.target);
        ["I", "SPAN"].includes(e.target.nodeName) && (t = $(e.target).parent());
        const n = t.attr("data-filepath");
        t.attr("data-direction");
        file(n)
    }))
}

function utc2delhi(e) {
    var t = e.indexOf("T"),
        n = e.indexOf("Z"),
        a = e.substr(0, t) + " " + e.substr(t + 1, n - t - 1);
    timestamp = new Date(Date.parse(a)), timestamp = timestamp.getTime(), timestamp /= 1e3;
    var o = timestamp + 19800,
        i = 1900 + (o = new Date(1e3 * o)).getYear(),
        l = "0" + (o.getMonth() + 1),
        s = "0" + o.getDate(),
        r = "0" + o.getHours(),
        d = "0" + o.getMinutes(),
        c = "0" + o.getSeconds();
    return i + "-" + l.substring(l.length - 2, l.length) + "-" + s.substring(s.length - 2, s.length) + " " + r.substring(r.length - 2, r.length) + ":" + d.substring(d.length - 2, d.length) + ":" + c.substring(c.length - 2, c.length)
}

function formatFileSize(e) {
    return e >= 1e9 ? e = (e / 1e9).toFixed(2) + " GB" : e >= 1e6 ? e = (e / 1e6).toFixed(2) + " MB" : e >= 1e3 ? e = (e / 1e3).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 == e ? e += " byte" : e = "", e
}

function markdown(e, t) {
    var n = marked(t);
    $(e).show().html(n)
}

function read(e) {
    var t = ["join", "645298GrGsiK", "8269zzjDhb", "28wpErfD", "11eoSBcm", "3578714TboDnQ", "slice", "52214BJnTpj", "14039GFHzjM", "187451gnBzKk", "substr", "reverse", "1262156NwMIzh", "2nDedhJ", "split"],
        n = a;

    function a(e, n) {
        return t[e -= 336]
    }
    return function (e, t) {
        for (var n = a;;) try {
            if (856552 === parseInt(n(348)) * -parseInt(n(336)) - parseInt(n(347)) - parseInt(n(343)) + parseInt(n(337)) * parseInt(n(338)) + parseInt(n(339)) * -parseInt(n(342)) + parseInt(n(344)) + parseInt(n(340))) break;
            e.push(e.shift())
        } catch (t) {
            e.push(e.shift())
        }
    }(t), e[n(349)]("")[n(346)]()[n(350)]("")[n(345)](24)[n(341)](0, -20)
}

function copyFunction() {
    var e = document.getElementById("dlurl");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy"), document.getElementById("myTooltip").innerHTML = "Copied"
}

function outFunc() {
    document.getElementById("myTooltip").innerHTML = "Copy"
}


function adbldet() {
dbloc =1;
}


function adbl() {
    // console.log('adbl exec');
    // Configure the adblock detector
    (function detevalidURL(callback) {
        var flaggedURL = 'https://pagead2.googlesyndication.com';

        if (window.fetch) {
            var request = new Request(flaggedURL, {
                method: 'HEAD',
                mode: 'no-cors',
            });
            fetch(request)
                .then(function (response) {
                    if (response.status <= 404) {
                        callback(false);
                        // console.log("Not blocked")
                        init(), render(window.location.pathname)
                    }
                })
                .catch(function (error) {
                    callback(true);
                    adbldet()
                    init(), render(window.location.pathname)
                    // console.log(" blocked")
                });
        } 
        // else {
        //     var http = new XMLHttpRequest();
        //     http.open('HEAD', flaggedURL, false);

        //     try {
        //         http.send();
        //     } catch (err) {
        //         callback(true);
        //     }

        //     if (http.status === 404) {
        //         callback(false);
        //     }
        // }
    })
    (function (usingAdblock) {
        // console.log("Using Adblocker: " + usingAdblock);
    })
}

String.prototype.trim = function (e) {
    return e ? this.replace(new RegExp("^\\" + e + "+|\\" + e + "+$", "g"), "") : this.replace(/^\s+|\s+$/g, "")
}, window.onpopstate = function () {
    render(window.location.pathname)
}, $((function () {
    adbl()
    // init(), render(window.location.pathname)
}));