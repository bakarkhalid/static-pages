/* ============================================
   SecureYield — Main JavaScript
   Requires: jQuery 3.7+
   ============================================ */

$(function () {

  /* ──────────────────────────────────────────
     Sticky header — add shadow once scrolled
     Back-to-top button — show after 400px
     ────────────────────────────────────────── */
  var $btnTop = $('#backToTop');
  $(window).on('scroll', function () {
    var y = $(window).scrollTop();
    $('.site-header').toggleClass('scrolled', y > 10);
    $btnTop.toggleClass('show', y > 400);
  });
  $btnTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /* ──────────────────────────────────────────
     Reveal elements on scroll
     ────────────────────────────────────────── */
  function checkReveal() {
    var trigger = $(window).scrollTop() + $(window).height() * 0.88;
    $('.reveal:not(.in)').each(function () {
      if ($(this).offset().top < trigger) {
        $(this).addClass('in');
      }
    });
  }
  $(window).on('scroll resize', checkReveal);
  checkReveal();

  /* ──────────────────────────────────────────
     Custom dropdowns (stepped form)
     ────────────────────────────────────────── */
  $(document).on('click', '.dropdown-toggle', function (e) {
    e.stopPropagation();
    var $dd = $(this).closest('.dropdown');
    var wasOpen = $dd.hasClass('open');
    $('.dropdown').removeClass('open');
    if (!wasOpen) $dd.addClass('open');
  });

  $(document).on('click', '.dropdown-menu li', function () {
    var $li = $(this);
    var $dd = $li.closest('.dropdown');
    var value = $li.data('value');

    $dd.find('.dropdown-menu li').removeClass('selected');
    $li.addClass('selected');
    $dd.find('.dropdown-label').text(value);
    $dd.addClass('filled').removeClass('error');
    $dd.find('input[type=hidden]').val(value);
    $dd.removeClass('open');
  });

  $(document).on('click', function () { $('.dropdown').removeClass('open'); });
  $(document).on('keydown', function (e) { if (e.key === 'Escape') $('.dropdown').removeClass('open'); });

  /* ──────────────────────────────────────────
     Step navigation
     ────────────────────────────────────────── */
  function showStep($form, step) {
    $form.find('.form-step').removeClass('active');
    $form.find('.form-step[data-step="' + step + '"]').addClass('active');
  }

  $('.step-next').on('click', function () {
    var $form = $(this).closest('form');
    var $current = $(this).closest('.form-step');

    // Validate all dropdowns in current step
    var valid = true;
    $current.find('.dropdown').each(function () {
      if (!$(this).find('input[type=hidden]').val()) {
        $(this).addClass('error');
        valid = false;
      }
    });
    if (!valid) return;

    showStep($form, $(this).data('target-step'));
  });

  $('.step-back').on('click', function () {
    showStep($(this).closest('form'), $(this).data('target-step'));
  });

  // Clear consent error when checked
  $(document).on('change', '#consent', function () {
    if (this.checked) {
      $(this).closest('.consent').removeClass('error');
      $('.consent-err').removeClass('show');
    }
  });

  /* ──────────────────────────────────────────
     Enquiry form — client-side validation
     ────────────────────────────────────────── */
  $('#enquiryForm').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    $('.field').removeClass('error');

    function req(id) {
      var v = $.trim($('#' + id).val());
      if (!v) {
        $('#' + id).closest('.field').addClass('error');
        ok = false;
      }
    }
    req('fullname');

    // Email format
    var em = $.trim($('#email').val());
    if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      $('#email').closest('.field').addClass('error');
      ok = false;
    }

    // Australian phone — strip spaces & optional leading 0, then require
    // 9 digits starting with 2, 3, 4, 7, or 8 (mobile + valid landline area codes)
    var ph = $('#phone').val().replace(/[\s()-]/g, '').replace(/^0/, '').replace(/^\+?61/, '');
    if (!/^[234678]\d{8}$/.test(ph)) {
      $('#phone').closest('.field').addClass('error');
      ok = false;
    }

    // Consent checkbox
    var $consent = $('#consent');
    if (!$consent.is(':checked')) {
      $consent.closest('.consent').addClass('error');
      $('.consent-err').addClass('show');
      ok = false;
    } else {
      $consent.closest('.consent').removeClass('error');
      $('.consent-err').removeClass('show');
    }

    if (!ok) return;

    // Build payload — JSON body matches FormSubmit's documented AJAX format
    var $form = $(this);
    var phRaw = $('#phone').val().replace(/[\s()-]/g, '').replace(/^0/, '').replace(/^\+?61/, '');
    var payload = {
      name: $.trim($('#fullname').val()),
      email: $.trim($('#email').val()),
      phone: '+61 ' + phRaw,
      investment_amount: $('#amount').val(),
      preferred_term: $('#term').val(),
      ready_to_invest: $('#ready').val()
    };

    var $btn = $form.find('button[type=submit]');
    var btnText = $btn.text();
    $btn.prop('disabled', true).text('Sending…');
    $('#formError').removeClass('show');

    // text/plain content-type avoids the CORS preflight that Apps Script
    // web apps can't satisfy. The script reads e.postData.contents and
    // parses the JSON body manually.
    fetch($form.attr('action'), {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    })
    .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
    .then(function (result) {
      console.log('FormSubmit response:', result);
      var res = result.data;
      if (result.ok && res && (res.success === 'true' || res.success === true)) {
        window.location.href = 'thanks.html';
      } else {
        var msg = (res && (res.message || res.error))
          || "Sorry, we couldn't send your enquiry. Please try again, or email us directly.";
        $('#formError').text('⚠ ' + msg).addClass('show');
      }
    })
    .catch(function (err) {
      console.error('FormSubmit error:', err);
      $('#formError').text("⚠ Network error — please try again, or email us directly at enquiries@secureyield.example.").addClass('show');
    })
    .finally(function () {
      $btn.prop('disabled', false).text(btnText);
    });
  });

  /* ──────────────────────────────────────────
     Smooth scroll for anchor links
     ────────────────────────────────────────── */
  $('a[href^="#"]').on('click', function (e) {
    var t = $(this).attr('href');
    if (t.length > 1 && $(t).length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(t).offset().top - 60
      }, 600);
    }
  });

});
