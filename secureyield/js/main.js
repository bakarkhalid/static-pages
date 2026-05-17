/* ============================================
   SecureYield — Main JavaScript
   Requires: jQuery 3.7+
   ============================================ */

$(function () {

  /* ──────────────────────────────────────────
     Sticky header — add shadow once scrolled
     ────────────────────────────────────────── */
  $(window).on('scroll', function () {
    $('.site-header').toggleClass('scrolled', $(window).scrollTop() > 10);
  });

  /* ──────────────────────────────────────────
     Mobile menu toggle
     ────────────────────────────────────────── */
  $('.hamburger').on('click', function () {
    $('.nav-links').toggleClass('open');
  });
  $('.nav-links a').on('click', function () {
    $('.nav-links').removeClass('open');
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
     Animated number counters (stats bar)
     ────────────────────────────────────────── */
  var countersDone = false;
  function animateCounters() {
    if (countersDone) return;
    if ($('.stats-bar').offset().top < $(window).scrollTop() + $(window).height()) {
      countersDone = true;
      $('.stat .num').each(function () {
        var $el = $(this),
            target = +$el.data('count'),
            suffix = $el.data('suffix') || '';
        $({ n: 0 }).animate({ n: target }, {
          duration: 1400,
          easing: 'swing',
          step: function (now) { $el.text(Math.floor(now) + suffix); },
          complete: function () { $el.text(target + suffix); }
        });
      });
    }
  }
  $(window).on('scroll', animateCounters);
  animateCounters();

  /* ──────────────────────────────────────────
     FAQ accordion
     ────────────────────────────────────────── */
  $('.faq-q').on('click', function () {
    var $item = $(this).closest('.faq-item');
    var $ans  = $item.find('.faq-a');

    if ($item.hasClass('open')) {
      $ans.css('max-height', 0);
      $item.removeClass('open');
    } else {
      // Close any other open items first
      $('.faq-item.open .faq-a').css('max-height', 0);
      $('.faq-item.open').removeClass('open');
      // Open this one
      $item.addClass('open');
      $ans.css('max-height', $ans[0].scrollHeight + 'px');
    }
  });

  /* ──────────────────────────────────────────
     Term filter buttons (rates table)
     ────────────────────────────────────────── */
  $('.term-filter button').on('click', function () {
    $('.term-filter button').removeClass('active');
    $(this).addClass('active');

    var t = $(this).data('term');
    var shown = 0;

    $('#ratesTable tbody tr').each(function () {
      if (t === 'all' || String($(this).data('term')) === String(t)) {
        $(this).show();
        shown++;
      } else {
        $(this).hide();
      }
    });

    $('#rowCount').text(shown);
  });

  /* ──────────────────────────────────────────
     Sortable table columns
     ────────────────────────────────────────── */
  var sortState = { col: 'rate', dir: 'desc' };

  $('th[data-sort]').on('click', function () {
    var col = $(this).data('sort');

    if (sortState.col === col) {
      sortState.dir = (sortState.dir === 'asc') ? 'desc' : 'asc';
    } else {
      sortState.col = col;
      sortState.dir = 'desc';
    }

    // Update header arrows
    $('th[data-sort]').removeClass('sorted').find('.arr').text('↕');
    $(this).addClass('sorted').find('.arr').text(sortState.dir === 'desc' ? '▼' : '▲');

    // Sort rows
    var rows = $('#ratesTable tbody tr').get();
    rows.sort(function (a, b) {
      var va = +$(a).data(col),
          vb = +$(b).data(col);
      return sortState.dir === 'asc' ? va - vb : vb - va;
    });
    $.each(rows, function (_, r) { $('#ratesTable tbody').append(r); });
  });

  /* ──────────────────────────────────────────
     Row "Enquire" buttons → scroll to form
     and pre-fill the message field
     ────────────────────────────────────────── */
  $(document).on('click', '.row-cta', function () {
    var bank = $(this).data('bank');
    $('#msg').val("I'd like more information about the rate from " + bank + ".");
    $('html, body').animate({
      scrollTop: $('#enquire').offset().top - 60
    }, 600);
  });

  /* ──────────────────────────────────────────
     Enquiry form — client-side validation
     ────────────────────────────────────────── */
  $('#enquiryForm').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    $('.field').removeClass('error');

    // Required text/select fields
    function req(id) {
      var v = $.trim($('#' + id).val());
      if (!v) {
        $('#' + id).closest('.field').addClass('error');
        ok = false;
      }
    }
    req('fname');
    req('lname');
    req('amount');
    req('term');

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

    if (!ok) return;

    // Build payload — normalise phone to +61 format for the email
    var $form = $(this);
    var fd = new FormData(this);
    var phRaw = $('#phone').val().replace(/[\s()-]/g, '').replace(/^0/, '').replace(/^\+?61/, '');
    fd.set('phone', '+61 ' + phRaw);

    var $btn = $form.find('button[type=submit]');
    var btnText = $btn.text();
    $btn.prop('disabled', true).text('Sending…');
    $('#formError').removeClass('show');

    // Derive AJAX endpoint from the form's action
    var endpoint = $form.attr('action').replace('formsubmit.co/', 'formsubmit.co/ajax/');

    $.ajax({
      url: endpoint,
      method: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function (res) {
      if (res && (res.success === 'true' || res.success === true)) {
        $('#formSuccess').addClass('show');
        $form[0].reset();
        $('html, body').animate({
          scrollTop: $('#formSuccess').offset().top - 100
        }, 400);
        setTimeout(function () { $('#formSuccess').removeClass('show'); }, 8000);
      } else {
        $('#formError').addClass('show');
      }
    })
    .fail(function () {
      $('#formError').addClass('show');
    })
    .always(function () {
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
