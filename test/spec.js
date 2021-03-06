describe('Angular JS', function () {
    before(function () {
        browser.get('https://angularjs.org');
    });

    it('should be on the right page', function () {
        screenshot.snap(this, $('.center.stage-buttons'), {
            resolutions: [[1366, 768], [320, 568]]
        });
        expect(browser.getTitle()).to.eventually.contain('AngularJS');
    });

    it('should take a full screen image', function () {
        screenshot.snap(this);
    });

    it('should have a navigation section at the top', function () {
        var navbar = $('.navbar-inner .container');
        screenshot.snap(this, navbar, {
            resolutions: [[320, 568], [568, 320]],
            ignoreDefaultResolutions: true,
            threshold: 101 // will never trigger a diff
        });
        expect(navbar.isPresent()).to.eventually.be.true;
    });

    describe('Tutorial', function () {

        before(function () {
            var dropdown = $('.dropdown .icon-book');
            dropdown.click();
            dropdown.click();
            screenshot.snap(this, $('.dropdown.open .dropdown-menu'));
            element(by.cssContainingText('.dropdown.open a', 'Tutorial')).click();
        });

        it('should have an odd title', function () {
            expect(browser.getTitle()).to.eventually.contain('Tutorial: Tutorial');
        });

    });

    describe('disabling screenshots', function () {

        before(function () {
            screenshot.disable = true;
        });

        it('should not take a screenshot of the header', function () {
            var header = $('#phonecat-tutorial-app');
            screenshot.snap(this, header);
            expect(header.getText()).to.eventually.contain('PhoneCat');
        });

        after(function () {
            screenshot.disable = false;
        });

    });

});
