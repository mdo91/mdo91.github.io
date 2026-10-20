# Damas custom-domain transfer

`damascenerose.com` is moving from this legacy user-site repository to [`mdo91/damascene-rose-web`](https://github.com/mdo91/damascene-rose-web). The replacement website must be deployed and checked before the operator transfers the Pages custom-domain setting.

This change removes the legacy `public/CNAME` and `docs/CNAME` claims. The deployment workflow rejects either Damas hostname in those files or the built `dist/CNAME`, preventing a later legacy deployment from publishing the retired claim. Other custom domains are not blocked. All website and legal content, including the Squat League privacy policy, stays intact.

Merging this change does **not** change Pages settings or DNS. During the coordinated cutover, remove the custom domain from this repository's Pages settings, assign it to the replacement repository, then check the domain, HTTPS certificate, existing legal URLs and real 404 responses. Keep this repository available at its default GitHub Pages address. Existing legal references to the Damas domain remain intentional links to the current website.

## Rollback

The pre-transfer content baseline is commit `f7bd28f9b6d7b46b480ffeb88d4d8fbc26e23f51`. The operator's saved Pages settings record the custom domain `damascenerose.com`, workflow-based publishing and enforced HTTPS; the original CNAME source files contain `www.damascenerose.com`.

If the new website needs to be rolled back, first release the domain from the replacement repository. Revert this retirement change through a reviewed PR to restore the original CNAME files and remove its deployment guard, then restore the legacy Pages custom-domain and HTTPS settings from the saved configuration. Deploy the baseline and verify the site, legal URLs, certificate and DNS before declaring rollback complete. Do not leave both repositories configured to claim the same domain.
