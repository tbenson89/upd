<?php
// Block Controller php file
namespace BackwardGraphics\HomeSlider\Block;
class SlideEditor extends Template {
    private $_slideCollection;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \BackwardGraphics\HomeSlider\Model\SlideFactory $slideCollection,
        array $data = []
    )
    {
        $this->_slideCollection = $slideCollection;
        parent::__construct($context, $slideCollection , $data);
    }

    public function getFormAction()
    {
        return '/BackwardGraphics_HomeSlider/SlideEditorPost';
    }
}