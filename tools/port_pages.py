"""Regenerate the sub pages of the static site from the design boards.
usage: python3 port_pages.py BOARDS_DIR REPO_DIR
Head (title, meta) is kept from the existing page; markup, script and page CSS come from the board."""
import re, sys, os, hashlib
BD, R = sys.argv[1], sys.argv[2]
PAGES = [('about','About'),('research','Research'),('contact','Contact'),('privacy','Privacy'),('thanks','Thanks'),('404','NotFound')]
BLOB = {
 'aa6ac257a64b8770866cd2b8d079af93':'assets/img/bravr-logo.svg',
 '94699890906a16d1b1de29ba8cb1d8c2':'assets/img/graph-2.png',
 '46e6a8d0c239c72b3c7bf63e07b09c59':'assets/img/graph-3.png',
 '8288e0ccff4899dc8a9a9e454224d7e3':'assets/img/police-pilot.jpg',
 '1e3885b6a27372f31a84b76d81b9b206':'assets/img/police-pilot-2.jpg',
 'c86d5033c753a0024f7e66dc01363f7e':'assets/img/police-pilot-3.jpg',
 '76ecc58af221557df54ffd32639904b2':'assets/img/welkom-thuis.jpg',
 'eb6d37cb452b94e9061294fc87430b72':'assets/img/founders-box.jpg',
 'be7d6b616740303e1090a6ffc85217b2':'assets/img/microlab-field-test.jpg',
 'b98dc6ad846f2d31dad2186b6032f39f':'assets/img/team/ken-koontz.jpg',
 'b78910282438212b6609e4a0565abc71':'assets/img/team/thijs-doornbos.jpg',
 '854ca9812aa4a096c3e24fdcf414ad39':'assets/img/team/peter-barker.jpg',
 'a9b2c05815ba394ca345badb4b9d563c':'assets/img/team/lena.jpg',
 '1b3fd1a89861bf430251bdbb5ea97e3a':'assets/img/team/devon.jpg',
 '605ae4bf217369ff3d205020e547ddba':'assets/img/team/george.jpg',
 'b317e99be8abfd6761cf30b5668a0a05':'assets/img/team/cornell-wilson.jpg',
 '07a479b5a02466a344462bcbcb2c7c01':'assets/img/team/scott-williamson.jpg',
 '1047d71e981d6b70ba6eaa46894f1b3a':'assets/img/team/kelli-dunlap.jpg',
 '6714c891b53c38be619c82a06a47e67f':'assets/img/team/egi-cuijten-niks.jpg',
}
GRAIN = 'da2da537b2a99bc3085fbf6c9232a065'
def blobs(s):
    def f(m):
        k = m.group(1)
        if k not in BLOB: sys.exit('unknown blob ' + k)
        return BLOB[k]
    return re.sub(r'/_blob/(\w{32})', f, s)
os.makedirs(R + '/assets/css/pages', exist_ok=True)
for slug, board in PAGES:
    b = open(f'{BD}/{board}.dc.html').read()
    style = b[b.index('<style>') + 7:b.index('</style>')]
    css = style[style.index('/* ---- sub pages ---- */'):]
    assert '/_blob/' not in css.replace('/_blob/' + GRAIN, ''), slug
    css = '/* Generated from the ' + board + ' design board. */\n' + css.replace('/_blob/' + GRAIN, '../../img/grain.png').strip() + '\n'
    open(f'{R}/assets/css/pages/{slug}.css', 'w').write(css)
    body = blobs(b[b.index('<div class="pg"'):b.index('</x-dc>')].rstrip())
    script = b[b.index('class Component'):b.rindex('</script>')].strip()
    js = ('/* BRAVR ' + board + ' page. Generated from the design board; edit the board, not this file. */\n(function () {\n\'use strict\';\n'
          + script + '\nfunction start() { window.DCLite.mount(document.getElementById(\'page-tpl\'), Component, {}, document.getElementById(\'app\'), window.I18N.translateTree); }\n'
          'if (document.readyState === \'loading\') document.addEventListener(\'DOMContentLoaded\', start); else start();\n})();\n')
    open(f'{R}/assets/js/pages/{slug}.js', 'w').write(js)
    old = open(f'{R}/{slug}.html').read()
    head = old[:old.index('<template id="page-tpl">') + len('<template id="page-tpl">\n')]
    pre = '/' if slug == '404' else ''
    head = re.sub(r'<link rel="stylesheet" href="/?assets/css/pages(?:/[\w-]+)?\.css[^"]*">', f'<link rel="stylesheet" href="{pre}assets/css/pages/{slug}.css">', head)
    tailh = old[old.index('</template>'):]
    if slug == '404':
        body = re.sub(r'(href|src)="(?!https?:|mailto:|#|/)([^"]+)"', r'\1="/\2"', body)
    open(f'{R}/{slug}.html', 'w').write(head + body + '\n' + tailh)
# cache-busting: ?v=<sha1[:8]> on every local css/js link in every html page
def fp(path):
    return hashlib.sha1(open(R + '/' + path, 'rb').read()).hexdigest()[:8]
for f in os.listdir(R):
    if not f.endswith('.html'): continue
    s = open(R + '/' + f).read()
    s = re.sub(r'((?:href|src)=")(/?)(assets/(?:css|js)/[\w/.-]+\.(?:css|js))(?:\?v=\w+)?(")', lambda m: m.group(1) + m.group(2) + m.group(3) + '?v=' + fp(m.group(3)) + m.group(4), s)
    open(R + '/' + f, 'w').write(s)
print('ok')
