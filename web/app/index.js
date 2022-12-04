$(function () {
  const includes = $('[data-include]');
  $.each(includes, function () {
    const file = 'components/' + $(this).data('include') + '.html';
    const loadedFile = $(this).load(file);

    const children = $(this).children();
    $(this).empty();
  });
});
